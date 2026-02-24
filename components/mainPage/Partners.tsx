import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Partners() {
  const t = useTranslations("components.mainPage.community");

  return (
    <section className="flex flex-col items-center justify-center gap-10 px-4 md:px-20 lg:px-40 md:mb-40 font-Figtree overflow-hidden py-10">
      {/* Title */}
      <div className="flex flex-row justify-center">
        <h2 className="text-4xl font-semibold">{t("partners")}</h2>
      </div>

      {/* Partner logos */}
      <div className="flex w-full flex-row flex-wrap items-center justify-center gap-8 md:gap-12">
        <Link
          href="https://www.tc-wilmersdorf.de/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 w-[40%] sm:w-[30%] md:w-[20%] lg:w-[15%] min-w-[120px] flex items-center justify-center hover:opacity-80 transition-opacity"
        >
          <Image
            src="/images/tcw-logo.png"
            alt="TC Wilmersdorf"
            width={300}
            height={200}
            className="w-full h-auto object-contain"
          />
        </Link>
        <Link
          href="https://www.berlinersportclub.de/tennis"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 w-[40%] sm:w-[30%] md:w-[20%] lg:w-[15%] min-w-[120px] flex items-center justify-center hover:opacity-80 transition-opacity"
        >
          <Image
            src="/images/bsc-logo.png"
            alt="Berliner Sport-Club Tennis"
            width={300}
            height={200}
            className="w-full h-auto object-contain"
          />
        </Link>
      </div>
    </section>
  );
}
