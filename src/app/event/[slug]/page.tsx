
import React from 'react';
import { notFound } from 'next/navigation';
import EventTemplate, { EventTemplateProps } from '@/components/templates/EventTemplate';
import { db } from '@/integrations/firebase/server';
import { Metadata } from 'next';
import { DocumentData } from 'firebase-admin/firestore';
import { Package } from '@/components/templates/event/EventPackages';

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = params;
  const docRef = db.collection('seo').doc(slug);
  const docSnap = await docRef.get();

  if (!docSnap.exists) {
    return {
      title: 'Event Not Found',
      description: 'This event does not exist.',
    };
  }

  const eventSeo = docSnap.data();

  return {
    title: eventSeo.seo_title,
    description: eventSeo.seo_description,
  };
}

// Generate static paths for events that exist
export async function generateStaticParams() {
  const querySnapshot = await db.collection('seo').get();
  return querySnapshot.docs.map((doc) => ({
    slug: doc.id,
  }));
}

const DynamicEventPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  // Fetch SEO data
  const docRef = db.collection('seo').doc(slug);
  const docSnap = await docRef.get();

  if (!docSnap.exists) {
    notFound();
  }

  const eventSeo = docSnap.data() as DocumentData;

  // Fetch packages
  const packagesQuery = db.collection('events')
    .where('landing_page', '==', eventSeo.landing_page)
    .where('package_price', '>', 0)
    .orderBy('package_price', 'asc');
    
  const packagesSnapshot = await packagesQuery.get();
  const packages = packagesSnapshot.docs.map((doc: DocumentData) => {
    return doc.data() as Package;
  });
  
  return (
    <EventTemplate
      {...eventSeo as EventTemplateProps}
      packages={packages}
    />
  );
};

export default DynamicEventPage;
