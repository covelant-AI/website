import { useTranslations } from 'next-intl';

export default function WhatAreWe() {
  const t = useTranslations('components.whatAreWe');

  return (
    <>
      <section 
        className="font-Figtree flex flex-col items-left justify-center px-10 xl:px-60  md:mt-6"
      >
        <h3 className="text-[#42B6B1] text-3xl md:text-5xl max-sm:text-center font-light mb-9">
          {t('title')}
        </h3>

        {/* Main Text */}
        <p className="text-black md:text-3xl xl:text-5xl max-sm:text-2xl max-sm:text-center text-3xl font-semibold mt-4">
          {t('mainText')}
        </p>

        {/* Highlighted Section */}
        <p className="text-black md:text-3xl xl:text-5xl text-3xl max-sm:text-2xl max-sm:text-center font-semibold mt-10 md:mt-10">
          {t('highlightedText.before')}{" "}
          <span className="text-[#42B6B1] font-bold">{t('highlightedText.highlight')}</span>
          {t('highlightedText.after')}
        </p>   
      </section>
    </>
  )
}
