const { initializeApp } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const { writeFile } = require('fs/promises');
const { cert } = require('firebase-admin/app');

// IMPORTANT: Replace with your actual service account credentials
const serviceAccount = require('../../firebase/serviceAccountKey.json');

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

async function generateSitemap() {
  const baseUrl = 'https://[YOUR_DOMAIN]'; // Replace with your actual domain
  const pages = [
    { url: '/', priority: '1.0' },
    { url: '/bedrijven', priority: '0.8' },
    { url: '/contact', priority: '0.8' },
    { url: '/nieuws', priority: '0.8' },
    { url: '/non-profits', priority: '0.8' },
    { url: '/scholen', priority: '0.8' },
    { url: '/sportclubs', priority: '0.8' },
  ];

  const seoSnapshot = await db.collection('seo').get();
  seoSnapshot.forEach(doc => {
    pages.push({ url: `/event/${doc.id}`, priority: '0.9' });
  });

  const sitemap = `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map(page => `
          <url>
            <loc>${baseUrl}${page.url}</loc>
            <priority>${page.priority}</priority>
          </url>
        `)
        .join('')}
    </urlset>
  `;

  await writeFile('public/sitemap.xml', sitemap.trim());
  console.log('Sitemap generated successfully!');
}

generateSitemap();
