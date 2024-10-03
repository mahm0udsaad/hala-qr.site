import { ArrowDown } from "lucide-react";
import Image from "next/image";
import React from "react";

function HeroSection() {
  return (
    <section className="w-full flex flex-col md:flex-row justify-between items-center md:items-start px-4 md:px-10">
      <div className="flex flex-col justify-center h-screen md:h-auto overflow-hidden relative z-10 items-start lg:pt-10">
        <div className="flex z-0 flex-col h-full justify-center items-start">
          <div className="flex flex-col justify-center w-full">
            <h1 className="text-4xl md:text-6xl font-bold text-black leading-[49px] md:leading-[80px]">
              Create Stunning <br /> Invitations with Hala qr
            </h1>
            <p className="mt-4 text-base md:text-lg leading-tight text-neutral-700">
              Design, Customize, and Send Beautiful Invitations for Any Occasion
            </p>
            <div className="relative flex flex-col justify-center self-start mt-10 text-base font-bold">
              <div className="flex gap-6 justify-center items-center">
                <button className="gap-2.5 px-6 py-4 text-white bg-blue-500 rounded-full">
                  Get the app
                </button>
                <button className="flex gap-2.5 items-center px-6 py-4 text-black bg-white border border-solid border-stone-300 rounded-full">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5379e84ff701275bd0ed8826f50926b681af5f6f4234d7bcc3a0ff09652f7328?placeholderIfAbsent=true&apiKey=00dd475291cf4f1da724421e257168ca"
                    className="object-contain w-4 aspect-square"
                    alt="Watch Intro"
                  />
                  <span>Watch Intro</span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-2 items-center mt-16 md:mt-36 text-sm text-neutral-700">
            <ArrowDown size={18} />
            <p>Scroll down to explore features</p>
          </div>
        </div>
        <div className="absolute z-0 w-8 h-8 rounded-full left-[10rem] top-[80px] md:left-[30rem] bg-gradient-to-b from-[#BCC7FA] to-[#B0A0F0]" />
        <div className="absolute z-0 w-5 h-5 rounded-full bottom-[8rem] md:bottom-[8rem] left-[2rem] bg-gradient-to-br from-[#EEC7EE] to-[#F9BED0]" />
      </div>

      <div className="flex relative z-10 items-center md:items-start mt-8 md:mt-0">
        <Image
          src={"/first-mobile-example.png"}
          alt="Halaqr"
          width={300}
          height={100}
          priority
          className="object-contain"
        />
        <div className="absolute z-0 w-16 h-16 rounded-full -right-12 top-[80px] bg-gradient-to-b from-[#BCC7FA] to-[#B0A0F0]" />
        <div className="absolute z-0 w-16 h-16 rounded-full bottom-[8rem] md:bottom-[18rem] -left-[4rem] bg-gradient-to-br from-[#FA5958] to-[#FDB653]" />
      </div>
    </section>
  );
}

export default HeroSection;
