import React from "react";

const MetaAdsCard = ({ className = "" }) => {
  return (
    <div
      className={`w-fit h-[250px] bg-gradient-to-r from-white via-[#e6e6f0] to-[#d5c8f4]
      rounded-3xl p-5 pr-28 shadow-md ${className}`}
    >
      <div className="flex items-center gap-2 mb-4">
        <img
          src="/assets/fb-logo.avif"
          alt="Logo 1"
          className="w-6 h-6 rounded-full object-cover border border-gray-200"
        />
        <img
          src="/assets/insta-logo.jpeg"
          alt="Logo 2"
          className="w-6 h-6 rounded-full object-cover border border-gray-200"
        />
        <img
          src="/assets/verified-logo.webp"
          alt="Logo 3"
          className="w-6 h-6 rounded-full object-cover border border-gray-200"
        />
        <span className="text-sm font-light">Verified</span>
      </div>

      <div className="mb-2 leading-none">
        <h1 className="text-5xl text-stone-800 font-medium">META</h1>
        <h1 className="text-5xl text-stone-800 font-medium -mt-1">ADS</h1>
      </div>

      <h3 className="text-sm text-gray-600">Spend, Well Spent.</h3>
    </div>
  );
};

export default MetaAdsCard;
