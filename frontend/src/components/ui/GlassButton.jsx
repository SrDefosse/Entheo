import React from 'react';

const GlassButton = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  disabled = false,
  ...props 
}) => {
  const baseClasses = `
    relative overflow-hidden backdrop-blur-md border transition-all duration-300 
    font-medium rounded-full flex items-center justify-center gap-2
    hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed
    disabled:hover:scale-100 group cursor-pointer
  `;

  const variants = {
    primary: `
      bg-white/10 border-white/20 text-white 
      hover:bg-white/20 hover:border-white/30
      shadow-lg hover:shadow-xl
    `,
    secondary: `
      bg-black/10 border-black/20 text-black 
      hover:bg-black/20 hover:border-black/30
      shadow-lg hover:shadow-xl
    `,
    outline: `
      bg-transparent border-white/40 text-white 
      hover:bg-white/10 hover:border-white/60
    `
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm min-h-[32px]',
    md: 'px-6 py-3 text-sm min-h-[40px]',
    lg: 'px-8 py-4 text-base min-h-[48px]'
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {/* Efecto de cristal */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      
      {/* Contenido */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </button>
  );
};

export default GlassButton;
