import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error' | 'knvb';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const WeBadge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = 'default', size = 'md', children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center rounded-full font-medium";
    
    const variants = {
      default: "bg-gray-100 text-weplay-text-medium",
      primary: "bg-weplay-primary/10 text-weplay-primary border border-weplay-primary/20",
      success: "bg-green-100 text-green-700",
      warning: "bg-yellow-100 text-yellow-700",
      error: "bg-red-100 text-red-700",
      knvb: "bg-weplay-primary/10 text-weplay-primary border border-weplay-primary/20"
    };
    
    const sizes = {
      sm: "px-2 py-1 text-xs",
      md: "px-3 py-1 text-sm",
      lg: "px-4 py-2 text-base"
    };
    
    return (
      <div
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

WeBadge.displayName = "WeBadge";
export default WeBadge;