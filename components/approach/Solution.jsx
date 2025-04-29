import { useTranslations } from "next-intl"

export default function Solution() {
    const t = useTranslations('components.approach.solution');

    //TODO: Handle Responsiveness
    return (
        <div>
            <h1 className="text-[80px] font-semibold text-black">{t('title')}</h1>
            <p className="text-xl text-black pb-8 w-[586px]">{t('description')}</p>

            <div className="flex flex-col md:flex-row gap-7">
                {[1,2,3].map((i, _) => {
                    return (
                    <div className="flex-1 flex flex-col bg-gradient-to-b from-[rgba(230,236,251,0.2)] via-[rgba(255,255,255,1)] to-[rgba(255,255,255,1)] shadow-[0px_0px_20px_1px_rgba(0,0,0,0.12)] rounded-2xl p-4 pb-12 text-black"
                        key={`solution-${i}`}>
                            <img className="mb-6" src={`/images/approachSolution${i}.png`} alt={`solution-img-${i}`} />
                            <h2 className="px-6 text-3xl font-bold">{t(`cards.${i}.title`)}</h2>
                            <p className="px-6 text-xl">{t(`cards.${i}.description`)}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}