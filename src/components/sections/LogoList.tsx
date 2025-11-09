"use client";

import React from 'react';
import { useLogos } from '@/hooks/use-logos';

export const LogoList: React.FC = () => {
  const { data: logos, error, isLoading } = useLogos();

  if (isLoading) {
    return <div>Loading logos...</div>;
  }

  if (error) {
    return <div>Error fetching logos: {error.message}</div>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {logos?.map(logo => (
        <div key={logo.id} className="flex flex-col items-center">
          <img src={logo.url} alt={logo.name} className="h-20 w-20 object-contain" />
          <p className="mt-2 text-sm text-center">{logo.name}</p>
        </div>
      ))}
    </div>
  );
};
