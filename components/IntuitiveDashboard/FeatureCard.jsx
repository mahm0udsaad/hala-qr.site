/**
 * This code was generated by Builder.io.
 */
import React from "react";

function FeatureCard({ icon, title, description, expanded }) {
  return (
    <div
      className={`flex overflow-hidden flex-col px-10 py-6 ${
        expanded ? "bg-orange-100 border border-amber-500" : "bg-neutral-100"
      } rounded-3xl ${
        expanded ? "" : "mt-4"
      } w-full max-w-[592px] max-md:px-5 max-md:max-w-full`}
    >
      <div className="flex gap-6 items-center self-start text-lg font-medium leading-tight">
        <img
          loading="lazy"
          src={icon}
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
        />
        <div className="self-stretch my-auto">{title}</div>
      </div>
      {expanded && (
        <p className="pl-12 mt-4 w-full text-sm leading-4 max-md:pl-5 max-md:max-w-full">
          {description}
        </p>
      )}
    </div>
  );
}

export default FeatureCard;
