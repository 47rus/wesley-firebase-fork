const admin = require('firebase-admin');
const path = require('path');
const fs = require('fs');

const BUCKET_NAME = 'wesley-firebase-fork-120-56e79.appspot.com';

try {
  admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    storageBucket: BUCKET_NAME,
  });

  const bucket = admin.storage().bucket();
  const localLogoPath = path.join(__dirname, '../start_data/images/logo.webp');
  const storagePath = 'images/logo.webp';

  if (!fs.existsSync(localLogoPath)) {
    throw new Error(`Local logo file not found at: ${localLogoPath}`);
  }

  bucket.upload(localLogoPath, {
    destination: storagePath,
    public: true, // Make the file publicly accessible
  }).then(() => {
    const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/${encodeURIComponent(storagePath)}?alt=media`;
    console.log('✅ Success! Logo uploaded to Firebase Storage.');
    console.log(`Public URL: ${publicUrl}`);
  }).catch(err => console.error('Upload failed:', err));

} catch (error) {
  console.error('Error during initialization or upload:', error.message);
}
