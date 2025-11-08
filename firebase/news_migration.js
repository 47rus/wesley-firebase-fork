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

const importNews = async () => {
  return new Promise((resolve, reject) => {
    const results = [];
    const filePath = path.join(__dirname, `../start_data/news_rows.csv`);

    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', async () => {
        try {
          const collectionRef = db.collection('news');
          for (const row of results) {
            if (row.slug && row.slug.trim() !== '') {
              await collectionRef.doc(row.slug).set(row);
            }
          }
          console.log(`Successfully imported data from news_rows.csv to news collection using slugs.`);
          resolve();
        } catch (error) {
          console.error(`Error importing data to news:`, error);
          reject(error);
        }
      });
  });
};

const migrateNews = async () => {
  try {
    console.log('Starting news migration...');
    await importNews();
    console.log('News migration completed successfully!');
  } catch (error) {
    console.error('News migration failed:', error);
  }
};

migrateNews();
