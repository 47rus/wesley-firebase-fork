
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ButtonSystemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'cta';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
  fullWidth?: boolean;
}

const ButtonSystem = React.forwardRef<HTMLButtonElement, ButtonSystemProps>(
  ({ 
    className, 
    variant = 'primary', 
    size = 'md', 
    icon: Icon, 
    iconPosition = 'left', 
    children, 
    fullWidth = false,
    ...props 
  }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-lg font-heading font-bold uppercase tracking-wide transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
    
    const variants = {
      primary: "bg-weplay-primary text-white hover:bg-weplay-dark focus:ring-weplay-primary hover:shadow-weplay-glow",
      secondary: "bg-weplay-card text-weplay-text hover:bg-weplay-light focus:ring-weplay-primary hover:shadow-md border border-weplay-accent-light",
      outline: "border-2 border-weplay-primary text-weplay-primary hover:bg-weplay-primary hover:text-white focus:ring-weplay-primary hover:shadow-md",
      ghost: "text-weplay-text-medium hover:text-weplay-text hover:bg-weplay-light",
      cta: "bg-gradient-to-r from-weplay-primary to-weplay-dark text-white hover:shadow-weplay-glow-strong focus:ring-weplay-primary transform hover:scale-105"
    };
    
    const sizes = {
      sm: "px-4 py-2 text-sm gap-2",
      md: "px-6 py-3 text-base gap-2", 
      lg: "px-8 py-4 text-lg gap-3",
      xl: "px-10 py-5 text-xl gap-3"
    };
    
    const iconSizes = {
      sm: 'w-4 h-4',
      md: 'w-5 h-5',
      lg: 'w-6 h-6',
      xl: 'w-7 h-7'
    };
    
    return (
      <button
        className={cn(
          baseStyles, 
          variants[variant], 
          sizes[size], 
          fullWidth && 'w-full',
          className
        )}
        ref={ref}
        {...props}
      >
        {Icon && iconPosition === 'left' && (
          <Icon className={iconSizes[size]} />
        )}
        {children}
        {Icon && iconPosition === 'right' && (
          <Icon className={iconSizes[size]} />
        )}
      </button>
    );
  }
);

ButtonSystem.displayName = "ButtonSystem";
export default ButtonSystem;
