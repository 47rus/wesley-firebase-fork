# WePlay United - Next.js Edition

This is the official web application for WePlay United, a premier event organization and hosting company. This application allows users to browse a wide variety of events, view detailed information, and book packages seamlessly.

This project has been built with a modern, server-side rendered stack to ensure optimal performance, SEO, and user experience.

## Tech Stack

This project is built with a powerful and scalable set of technologies:

*   **Framework:** [Next.js](https://nextjs.org/) (with App Router)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **UI Components:** [Shadcn/UI](https://ui.shadcn.com/)
*   **Backend & Database:** [Supabase](https://supabase.com/)
*   **Deployment:** [Firebase App Hosting](https://firebase.google.com/docs/app-hosting)

## Getting Started

To get a local copy of this project up and running for development or testing, please follow these steps.

### Prerequisites

You will need to have [Node.js](https://nodejs.org/) (version 18 or higher) and `npm` installed on your machine.

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your_username_/Project-Name.git
    cd Project-Name
    ```

2.  **Install dependencies:**
    This project uses `npm` for package management.
    ```sh
    npm install
    ```

3.  **Set up environment variables:**
    You will need to connect to a Supabase project. Create a file named `.env.local` in the root of the project and add your Supabase project URL and anon key:
    ```
    NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
    NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
    ```

### Running the Development Server

Once the installation is complete, you can start the local development server:

```sh
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Available Scripts

*   `npm run dev`: Starts the development server.
*   `npm run build`: Creates a production-ready build of the application.
*   `npm run start`: Starts the production server (requires `npm run build` to be run first).
*   `npm run lint`: Lints the code to catch errors and enforce code style.

## Deployment to Firebase App Hosting (with SSR)

This application is deployed on Firebase App Hosting to leverage its seamless integration with Next.js for full Server-Side Rendering (SSR) support. Here are the steps to set up and deploy the project.

### 1. Firebase Project Prerequisites

1.  **Firebase Project:** Ensure you have a Firebase project created.
2.  **Upgrade to Blaze Plan:** SSR requires Cloud Functions, which are part of the **Blaze (Pay-as-you-go)** plan. You must upgrade your project's billing plan in the Firebase Console settings.
3.  **Install Firebase CLI:** Make sure you have the latest version of the Firebase Command Line Interface installed globally.
    ```sh
    npm install -g firebase-tools
    ```

### 2. One-Time Setup

You need to link this local project to your Firebase project. This is a one-time setup process.

1.  **Login to Firebase:**
    Authenticate the CLI with your Firebase account. This will open a browser window for you to log in.
    ```sh
    firebase login
    ```

2.  **Initialize App Hosting:**
    Navigate to the project's root directory and run the initialization command.
    ```sh
    firebase init apphosting
    ```

3.  **Follow the Interactive Prompts:**
    The CLI will guide you through the setup:
    *   **Select a project:** Choose the Firebase project you prepared earlier.
    *   **Create a new backend:** Select this option as you are setting it up for the first time.
    *   **Select a region:** Choose a primary region to host your backend (e.g., `europe-west4`).
    *   **Provide a backend name:** Give your backend a unique, descriptive name (e.g., `we-play-ssr`).
    *   **Connect to GitHub (Optional):** You will be prompted to connect to a GitHub repository to set up automatic deployments on every push to your main branch. This is the recommended approach for CI/CD.

### 3. Deploying the Application

Once the initialization is complete, you have two options for deployment:

1.  **Automatic Deployment (via GitHub):** If you connected your GitHub repository during the setup, simply push your changes to the designated branch (e.g., `main`), and the deployment will be triggered automatically.

2.  **Manual Deployment:**
    You can deploy your local source code directly from the terminal at any time using the following command:
    ```sh
    firebase deploy
    ```

The deployment process will build and deploy your application. You can monitor the progress in your terminal or in the Firebase Console under the "App Hosting" section.
