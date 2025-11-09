"use client";
import { useState } from "react";
import PricingCard from "../UI/PricingCard";
import { getPricingData } from "@/data/StaticData"; 
import RadialBlurBg from "@/components/UI/RadialBlurBg";
import { useTranslations } from 'next-intl';


export default function PricingSection() {
  const [isWeekly, setIsWeekly] = useState(false)
  const t = useTranslations('components.mainPage.pricing');
  const plans = getPricingData(t); 

  return (
    <section className="relative w-full py-16 px-9 flex flex-col items-center mb-10">
      <RadialBlurBg className="" background={'radial-gradient(50% 50% at 50% 50%, rgba(123, 161, 255, 0.24) 56%, rgba(0, 180, 173, 0.14) 78%, rgba(176, 199, 255, 0.00) 100%)'} 
              width={"80%"} height={"40vh"} rotate={"-32.12deg"} top={"30vh"} left={"10vw"}/>

      <h2 className="text-4xl font-bold mb-4 text-black">{t("pricing")}</h2>

      {/* Toggle */}
      <div className="flex items-center gap-2 mb-10">
        <span className={isWeekly ? 'text-gray-500' : 'text-gray-700'}>
          {t("monthly")}
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
          {t("weekly")}
        </span>
      </div>
          
      {/* Cards */}
      <div className="flex flex-col lg:flex-row gap-4 max-w-8xl max-sm:max-w-[400px] min-h-[550px] ">
        {plans.map((plan) => {
          // pick the right price + label
          const price = isWeekly ? plan.yearlyPrice : plan.monthlyPrice
          const period = isWeekly ? t('/week') : t('/mo') 

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


