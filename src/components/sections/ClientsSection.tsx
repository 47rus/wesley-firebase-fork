
import React from 'react';
import Container from '@/components/layout/Container';
import UnifiedCard from '@/components/ui/UnifiedCard';

const ClientsSection = () => {
  const clients = [
    { name: 'Azerion', color: 'text-gray-800' },
    { name: 'bol.com', color: 'text-blue-600' },
    { name: 'Ajax', color: 'text-red-600' },
    { name: 'T-Mobile', color: 'text-pink-600' },
    { name: 'Samsung', color: 'text-blue-900' },
    { name: 'Oracle', color: 'text-red-600' },
    { name: 'MediaMarkt', color: 'text-blue-600' },
    { name: 'Student Hotel', color: 'text-gray-800' },
    { name: 'NN Group', color: 'text-orange-600' },
    { name: 'Rotterdam', color: 'text-gray-800' },
    { name: 'ISE', color: 'text-gray-800' },
    { name: '+500 meer', color: 'text-gray-600' }
  ];

  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="text-center">
          {/* Bridge text */}
          <div className="mb-12">
            <p className="text-lg text-weplay-text-medium mb-4">
              Van sportclubs tot non-profits en van scholen tot bedrijven
            </p>
            <h2 className="text-4xl lg:text-5xl font-heading font-black text-weplay-text mb-6 leading-tight uppercase">
              VERTROUWD DOOR <span className="text-weplay-primary">500+</span> ORGANISATIES
            </h2>
          </div>
          
          {/* Client logos in unified card */}
          <UnifiedCard variant="default" className="max-w-5xl mx-auto">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
              {clients.map((client, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-center h-12 grayscale hover:grayscale-0 transition-all duration-300 hover:opacity-100 opacity-60"
                >
                  <span className={`text-sm font-bold hover:${client.color} transition-colors text-gray-500`}>
                    {client.name}
                  </span>
                </div>
              ))}
            </div>
          </UnifiedCard>

        </div>
      </Container>
    </section>
  );
};

export default ClientsSection;
