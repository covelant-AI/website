import Link from "next/link";
import { useTranslations } from "next-intl";


export default function HeroMain() {
  const t = useTranslations('components.heroMain');
  return (
    <div className="relative">
      <section
        className="font-Figtree flex flex-col items-center justify-left h-screen 
                   bg-[url('/images/heroBackground.png')] bg-cover bg-center bg-no-repeat after:absolute after:bottom-0 after:left-0 after:w-full after:h-1/3
                   after:bg-gradient-to-b after:from-transparent after:to-[#F9F9F9] overflow-hidden">
        <div className=" mx-20 my-60 text-left">
          <h1 className="text-black font-semibold text-4xl mt-3 bg-gradient-to-r from-black to-gray-400 bg-clip-text text-transparent">{t("title")}</h1>
          <p className="text-black font-normal text-xl mt-8">{t("subtitle")}</p>
          <Link href="/contact">
          <button className="mt-10 text-xl px-10 max-sm:px-8 max-sm:text-2xl py-2 bg-[#42B6B1] 
            text-white font-normal font-Figtree rounded-2xl shadow-md hover:bg-teal-600">
            Contact us
          </button>
          </Link>
        </div>
      </section>
    </div>
  );
}


