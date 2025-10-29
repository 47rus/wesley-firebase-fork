import React from 'react';
import { Helmet } from 'react-helmet-async';
import { GraduationCap } from 'lucide-react';
import Container from '@/components/layout/Container';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const ScholenPage = () => {
  return (
    <>
      <Helmet>
        <title>Scholen - WePlay United</title>
        <meta name="description" content="WePlay United voor scholen - Coming Soon" />
      </Helmet>
      
      <Header />
      
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-blue-800">
        <Container>
          <div className="text-center">
            <div className="bg-white/10 rounded-full p-8 w-32 h-32 mx-auto mb-8 flex items-center justify-center backdrop-blur-sm">
              <GraduationCap className="w-16 h-16 text-white" />
            </div>
            <h1 className="text-3xl lg:text-4xl font-heading font-black text-white mb-6 tracking-tight">
              WEPLAY VOOR SCHOLEN
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-blue-200 max-w-3xl mx-auto mb-8">
              Coming Soon
            </p>
          </div>
        </Container>
      </main>
      
      <Footer />
    </>
  );
};

export default ScholenPage;