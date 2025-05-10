import React from "react";
import Link from "next/link";

export default function PricingCard({
  title,
  badge,          
  price,          
  period,         
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
            ${badge === 'Federation'     ? 'bg-yellow-100 text-yellow-700' : ''}
          `}
        >
          {badge}
        </div>
      )}

      {/* Title */}
      <h3 className="text-xl text-black font-semibold">{title}</h3>

      {/* Price */}
      <div className="text-5xl font-bold bg-gradient-to-r from-black to-gray-400 bg-clip-text text-transparent">
        {price}
        <span className="text-base font-medium text-gray-500">{period}</span>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gray-300 my-6" />

      {/* Features */}
      <ul className="flex flex-col gap-2 text-gray-700 text-sm">
        {description.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <span
              className={
                title === 'Free Plan'
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
      <Link href="/contact" className="mt-auto w-full text-center">
        <button className="w-full p-2 border border-black text-black font-semibold rounded-xl
                           hover:bg-[#42B6B1] hover:border-[#42B6B1] hover:text-white transition">
          Get Started
        </button>
      </Link>
    </div>
  )
}