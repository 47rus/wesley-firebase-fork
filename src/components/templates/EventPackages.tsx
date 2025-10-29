import React from 'react';
import { CheckCircle } from 'lucide-react';
import Container from '@/components/layout/Container';
import WeButton from '@/components/ui/WeButton';
import { scrollToBookingForm } from '@/utils/scrollUtils';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export interface Package {
  pakket_naam: string;
  group_size_display_min: number;
  group_size_display_max: number;
  duration_display: number;
  package_price: number;
  pakket_price_tax: number;
  opbouw_uren: number;
  afbouw_uren: number;
  km_price: number;
  package_feature_1_gamesets?: string;
  package_feature_2_support?: string;
  package_feature_3_standings?: string;
  package_feature_4_awards?: string;
  package_feature_5_promotion?: string;
  package_feature_6_sign_ups?: string;
  package_feature_7_extra?: string;
  eventmanager_plus?: boolean;
  eventmanager?: boolean;
  junior_eventmanager?: boolean;
  package_badge?: string;
}

interface EventPackagesProps {
  packages: Package[];
}

const EventPackages: React.FC<EventPackagesProps> = ({ packages }) => {
  const getPackageFeatures = (pkg: Package) => {
    const features = [];
    if (pkg.package_feature_1_gamesets) features.push(pkg.package_feature_1_gamesets);
    if (pkg.package_feature_2_support) features.push(pkg.package_feature_2_support);
    if (pkg.package_feature_3_standings) features.push(pkg.package_feature_3_standings);
    if (pkg.package_feature_4_awards) features.push(pkg.package_feature_4_awards);
    if (pkg.package_feature_5_promotion) features.push(pkg.package_feature_5_promotion);
    if (pkg.package_feature_6_sign_ups) features.push(pkg.package_feature_6_sign_ups);
    if (pkg.package_feature_7_extra) features.push(pkg.package_feature_7_extra);
    return features;
  };

  const getPackageBadge = (pkg: Package) => {
    if (pkg.eventmanager_plus) {
      return 'MEEST POPULAIR';
    }
    return pkg.package_badge || null;
  };

  const shouldHighlightPackage = (pkg: Package) => {
    return pkg.eventmanager_plus;
  };

  if (packages.length === 0) return null;

  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-4xl font-heading font-black text-weplay-text mb-6 tracking-tight">
            KIES HET PERFECTE PAKKET
          </h2>
        </div>

        {/* Package Cards Carousel */}
        <Carousel
          opts={{
            align: packages.length < 3 ? "center" : "start",
            loop: false,
            dragFree: true,
          }}
          className={`w-full mx-auto pt-6 ${packages.length < 3 ? 'max-w-4xl' : 'max-w-7xl'}`}
        >
          <CarouselContent className="-ml-4 gap-4 overflow-visible">
            {packages.map((pkg, index) => {
            const badge = getPackageBadge(pkg);
            const isHighlighted = shouldHighlightPackage(pkg);
            
            return (
              <CarouselItem key={index} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3 min-w-0">
                <div 
                  className={`relative bg-white rounded-2xl transition-all duration-300 hover:translate-y-[-4px] ${
                    isHighlighted
                      ? 'border-2 border-weplay-primary shadow-xl shadow-weplay-primary/10' 
                      : 'border border-gray-200 shadow-lg hover:shadow-xl'
                  } flex flex-col h-full overflow-visible`}
                >
                {badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-50">
                    <span className="bg-gradient-to-r from-weplay-primary to-weplay-dark text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide shadow-lg whitespace-nowrap">
                      {badge}
                    </span>
                  </div>
                )}
                
                {/* Fixed Height Header */}
                <div className="text-center px-8 pt-16 pb-6">
                  <div className="h-16 flex items-center justify-center mb-6">
                    <h3 className="text-2xl font-heading font-black text-weplay-text text-center">
                      {pkg.pakket_naam}
                    </h3>
                  </div>
                  
                  <div className="h-20 flex flex-col items-center justify-center mb-4">
                  <div className="mb-2">
                    <span className="text-5xl font-heading font-black text-weplay-text">
                      €{pkg.package_price}
                    </span>
                    <span className="text-lg text-weplay-text-medium ml-2">excl. BTW</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    €{pkg.pakket_price_tax} incl. BTW
                  </div>
                  </div>
                  
                <div className="h-6 flex items-center justify-center">
                  <p className="text-weplay-text-medium">
                    {pkg.group_size_display_min}-{pkg.group_size_display_max} personen • {pkg.duration_display} uur
                  </p>
                </div>
                </div>

                {/* Features Section */}
                <div className="flex-1 px-8 pb-6">
                  <div className="space-y-4">
                    {getPackageFeatures(pkg).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-weplay-text leading-relaxed text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Fixed Bottom CTA */}
                <div className="px-8 pb-8">
                  <WeButton 
                    variant={isHighlighted ? "primary" : "outline"} 
                    size="lg" 
                    className="w-full py-4"
                    onClick={() => scrollToBookingForm(pkg.pakket_naam)}
                  >
                    VRIJBLIJVEND VOORSTEL
                  </WeButton>
                </div>
                </div>
              </CarouselItem>
            );
          })}
          </CarouselContent>
          {packages.length > 3 && (
            <>
              <CarouselPrevious className="hidden sm:flex -left-12" />
              <CarouselNext className="hidden sm:flex -right-12" />
            </>
          )}
        </Carousel>
      </Container>
    </section>
  );
};

export default EventPackages;
