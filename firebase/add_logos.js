const admin = require('firebase-admin');

admin.initializeApp({
  credential: admin.credential.applicationDefault()
});

const db = admin.firestore();

const addLogos = async () => {
  try {
    const batch = db.batch();

    const lightLogo = {
      name: 'Logo Light',
      description: 'The main logo for light backgrounds.',
      file_path: '/images/logo.webp',
      logo_type: 'horizontal',
      background_type: 'light',
      is_primary: true,
      is_favicon: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      url: 'https://firebasestorage.googleapis.com/v0/b/wesley-firebase-fork-120-56e79.appspot.com/o/images%2Flogo.webp?alt=media'
    };

    const darkLogo = {
      name: 'Logo Dark',
      description: 'The main logo for dark backgrounds.',
      file_path: '/images/logo.webp',
      logo_type: 'horizontal',
      background_type: 'dark',
      is_primary: true,
      is_favicon: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      url: 'https://firebasestorage.googleapis.com/v0/b/wesley-firebase-fork-120-56e79.appspot.com/o/images%2Flogo.webp?alt=media'
    };
    
    const logosCollection = db.collection('logos');
    batch.set(logosCollection.doc(), lightLogo);
    batch.set(logosCollection.doc(), darkLogo);

    await batch.commit();
    console.log('Logos added successfully.');
  } catch (error) {
    console.error('Error adding logos:', error);
  }
};

addLogos();
