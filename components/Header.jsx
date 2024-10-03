/**
 * This code was generated by Builder.io.
 */
import Image from "next/image";
import React from "react";
import { ContactUs } from "./component/component";

function Header() {
  return (
    <header className="sticky top-0 bg-white  z-20  gap-6 items-center text-black bg-white max-md:max-w-full">
      <div className="flex w-11/12 mx-auto overflow-hiddenflex-wrap gap-6 items-center text-black bg-white max-md:max-w-full">
        <div className="flex-1 shrink gap-6 self-stretch my-auto text-3xl font-bold leading-tight basis-8 min-w-[240px] max-md:max-w-full">
          <Image
            src="/icon.png"
            alt="Halaqr"
            width={80}
            height={100}
            priority
          />
        </div>
        <ContactUs />
      </div>
    </header>
  );
}

export default Header;
