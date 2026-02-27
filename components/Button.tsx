import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyle = "px-8 py-4 font-sans font-bold tracking-wider text-xs uppercase transition-all duration-200 border";
  
  const variants = {
    primary: "bg-brand-red border-brand-red text-white hover:bg-brand-black hover:border-brand-black dark:hover:bg-white dark:hover:border-white dark:hover:text-brand-black",
    secondary: "bg-brand-black border-brand-black text-white hover:bg-brand-red hover:border-brand-red dark:bg-white dark:border-white dark:text-brand-black dark:hover:bg-brand-red dark:hover:border-brand-red dark:hover:text-white",
    outline: "bg-transparent border-brand-black text-brand-black hover:bg-brand-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-brand-black"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};