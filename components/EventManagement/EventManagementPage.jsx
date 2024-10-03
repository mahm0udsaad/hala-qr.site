import React from "react";
import FeatureCard from "./FeatureCard";
import { features } from "./featuresData";
import { MobilePreview } from "../mobile-preview";

function EventManagementPage() {
  return (
    <main className="flex flex-col lg:flex-row-reverse relative gap-8 items-start py-24 bg-white max-md:px-5">
      <div className="relative w-full lg:w-1/2 flex justify-center items-center h-full max-md:mt-10">
        <MobilePreview
          backgroundImage={"/circle-2.svg"}
          imageUrl={"/third-mobile-example.png"}
        />
        <div className="absolute z-0 w-6 h-6 rounded-full left-[2rem] top-[193px] bg-gradient-to-b from-[#E29669] to-[#E2B48E]" />
        <div className="absolute z-0 w-6 h-6 rounded-full right-[5rem] top-12 bg-gradient-to-b from-[#DAA5DE] to-[#AC8BF0]" />
        <div className="absolute z-0 w-10 h-10 rounded-full bottom-0 left-0 bg-gradient-to-b from-[#DAA5DE] to-[#AC8BF0]" />
      </div>
      <section className="flex overflow-hidden z-0 items-start text-black w-full lg:w-[740px] max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink items-start w-full max-md:max-w-full">
          <header className="flex flex-col max-md:max-w-full">
            <h1 className="text-5xl font-bold leading-tight max-md:text-4xl">
              Effortless Event Management
            </h1>
            <p className="mt-4 text-xl leading-snug max-md:max-w-full">
              Streamline your planning with our intuitive tools.
            </p>
          </header>
          <div className="flex flex-col mt-10 max-w-full">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                isHighlighted={index === 0}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default EventManagementPage;
