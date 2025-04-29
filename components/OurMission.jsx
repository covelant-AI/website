import React from "react";

export default function OurMission() {
  return (
    <section className="relative w-full flex justify-center items-center min-h-[50vh] px-6 text-center">
      {/* Background Grid Matrix with Frosted Effect */}
      <div className="absolute inset-0 grid grid-cols-10 grid-rows-5 gap-2 opacity-60">
        {Array.from({ length: 50 }, (_, index) => (
          <div
            key={index}
            className={`w-full h-full bg-white/10 backdrop-blur-md ${
              Math.random() > 0.5 ? "opacity-30" : "opacity-10"
            }`}
          />
        ))}
      </div>

      {/* Large Text Behind Grid */}
      <h1 className="absolute text-[9rem] max-md:text-[5rem] font-bold uppercase text-teal-400 opacity-20">
        OUR MISSION
      </h1>

      {/* Background Image Positioned Correctly */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-[250px] bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/images/backgroundFrosted.png')" }}
      ></div>

      {/* Foreground Mission Text */}
      <div className="relative z-10 max-w-2xl text-gray-800 md:top-60 max-md:top-60 ">
        <p className="max-sm:text-lg md:text-2xl font-semibold">
          At Covelant, we aim to increase your campaign’s performance for a
          fraction of the price. We provide influencer agencies with a tool that
          boosts team efficiency, saves time, and defeats advertisement
          avoidance.
        </p>
      </div>
    </section>
  );
}
