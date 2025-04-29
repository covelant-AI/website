"use client";
import React, { useState } from "react";

const values = [
  {
    title: "Transparency",
    color: "bg-purple-200",
    paragraph:
      "We believe honesty and openness are essential to building trust. We empower users by giving them control over their digital presence, ensuring that every interaction on our platform is clear and straightforward.",
  },
  {
    title: "Innovation",
    color: "bg-blue-200",
    paragraph:
      "At Covelant, we push boundaries with cutting-edge technology to revolutionize advertising. By creating personalized experiences, we aim to make every campaign both impactful and forward-thinking.",
  },
  {
    title: "Integrity",
    color: "bg-blue-100",
    paragraph:
      "Ethical practices are at the heart of our operations. We prioritize respecting user privacy and fostering a trustworthy environment, in order for all parties involved to feel secured and valued.",
  },
  {
    title: "Effectiveness",
    color: "bg-teal-100",
    paragraph:
      "Our focus is on delivering results that matter. Covelant is designed to maximize engagement, ensuring that every campaign achieves measurable success and resonates with its intended audience.",
  },
];

export default function OurValues() {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <section className="w-full flex justify-center items-center mb-60 py-12 px-6">
      {/* Outer Container */}
      <div className="relative w-full gap-1 max-w-5xl bg-gray-50 rounded-xl shadow-lg p-8 flex flex-col md:flex-row justify-between">
        {/* "OUR VALUES" Behind Cards */}
        <h1 className="absolute text-6xl md:text-9xl font-bold uppercase text-black opacity-30 w-full text-center top-1/2 transform pr-20 max-sm:text-4xl -translate-y-1/2">
          OUR VALUES
        </h1>

        {/* Value Cards */}
        {values.map((value, index) => (
          <div
            key={index}
            className={`relative h-60 w-full md:w-1/4 flex flex-col justify-end items-center p-4 rounded-lg transition-all duration-300 
            ${value.color} ${
              hoverIndex === index
                ? "backdrop-blur-xl bg-opacity-70"
                : "backdrop-blur-[4px] bg-opacity-50"
            }`}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            {/* Hover Effect: Centered Paragraph */}
            <div className="absolute inset-0 flex justify-center items-center p-4">
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
