import React from "react";
import LogoRow from "../UI/LogoRow";
import Card from "../UI/Card";

const Hero = () => {
  return (
    <>
      <Card description="Posting but getting zero traction?"
        text="Social Media Marketing"
        className="hidden md:flex bg-white z-[20] absolute absolute top-[30%] right-10"
      />

      <Card
        text="Start Online Business?"
        className="hidden md:flex bg-gradient-to-r from-blue-100 to-gray-100 z-[10] absolute absolute -rotate-6 top-[36%] right-10"
      />

      <section className="pt-22 px-6 md:px-16 bg-[#f9f9ff] ">
        <img
          className="ml-[75%] lg:ml-[65%] rotate-25 relative top-4"
          src="/assets/hand-wave.webp"
          alt=""
        />
        <h4 className="text-center text-gray-600 text-sm font-light ">
          Xenotix Tech
        </h4>
        <h2 className="text-center text-4xl md:text-5xl font-medium mb-2">
          Got a startup Idea ?
        </h2>
        <h4 className="text-center text-gray-600 text-lg font-light mb-2">
          Let's Turn It Into Reality.
        </h4>
        <div className="flex justify-center flex-wrap gap-6   ">
          <LogoRow />
        </div>
        <img
          src="/assets/arrow.png"
          alt="Arrow"
          className="w-35 h-30 -rotate-9 -mt-28 lg:ml-[22%] "
        />
      </section>

      <Card
        description="Tired of your 9-5?"
        text="Dreaming of your own brand?"
        className="hidden md:flex bg-white z-[20] absolute absolute top-[30%] left-3 rotate-6"
      />
      <Card
        text="Quit dreaming. Start Building?"
        className="hidden md:flex bg-gradient-to-r from-blue-100 to-gray-100 z-[10] absolute absolute rotate-10 top-[37%] left-3"
      />
    </>
  );
};

export default Hero;
