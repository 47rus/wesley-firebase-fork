"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useClients } from "@/hooks/use-clients";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export default function ClientsSection() {
  const clients = useClients();

  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="mb-8 text-center">
        <p className="text-lg font-medium text-gray-600">
          Trusted by 500+ organizations
        </p>
      </div>
      <Carousel
        className="w-full"
        plugins={[
          Autoplay({
            delay: 2000,
            stopOnInteraction: false,
          }),
        ]}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {clients.map((client) => (
            <CarouselItem key={client.id} className="md:basis-1/3 lg:basis-1/6">
              <div className="p-4">
                <Image
                  // Use the new, reliable URL field directly from Firestore
                  src={client.url}
                  alt={client.altText}
                  width={150}
                  height={150}
                  className="mx-auto"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
