import React from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Option {
  value: string;
  label: string;
}

interface WeSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: Option[];
  placeholder?: string;
  variant?: 'default' | 'glass';
}

const WeSelect = React.forwardRef<HTMLSelectElement, WeSelectProps>(
  ({ className, options, placeholder, variant = 'default', ...props }, ref) => {
    const variants = {
      default: "bg-weplay-card border border-weplay-accent-light text-weplay-text",
      glass: "bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/70 focus:border-white/50"
    };

    return (
      <div className="relative">
        <select
          ref={ref}
          className={cn(
            "w-full p-4 rounded-xl focus:outline-none appearance-none cursor-pointer",
            "transition-all duration-200",
            variants[variant],
            className
          )}
          {...props}
        >
          {placeholder && (
            <option value="" className="text-gray-900">
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value} className="text-gray-900 bg-white">
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown 
          className={cn(
            "absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 pointer-events-none",
            variant === 'glass' ? "text-white/70" : "text-weplay-text-medium"
          )} 
        />
      </div>
    );
  }
);

WeSelect.displayName = "WeSelect";
export default WeSelect;