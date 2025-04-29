import React from 'react';
import { useTranslations } from 'next-intl';

export default function BentoBoxGrid() {
  const t = useTranslations('bentoBox');

  return (
    <div>
      <section className="w-full bg-[#F9F9F9] max-w-5xl mx-auto py-10 flex justify-center relative overflow-hidden">
        <div className="flex flex-col items-center">
          {/* Title */}
          <h2 className="text-9xl max-lg:text-8xl font-Figtree font-semibold tracking-tight text-black
           max-sm:text-6xl text-center mb-6 pt-2">
            {t('title')}
          </h2>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 font-Figtree text-black">
            {/* Left Column - Video Placeholder */}
            <div
              className="flex mb-[155px] max-lg:mb-[30px] text-xl font-semibold col-span-1 text-center items-center justify-center max-sm:justify-start
              max-sm:text-left max-sm:px-10 text-5xl max-sm:text-lg"
              style={{
                width: "445px",
                height: "687px",
                background: "linear-gradient(212deg, #E3E5ED 10.28%, #E1E7FA 67.75%)",
                backgroundRepeat: "no-repeat",
                borderRadius: "18px",
                backgroundBlendMode: "multiply"
              }}
            >
              {t('leftBox.text').split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </div>

            {/* Right Column - Stacked Benefits */}
            <div className="flex flex-col space-y-4">
              {/* ✅ Direct Integration - With Background Image ✅ */}
              <div
                className="p-4 rounded-lg flex flex-col items-center justify-center max-sm:items-start text-center"
                style={{
                  width: "445px",
                  height: "269px",
                  background: "linear-gradient(212deg, #FFF 10.28%, #E2E6F5 61.84%), url('/images/b1.png')",
                  backgroundRepeat: "no-repeat",
                  borderRadius: "18px",
                  backgroundBlendMode: "multiply"
                }}
              >
                <h3 className="font-semibold text-4xl max-sm:text-xl">{t('benefits.directIntegration.title')}</h3>
                <p className="text-xl max-sm:text-lg max-sm:text-left max-sm:pr-40">
                  {t('benefits.directIntegration.description')}
                </p>
              </div>

              <div
                className="p-4 rounded-lg flex flex-col items-center justify-center max-sm:items-start text-center"
                style={{
                  width: "445px",
                  height: "269px",
                  background: "linear-gradient(212deg, #E3E5ED 10.28%, #E1E7FA 67.75%), url('/images/b2.png')",
                  backgroundRepeat: "no-repeat",
                  borderRadius: "18px",
                  backgroundBlendMode: "multiply"
                }}
              >
                <h3 className="font-semibold text-4xl max-sm:text-xl">{t('benefits.skipRewatching.title')}</h3>
                <p className="text-xl max-sm:text-lg max-sm:text-left max-sm:pr-40">
                  {t('benefits.skipRewatching.description')}
                </p>
              </div>

              <div
                className="p-4 rounded-lg flex flex-col items-center justify-center max-sm:items-start text-center"
                style={{
                  width: "445px",
                  height: "269px",
                  background: "linear-gradient(225deg, #E2E7FA 40.3%, rgba(148, 196, 220, 0.40) 87.1%)",
                  borderRadius: "18px",
                }}
              >
                <h3 className="font-semibold text-4xl max-sm:text-xl">{t('benefits.decreaseCosts.title')}</h3>
                <p className="text-xl max-sm:text-lg max-sm:text-left max-sm:pr-40">
                  {t('benefits.decreaseCosts.description')}
                </p>
              </div>
            </div>

            {/* Left Column - Lower Boxes - Now properly aligned to Video Box */}
            <div className="flex flex-col space-y-4 -mt-[155px] max-lg:-mt-[0px] items-center">
              <div
                className="p-4 rounded-lg flex flex-col items-center justify-center max-sm:items-start text-center"
                style={{
                  width: "445px",
                  height: "240px",
                  background: "linear-gradient(202deg, rgba(125, 204, 222, 0.40) -29.9%, #B1BADA 53.53%), #D3D3D3",
                  borderRadius: "18px",
                }}
              >
                <h3 className="font-semibold text-4xl max-sm:text-xl max-sm:px-20 text-white">{t('benefits.trainWithData.title')}</h3>
                <p className="text-xl max-sm:text-lg max-sm:text-left max-sm:px-20 text-white">
                  {t('benefits.trainWithData.description')}
                </p>
              </div>

              <div
                className="p-4 rounded-lg flex flex-col items-center justify-center max-sm:items-start text-center"
                style={{
                  width: "445px",
                  height: "269px",
                  background: "linear-gradient(191deg, #C1CBEA 7.15%, #595980 119.3%), url('/images/b3.png')",
                  borderRadius: "18px",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "bottom center",
                  backgroundBlendMode: "overlay"
                }}
              >
                <h3 className="font-semibold text-4xl max-sm:text-xl max-sm:px-20 text-white">{t('benefits.increasePerformance.title')}</h3>
                <p className="text-xl max-sm:text-lg max-sm:text-left max-sm:px-20 text-white">
                  {t('benefits.increasePerformance.description')}
                </p>
              </div>
              
              <div
                className="p-4 rounded-lg flex flex-col items-center justify-center max-sm:items-start text-center"
                style={{
                  width: "445px",
                  height: "269px",
                  background: "radial-gradient(199.24% 188.81% at 12.92% -47.15%, #B2BEED 0%, #595980 66.56%), url('/images/b4.png')",
                  borderRadius: "18px",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "bottom center",
                  backgroundBlendMode: "overlay"
                }}
              >
                <h3 className="font-semibold text-4xl max-sm:text-xl max-sm:px-20 text-white">{t('benefits.outplayCompetition.title')}</h3>
                <p className="text-xl max-sm:text-lg max-sm:text-left max-sm:px-20 text-white">
                  {t('benefits.outplayCompetition.description')}
                </p>
              </div>
            </div>

            {/* Right Column - Customizable Box */}
            <div
              className="p-4 rounded-lg flex text-5xl items-center justify-center font-semibold text-lg text-center  max-sm:justify-center
              max-sm:text-left max-sm:px-10 text-5xl max-sm:text-lg"
              style={{
                width: "445px",
                height: "650px",
                background: "linear-gradient(212deg, #E3E5ED 10.28%, #E1E7FA 67.75%)",
                backgroundRepeat: "no-repeat",
                borderRadius: "18px",
                backgroundBlendMode: "multiply"
              }}
            >
              {t('rightBox.text').split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
