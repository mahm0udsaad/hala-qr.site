import Image from "next/image";
import React from "react";
import { MobilePreview } from "../mobile-preview";
function GetStartedSection() {
  return (
    <section className="mt-4 text-center max-md:max-w-full">
      <h1 className="text-xl font-semibold leading-snug text-green-600">
        GET STARTED
      </h1>
      <h2 className="text-5xl font-bold leading-tight text-black max-md:text-4xl">
        Design Perfection, Delivered
      </h2>
      <p className="mt-4 text-base text-zinc-600">
        Create stunning invitations and send them effortlessly with just a few
        taps.
      </p>
      <div className="relative w-full flex justify-center items-center h-full max-md:mt-10">
        <MobilePreview
          backgroundImage={"/circle.svg"}
          imageUrl={"/second-mobile-example.png"}
        />
        <div className="absolute z-0 w-6 h-6 rounded-full left-[2rem] top-[193px] bg-gradient-to-b from-[#E29669] to-[#E2B48E]" />
        <div className="absolute z-0 w-6 h-6 rounded-full right-[5rem] top-12 bg-gradient-to-b from-[#DAA5DE] to-[#AC8BF0]" />
        <div className="absolute z-0 w-10 h-10 rounded-full bottom-0 left-0 bg-gradient-to-b from-[#DAA5DE] to-[#AC8BF0]" />
      </div>
    </section>
  );
}

export default GetStartedSection;
