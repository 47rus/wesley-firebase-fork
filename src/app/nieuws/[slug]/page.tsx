import React from 'react';
import Container from '@/components/layout/Container';

const newsItems = [
  { slug: "weplay-official-supplier-knvb" },
  { slug: "nieuwe-vr-experiences" },
  { slug: "record-aantal-events-februari" },
  { slug: "uitbreiding-duitsland" },
  { slug: "partnership-nederlandse-scholen" },
  { slug: "nieuwe-led-voetbal-arena" },
  { slug: "weplay-wint-innovatie-award" },
  { slug: "nieuwe-f1-simulator-bedrijfsevents" },
];

export async function generateStaticParams() {
  return newsItems.map((item) => ({
    slug: item.slug,
  }));
}

const NewsArticlePage = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  return (
    <main>
      <Container>
        <div className="py-16 text-center">
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-weplay-text mb-6">
            News Article: {slug}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            This is a placeholder for the news article content.
          </p>
        </div>
      </Container>
    </main>
  );
};

export default NewsArticlePage;