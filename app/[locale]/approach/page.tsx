import Intro from "@components/approach/Intro";
import Problems from "@components/approach/Problems";
import InfiniteCarousel from "@components/InfiniteCarousel";
import ScalingCards from "@components/ScalingCards";
import Solution from "@components/approach/Solution";
import ContactSection from "@components/ContactSection";
import { useTranslations } from "next-intl";

export default function Approach() {
    const contact_t = useTranslations('components.approach.contact');
    return (
        <>
        <div className="bg-[#F9F9F9] flex flex-col z-1 gap-y-[80px] lg:gap-y-[160px] px-[10%] overflow-hidden pb-[80px]">
            <Intro />
            <Problems />
            <Solution/>
            <InfiniteCarousel/>
            <ScalingCards/>
            <ContactSection 
                title={contact_t('title')}
                description={contact_t('description')}
                image={"/images/footer-img-1.png"}
            />
        </div>

        {/* TODO: This is for the Footer Bg. Mke it similar to the index page */}
        <div className="absolute h-[300px] w-full bg-[#F9F9F9]"/>
        </>
    )
}