const admin = require('firebase-admin');
const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

// Initialize Firebase Admin SDK
const serviceAccount = require('./serviceAccountKey.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'wesley-firebase-fork-120-56e79.firebasestorage.app'
});

const db = admin.firestore();

// Sanitize landing page names to be used in document IDs
const sanitize = (text) => {
    if (!text) return '';
    return text.toLowerCase().replace(/\s+/g, '_');
};

/**
 * Parses specified fields in a data row into their correct types (integer, float, boolean).
 * @param {object} row The row object from the CSV.
 * @param {object} typeConfig Configuration for type conversion.
 * @returns {object} The processed row with correct data types.
 */
const processRowTypes = (row, typeConfig) => {
  const processedRow = { ...row };
  const { integerFields = [], floatFields = [], booleanFields = [] } = typeConfig;

  // Process integers
  for (const field of integerFields) {
    if (processedRow.hasOwnProperty(field)) {
      const value = processedRow[field];
      if (typeof value === 'string' && value.trim() !== '') {
        const parsed = parseInt(value, 10);
        processedRow[field] = !isNaN(parsed) ? parsed : null;
      } else {
        processedRow[field] = null;
      }
    }
  }

  // Process floats
  for (const field of floatFields) {
    if (processedRow.hasOwnProperty(field)) {
      const value = processedRow[field];
      if (typeof value === 'string' && value.trim() !== '') {
        const parsed = parseFloat(value);
        processedRow[field] = !isNaN(parsed) ? parsed : null;
      } else {
        processedRow[field] = null;
      }
    }
  }

  // Process booleans
  for (const field of booleanFields) {
    if (processedRow.hasOwnProperty(field)) {
      const value = String(processedRow[field]).toLowerCase().trim();
      processedRow[field] = value === 'true';
    }
  }

  return processedRow;
};


const importEvents = async () => {
  return new Promise((resolve, reject) => {
    const results = [];
    const filePath = path.join(__dirname, `../start_data/events_rows.csv`);
    const landingPageCounters = {};
    
    // Define field types for the events CSV
    const typeConfig = {
      integerFields: ['group_size_display_min', 'group_size_display_max', 'duration_display'],
      floatFields: ['package_price', 'pakket_price_tax', 'opbouw_uren', 'afbouw_uren', 'km_price'],
      booleanFields: ['eventmanager_plus', 'eventmanager', 'junior_eventmanager']
    };

    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', async () => {
        try {
          const collectionRef = db.collection('events');
          for (const row of results) {
            const sanitizedLandingPage = sanitize(row.landing_page);
            if (!sanitizedLandingPage) {
                console.warn(`Skipping event row without a landing_page:`, row);
                continue;
            }

            let docId;
            if (row.group_size_display_min && row.group_size_display_min.trim() !== '') {
              docId = `${sanitizedLandingPage}_${row.group_size_display_min}`;
            } else {
              if (!landingPageCounters[sanitizedLandingPage]) {
                landingPageCounters[sanitizedLandingPage] = 0;
              }
              landingPageCounters[sanitizedLandingPage]++;
              docId = `${sanitizedLandingPage}_${landingPageCounters[sanitizedLandingPage]}`;
            }
            
            const processedRow = processRowTypes(row, typeConfig);
            await collectionRef.doc(docId).set(processedRow);
          }
          console.log(`Successfully imported and processed data from events_rows.csv to events collection.`);
          resolve();
        } catch (error) {
          console.error(`Error importing data to events:`, error);
          reject(error);
        }
      });
  });
};

const importSeo = async () => {
  return new Promise((resolve, reject) => {
    const results = [];
    const filePath = path.join(__dirname, `../start_data/seo_rows.csv`);

    // Define field types for the seo CSV
    const typeConfig = {
      integerFields: ['rating_sportclubs', 'rating_scholen', 'rating_non_profit', 'rating_bedrijven', 'sort_order']
    };

    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', async () => {
        try {
          const collectionRef = db.collection('seo');
          for (const row of results) {
            if (row.url_slug && row.url_slug.trim() !== '') {
              const processedRow = processRowTypes(row, typeConfig);
              await collectionRef.doc(row.url_slug).set(processedRow);
            } else {
               console.warn(`Skipping seo row without a url_slug:`, row);
            }
          }
          console.log(`Successfully imported and processed data from seo_rows.csv to seo collection.`);
          resolve();
        } catch (error) {
          console.error(`Error importing data to seo:`, error);
          reject(error);
        }
      });
  });
};

const migrate = async () => {
  try {
    console.log('Starting data migration with advanced type parsing...');
    
    await importEvents();
    await importSeo();
    
    console.log('Migration completed successfully! Your data should now have correct types.');
  } catch (error) {
    console.error('Migration failed:', error);
  }
};

migrate();
