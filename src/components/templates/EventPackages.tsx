import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Container from '@/components/layout/Container';

export interface Package {
    pakket_naam: string;
    package_price: number;
    group_size_display_min: number;
    group_size_display_max: number;
    features: string[];
}

interface EventPackagesProps {
    packages: Package[];
}

const EventPackages: React.FC<EventPackagesProps> = ({ packages }) => {
    return (
        <section className="py-20 bg-gray-100">
            <Container>
                <h2 className="text-3xl font-bold text-center mb-12">Pakketten</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {packages.map((pkg, index) => (
                        <Card key={index}>
                            <CardHeader>
                                <CardTitle>{pkg.pakket_naam}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-2xl font-bold mb-4">€{pkg.package_price}</p>
                                <p className="mb-4">{pkg.group_size_display_min}-{pkg.group_size_display_max} personen</p>
                                <ul className="mb-6 space-y-2">
                                    {pkg.features.map((feature, i) => (
                                        <li key={i} className="flex items-center">
                                            <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Button className="w-full">Kies dit pakket</Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default EventPackages;