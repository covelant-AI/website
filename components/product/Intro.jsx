import { useTranslations } from 'next-intl';
import Image from 'next/image';
import RadialBlurBg from '@/components/UI/RadialBlurBg';

export default function ApproachIntro() {
    const t = useTranslations('components.approach.intro');
    return (
    <div className="relative">
      <section
        className="z-1 flex flex-col items-center"
      >
        <div className="mt-[182px] flex flex-col items-center">
            <h1 className="text-[36px] lg:text-[80px] font-bold leading-120% tracking-[-2%] bg-gradient-to-r from-[#000000] to-[#B3C0DF] text-transparent bg-clip-text">{t('title')}</h1>
            <p className="w-[300px] lg:w-[600px] text-center text-[16px] xl:text-[24px] font-normal leading-[120%] tracking-[-2%] text-[#000000] opacity-80">
                {t('description')}
            </p>
        </div>
        <Image className="mask-b-from-20% mask-b-to-110% max-w-[75vw] mt-10" 
        src="https://firebasestorage.googleapis.com/v0/b/fir-auth-f8ffb.firebasestorage.app/o/website%2Fimages%2FSideLine.png?alt=media&token=580a07b6-3bcb-4709-a936-42e449aff4c2" 
        alt="Sideline" width={1021} height={662} />
      
        <RadialBlurBg background={'radial-gradient(50% 50% at 50% 50%, rgba(8, 113, 151, 0.04) 0%, rgba(0, 180, 173, 0.12) 50%, rgba(176, 199, 255, 0.2) 80%, rgba(176, 199, 255, 0) 100%)'} 
        width={"150vw"} height={"150vh"} rotate={"-9.35deg"} top={"-50vh"} left={"-25vw"}/>
      </section>
    </div>
  );
}






