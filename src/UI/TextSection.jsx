import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import ImageCard from "./ImageCard";

const TextSection = () => {
  return (
    <div className="relative w-full mt-8 mb-6">
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-3xl font-medium  text-black">
          Curious About IoT..?
        </h1>
        <p className="text-lg font-light -mt-4 text-gray-800">
          Why Not Create It?
        </p>

        <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#B39EFE] to-white rounded-full hover:bg-gray-900 transition-all">
          <img src="/assets/pracpoint.webp" alt="logo" className="w-5 h-5" />
          <span className="text-black font-light">Pracpoint</span>
          <FaLongArrowAltRight size={16} />
        </button>
      </div>

      <ImageCard
        src="assets/feature-img.svg"
        size="w-20 h-20"
        className="absolute top-[3rem] left-[6rem]"
      />
      <ImageCard
        src="assets/feature-img2.svg"
        size="w-33 h-33"
        className="absolute top-[3rem] right-[4rem]"
      />
      <ImageCard
        src="assets/arrow-white.svg"
        size="w-13 h-13"
        className="absolute top-[2rem] left-[13rem]"
      />
    </div>
  );
};

export default TextSection;
