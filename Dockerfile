# Stage 1: Install dependencies
FROM node:20-slim AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Stage 2: Build the application
# Use a full Node.js image to have access to build tools
FROM node:20 AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# This is the crucial part: We declare that the build process expects a FIREBASE_CONFIG argument.
# We will provide this argument from our cloudbuild.yaml file.
ARG FIREBASE_CONFIG
ENV FIREBASE_CONFIG=$FIREBASE_CONFIG

# Set the NEXT_TELEMETRY_DISABLED variable to avoid any potential issues with telemetry during the build.
ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

# Stage 3: Production image
# Use a slim image for a smaller final container size
FROM node:20-slim AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED 1

# Copy the necessary files from the builder stage
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Expose the port the app runs on
EXPOSE 3000

# The command to start the app
CMD ["npm", "start"]
