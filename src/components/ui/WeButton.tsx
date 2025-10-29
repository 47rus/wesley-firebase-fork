
import React from 'react';
import ButtonSystem from './ButtonSystem';
import { LucideIcon } from 'lucide-react';

interface WeButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'cta';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
  fullWidth?: boolean;
}

const WeButton = React.forwardRef<HTMLButtonElement, WeButtonProps>(
  (props, ref) => {
    return <ButtonSystem ref={ref} {...props} />;
  }
);

WeButton.displayName = "WeButton";
export default WeButton;
