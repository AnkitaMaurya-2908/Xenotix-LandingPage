import React from "react";
import ServiceCard from "../UI/ServicesCard";
import Card2 from "../UI/Card2";
import MetaAdsCard from "../UI/MetaAdsCard";
import InfoCard from "../UI/InfoCard";
import AICategoryCard from "../UI/AICategoryCard";
import MainSection from "./MainSection";
import TextSection from "../UI/TextSection";

const blockchainIcons = [
  { src: "/assets/B1.svg", alt: "Ethereum" },
  { src: "/assets/B2.svg", alt: "Blockchain" },
  { src: "/assets/B3.svg", alt: "Web3" },
  { src: "/assets/B4.svg", alt: "Security" },
  { src: "/assets/B5.svg", alt: "Security" },
];
const automationIcons = [
  { src: "/assets/A1.svg", alt: "Ethereum" },
  { src: "/assets/A2.svg", alt: "Blockchain" },
  { src: "/assets/A3.svg", alt: "Web3" },
  { src: "/assets/A4.svg", alt: "Security" },
  { src: "/assets/A5.svg", alt: "Security" },
];

const SecondHero = () => {
  return (
    <div className="grid grid-cols-12 py-6">
      <div className="col-span-3 ">
        <ServiceCard
          title="Blockchain"
          icons={blockchainIcons}
          className="relative top-12  z-[20] left-28 bg-white"
        />
        <ServiceCard
          title="Automation"
          icons={automationIcons}
          className="relative top-7 left-28 z-[10] -rotate-22 bg-purple-300"
        />
        <InfoCard
          title="UI/UX Designing"
          highlightText="UI/UX"
          description="Crafting intuitive, aesthetic, and user-friendly digital experiences"
          tags={[
            "FIGMA",
            "Adobe XD",
            "Wireframe",
            "Prototype",
            "Design System",
          ]}
          className="z-[50] left-10 relative top-15  -rotate-12"
          topBlurColor="bg-purple-600"
          bottomBlurColor="bg-purple-600"
        />
        <AICategoryCard className="z-[30] relative -left-18 -top-65 rotate-70 " />
      </div>

      <div className="col-span-6 bg-gradient-to-b from-[#C0C5F8] to-transparent rounded-t-3xl">
        <div>
          <TextSection />
          <MainSection />
        </div>
      </div>

      <div className="col-span-3 relative">
        <Card2
          image="/assets/google-logo.jpg"
          alt="Google Logo"
          title="Google Ads"
          description="4.8"
          spanText="Reviews"
          className="bg-white z-[20] relative top-15 pr-19 right-3"
        />
        <Card2
          image="/assets/branding.png"
          alt="Branding"
          title="Branding"
          description="Living"
          className="bg-purple-100 z-[10] p-9 pr-19 relative top-13 -rotate-9 right-10"
        />

        <MetaAdsCard className="absolute top-12 -rotate-20 -right-29  z-[30]" />
        <InfoCard
          title="Social Media Marketing"
          highlightText="Social Media"
          description="Unlock a world of possibilities for your brand. Our streamlined approach ensures that you can maximize your online presence."
          tags={[
            "Social",
            "Creatives",
            "Leads",
            "Trending Things",
            "Optimizations",
          ]}
          className="z-[50] rotate-2 relative top-10  rotate-20 -right-17"
          topBlurColor="bg-blue-700"
          bottomBlurColor="bg-blue-700"
        />
      </div>
    </div>
  );
};

export default SecondHero;
