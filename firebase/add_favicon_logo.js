const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const addFaviconLogo = async () => {
  try {
    const faviconData = {
      name: 'Favicon',
      description: 'The favicon for the website.',
      file_path: '/images/icon.webp',
      logo_type: 'icon',
      background_type: 'transparent',
      is_primary: false,
      is_favicon: true,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      url: 'https://firebasestorage.googleapis.com/v0/b/wesley-firebase-fork-120-56e79.appspot.com/o/images%2Ficon.webp?alt=media'
    };

    await db.collection('logos').add(faviconData);
    console.log('Favicon logo added successfully.');
  } catch (error) {
    console.error('Error adding favicon logo:', error);
  }
};

addFaviconLogo();
