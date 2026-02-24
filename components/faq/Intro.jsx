import { useTranslations } from "next-intl";
import RadialBlurBg from "@/components/UI/RadialBlurBg";

export default function Intro() {
  const t = useTranslations("components.faq.intro");

  return (
    <div className="relative">
      <section className="z-1 flex flex-col items-center">
        <div className="mt-[182px] flex flex-col items-center">
          <div className="px-4 py-2 border-2 border-black rounded-full">
            <span className="flex flex-row items-center gap-2 text-[14px] font-semibold leading-120% tracking-[-2%] text-black">
              <img src="./images/faqQuestion.png" />
              FAQ
            </span>
          </div>
          <h1 className="text-[36px] lg:text-[40px] font-bold leading-120% tracking-[-2%] ">
            {t("title")}
          </h1>
          <p className="w-[300px] lg:w-[600px] text-center text-[16px] xl:text-[24px] font-normal leading-[120%] tracking-[-2%] text-[#000000] opacity-80">
            {t("description")}
          </p>
        </div>
        <RadialBlurBg
          background={
            "radial-gradient(50% 50% at 50% 50%, rgba(8, 113, 151, 0.04) 0%, rgba(0, 180, 173, 0.12) 50%, rgba(176, 199, 255, 0.2) 80%, rgba(176, 199, 255, 0) 100%)"
          }
          width={"150vw"}
          height={"150vh"}
          rotate={"-9.35deg"}
          top={"-50vh"}
          left={"-25vw"}
        />
      </section>
    </div>
  );
}
