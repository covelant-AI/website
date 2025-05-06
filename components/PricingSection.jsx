"use client";
import React from "react";
import PricingCard from "./UI/PricingCard";
import { pricingData } from "@/data/StaticData"; 

export default function PricingSection() {
  return (
    <section className="w-full py-16 px-6 flex flex-col items-center max-md:mb-140">
      <h2 className="text-4xl font-bold mb-4 text-black">Pricing</h2>

      {/* Toggle */}
      <div className="flex items-center gap-2 mb-10">
        <span className="text-gray-500">Monthly</span>
        <div className="w-14 h-8 bg-green-200 rounded-full flex items-center px-1 shadow-inner">
          <div className="w-6 h-6 bg-[#42B6B1] rounded-full"></div>
        </div>
        <span className="text-[#42B6B1] font-semibold">Yearly</span>
      </div>

      {/* Cards */}
      <div className="flex flex-col md:flex-row max-md:w-auto gap-6 w-auto max-w-6xl h-120">
        {pricingData.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
    </section>
  );
}

