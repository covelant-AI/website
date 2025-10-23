"use client";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import heroCourt from "../../public/icons/heroCourt.svg";
import RadialBlurBg from "@/components/UI/RadialBlurBg";

export default function HeroMain() {
  const t = useTranslations("components.heroMain");

  return (
    <section className="font-Figtree mx-auto max-w-6xl px-4 py-24 text-center overflow-hidden relative">
      <RadialBlurBg className="" background={'radial-gradient(50% 50% at 50% 50%, rgba(123, 161, 255, 0.24) 56%, rgba(0, 180, 173, 0.14) 78%, rgba(176, 199, 255, 0.00) 100%)'} 
              width={"100%"} height={"40vh"} rotate={"-12.12deg"} top={"55vh"} left={"0vw"}/>
      <h1 className="font-semibold tracking-tight text-4xl sm:text-5xl md:text-6xl leading-tight bg-gradient-to-b from-black to-gray-500 bg-clip-text text-transparent mt-20 pb-1">
        {t("title")}
      </h1>
      <p className="mt-5 text-gray-700 text-sm sm:text-xl sm:px-20 px-4">
        {t("subtitle")}
      </p>

      {/* <Link href="https://app.covelant.com/sign-up" className="inline-block">
        <button className="mt-8 rounded-xl bg-[#42B6B1] px-8 py-3 text-white text-lg shadow-md hover:bg-teal-600">
          {t("buttonText")}
        </button>
      </Link> */}

      <div className="mt-16 flex justify-center">
        <Image
          src={heroCourt}
          alt="Tennis court illustration"
          priority
          className="w-full max-w-4xl h-auto scale-120"
        />
      </div>
    </section>
  );
}
