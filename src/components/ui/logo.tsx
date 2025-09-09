import { IconWorld } from "@tabler/icons-react";

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Logo = ({ size = 'md', className = '' }: LogoProps) => {
  return (
    <div className={`logo ${className}`}>
      <div className={`logo-icon ${size}`}>
        <IconWorld className="h-4 w-4 text-white" />
      </div>
      <span className={`logo-text ${size}`}>
        Ubuntu<span className="logo-accent">Explorer</span>
      </span>
    </div>
  );
};