"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { getValues } from "@/data/StaticData";

export default function OurValues() {
  const [hoverIndex, setHoverIndex] = useState(null);
  const t = useTranslations("components.aboutUs.ourValues");
  const values = getValues(t); // ← localized titles & paragraphs

  return (
    <section className="w-full flex justify-center items-center my-60 px-6">
      <div className="relative w-full gap-1 max-w-5xl bg-gray-50 rounded-xl shadow-lg p-8 flex flex-col md:flex-row justify-between">
        {/* Big background heading */}
        <h1 className="absolute text-6xl md:text-9xl font-bold uppercase text-black opacity-30 w-full text-center top-1/2 transform pr-20 max-sm:text-4xl -translate-y-1/2">
          {t("heading")}
        </h1>

        {/* Value Cards */}
        {values.map((value, index) => (
          <div
            key={index}
            className={`relative h-60 w-full md:w-1/4 flex flex-col justify-end items-center p-4 rounded-lg transition-all duration-300 bg-white/30 ${
              hoverIndex === index ? "backdrop-blur-xl bg-opacity-70" : "backdrop-blur-[4px] bg-opacity-50"
            }`}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <div className="absolute inset-0 flex justify-center items-center p-4 hover:cursor-default">
              {hoverIndex === index ? (
                <p className="text-md text-black font-normal text-center max-sm:text-sm">{value.paragraph}</p>
              ) : (
                <p className="text-2xl font-normal text-black">{value.title}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
