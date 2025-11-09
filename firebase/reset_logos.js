const admin = require('firebase-admin');

const BUCKET_NAME = 'wesley-firebase-fork-120-56e79.appspot.com';

try {
  admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    storageBucket: BUCKET_NAME,
  });

  const db = admin.firestore();
  const logosCollection = db.collection('logos');
  const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${BUCKET_NAME}/o/images%2Flogo.webp?alt=media`;

  // 1. Delete all existing documents
  logosCollection.get().then(snapshot => {
    if (snapshot.empty) {
      console.log('No old logos to delete.');
      return Promise.resolve();
    }
    const batch = db.batch();
    snapshot.docs.forEach(doc => batch.delete(doc.ref));
    return batch.commit().then(() => console.log(`${snapshot.size} old logo(s) deleted.`));
  }).then(() => {
    // 2. Add the two correct documents
    const addBatch = db.batch();
    const lightLogo = {
      name: 'Logo Light', background_type: 'light', is_primary: true, url: publicUrl,
      description: 'The main logo for light backgrounds.', file_path: '/images/logo.webp',
      logo_type: 'horizontal', is_favicon: false, id: '2',
      created_at: new Date().toISOString(), updated_at: new Date().toISOString(),
    };
    const darkLogo = {
      name: 'Logo Dark', background_type: 'dark', is_primary: true, url: publicUrl,
      description: 'The main logo for dark backgrounds.', file_path: '/images/logo.webp',
      logo_type: 'horizontal', is_favicon: false, id: '1',
      created_at: new Date().toISOString(), updated_at: new Date().toISOString(),
    };
    addBatch.set(logosCollection.doc('2'), lightLogo); // Light logo for Header
    addBatch.set(logosCollection.doc('1'), darkLogo);  // Dark logo for Footer
    return addBatch.commit();
  }).then(() => {
    console.log('✅ Success! Database has been reset with the correct logo URLs.');
  }).catch(err => console.error('Database reset failed:', err));

} catch (error) {
  console.error('Error during initialization or database reset:', error.message);
}
