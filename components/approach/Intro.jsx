import { useTranslations } from 'next-intl';
import Image from 'next/image';
import RadialBlurBg from '@/components/UI/RadialBlurBg';

export default function ApproachIntro() {
    const t = useTranslations('components.approach.intro');
    return (
    <div className="relative">
      <section
        className="z-1"
      >
        <div className="mt-[182px] flex flex-col items-center">
            <h1 className="text-[36px] lg:text-[80px] font-bold leading-120% tracking-[-2%] bg-gradient-to-r from-[#000000] to-[#B3C0DF] text-transparent bg-clip-text">{t('title')}</h1>
            <p className="w-[300px] lg:w-[600px] text-center text-[16px] xl:text-[24px] font-normal leading-[120%] tracking-[-2%] text-[#000000] opacity-80">
                {t('description')}
            </p>
        </div>
        <Image className="mask-b-from-20% mask-b-to-110%" src="/images/macbookMockup1.png" alt="mackbook mockup 1" width={1021} height={662} />
      
        <RadialBlurBg width={"150vw"} height={"150vh"} rotate={"-9.35deg"} top={"-50vh"} left={"-25vw"}/>
      </section>
    </div>
  );
}






