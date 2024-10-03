"use client";
import React, { useState, useEffect } from "react";
import TemplateCard from "./TemplateCard";
import { ArrowLeft, ArrowRight } from "lucide-react";

const templateData = [
  {
    title: "Wedding Invitations",
    description: "Cream Green Simple Wedding Invitation",
    iconSrc:
      "https://marketplace.canva.com/EAF5QptOGfM/2/0/1143w/canva-WoFLXrCHcbY.jpg",
  },
  {
    title: "Birthday Invitations",
    description: "Black and Gold Elegant Metallic Botanicals",
    iconSrc:
      "https://marketplace.canva.com/EAFbFT5w3oQ/1/0/286w/canva--tpYyzJFNBc.jpg",
  },
  {
    title: "Wedding Invitation",
    description: "Cream Green Simple Illustrated Wedding Invitation",
    iconSrc:
      "https://marketplace.canva.com/EAF5o4uDCM4/1/0/286w/canva-kl6owQ45DJc.jpg",
  },
  {
    title: "Wedding Invitation",
    description: "Cream Green Simple Illustrated Wedding Invitation",
    iconSrc:
      "https://marketplace.canva.com/EAFuVSmbOZk/2/0/286w/canva-RlD5JS4PtOk.jpg",
  },
];

function DiscoverTemplates() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1);
      } else {
        setCardsPerView(3);
      }
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      return nextIndex >= templateData.length ? 0 : nextIndex;
    });
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex - 1;
      return nextIndex < 0 ? templateData.length - 1 : nextIndex;
    });
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <main className="flex overflow-hidden gap-2.5 items-start py-24">
      <section className="flex overflow-hidden flex-col flex-1 shrink items-start py-24 px-12 w-full rounded-3xl basis-0 bg-slate-100">
        <div className="flex flex-col items-start max-w-full font-bold text-black w-[1240px] max-w-full">
          <h1 className="gap-2.5 text-5xl leading-tight max-md:max-w-full max-md:text-4xl">
            Discover Templates
          </h1>
          <p className="gap-2.5 font-normal self-stretch mt-4 w-full text-lg leading-6 max-md:max-w-full">
            Choose from a range of professionally designed templates for various
            occasions. Easily personalize these templates with your own text,
            images, and colors to perfectly match your event.
          </p>
          <button className="gap-2.5 px-6 py-4 mt-4 text-base text-white bg-blue-500 rounded-full max-md:px-5">
            Explore more
          </button>
        </div>
        <div className="flex mt-10 min-h-[60px] w-[60px]" aria-hidden="true" />
        <div className="flex flex-col mt-10 w-full">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / cardsPerView)
                }%)`,
                width: `${(templateData.length / cardsPerView) * 100}%`,
              }}
            >
              {templateData.map((template, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-2"
                  style={{ width: `${100 / templateData.length}%` }}
                >
                  <TemplateCard
                    title={template.title}
                    description={template.description}
                    iconSrc={template.iconSrc}
                  />
                </div>
              ))}
            </div>
          </div>
          <nav className="flex gap-6 items-start self-start mt-10">
            <button
              onClick={prevSlide}
              disabled={isAnimating}
              aria-label="Previous template"
              className="p-2 hover:bg-gray-100 rounded-full transition-colors disabled:opacity-50"
            >
              <ArrowLeft color={currentIndex === 0 ? "lightBlue" : "blue"} />
            </button>
            <button
              onClick={nextSlide}
              disabled={isAnimating}
              aria-label="Next template"
              className="p-2 hover:bg-gray-100 rounded-full transition-colors disabled:opacity-50"
            >
              <ArrowRight color="blue" />
            </button>
          </nav>
        </div>
      </section>
    </main>
  );
}

export default DiscoverTemplates;
