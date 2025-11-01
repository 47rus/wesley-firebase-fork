
import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hover?: boolean;
}

const WeCard = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, hover = false, ...props }, ref) => {
    const baseStyles = "rounded-lg border border-gray-200 bg-white shadow-sm";
    const hoverStyles = hover ? "hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer" : "";
    
    return (
      <div
        ref={ref}
        className={cn(baseStyles, hoverStyles, className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

WeCard.displayName = "WeCard";

const WeCardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pb-4", className)} {...props} />
  )
);
WeCardHeader.displayName = "WeCardHeader";

const WeCardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
  )
);
WeCardContent.displayName = "WeCardContent";

const WeCardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-4", className)} {...props} />
  )
);
WeCardFooter.displayName = "WeCardFooter";

export { WeCard, WeCardHeader, WeCardContent, WeCardFooter };
