const admin = require('firebase-admin');
const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

// Initialize Firebase Admin SDK
const serviceAccount = require('./serviceAccountKey.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const importLogos = async () => {
  return new Promise((resolve, reject) => {
    const results = [];
    const filePath = path.join(__dirname, `../start_data/logos_rows.csv`);

    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', async () => {
        try {
          const collectionRef = db.collection('logos');
          for (const row of results) {
            if (row.id && row.id.trim() !== '') {
              await collectionRef.doc(row.id).set(row);
            }
          }
          console.log(`Successfully imported data from logos_rows.csv to logos collection using IDs.`);
          resolve();
        } catch (error) {
          console.error(`Error importing data to logos:`, error);
          reject(error);
        }
      });
  });
};

const migrateLogos = async () => {
  try {
    console.log('Starting logos migration...');
    await importLogos();
    console.log('Logos migration completed successfully!');
  } catch (error) {
    console.error('Logos migration failed:', error);
  }
};

migrateLogos();
