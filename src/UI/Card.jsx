import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const Card = ({ text, description, className = "" }) => {
  return (
    <div
      className={`w-[24%] h-15 flex items-start gap-4 px-6 rounded-xl   ${className}`}
    >
      <img
        src="/assets/img1.jpg"
        alt="Xenotix Tech"
        className="w-14 h-14 object-cover rounded-md"
      />

      <div>
        <h3 className="text-sm font-semibold text-gray-800">Xenotix Tech</h3>
        <p className="text-xs text-gray-600 mt-1">{description}</p>
        <p className="text-xs text-gray-600 mt-1 flex items-center gap-1">
          <FaLongArrowAltRight />
          {text}
        </p>
      </div>
    </div>
  );
};

export default Card;
