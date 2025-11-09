
import React from 'react';
import { notFound } from 'next/navigation';
import Container from '@/components/layout/Container';
import { db } from '@/integrations/firebase/client'; // Use the server client
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { Metadata } from 'next';

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = params;
  const docRef = doc(db, 'news', slug);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    return {
      title: 'News Article Not Found',
      description: 'This news article does not exist.',
    };
  }

  const newsArticle = docSnap.data();

  return {
    title: newsArticle.title,
    description: newsArticle.description,
  };
}

// Generate static paths for news articles that exist
export async function generateStaticParams() {
  const querySnapshot = await getDocs(collection(db, 'news'));
  return querySnapshot.docs.map((doc) => ({
    slug: doc.id,
  }));
}

const NewsArticlePage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const docRef = doc(db, 'news', slug);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    notFound();
  }

  const newsArticle = docSnap.data();

  return (
    <main>
      <Container>
        <div className="py-16">
          <img src={newsArticle.image} alt={newsArticle.title} className="w-full h-96 object-cover rounded-lg mb-8" />
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-weplay-text mb-6">
            {newsArticle.title}
          </h1>
          <p className="text-lg text-gray-600 mb-4">{newsArticle.date}</p>
          <p className="text-xl text-gray-800 max-w-2xl">
            {newsArticle.description}
          </p>
        </div>
      </Container>
    </main>
  );
};

export default NewsArticlePage;
