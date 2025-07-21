import React from "react";
import ImageCard from "../UI/ImageCard";

const MainSection = () => {
  return (
    <>
      <div className="flex justify-center items-center py-10 relative">
        <div className="space-y-6 relative">
          <div className="grid grid-cols-5 gap-4 justify-items-center">
            <div></div>
            <img
              src="/assets/image1.avif"
              alt="img1"
              className="w-20 h-20 rounded-xl object-cover"
            />
            <div></div>
            <img
              src="/assets/image2.jpg"
              alt="img2"
              className="w-20 h-20 rounded-xl object-cover"
            />
            <div></div>
          </div>

          <div className="grid grid-cols-3 gap-4 justify-items-center relative">
            <img
              src="/assets/image3.avif"
              alt="img3"
              className="w-20 h-20 rounded-xl object-cover"
            />

            <div className="relative flex flex-col items-center">
              <img
                src="/assets/connection-arrow.svg"
                alt="arrow"
                className="absolute -top-14 z-10"
                style={{
                  width: "180px",
                  height: "180px",
                  minWidth: "180px",
                  minHeight: "180px",
                }}
              />
              <img
                src="/assets/wifi-icon.svg"
                alt="wifi"
                className="absolute -top-14 z-10"
              />
              <img
                src="/assets/smile-icon.svg"
                alt="smile"
                className="absolute h-6 top-28 z-10"
              />
              <img
                src="/assets/lock-icon.svg"
                alt="lock"
                className="absolute h-8 top-8 -right-10 -rotate-23 z-10"
              />
              <img
                src="/assets/key-icon.svg"
                alt="key"
                className="absolute h-9 top-44 left-53 rotate-23 z-10"
              />
              <img
                src="/assets/spin-icon.svg"
                alt="spin"
                className="absolute h-9 -left-35 -top-12 rotate-23 z-10"
              />
              <img
                src="/assets/chain-icon.svg"
                alt="chain"
                className="absolute h-7 top-8 -left-10 rotate-23 z-10"
              />

              <img
                src="/assets/image4.jpg"
                alt="img4"
                className="w-20 h-20 rounded-xl object-cover z-0"
              />
            </div>

            <img
              src="/assets/image1.avif"
              alt="img5"
              className="w-20 h-20 rounded-xl object-cover"
            />
          </div>

          <div className="grid grid-cols-5 gap-4 justify-items-center">
            <div></div>
            <img
              src="/assets/image6.jpg"
              alt="img6"
              className="w-20 h-20 rounded-xl object-cover"
            />
            <div></div>
            <img
              src="/assets/image7.jpg"
              alt="img7"
              className="w-20 h-20 rounded-xl object-cover"
            />
            <div></div>
          </div>
        </div>
      </div>
      <div>
        <ImageCard
          src="assets/feature-img2.svg"
          size="w-12 h-12"
          className="relative left-26 -top-22 "
        />
        <ImageCard
          src="assets/feature-img.svg"
          size="w-22 h-22"
          className="relative -top-45 -right-145 "
        />
      </div>
    </>
  );
};

export default MainSection;
