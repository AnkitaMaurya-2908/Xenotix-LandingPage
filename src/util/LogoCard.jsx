// components/LogoCard.jsx
import React from 'react';

const LogoCard = ({ children, className = '' }) => {
  return (
    <div
      className={`w-10 h-10 lg:w-15 lg:h-15 flex items-center justify-center shadow-md rounded-xl bg-white hover:scale-105 transition-transform duration-300 text-xl text-gray-800 ${className}`}
    >
      {children}
    </div>
  );
};

export default LogoCard;
