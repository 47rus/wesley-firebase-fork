const admin = require('firebase-admin');
const { Storage } = require('@google-cloud/storage');

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
const storage = new Storage();
const bucket = storage.bucket(BUCKET_NAME);

function getPublicUrl(fileName) {
  const encodedFullPath = encodeURIComponent(fileName);
  return `https://firebasestorage.googleapis.com/v0/b/${BUCKET_NAME}/o/${encodedFullPath}?alt=media`;
}

async function matchAndBackfillSeoImages() {
  console.log('Starting SEO image backfill process...');

  const seoCollection = db.collection('seo');
  const seoSnapshot = await seoCollection.get();
  const seoDocsBySlug = new Map();
  seoSnapshot.docs.forEach(doc => {
    const data = doc.data();
    if (data.url_slug) {
      seoDocsBySlug.set(data.url_slug, { id: doc.id, ref: doc.ref, data });
    }
  });
  console.log(`Found ${seoDocsBySlug.size} documents in 'seo' collection.`);

  const [files] = await bucket.getFiles({ prefix: 'images/' });
  const imagesBySlug = new Map();
  files.forEach(file => {
    const fileName = file.name;
    // Corrected Regex: Matches "images/[slug]_image_[number].webp"
    const match = fileName.match(/images\/(.+)_image_\d+\.webp$/);
    if (match && match[1]) {
      const slug = match[1];
      if (!imagesBySlug.has(slug)) {
        imagesBySlug.set(slug, []);
      }
      imagesBySlug.get(slug).push(fileName);
    }
  });
  console.log(`Found ${imagesBySlug.size} groups of event images in Cloud Storage.`);

  const batch = db.batch();
  let updatedDocsCount = 0;

  for (const [slug, docInfo] of seoDocsBySlug.entries()) {
    if (imagesBySlug.has(slug)) {
      const imageFiles = imagesBySlug.get(slug);
      const updateData = {};
      let imagesUpdated = false;

      imageFiles.sort(); 

      for (let i = 0; i < imageFiles.length; i++) {
        const imageIndex = i + 1;
        const imageFieldName = `image_${imageIndex}`;
        
        if (docInfo.data.hasOwnProperty(imageFieldName)) {
          const newUrl = getPublicUrl(imageFiles[i]);
          if (docInfo.data[imageFieldName] !== newUrl) {
            updateData[imageFieldName] = newUrl;
            imagesUpdated = true;
          }
        }
      }
      
      if (imagesUpdated) {
        batch.update(docInfo.ref, updateData);
        updatedDocsCount++;
        console.log(`Found ${imageFiles.length} image matches for SEO doc: '${slug}'`);
      }
    }
  }

  if (updatedDocsCount === 0) {
    console.log('No documents needed updating.');
    return;
  }

  try {
    await batch.commit();
    console.log(`Successfully updated ${updatedDocsCount} SEO documents with new image URLs.`);
  } catch (error) {
    console.error('Error committing batch update:', error);
  }
}

matchAndBackfillSeoImages();
