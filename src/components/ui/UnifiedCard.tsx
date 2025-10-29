
import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import Typography from '@/components/ui/Typography';

interface UnifiedCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'outlined' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  hover?: boolean;
  icon?: LucideIcon;
  iconBgColor?: string;
  iconColor?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  badge?: string;
  percentage?: number;
  children?: React.ReactNode;
}

const UnifiedCard = React.forwardRef<HTMLDivElement, UnifiedCardProps>(
  ({ 
    className, 
    variant = 'default', 
    size = 'md', 
    hover = false,
    icon,
    iconBgColor = 'bg-weplay-primary/10',
    iconColor = 'text-weplay-primary',
    title,
    subtitle,
    description,
    badge,
    percentage,
    children,
    ...props 
  }, ref) => {
    const baseStyles = "rounded-xl border transition-all duration-300 relative overflow-hidden";
    
    const variants = {
      default: "bg-white border-gray-200 shadow-sm",
      elevated: "bg-white border-gray-200 shadow-lg",
      outlined: "bg-white border-2 border-weplay-accent-light",
      gradient: "bg-gradient-to-br from-weplay-light to-white border-weplay-accent-light"
    };
    
    const sizes = {
      sm: "p-4",
      md: "p-6",
      lg: "p-8"
    };
    
    const hoverStyles = hover ? "hover:shadow-xl hover:border-weplay-primary/30 hover:scale-[1.02] cursor-pointer" : "";
    
    const IconComponent = icon;

    return (
      <div
        className={cn(baseStyles, variants[variant], sizes[size], hoverStyles, className)}
        ref={ref}
        {...props}
      >
        {/* Custom children content */}
        {children}
        
        {/* Standard card content when using props */}
        {!children && (
          <div className="text-center space-y-4">
            {/* Icon */}
            {IconComponent && (
              <div className={cn("inline-flex items-center justify-center w-12 h-12 rounded-lg", iconBgColor)}>
                <IconComponent className={cn("w-6 h-6", iconColor)} />
              </div>
            )}
            
            {/* Badge */}
            {badge && (
              <div className="inline-block px-3 py-1 text-xs font-semibold bg-weplay-primary/10 text-weplay-primary rounded-full">
                {badge}
              </div>
            )}
            
            {/* Title */}
            {title && (
              <Typography variant="h4" className="text-weplay-text">
                {title}
              </Typography>
            )}
            
            {/* Percentage */}
            {percentage && (
              <div className="text-3xl font-heading font-black text-weplay-primary">
                {percentage}%
              </div>
            )}
            
            {/* Subtitle */}
            {subtitle && (
              <Typography variant="body" color="secondary" className="text-sm">
                {subtitle}
              </Typography>
            )}
            
            {/* Description */}
            {description && (
              <Typography variant="body" color="secondary" className="text-sm leading-relaxed">
                {description}
              </Typography>
            )}
          </div>
        )}
      </div>
    );
  }
);

UnifiedCard.displayName = "UnifiedCard";
export default UnifiedCard;
