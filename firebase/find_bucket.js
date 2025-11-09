const admin = require('firebase-admin');

// The bucket name you provided.
const BUCKET_NAME = 'wesley-firebase-fork-120-56e79.firebasestorage.app';

try {
  // Initialize the Firebase Admin SDK, providing the bucket name explicitly.
  admin.initializeApp({
    storageBucket: BUCKET_NAME,
  });

  // Get a reference to the storage bucket.
  const bucket = admin.storage().bucket();

  // Print the name to confirm it's correct.
  console.log('Success! Connected to Firebase Storage bucket:');
  console.log(bucket.name);
  console.log('\nThis confirms the bucket name is correct and accessible.');

} catch (error) {
  console.error(`Error: Could not connect to bucket "${BUCKET_NAME}".`);
  console.error('Please double-check that this is the exact bucket name from your Firebase Console.');
  console.error(error.message);
}
