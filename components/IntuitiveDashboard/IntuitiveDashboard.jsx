import React from "react";
import FeatureCard from "./FeatureCard";
import Image from "next/image";
import { MobilePreview } from "../mobile-preview";

const features = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8f079c52e3e4f55098be2920430fef2deb4ba73536f8c801c29df532ae790d63?placeholderIfAbsent=true&apiKey=00dd475291cf4f1da724421e257168ca",
    title: "Customizable Templates",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies molestie imperdiet. Cras rutrum vestibulum dolor, eu feugiat elit Pellentesque vitae lacinia massa. Sed in sagittis magna.",
    expanded: true,
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/41b9dcc184cacbf1b7f016693d76bad38df0fcf6403c2a0f625c60fe34388121?placeholderIfAbsent=true&apiKey=00dd475291cf4f1da724421e257168ca",
    title: "Direct WhatsApp Sharing",
    expanded: false,
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/19126e9e03fa46cc7d339c9c47ea0e1ecd1b7263c2627cb99ffa4c347c2edac1?placeholderIfAbsent=true&apiKey=00dd475291cf4f1da724421e257168ca",
    title: "RSVP Management",
    expanded: false,
  },
];

function SecondSection() {
  return (
    <main className="flex flex-col lg:flex-row gap-8 items-start py-24 bg-white max-md:px-5">
      <div className="relative w-full lg:w-1/2 flex justify-center items-center h-full max-md:mt-10">
        <div className="relative w-full flex justify-center items-center h-full max-md:mt-10">
          <MobilePreview
            backgroundImage={"/circle-2.svg"}
            imageUrl={"/second-mobile-example.png"}
          />
        </div>
        <div className="absolute z-0 w-6 h-6 rounded-full left-[2rem] top-[193px] bg-gradient-to-b from-[#E29669] to-[#E2B48E]" />
        <div className="absolute z-0 w-6 h-6 rounded-full right-[5rem] top-12 bg-gradient-to-b from-[#DAA5DE] to-[#AC8BF0]" />
        <div className="absolute z-0 w-10 h-10 rounded-full bottom-0 left-0 bg-gradient-to-b from-[#DAA5DE] to-[#AC8BF0]" />
      </div>
      <section className="flex overflow-hidden z-0 flex-col text-black lg:w-1/2 w-full">
        <div className="flex flex-col items-start w-full">
          <header className="flex flex-col">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Intuitive Design Tools
            </h1>
            <p className="mt-4 text-lg lg:text-xl leading-7">
              Create personalized invitations with{" "}
              <br className="hidden md:block" />
              our easy-to-use drag-and-drop editor
            </p>
          </header>
          <div className="flex flex-col mt-10 w-full lg:w-[592px]">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default SecondSection;
