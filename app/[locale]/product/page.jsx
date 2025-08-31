import Intro from "@components/product/Intro";
import Problems from "@components/product/Problems";
import InfiniteCarousel from "@components/product/InfiniteCarousel";
import ScalingCards from "@components/product/ScalingCards";
import Solution from "@components/product/Solution";
import ContactSection from "@components/UI/ContactSection";
import { useTranslations } from "next-intl";
import '../../global.css';

export default function Approach() {
    const contact_t = useTranslations('components.product.contact');
    return (
        <>
        <div className="flex flex-col z-1 gap-y-[80px] lg:gap-y-[160px] px-[10%] overflow-hidden">
            <Intro />
            <Problems />
            <Solution/>
            <InfiniteCarousel/>
            <ScalingCards/>
            <ContactSection 
                title={contact_t('title')}
                description={contact_t('description')}
                image={"https://firebasestorage.googleapis.com/v0/b/fir-auth-f8ffb.firebasestorage.app/o/website%2Fimages%2Ffooter-img-1.png?alt=media&token=b7acb823-a415-4c8c-b842-e7616c245d8b"}
            />
        </div>
        </>
    )
}