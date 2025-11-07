import React from 'react';
import { Heart } from 'lucide-react';
import Container from '@/components/layout/Container';

export const metadata = {
  title: 'Non-Profits - WePlay United',
  description: 'WePlay United voor non-profit organisaties - Coming Soon',
};

const NonProfitsPage = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 to-purple-800">
      <Container>
        <div className="text-center">
          <div className="bg-white/10 rounded-full p-8 w-32 h-32 mx-auto mb-8 flex items-center justify-center backdrop-blur-sm">
            <Heart className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-3xl lg:text-4xl font-heading font-black text-white mb-6 tracking-tight">
            WEPLAY VOOR NON-PROFITS
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-purple-200 max-w-3xl mx-auto mb-8">
            Coming Soon
          </p>
        </div>
      </Container>
    </main>
  );
};

export default NonProfitsPage;