const admin = require('firebase-admin');

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
});

const listBuckets = async () => {
  try {
    console.log('Attempting to list Firebase Storage buckets...');
    const [buckets] = await admin.storage().getBuckets();

    if (buckets.length === 0) {
      console.log('No Firebase Storage buckets were found for this project.');
      return;
    }

    console.log('Available buckets:');
    buckets.forEach(bucket => {
      console.log(`- ${bucket.name}`);
    });

  } catch (error) {
    console.error('Error listing buckets:', error);
  }
};

listBuckets();
