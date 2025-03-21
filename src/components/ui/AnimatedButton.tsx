
import React from 'react';
import { Button, ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface AnimatedButtonProps extends ButtonProps {
  children: React.ReactNode;
  className?: string;
  hoverScale?: boolean;
  hoverLift?: boolean;
  ripple?: boolean;
}

export const AnimatedButton = ({
  children,
  className,
  hoverScale = false,
  hoverLift = true,
  ripple = false,
  ...props
}: AnimatedButtonProps) => {
  const [isRippling, setIsRippling] = React.useState(false);
  const [coords, setCoords] = React.useState({ x: -1, y: -1 });

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (ripple) {
      const rect = e.currentTarget.getBoundingClientRect();
      setCoords({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
      setIsRippling(true);
    }
    
    if (props.onClick) {
      props.onClick(e);
    }
  };

  React.useEffect(() => {
    if (isRippling) {
      const timer = setTimeout(() => setIsRippling(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isRippling]);

  return (
    <Button
      {...props}
      className={cn(
        'relative overflow-hidden transition-all',
        hoverScale && 'hover:scale-105',
        hoverLift && 'hover:-translate-y-1',
        className
      )}
      onClick={handleClick}
    >
      {ripple && isRippling && (
        <span
          className="absolute rounded-full bg-white/30 animate-[ripple_0.5s_ease-out]"
          style={{
            left: coords.x,
            top: coords.y,
            width: '150px',
            height: '150px',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
          }}
        />
      )}
      {children}
    </Button>
  );
};

// Add keyframes for ripple animation in global CSS or here with styled-components
