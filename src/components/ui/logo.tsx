import { IconWorld } from "@tabler/icons-react";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export const Logo = ({ size = "md", showText = true }: LogoProps) => {
  const iconSizes = {
    sm: "h-6 w-6",
    md: "h-8 w-8", 
    lg: "h-12 w-12"
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-3xl"
  };

  return (
    <div className="flex items-center">
      <div className={`${iconSizes[size]} rounded-full bg-ubuntu-gold flex items-center justify-center mr-2`}>
        <IconWorld className="h-5 w-5 text-white" />
      </div>
      {showText && (
        <span className={`text-foreground font-bold ${textSizes[size]}`}>
          Ubuntu<span className="text-ubuntu-gold">Explorer</span>
        </span>
      )}
    </div>
  );
};