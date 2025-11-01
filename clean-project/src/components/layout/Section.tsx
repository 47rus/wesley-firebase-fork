
import React from 'react';
import { cn } from '@/lib/utils';
import Container from './Container';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  background?: 'white' | 'light' | 'gradient' | 'dark' | 'primary';
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  children: React.ReactNode;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, background = 'white', spacing = 'lg', containerSize = 'lg', children, ...props }, ref) => {
    const backgrounds = {
      white: 'bg-weplay-card',
      light: 'bg-gradient-to-br from-weplay-light via-white to-weplay-accent-light',
      gradient: 'bg-gradient-to-br from-weplay-primary to-weplay-dark',
      dark: 'bg-weplay-text',
      primary: 'bg-weplay-primary'
    };
    
    const spacings = {
      sm: 'py-12',
      md: 'py-16',
      lg: 'py-24',
      xl: 'py-32'
    };
    
    return (
      <section
        className={cn(backgrounds[background], spacings[spacing], 'relative overflow-hidden', className)}
        ref={ref}
        {...props}
      >
        <Container size={containerSize}>
          {children}
        </Container>
      </section>
    );
  }
);

Section.displayName = "Section";
export default Section;
