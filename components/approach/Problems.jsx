import { useTranslations } from 'next-intl';
import RadialBlurBg from '@components/RadialBlurBg';
export default function Problems() {
    const t = useTranslations('components.approach.problems');

    const problems = [
        {
            text: t('c1'),
            icon: '/images/timer.svg',
        },
        {
            text: t('c2'),
            icon: '/images/exclamationMark.svg',
        },
        {
            text: t('c3'),
            icon: '/images/growthIcon.svg',
        },
        {
            text: t('c4'),
            icon: '/images/lock.svg',
        },
        {
            text: t('c5'),
            icon: '/images/money.svg',
        },
        {
            text: t('c6'),
            icon: '/images/settings.svg',
        },
    ]

    return (
        <div className="relative">
            <section>
            <h1 className="text-[24px] md:text-[80px] font-semibold leading-100% tracking-[-2%] text-[#000000]"
            >{t('title')}</h1>

            <div className="relative grid grid-cols-2 xl:grid-cols-3 gap-[25px]">
                {problems.map((problem, index) => {
                    let direction1 = 'xl:bg-linear-to-b'
                    let direction2 = 'bg-linear-to-r'
                    
                    if(index >= 3){
                        direction1 = 'xl:bg-linear-to-t'
                    }
                    if(index % 2 != 0) {
                        direction2 = 'bg-linear-to-l'
                    }

                    const paddings = "px-[12px] pt-[12px] pb-[16px] md:pl-[28px] md:pr-[65px] md:pt-[24px] md:pb-[36px]"

                    let className = [direction1, direction2, paddings, "from-[#27283E] to-[#A53942] flex flex-col gap-[16px] md:gap-[71px] rounded-[12px] md:rounded-[24px] z-10"].join(' ')

                    return (
                        <div
                        key={index}
                        className={className}
                    >
                        <div className="block relative h-[32px] w-[32px] md:h-[64px] md:w-[64px]">
                            <img className="h-[32px] w-[32px] md:h-[64px] md:w-[64px]" src={"/images/hexagonRed.svg"} alt={`icon-${index}`} />
                            <img className="h-[17px] md:h-[34px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" src={problem.icon} alt={`icon-${index}`} />
                        </div>

                        <p className="font-normal text-[14px] md:text-[24px] tracking-[-2%] text-[#FFFFFF]">{problem.text}</p>
                    </div>
                    )
                }
                )}
            </div>

            <RadialBlurBg width={"150vw"} height={"60vh"} rotate={"-9.35deg"} bottom={"0"} left={"-25vw"}/>


            </section>
        </div>
    );
}


// const t = useTranslations('components.approach.intro');
// return (
//     <div className="relative">
//       <section
//         className="flex flex-col items-center justify-center z-1"
//       >
//         <div className="mt-[182px] flex flex-col items-center">
//             <h1 className="text-[80px] font-bold leading-120% tracking-[-2%] bg-gradient-to-r from-[#000000] to-[#B3C0DF] text-transparent bg-clip-text">{t('title')}</h1>
//             <p className="w-[600px] text-[24px] font-normal leading-[120%] tracking-[-2%] text-[#000000] opacity-80">
//                 {t('description')}
//             </p>
//         </div>
//         <Image className="mask-b-from-20% mask-b-to-110%" src="/images/macbookMockup1.png" alt="mackbook mockup 1" width={1021} height={662} />
      
//         <RadialBlurBg width={"150vw"} height={"150vh"} rotate={"-9.35deg"} top={"-50vh"} left={"-25vw"}/>
//       </section>
//     </div>
//   );
// }
