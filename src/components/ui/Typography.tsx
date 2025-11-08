
import React from 'react';
import { cn } from '@/lib/utils';

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle' | 'body' | 'caption' | 'hero';
  weight?: 'normal' | 'medium' | 'bold' | 'black' | 'extra-black';
  color?: 'primary' | 'secondary' | 'accent' | 'white' | 'muted';
  as?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant = 'body', weight = 'normal', color = 'primary', as, children, ...props }, ref) => {
    const variants = {
      hero: "text-5xl sm:text-6xl lg:text-7xl font-heading font-black uppercase leading-tight tracking-tight",
      h1: "text-3xl lg:text-4xl font-heading font-black uppercase tracking-tight",
      h2: "text-2xl lg:text-3xl font-heading font-bold uppercase tracking-wide",
      h3: "text-xl lg:text-2xl font-heading font-bold tracking-wide",
      h4: "text-lg lg:text-xl font-heading font-bold",
      h5: "text-base lg:text-lg font-heading font-bold",
      h6: "text-sm lg:text-base font-heading font-bold",
      subtitle: "text-lg lg:text-xl font-sans font-medium",
      body: "text-base lg:text-lg font-sans",
      caption: "text-sm font-sans"
    };

    const weights = {
      normal: 'font-normal',
      medium: 'font-medium', 
      bold: 'font-bold',
      black: 'font-black',
      'extra-black': 'font-black [font-weight:900]'
    };

    const colors = {
      primary: 'text-weplay-text',
      secondary: 'text-weplay-text-medium',
      accent: 'text-weplay-primary',
      white: 'text-white',
      muted: 'text-weplay-text-medium'
    };

    const getDefaultTag = (variant: string): keyof JSX.IntrinsicElements => {
      switch (variant) {
        case 'hero':
        case 'h1': return 'h1';
        case 'h2': return 'h2';
        case 'h3': return 'h3';
        case 'h4': return 'h4';
        case 'h5': return 'h5';
        case 'h6': return 'h6';
        case 'subtitle': return 'p'; // Changed from h5 to avoid conflicts
        default: return 'p';
      }
    };

    const Component = as || getDefaultTag(variant);

    return React.createElement(
      Component,
      {
        className: cn(variants[variant], weights[weight], colors[color], className),
        ref,
        ...props
      },
      children
    );
  }
);

Typography.displayName = "Typography";
export default Typography;
