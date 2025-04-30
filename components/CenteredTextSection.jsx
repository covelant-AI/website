import React from "react";

export default function CenteredTextSection() {
  return (
    <section className="relative w-full flex justify-center items-center min-h-[50vh] px-6 text-center my-40 max-sm:my-96">
      {/* Background Gradient */}
      <div
        className="absolute w-[2238.448px] h-[775.11px] rotate-[3.196deg] flex-shrink-0 rounded-[2238.448px] 
        bg-[radial-gradient(50%_50%_at_50%_50%,rgba(123,161,255,0.14)_56%,rgba(0,180,173,0.08)_78%,rgba(176,199,255,0)_100%)] 
        blur-[50px] -z-10"
      ></div>

      {/* Foreground Text */}
      <div className="relative z-10 max-w-3xl text-black">
        <p className="text-2xl max-sm:text-lg font-semibold leading-relaxed">
          Covelant understands the challenges coaches face, such as endless re-watching of games, 
          man power limitation, and the uncertainty of performance. Voidance Technology 
          enhances your decision making, scaling them across multiple players, higher performance, 
          and lower costs. The result? Faster execution, effortless scaling, and maximum impact.
        </p>
      </div>
    </section>
  );
}
