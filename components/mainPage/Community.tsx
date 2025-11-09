import Image from "next/image";
import { useTranslations } from 'next-intl';

export default function Community() {
  const t = useTranslations('components.mainPage.community');

  return (
    <section className="flex flex-col items-center justify-center gap-10 px-4 md:px-20 lg:px-40 md:mb-40 font-Figtree overflow-hidden py-10 mt-10">
      {/* Title */}
      <div className="w-full">
        <h2 className="text-4xl font-semibold text-center">{t("community")}</h2>
      </div>

      {/* Community Logos */}
      <div className="flex w-full flex-row flex-wrap items-center justify-center gap-8 md:gap-12">
        <div className="flex-shrink-0 w-[45%] sm:w-[30%] md:w-[22%] lg:w-[18%] min-w-[120px] flex items-center justify-center">
          <Image src="/community/communityMember1.png" alt="Community Member 1" width={300} height={200} className="w-full h-auto object-contain" />
        </div>
        <div className="flex-shrink-0 w-[45%] sm:w-[30%] md:w-[22%] lg:w-[18%] min-w-[120px] flex items-center justify-center">
          <Image src="/community/communityMember2.png" alt="Community Member 2" width={300} height={200} className="w-full h-auto object-contain" />
        </div>
      </div>
    </section>
  );
}

