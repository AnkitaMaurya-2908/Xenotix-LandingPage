import React from "react";

const Card2 = ({
  title,
  description,
  spanText,
  image,
  alt,
  className = "",
}) => {
  return (
    <div
      className={`w-fit pl-6 py-3 rounded-xl flex items-start gap-4 ${className}`}
    >
      <div className="bg-white w-14 h-14 rounded-md">
        <img
          src={image}
          alt={alt}
          className="w-14 h-14 object-cover rounded-md flex-shrink-0"
        />
      </div>

      <div className="p-1">
        <h3 className="text-lg font-normal text-black-800">{title}</h3>
        <h2 className="text-xl font-normal text-black-800">
          {description}
          <span className="text-sm font-light text-gray-400"> {spanText}</span>
        </h2>
      </div>
    </div>
  );
};

export default Card2;
