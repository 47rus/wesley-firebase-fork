import '../index.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'WePlay United - Game Events op Locatie',
  description: 'Specialist in game-events op locatie voor sportclubs, scholen, bedrijven en non-profits. Officiële KNVB partner.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn(
        'min-h-screen bg-background font-sans antialiased',
        inter.className
      )}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Header />
          <main>{children}</main>
          <Footer />
        </TooltipProvider>
      </body>
    </html>
  );
}
