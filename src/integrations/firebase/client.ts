// src/integrations/firebase/client.ts
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDgaom-19Iml3VKA0M9DQJgmCPbv1th02k",
  authDomain: "wesley-firebase-fork-120-56e79.firebaseapp.com",
  projectId: "wesley-firebase-fork-120-56e79",
  storageBucket: "wesley-firebase-fork-120-56e79.firebasestorage.app",
  messagingSenderId: "588430146504",
  appId: "1:588430146504:web:4dfbc571b738c138d8defd"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
