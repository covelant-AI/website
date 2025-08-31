"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { AuroraBackground } from "@components/UI/AuroraBackground";
import Link from "next/link";

export default function HeroMain() {
  return (
    <>
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="">
        <section className="font-Figtree flex flex-col items-center justify-center overflow-hidden relative z-20">
          <div className=" mx-20 my-60 text-left max-sm:mx-5 max-sm:my-40">
            <h1 className="text-black font-semibold text-5xl mt-3 bg-gradient-to-r from-black to-gray-400 bg-clip-text text-transparent">
              The world's first AI sports analytics tool</h1>
            <p className="text-black font-normal text-xl mt-8">Elevate your game, trusted by coaches and players to boost performance, outsmart rivals, and win more.</p>
            <Link href="/contact">
            <button className="mt-10 text-xl px-10 max-sm:px-8 max-sm:text-2xl py-2 bg-[#42B6B1] 
              text-white font-normal font-Figtree rounded-xl shadow-md hover:bg-teal-600">
              Contact us
            </button>
            </Link>
          </div>
        </section>
      </motion.div>
    </AuroraBackground>
      <div
        className={cn(
            "absolute inset-0",
            "[background-size:100px_100px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] z-1",
        )}/>
    </>
  );
}


