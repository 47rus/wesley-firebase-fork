import React from 'react';
import { Building2 } from 'lucide-react';
import Container from '@/components/layout/Container';

export const metadata = {
  title: 'Bedrijven - WePlay United',
  description: 'WePlay United voor bedrijven - Coming Soon',
};

const BedrijvenPage = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-900 to-green-800">
      <Container>
        <div className="text-center">
          <div className="bg-white/10 rounded-full p-8 w-32 h-32 mx-auto mb-8 flex items-center justify-center backdrop-blur-sm">
            <Building2 className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-3xl lg:text-4xl font-heading font-black text-white mb-6 tracking-tight">
            WEPLAY VOOR BEDRIJVEN
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-green-200 max-w-3xl mx-auto mb-8">
            Coming Soon
          </p>
        </div>
      </Container>
    </main>
  );
};

export default BedrijvenPage;