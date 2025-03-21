
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlassMorphismProps {
  children: ReactNode;
  className?: string;
  intensity?: 'light' | 'medium' | 'heavy';
  border?: boolean;
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  shadow?: boolean;
}

export const GlassMorphism = ({
  children,
  className,
  intensity = 'medium',
  border = true,
  rounded = 'lg',
  shadow = true,
}: GlassMorphismProps) => {
  const intensityMap = {
    light: 'bg-white/30 dark:bg-black/20 backdrop-blur-sm',
    medium: 'bg-white/50 dark:bg-black/30 backdrop-blur-md',
    heavy: 'bg-white/70 dark:bg-black/40 backdrop-blur-xl',
  };

  const roundedMap = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    full: 'rounded-full',
  };

  return (
    <div
      className={cn(
        intensityMap[intensity],
        roundedMap[rounded],
        border && 'border border-white/20 dark:border-white/10',
        shadow && 'shadow-lg',
        className
      )}
    >
      {children}
    </div>
  );
};
