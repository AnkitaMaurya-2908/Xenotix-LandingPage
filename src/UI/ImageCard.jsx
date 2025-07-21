import React from 'react';

const ImageCard = ({ src, alt = 'Image', size = 'w-16 h-16', className = '' }) => {
  return (
    <div className={`overflow-hidden ${size} ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default ImageCard;
