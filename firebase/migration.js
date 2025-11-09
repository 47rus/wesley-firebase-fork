const admin = require('firebase-admin');

// This is the correct bucket name, as you specified.
const BUCKET_NAME = 'wesley-firebase-fork-120-56e79.firebasestorage.app';

try {
  admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    storageBucket: BUCKET_NAME,
  });
} catch (error) {
  if (!/already exists/.test(error.message)) {
    console.error('Firebase admin initialization error', error.stack);
  }
}

const db = admin.firestore();

async function addUrlToClients() {
  const clientsCollection = db.collection('clients');
  const snapshot = await clientsCollection.get();

  if (snapshot.empty) {
    console.log('No documents found in the "clients" collection.');
    return;
  }

  const batch = db.batch();
  let updatedCount = 0;

  snapshot.docs.forEach(doc => {
    const data = doc.data();
    
    if (!data.fileName) {
      console.warn(`Document ${doc.id} is missing the 'fileName' field. Skipping.`);
      return;
    }

    // Construct the correct public URL with the correct bucket name.
    const fullPath = `images/${data.fileName}`;
    const encodedFullPath = encodeURIComponent(fullPath);
    const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${BUCKET_NAME}/o/${encodedFullPath}?alt=media`;

    batch.update(doc.ref, { url: publicUrl });
    updatedCount++;
  });

  if (updatedCount === 0) {
    console.log('No client documents to update.');
    return;
  }

  try {
    await batch.commit();
    console.log(`Successfully corrected URLs for ${updatedCount} client documents.`);
  } catch (error) {
    console.error('Error updating client documents:', error);
  }
}

addUrlToClients();
