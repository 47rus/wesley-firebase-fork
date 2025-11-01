
import React from 'react';
import { cn } from '@/lib/utils';

interface CardSystemProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'outlined' | 'gradient' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  hover?: boolean;
  children: React.ReactNode;
}

const CardSystem = React.forwardRef<HTMLDivElement, CardSystemProps>(
  ({ className, variant = 'default', size = 'md', hover = false, children, ...props }, ref) => {
    const baseStyles = "rounded-xl transition-all duration-300";
    
    const variants = {
      default: "bg-weplay-card border border-weplay-accent-light",
      elevated: "bg-weplay-card shadow-lg border border-weplay-accent-light",
      outlined: "bg-weplay-card border-2 border-weplay-accent-light",
      gradient: "bg-gradient-to-br from-weplay-light to-weplay-card border border-weplay-accent-light",
      glass: "bg-white/10 backdrop-blur-sm border border-white/20"
    };
    
    const sizes = {
      sm: "p-4",
      md: "p-6",
      lg: "p-8"
    };
    
    const hoverStyles = hover ? "hover:shadow-weplay-glow hover:border-weplay-primary hover:scale-105" : "";
    
    return (
      <div
        className={cn(baseStyles, variants[variant], sizes[size], hoverStyles, className)}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardSystem.displayName = "CardSystem";
export default CardSystem;
