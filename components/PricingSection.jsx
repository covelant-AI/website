"use client";
import React from "react";
import { useState } from "react";
import PricingCard from "./UI/PricingCard";
import { pricingData } from "@/data/StaticData"; 

export default function PricingSection() {
  const [isWeekly, setIsWeekly] = useState(false)

  return (
    <section className="w-full py-16 px-9 flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-4 text-black">Pricing</h2>

      {/* Toggle */}
      <div className="flex items-center gap-2 mb-10">
        <span className={isWeekly ? 'text-gray-500' : 'text-gray-700'}>
          Monthly
        </span>

      <div
        onClick={() => setIsWeekly(y => !y)}
        className={`
          w-14 h-8 rounded-full flex items-center px-1 cursor-pointer shadow-inner
          transition-colors duration-300 ease-in-out
          ${!isWeekly ? 'bg-green-200' : 'bg-yellow-200'}
        `}
      >
      <div
         className={`
           w-6 h-6 rounded-full transform transition-transform duration-300 ease-in-out
           ${!isWeekly 
             ? 'translate-x-0 bg-green-500'    /* Monthly = green thumb on left */
             : 'translate-x-6 bg-yellow-400'   /* Yearly  = gold thumb on right */
           }
         `}
       />
      </div>

        <span className={isWeekly ? 'text-[#B59F00] font-semibold' : 'text-[#16803D] font-semibold'}>
          Weekly
        </span>
      </div>
          
      {/* Cards */}
      <div className="flex flex-col lg:flex-row gap-4 max-w-8xl max-sm:max-w-[400px] min-h-[550px] ">
        {pricingData.map((plan) => {
          // pick the right price + label
          const price = isWeekly ? plan.yearlyPrice : plan.monthlyPrice
          const period = isWeekly ? '/week' : '/Mo'

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


