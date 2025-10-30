import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import NewsArticlePageClient from '@/components/templates/NewsArticlePageClient';

interface ArticleData {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
  badge: string;
  badgeVariant: 'primary' | 'secondary' | 'outline' | 'ghost' | 'cta' | 'default' | 'success' | 'warning';
  author: string;
  readTime: string;
  slug: string;
}

// Mock article data - in the future this will come from Supabase
const newsArticles: ArticleData[] = [
  {
    id: 1,
    title: "WePlay United wordt Official Supplier KNVB",
    excerpt: "Sinds 2023 zijn wij officieel erkend door de KNVB als betrouwbare leverancier voor game-events bij voetbalclubs door heel Nederland.",
    content: `
      <p>WePlay United is met trots aangekondigd als Official Supplier van de Koninklijke Nederlandse Voetbalbond (KNVB). Deze belangrijke erkenning bevestigt onze positie als toonaangevende leverancier van innovatieve gaming events voor voetbalclubs door heel Nederland.</p>
      
      <h2>Wat betekent dit partnership?</h2>
      <p>Als Official Supplier van de KNVB kunnen we nu officieel samenwerken met alle aangesloten voetbalclubs om unieke gaming experiences te leveren. Van EA FC toernooien tot LED voetbal events - we brengen moderne technologie naar de traditionele voetbalwereld.</p>
      
      <h2>Onze ervaring spreekt voor zich</h2>
      <p>Met meer dan 500 tevreden sportclubs die al gebruik maken van onze diensten, hebben we bewezen dat we de externe evenementencommissie zijn waar clubs op kunnen vertrouwen. Onze events zorgen niet alleen voor entertainment, maar ook voor community building en nieuwe inkomstenbronnen voor clubs.</p>
      
      <h2>Wat kunnen clubs verwachten?</h2>
      <ul>
        <li>Professionele EA FC toernooien met officiële KNVB branding</li>
        <li>LED voetbal experiences voor alle leeftijden</li>
        <li>VR trainingsimulaties voor jeugdspelers</li>
        <li>Volledige ontzorging van A tot Z</li>
        <li>Transparante prijzen zonder verborgen kosten</li>
      </ul>
      
      <p>Deze partnership markeert een nieuwe fase in onze missie om sport en technologie samen te brengen. We kijken uit naar vele succesvolle samenwerkingen met KNVB clubs in 2024 en daarbuiten.</p>
    `,
    date: "15 maart 2024",
    image: "/placeholder.svg?height=600&width=1200",
    badge: "NIEUW",
    badgeVariant: "primary",
    author: "WePlay Team",
    readTime: "3 min leestijd",
    slug: "weplay-official-supplier-knvb"
  },
  {
    id: 2,
    title: "Nieuwe VR experiences uitgebreid",
    excerpt: "We hebben ons VR aanbod uitgebreid met educatieve experiences voor scholen en trainingsimulaties voor bedrijven.",
    content: `
      <p>WePlay United heeft haar VR portfolio significant uitgebreid met gloednieuwe experiences die speciaal ontwikkeld zijn voor educatieve doeleinden en professionele training.</p>
      
      <h2>Educatieve VR voor scholen</h2>
      <p>Onze nieuwe educatieve VR experiences maken leren interactief en boeiend. Leerlingen kunnen nu virtueel door de geschiedenis reizen, complexe wetenschappelijke concepten ervaren, of zelfs andere planeten verkennen - allemaal vanuit de klaslokaal.</p>
      
      <h2>Trainingsimulaties voor bedrijven</h2>
      <p>Voor bedrijven hebben we professionele trainingsimulaties ontwikkeld die werknemers in realistische scenario's plaatsen. Van brandveiligheid tot presentatievaardigheden - VR training biedt een veilige omgeving om nieuwe vaardigheden te ontwikkelen.</p>
    `,
    date: "8 maart 2024",
    image: "/placeholder.svg?height=600&width=1200",
    badge: "Product Update",
    badgeVariant: "default",
    author: "Product Team",
    readTime: "2 min leestijd",
    slug: "nieuwe-vr-experiences"
  }
  // Add more articles as needed
];

// Related articles (mock data)
const relatedArticlesData: Omit<ArticleData, 'content' | 'badgeVariant' | 'author' | 'readTime'>[] = [
  {
    id: 3,
    title: "Record aantal events in februari 2024",
    excerpt: "Met 150 events in één maand hebben we een nieuw record gevestigd.",
    image: "/placeholder.svg?height=200&width=300",
    slug: "record-aantal-events-februari"
  },
  {
    id: 4,
    title: "Uitbreiding Duitsland aangekondigd",
    excerpt: "WePlay United breidt uit naar Duitsland vanaf april 2024.",
    image: "/placeholder.svg?height=200&width=300",
    slug: "uitbreiding-duitsland"
  }
];

async function getNewsArticle(slug: string): Promise<ArticleData | null> {
  // In a real application, this would fetch from Supabase
  return newsArticles.find(article => article.slug === slug) || null;
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = params;
  const article = await getNewsArticle(slug);

  if (!article) {
    return {};
  }

  return {
    title: `${article.title} | WePlay United Nieuws`,
    description: article.excerpt,
    keywords: 'WePlay nieuws, gaming events, KNVB partnership, innovatie, bedrijfsevents, sportclub events',
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [{ url: article.image }],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  };
}

export async function generateStaticParams() {
  // In a real application, this would fetch slugs from Supabase
  return newsArticles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function NewsArticlePage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const article = await getNewsArticle(slug);

  if (!article) {
    notFound();
  }

  // Filter related articles to exclude the current one
  const filteredRelatedArticles = relatedArticlesData.filter(ra => ra.slug !== slug);

  return (
    <NewsArticlePageClient article={article} relatedArticles={filteredRelatedArticles} />
  );
}
