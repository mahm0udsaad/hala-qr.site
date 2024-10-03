import { Tv } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#F4F8FB] h-60 flex flex-col  items-center justify-center mt-8 rounded-t-[100%]">
      <div className="flex z-0 flex-col items-center text-black">
        <Image src="/icon.png" alt="Halaqr" width={80} height={100} priority />
      </div>
      <p className="mt-4 text-base">Build your invitation in minutes</p>
      <div className="flex z-0 flex-col justify-center mt-6 text-base font-bold">
        <div className="flex gap-6 justify-center items-center">
          <button className="gap-2.5 px-6 py-4 text-white bg-blue-500 rounded-full">
            Get the app
          </button>
          <button className="flex gap-2.5 items-center px-6 py-4 text-black bg-white border border-solid border-stone-300 rounded-full">
            <Tv />
            Watch Intro
          </button>
        </div>
      </div>
    </footer>
  );
}
