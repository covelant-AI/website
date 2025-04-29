import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
export default function HeroMain() {
  const t = useTranslations('components.heroMain');
  return (
    <div className="relative">
      <section
        className="font-Figtree flex flex-col items-center justify-center h-screen 
                   bg-[url('/images/heroBackground.png')] bg-cover bg-center bg-no-repeat after:absolute after:bottom-0 after:left-0 after:w-full after:h-1/3
                   after:bg-gradient-to-b after:from-transparent after:to-[#F9F9F9] overflow-hidden md:py-96 max-sm:px-8"
      >
        <div className="max-w-4xl mx-auto my-80 text-center">
          <Image src="/images/logo.png" alt="Covelant logo" width={579} height={122} />
          <p className="text-black text-3xl mt-3 max-sm:px-8">{t("subtitle")}</p>
          <Link href="/contact">
        <button className="mt-20 text-3xl px-20 max-sm:px-8 max-sm:text-2xl py-5 bg-[#42B6B1] text-white font-semibold font-Figtree rounded-2xl shadow-md hover:bg-teal-600">
          Contact us
        </button>
      </Link>
        </div>

      </section>
    </div>
  );
}


