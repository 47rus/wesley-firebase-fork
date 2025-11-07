import React from 'react';
import { LucideProps } from 'lucide-react';
import { WeCard, WeCardContent } from './WeCard';

interface UnifiedCardProps {
  icon?: React.ElementType<LucideProps>;
  title?: string;
  description?: string;
  percentage?: number;
  iconBgColor?: string;
  iconColor?: string;
  variant?: 'default' | 'simple' | 'elevated';
  hover?: boolean;
  children?: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const UnifiedCard: React.FC<UnifiedCardProps> = ({
  icon: Icon,
  title,
  description,
  percentage,
  iconBgColor = 'bg-weplay-primary',
  iconColor = 'text-white',
  variant = 'default',
  hover = false,
  children,
  className,
  size = 'md',
}) => {
  return (
    <WeCard 
      hover={hover} 
      className={`text-center transition-all duration-300 ${variant === 'simple' ? 'bg-transparent border-none shadow-none' : ''} ${className}`}
    >
      <WeCardContent className="p-6">
        {Icon && (
          <div className="flex justify-center mb-4">
            <div className={`flex items-center justify-center w-16 h-16 rounded-2xl ${iconBgColor} shadow-lg`}>
              <Icon className={`w-8 h-8 ${iconColor}`} />
            </div>
          </div>
        )}
        {title && (
          <h3 className="text-lg font-heading font-bold text-weplay-text mb-2">{title}</h3>
        )}
        {description && (
          <p className="text-weplay-text-medium text-sm">{description}</p>
        )}
        {percentage !== undefined && (
          <div className="mt-4">
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-weplay-primary h-2.5 rounded-full" style={{ width: `${percentage}%` }}></div>
            </div>
            <p className="text-sm font-bold text-weplay-primary mt-2">{percentage}%</p>
          </div>
        )}
        {children}
      </WeCardContent>
    </WeCard>
  );
};

export default UnifiedCard;