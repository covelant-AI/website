import React from "react";
import Link from "next/link";

export default function PricingCard({
  title,
  badge,          
  price,          
  period, 
  previousPrice,        
  description,    
  highlight = [], 
}) {
  return (
    <div className="relative bg-white rounded-xl shadow-lg p-6 w-full md:w-1/3 flex flex-col items-start gap-4">
      {/* Badge */}
      {badge && (
        <div
          className={`
            absolute top-6 right-4 text-xs px-3 py-2 rounded-full font-medium shadow-inner
            ${badge === 'Most Popular' ? 'bg-cyan-100 text-cyan-700' : ''}
            ${badge === 'Community Favorite'     ? 'bg-yellow-100 text-yellow-700' : ''}
          `}
        >
          {badge}
        </div>
      )}
      
      {/* Title */}
      <div>
        <h3 className="text-xl text-black font-semibold">{title}</h3>
        <span className="line-through text-lg font-semibold text-gray-500">{previousPrice}</span>
      </div>

      {/* Price */}
      <div className="text-5xl font-bold bg-gradient-to-r from-black to-gray-400 bg-clip-text text-transparent">
        {price}
        {title == "Elite Tier"? 
          <span className="text-base font-medium text-gray-500">{period=="/Mo -30%"? "/Mo -20%": period}</span>
          :
          <span className="text-base font-medium text-gray-500">{price=="Free"? "/Mo": period}</span>
        }
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gray-300 my-6" />

      {/* Features */}
      <ul className="flex flex-col gap-2 text-gray-700 text-sm">
        {description.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <span
              className={
                title === 'Free Tier'
                  ? 'text-gray-500 font-bold'
                  : 'text-blue-500 font-bold'
              }
            >
              ✓
            </span>
            <span className={highlight.includes(item) ? 'text-yellow-600 font-semibold' : ''}>
              {item}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link href="https://app.covelant.com/sign-up" className="mt-auto w-full text-center">
        <button className="w-full p-2 border border-black text-black font-semibold rounded-xl
                           hover:bg-[#42B6B1] hover:border-[#42B6B1] hover:text-white transition">
          Get Started
        </button>
      </Link>
    </div>
  )
}