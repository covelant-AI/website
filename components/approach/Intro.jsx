import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function ApproachIntro() {
    const t = useTranslations('components.approach.intro');
    return (
    <div className="relative bg-[#F9F9F9]">
      <section
        className="flex flex-col items-center justify-center z-1"
      >
        <div className="mt-[182px] flex flex-col items-center">
            <h1 className="text-[80px] font-bold leading-120% tracking-[-2%] bg-gradient-to-r from-[#000000] to-[#B3C0DF] text-transparent bg-clip-text">{t('title')}</h1>
            <p className="w-[600px] text-[24px] font-normal leading-[120%] tracking-[-2%] text-[#000000] opacity-80">
                {t('description')}
            </p>
        </div>
        <Image className="mask-b-from-20% mask-b-to-110%" src="/images/macbookMockup1.png" alt="mackbook mockup 1" width={1021} height={662} />
      
        {/* Background gradient */}
        <div 
          className="absolute top-[-50vh] left-[-25vw] w-[150vw] h-[150vh] rotate-[-9.35deg] z-0"
          style={{
            background: 'radial-gradient(50% 50% at 50% 50%, rgba(8, 113, 151, 0.04) 0%, rgba(0, 180, 173, 0.12) 50%, rgba(176, 199, 255, 0.2) 80%, rgba(176, 199, 255, 0) 100%)'
        }}
        />
      </section>
    </div>
  );
}






