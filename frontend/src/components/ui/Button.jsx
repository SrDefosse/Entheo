import React from 'react';

const Button = ({ children, onClick, className = "", ...props }) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-6 py-3 
        bg-white bg-opacity-10 backdrop-blur-sm
        shadow-xl
        text-black font-semibold
        border border-white
        rounded-xl
        transition-all duration-300 ease-in-out
        hover:bg-opacity-20 hover:border-opacity-50
        hover:scale-105
        active:scale-95
        uppercase tracking-wider
        text-sm
        cursor-pointer
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
