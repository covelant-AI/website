import React from 'react';
import { useTranslations } from 'next-intl';

export default function BentoBoxGrid() {
  const t = useTranslations('components.bentoBox');

  return (
      <section className="w-full bg-[#F9F9F9] max-w-4xl mx-auto py-10 flex justify-center relative overflow-hidden">
        <div className="flex flex-col items-center max-md:mx-6">
          {/* Title */}
          <h2 className="text-9xl max-lg:text-8xl font-Figtree font-semibold tracking-tight text-black
           max-sm:text-6xl text-center mb-6 pt-2">
            {t('title')}
          </h2>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 font-Figtree text-black ">
            {/* Left Column - Video Placeholder */}
            <div
              className="flex mb-[155px] max-lg:mb-[10px] text-xl font-semibold col-span-1"
              style={{
                width: "auto",
                height: "687px",
                background: "linear-gradient(212deg, #E3E5ED 10.28%, #E1E7FA 67.75%)",
                backgroundRepeat: "no-repeat",
                borderRadius: "18px",
                backgroundBlendMode: "multiply",
                position: "relative", // Make the parent div position relative for absolute child positioning
                overflow: "hidden" // Ensure video doesn't overflow the container
              }}
            >
              {/* Video Element */}
              <video
                autoPlay
                muted
                loop
                className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none select-none" 
                style={{
                   pointerEvents: "none",
                   userSelect: "none",
                   borderRadius: "18px" 
                }}
              >
                <source src="/video/tennisField.mp4" type="video/mp4" />
                {/* Add additional source types if needed */}
              </video>
              
            </div>


            {/* Right Column - Stacked Benefits */}
            <div className="flex flex-col space-y-4  max-lg:-mt-[0px] items-center">
              {/* ✅ Direct Integration - With Background Image ✅ */}
              <div
                className="p-4 rounded-lg flex flex-col items-center justify-center text-center "
                style={{
                  width: "auto",
                  height: "269px",
                  background: "linear-gradient(212deg, #FFF 10.28%, #E2E6F5 61.84%), url('https://firebasestorage.googleapis.com/v0/b/fir-auth-f8ffb.firebasestorage.app/o/website%2Fimages%2Fb1.png?alt=media&token=867ff400-c9ee-462b-b21b-e543267d3182')",
                  backgroundRepeat: "no-repeat",
                  borderRadius: "18px",
                  backgroundBlendMode: "multiply"
                }}
              >
                <h3 className="font-semibold text-4xl max-sm:text-xl">{t('benefits.directIntegration.title')}</h3>
                <p className="text-xl max-sm:text-lg max-sm:text-center">
                  {t('benefits.directIntegration.description')}
                </p>
              </div>

              <div
                className="p-4 rounded-lg flex flex-col items-center justify-center text-center "
                style={{
                  width: "auto",
                  height: "269px",
                  background: "linear-gradient(212deg, #E3E5ED 10.28%, #E1E7FA 67.75%), url('https://firebasestorage.googleapis.com/v0/b/fir-auth-f8ffb.firebasestorage.app/o/website%2Fimages%2Fb2.png?alt=media&token=4966c85c-caeb-43b0-a504-88d04f87d507')",
                  backgroundRepeat: "no-repeat",
                  borderRadius: "18px",
                  backgroundBlendMode: "multiply"
                }}
              >
                <h3 className="font-semibold text-4xl max-sm:text-xl">{t('benefits.skipRewatching.title')}</h3>
                <p className="text-xl max-sm:text-lg max-sm:text-center">
                  {t('benefits.skipRewatching.description')}
                </p>
              </div>

              <div
                className="p-4 rounded-lg flex flex-col items-center justify-center text-center "
                style={{
                  width: "auto",
                  height: "269px",
                  background: "linear-gradient(225deg, #E2E7FA 40.3%, rgba(148, 196, 220, 0.40) 87.1%)",
                  borderRadius: "18px",
                }}
              >
                <h3 className="font-semibold text-4xl max-sm:text-xl">{t('benefits.decreaseCosts.title')}</h3>
                <p className="text-xl max-sm:text-lg max-sm:text-center">
                  {t('benefits.decreaseCosts.description')}
                </p>
              </div>
            </div>

            {/* Left Column - Lower Boxes - Now properly aligned to Video Box */}
            <div className="flex flex-col space-y-4 -mt-[155px] max-lg:-mt-[0px] items-center">
              <div
                className="p-4 rounded-lg flex flex-col items-center justify-center text-center "
                style={{
                  width: "auto",
                  height: "269px",
                  background: "linear-gradient(202deg, rgba(125, 204, 222, 0.40) -29.9%, #B1BADA 53.53%), #D3D3D3",
                  borderRadius: "18px",
                }}
              >
                <h3 className="font-semibold text-4xl max-sm:text-xl max-sm:px-4 text-white">{t('benefits.trainWithData.title')}</h3>
                <p className="text-xl max-sm:text-lg max-sm:text-center max-sm:px-2 text-white">
                  {t('benefits.trainWithData.description')}
                </p>
              </div>

              <div
                className="p-4 rounded-lg flex flex-col items-center justify-center text-center "
                style={{
                  width: "auto",
                  height: "269px",
                  background: "linear-gradient(191deg, #C1CBEA 7.15%, #595980 119.3%), url('https://firebasestorage.googleapis.com/v0/b/fir-auth-f8ffb.firebasestorage.app/o/website%2Fimages%2Fb3.png?alt=media&token=8eab7b42-f435-470a-afe5-26de30fbfb2f')",
                  borderRadius: "18px",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "bottom center",
                  backgroundBlendMode: "overlay"
                }}
              >
                <h3 className="font-semibold text-4xl max-sm:text-xl max-sm:px-4 text-white">{t('benefits.increasePerformance.title')}</h3>
                <p className="text-xl max-sm:text-lg max-sm:text-center max-sm:px-2 text-white">
                  {t('benefits.increasePerformance.description')}
                </p>
              </div>
              
              <div
                className="p-4 rounded-lg flex flex-col items-center justify-center text-center "
                style={{
                  width: "auto",
                  height: "269px",
                  background: "radial-gradient(199.24% 188.81% at 12.92% -47.15%, #B2BEED 0%, #595980 66.56%), url('https://firebasestorage.googleapis.com/v0/b/fir-auth-f8ffb.firebasestorage.app/o/website%2Fimages%2Fb4.png?alt=media&token=c1d7f2b6-0d46-43a4-bad8-60725b1cf0b2')",
                  borderRadius: "18px",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "bottom center",
                  backgroundBlendMode: "overlay"
                }}
              >
                <h3 className="font-semibold text-4xl max-sm:text-xl max-sm:px-4 text-white">{t('benefits.outplayCompetition.title')}</h3>
                <p className="text-xl max-sm:text-lg max-sm:text-center max-sm:px-2 text-white">
                  {t('benefits.outplayCompetition.description')}
                </p>
              </div>
            </div>

            {/* Right Column - Customizable Box */}
            <div
               className="flex mb-[155px] max-lg:mb-[10px] text-xl font-semibold col-span-1  mt-8"
               style={{
                 width: "auto",
                 height: "650px",
                 background: "linear-gradient(212deg, #E3E5ED 10.28%, #E1E7FA 67.75%)",
                 backgroundRepeat: "no-repeat",
                 borderRadius: "18px",
                 backgroundBlendMode: "multiply",
                 position: "relative", // Make the parent div position relative for absolute child positioning
                 overflow: "hidden" // Ensure video doesn't overflow the container
               }}>       

               {/* Video Element */}
               <video
                 autoPlay
                 muted
                 loop
                 className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none select-none" 
                 style={{
                   pointerEvents: "none",
                   userSelect: "none",
                   borderRadius: "18px", // Matches the border radius of the div
                 }}
               >
                 <source src="video/footbalField.mp4" type="video/mp4" />
                 {/* Add additional source types if needed */}
               </video>
              
            </div>

          </div>
        </div>
      </section>
  );
}
