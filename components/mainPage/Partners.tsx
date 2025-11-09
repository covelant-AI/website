import Image from "next/image";
import { useTranslations } from 'next-intl';

export default function Partners() {
  const t = useTranslations('components.mainPage.community');

  return (
    <section className="flex flex-col items-center justify-center gap-10 px-4 md:px-20 lg:px-40 md:mb-40 font-Figtree overflow-hidden py-10">
      {/* Title */}
      <div className="flex flex-row justify-center">
        <h2 className="text-4xl font-semibold">{t("partners")}</h2>
      </div>

      {/* Partner logos */}
      <div className="flex w-full flex-row flex-wrap items-center justify-center gap-8 md:gap-12">
        {/* Partner 1 */}
        <div className="flex-shrink-0 w-[40%] sm:w-[30%] md:w-[20%] lg:w-[15%] min-w-[120px] flex items-center justify-center">
          <Image
            src="/partners/partner1.png"
            alt="Partner 1"
            width={300}
            height={200}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Partner 2 */}
        <div className="flex-shrink-0 w-[40%] sm:w-[30%] md:w-[20%] lg:w-[15%] min-w-[120px] flex items-center justify-center">
          <Image
            src="/partners/partner2.png"
            alt="Partner 2"
            width={300}
            height={200}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Partner 3 */}
        <div className="flex-shrink-0 flex items-center justify-center">
          <Image
            src="/partners/partner3.png"
            alt="Partner 3"
            width={75}
            height={75}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
