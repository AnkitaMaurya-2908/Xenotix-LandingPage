import React from "react";

const AICategoryCard = ({ className = "" }) => {
  return (
    <div
      className={`bg-gray-100 rounded-xl py-4 px-4 shadow-md w-fit min-h-[200px] flex items-center gap-4 relative ${className}`}
    >
      <div className="flex -ml-22 items-center justify-center">
        <p className="text-sm font-semibold text-gray-800 tracking-widest transform -rotate-90 origin-center whitespace-nowrap">
          Artificial Intelligence
        </p>
      </div>

      <div className="relative z-10 -mt-18 -ml-20 flex flex-col gap-3">
        <button className="bg-[#8093f1] text-white text-sm px-4 py-3 rounded-md shadow-sm hover:brightness-110 transition-all duration-200">
          Mobile Applications
        </button>

        <button className="bg-[#8093f1] text-white text-sm px-6 py-3 rounded-md shadow-sm hover:brightness-110 transition-all duration-200">
          Web Applications
        </button>

        <img
          src="/assets/petals.png"
          alt="AI Illustration"
          className="absolute bottom-1 right-2 w-16 h-16 object-contain z-0 opacity-80"
        />
      </div>
    </div>
  );
};

export default AICategoryCard;
