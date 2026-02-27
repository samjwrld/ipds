import React from 'react';

export interface LogoProps {
  className?: string;
  layout?: 'full' | 'icon';
  variant?: 'filled' | 'outline';
  theme?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({ 
  className = "", 
  layout = 'full', 
  variant = 'filled',
  theme 
}) => {
  const isOutline = variant === 'outline';

  // --- Dynamic Style Generators ---
  
  // 1. Text Colors
  const getTextColor = () => {
    if (theme === 'dark') return 'text-white';
    if (theme === 'light') return 'text-brand-black';
    return 'text-brand-black dark:text-white';
  };

  const getSubTextColor = () => {
    if (theme === 'dark') return 'text-white/60 group-hover/logo:text-white';
    if (theme === 'light') return 'text-brand-gray group-hover/logo:text-brand-black';
    return 'text-brand-gray dark:text-white/60 group-hover/logo:text-brand-black dark:group-hover/logo:text-white';
  };

  // 2. Glow/Shadow Effect
  const getGlowEffect = () => {
    if (theme === 'dark') return 'group-hover/logo:drop-shadow-[0_0_12px_rgba(255,255,255,0.3)]';
    if (theme === 'light') return 'group-hover/logo:drop-shadow-[0_0_8px_rgba(193,18,31,0.4)]';
    return 'group-hover/logo:drop-shadow-[0_0_8px_rgba(193,18,31,0.4)] dark:group-hover/logo:drop-shadow-[0_0_12px_rgba(255,255,255,0.3)]';
  }

  // 3. Shield Body (Outer Shape)
  const getShieldClass = () => {
    if (isOutline) {
      if (theme === 'dark') return 'stroke-white fill-transparent group-hover/logo:stroke-brand-red stroke-2';
      if (theme === 'light') return 'stroke-brand-red fill-transparent group-hover/logo:stroke-brand-black stroke-2';
      return 'stroke-brand-red fill-transparent group-hover/logo:stroke-brand-black dark:stroke-white dark:group-hover/logo:stroke-brand-red stroke-2';
    }
    // Filled Variant
    if (theme === 'dark') return 'fill-brand-red group-hover/logo:fill-white';
    if (theme === 'light') return 'fill-brand-red group-hover/logo:fill-brand-black';
    return 'fill-brand-red group-hover/logo:fill-brand-black dark:group-hover/logo:fill-white';
  };

  // 4. Inner Details (Lines)
  const getInnerClass = () => {
     if (isOutline) {
       if (theme === 'dark') return 'stroke-white group-hover/logo:stroke-brand-red';
       if (theme === 'light') return 'stroke-brand-red group-hover/logo:stroke-brand-black';
       return 'stroke-brand-red group-hover/logo:stroke-brand-black dark:stroke-white dark:group-hover/logo:stroke-brand-red';
     }
     // Filled Variant
     if (theme === 'dark') return 'stroke-white group-hover/logo:stroke-brand-black';
     if (theme === 'light') return 'stroke-white';
     return 'stroke-white dark:group-hover/logo:stroke-brand-black';
  };

  // 5. Center Element (Diamond)
  const getCenterClass = () => {
    if (isOutline) {
       if (theme === 'dark') return 'fill-white group-hover/logo:fill-brand-red';
       if (theme === 'light') return 'fill-brand-red group-hover/logo:fill-brand-black';
       return 'fill-brand-red group-hover/logo:fill-brand-black dark:fill-white dark:group-hover/logo:fill-brand-red';
    }
    // Filled Variant
    if (theme === 'dark') return 'fill-white group-hover/logo:fill-brand-black';
    if (theme === 'light') return 'fill-white';
    return 'fill-white dark:group-hover/logo:fill-brand-black';
  };

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 md:gap-3.5 select-none cursor-pointer group/logo ${className}`}>
      {/* Icon Wrapper */}
      <div className={`
        relative w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 flex-shrink-0 
        transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] 
        group-hover/logo:scale-105 group-hover/logo:-rotate-2 
        ${getGlowEffect()}
      `}>
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Shield Body */}
          <path 
            d="M20 2L4 10V20C4 31.0457 10.9543 40 20 40C29.0457 40 36 31.0457 36 20V10L20 2Z" 
            className={`transition-colors duration-300 ${getShieldClass()}`}
          />
          
          {/* Inner Lines Group */}
          <g className={`transition-colors duration-300 ${getInnerClass()}`} strokeWidth="2" strokeLinecap="square">
            <path d="M20 10V18" />
            <path d="M20 22V30" />
            <path d="M12 20H16" />
            <path d="M24 20H28" />
          </g>
          
          {/* Center Diamond */}
          <rect 
            x="18" y="18" width="4" height="4" transform="rotate(45 20 20)" 
            className={`transition-colors duration-300 ${getCenterClass()}`} 
          />
        </svg>
      </div>

      {/* Text Branding */}
      {layout === 'full' && (
        <div className="flex flex-col justify-center transition-transform duration-500 ease-out group-hover/logo:translate-x-1">
          <div className="flex items-center tracking-tight leading-none">
            <span className={`font-sans text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight transition-colors duration-300 ${getTextColor()} group-hover/logo:opacity-90`}>
              BHARAT
            </span>
            <span className="font-sans text-xl sm:text-2xl md:text-3xl font-extrabold text-brand-red ml-0.5 transition-all duration-300 group-hover/logo:text-brand-redDark group-hover/logo:drop-shadow-[0_0_2px_rgba(193,18,31,0.5)]">
              IP
            </span>
          </div>
          <div className="flex items-center w-full mt-0.5">
            <span className={`font-sans text-[0.6rem] sm:text-[0.7rem] md:text-[0.8rem] uppercase font-bold tracking-[0.3em] transition-all duration-500 ${getSubTextColor()} group-hover/logo:tracking-[0.4em]`}>
              Defence
            </span>
          </div>
        </div>
      )}
    </div>
  );
};