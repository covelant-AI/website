import { useTranslations } from "next-intl"

export default function Solution() {
    const t = useTranslations('components.product.solution');

    return (
        <div>
            <h1 className="text-[24px] md:text-[80px] font-semibold leading-100% tracking-[-2%] text-[#000000]">{t('title')}</h1>
            <p className="text-[16px] md:text-[24px] text-black pb-16 w-[586px]">{t('description')}</p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
                {[1,2,3].map((i, _) => {
                    return (
                    <div className="w-full h-full max-w-[500px] flex flex-col bg-gradient-to-b from-[rgba(230,236,251,0.2)] via-[rgba(255,255,255,1)] to-[rgba(255,255,255,1)] shadow-[0px_0px_20px_1px_rgba(0,0,0,0.12)] rounded-2xl p-2 lg:p-4 text-black mx-auto lg:mx-0"
                        key={`solution-${i}`}>
                            <div className="flex flex-col h-full">
                                <img className="max-h-[50vh] object-contain mb-6" src={`/images/approachSolution${i}.png`} alt={`solution-img-${i}`} />
                                <h2 className="px-6 text-[24px] lg:text-3xl font-bold">{t(`cards.${i}.title`)}</h2>
                                <p className="px-6 py-4 text-[16px] lg:text-xl">{t(`cards.${i}.description`)}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}