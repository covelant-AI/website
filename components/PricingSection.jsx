"use client";
import React from "react";
import { useState } from "react";
import PricingCard from "./UI/PricingCard";
import { pricingData } from "@/data/StaticData"; 

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section className="w-full py-16 px-9 flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-4 text-black">Pricing</h2>

      {/* Toggle */}
      <div className="flex items-center gap-2 mb-10">
        <span className={isYearly ? 'text-gray-500' : 'text-gray-700'}>
          Monthly
        </span>

      <div
        onClick={() => setIsYearly(y => !y)}
        className={`
          w-14 h-8 rounded-full flex items-center px-1 cursor-pointer shadow-inner
          transition-colors duration-300 ease-in-out
          ${!isYearly ? 'bg-green-200' : 'bg-yellow-200'}
        `}
      >
      <div
         className={`
           w-6 h-6 rounded-full transform transition-transform duration-300 ease-in-out
           ${!isYearly 
             ? 'translate-x-0 bg-green-500'    /* Monthly = green thumb on left */
             : 'translate-x-6 bg-yellow-400'   /* Yearly  = gold thumb on right */
           }
         `}
       />
      </div>

        <span className={isYearly ? 'text-[#B59F00] font-semibold' : 'text-[#16803D] font-semibold'}>
          Yearly
        </span>
      </div>
          
      {/* Cards */}
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl max-sm:max-w-[400px] min-h-[500px] overflow-x-auto">
        {pricingData.map((plan) => {
          // pick the right price + label
          const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice
          const period = isYearly ? '/Mo -30%' : '/Mo'

          return (
            <PricingCard
              key={plan.title}
              title={plan.title}
              badge={plan.badge}
              description={plan.description}
              highlight={plan.highlight}
              price={price}
              previousPrice={plan.previousPrice}
              period={period}
            />
          )
        })}
      </div>
    </section>
  )
}


