import React from "react";
import RadialBlurBg from '@/components/UI/RadialBlurBg';

export default function CenteredTextSection() {
  return (
    <div className="relative">
    <section className="w-full flex flex-col justify-center items-center gap-9 text-center my-10 max-sm:my-2 ">
      {/* Background Gradient */}
      <RadialBlurBg className="" background={'radial-gradient(50% 50% at 50% 50%,rgba(123,161,255,0.14) 56%,rgba(0,180,173,0.08) 78%, rgba(176,199,255,0) 100%)'} 
              width={"100%"} height={"60vh"} rotate={"3.196deg"} top={"-10vh"} left={"-5vw"}/>
      
      {/* Foreground Mission Text */}
      <div className=" z-10 max-w-2xl text-gray-800 md:top-60 ">
        <p className="max-sm:text-lg text-2xl font-semibold">
          At Covelant, we aim to increase every athletes performance for a
          fraction of the price. We provide you with a tool that
          boosts team efficiency, saves time, and keeps you at the top of your game.
        </p>
      </div>

      {/* Foreground Text */}
      <div className="relative z-10 max-w-3xl text-black mt-10">
        <p className="text-2xl max-sm:text-lg font-semibold leading-relaxed">
          Covelant understands the challenges coaches face, such as endless re-watching of games, 
          man power limitation, and the uncertainty of performance. Our technology enchances 
          enhances your decision making, scaling them across multiple players, higher performance, 
          and lower costs. The result? Faster execution, effortless scaling, and maximum impact.
        </p>
      </div>
    </section>
    </div>
  );
}
