import React from 'react';
import Container from '@/components/layout/Container';
import { Card, CardContent } from '@/components/ui/card';

interface EventAboutProps {
    wat_is_beschrijving: string;
    wat_is_image?: string;
}

const EventAbout: React.FC<EventAboutProps> = ({ wat_is_beschrijving, wat_is_image }) => {
    return (
        <section className="py-20">
            <Container>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Over het evenement</h2>
                        <p className="text-lg">{wat_is_beschrijving}</p>
                    </div>
                    <div>
                        {wat_is_image && (
                            <Card>
                                <CardContent>
                                    <img src={`/placeholder.svg`} alt="Event" className="rounded-lg" />
                                </CardContent>
                            </Card>
                        )}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default EventAbout;