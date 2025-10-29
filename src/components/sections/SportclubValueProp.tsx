import React from 'react';
import Container from '@/components/layout/Container';
import Typography from '@/components/ui/Typography';

const SportclubValueProp = () => {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          {/* Value proposition */}
          <div className="bg-white border border-knvb-border rounded-2xl p-8 shadow-lg">
            <Typography variant="body" className="text-lg md:text-xl leading-relaxed text-knvb-text-dark">
              <strong className="text-knvb-text-dark">Stop met stressen over vrijwilligers.</strong> Wij zijn jullie externe evenementencommissie en regelen alles van A tot Z. Van EA FC toernooi tot LED Voetbal en van de Jonger Oranje karavaan tot een seizoensafsluiting met levend tafelvoetbal. 
              <br /><br />
              <span className="text-knvb-primary font-semibold">Jullie focussen op het voetbal, wij zorgen voor next level events om jouw leden te binden en te behouden.</span>
            </Typography>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SportclubValueProp;