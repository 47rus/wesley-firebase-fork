// src/integrations/firebase/server.ts
import admin from 'firebase-admin';
import { getFirestore } from 'firebase-admin/firestore';

// IMPORTANT: This service account key is read from the environment variable.
// You will need to set this up in your deployment environment.
// For local development, you might use a .env.local file.
// NEVER commit the service account key to your repository.

const serviceAccount = JSON.parse(
  process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string
);

serviceAccount.private_key = serviceAccount.private_key.replace(/\\n/g, '\n');

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const db = getFirestore();

export { db };
