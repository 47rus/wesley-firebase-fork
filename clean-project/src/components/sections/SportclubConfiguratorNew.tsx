import React from 'react';
import { Settings } from 'lucide-react';
import Container from '@/components/layout/Container';

const SportclubConfiguratorNew = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800" id="sportclub-configurator">
      <Container>
        <div className="text-center">
          <div className="bg-white/10 rounded-full p-8 w-32 h-32 mx-auto mb-8 flex items-center justify-center backdrop-blur-sm">
            <Settings className="w-16 h-16 text-white" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-heading font-black text-white mb-6 tracking-tight">
            INTERACTIEVE CONFIGURATOR
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-300 max-w-3xl mx-auto mb-8">
            Coming Soon
          </p>
        </div>
      </Container>
    </section>
  );
};

export default SportclubConfiguratorNew;