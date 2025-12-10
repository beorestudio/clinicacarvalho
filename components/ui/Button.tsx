import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  children: React.ReactNode;
  icon?: boolean;
  href?: string;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  icon = false, 
  href, 
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 rounded-full text-sm font-medium tracking-wide transition-all duration-300 transform active:scale-95";
  
  const variants = {
    primary: "bg-rose text-white hover:bg-rose-dark shadow-soft hover:shadow-lg",
    secondary: "bg-gold text-white hover:bg-gold-muted shadow-soft",
    outline: "border border-rose text-rose hover:bg-rose hover:text-white",
    text: "text-rose hover:text-rose-dark px-0 py-0 underline-offset-4 hover:underline bg-transparent shadow-none"
  };

  const content = (
    <>
      {children}
      {icon && <ArrowRight className="ml-2 w-4 h-4" />}
    </>
  );

  if (href) {
    return (
      <a 
        href={href} 
        className={`${baseStyles} ${variants[variant]} ${className}`}
        target={href.startsWith('http') ? "_blank" : "_self"}
        rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {content}
    </button>
  );
};