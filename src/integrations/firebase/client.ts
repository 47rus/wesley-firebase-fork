import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "wesley-firebase-fork-120-56e79.firebaseapp.com",
  projectId: "wesley-firebase-fork-120-56e79",
  storageBucket: "wesley-firebase-fork-120-56e79.appspot.com",
  messagingSenderId: "588430146504",
  appId: "1:588430146504:web:4dfbc571b738c138d8defd",
};

// Initialize Firebase
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
