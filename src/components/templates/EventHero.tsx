import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Container from '@/components/layout/Container';
import { Package } from './EventPackages';

interface EventHeroProps {
    event_emoji: string;
    hero_title: string;
    hero_image_naam?: string;
    hero_image_alt?: string;
    hero_video_naam?: string;
    hero_subtitle: string;
    hero_description: string;
    packages: Package[];
    rating_sportclubs?: number;
    rating_scholen?: number;
    rating_non_profit?: number;
    rating_bedrijven?: number;
}

const EventHero: React.FC<EventHeroProps> = (props) => {
    return (
        <section className="relative bg-gray-900 text-white">
            <div className="absolute inset-0">
                {props.hero_video_naam ? (
                    <video
                        className="w-full h-full object-cover"
                        src={`/placeholder.svg`}
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                ) : (
                    <img
                        className="w-full h-full object-cover"
                        src={props.hero_image_naam ? `/placeholder.svg` : '/placeholder.svg'}
                        alt={props.hero_image_alt || 'Hero background'}
                    />
                )}
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <Container className="relative z-10 py-20 md:py-32 text-center">
                <div className="mb-4 text-6xl">{props.event_emoji}</div>
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4">{props.hero_title}</h1>
                <p className="text-xl md:text-2xl mb-8">{props.hero_subtitle}</p>
                <p className="max-w-3xl mx-auto mb-8">{props.hero_description}</p>
                <div className="flex justify-center space-x-4 mb-12">
                    <Button size="lg">Boek nu</Button>
                    <Button size="lg" variant="outline">Meer info</Button>
                </div>
                <div className="flex justify-center space-x-8">
                    {props.rating_sportclubs && <div><Badge>Sportclubs: {props.rating_sportclubs}%</Badge></div>}
                    {props.rating_scholen && <div><Badge>Scholen: {props.rating_scholen}%</Badge></div>}
                    {props.rating_non_profit && <div><Badge>Non-profits: {props.rating_non_profit}%</Badge></div>}
                    {props.rating_bedrijven && <div><Badge>Bedrijven: {props.rating_bedrijven}%</Badge></div>}
                </div>
            </Container>
        </section>
    );
};

export default EventHero;