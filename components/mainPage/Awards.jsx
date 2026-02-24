import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Awards() {
  const t = useTranslations("components.mainPage.community");

  return (
    <section className="flex flex-col items-center justify-center gap-2 px-4 md:px-20 lg:px-40 font-Figtree overflow-hidden py-10">
      <div className="flex flex-row justify-center py-10">
        <h2 className="text-4xl font-semibold">{t("Awards")}</h2>
      </div>

      <section className="flex flex-col items-center justify-center gap-10 px-4 md:px-10 md:mb-20 font-Figtree overflow-hidden">
        {/* Main row */}
        <div className="flex w-full flex-col md:flex-row items-start justify-between md:gap-12">
          {/* --- Left Award --- */}
          <div className="w-full md:w-full px-2 flex flex-col items-center justify-start">
            <div className="w-full">
              <Image
                src="/awards/award1.png"
                alt="MIT Global AI Hackathon Winners"
                width={1200}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>

            {/* Logos */}
            <div className="mt-4 flex w-full flex-row flex-wrap items-center justify-center gap-4 sm:gap-6">
              {[
                "/awards/openAi.png",
                "/awards/akamai.png",
                "/awards/MITAiClub.png",
                "/awards/N.png",
                "/awards/scaleAi.png",
                "/awards/mitSloan.png",
              ].map((src, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 w-[22%] sm:w-[18%] md:w-[14%] lg:w-[12%] min-w-[70px] flex items-center justify-center"
                >
                  <Image
                    src={src}
                    alt={`Logo ${idx}`}
                    width={120}
                    height={120}
                    className="w-full h-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* --- Right Award --- */}
          <div className="w-full md:w-full px-2 flex flex-col items-center justify-start mt-10 md:mt-0">
            <div className="w-full">
              <Image
                src="/awards/award2.png"
                alt="BlockJam Hackathon Winners"
                width={1200}
                height={600}
                className="w-full h-auto"
              />
            </div>

            {/* Logos */}
            <div className="mt-4 flex w-full flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 opacity-80">
              {[
                "/awards/thetaEuroCon.png",
                "/awards/thetaEdgeCloud.png",
                "/awards/aws.png",
                "/awards/happyFriday.png",
                "/awards/openTheta.png",
                "/awards/theta.png",
                "/awards/arksite.png",
              ].map((src, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 w-[22%] sm:w-[18%] md:w-[14%] lg:w-[12%] min-w-[70px] flex items-center justify-center"
                >
                  <Image
                    src={src}
                    alt={`Logo ${idx}`}
                    width={100}
                    height={100}
                    className="w-full h-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
