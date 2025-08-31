import HeroWhy from "@components/aboutUs/HeroWhy";
import OurMission from "@components/aboutUs/OurMission";
import CenteredTextSection from "@components/aboutUs/CenteredTextSection";
import OurValues from "@components/aboutUs/OurValues"
import ContactSection from "@/components/UI/ContactSection"
import TimelineScroll from "@components/aboutUs/TimelineScroll";
import Team from "@components/aboutUs/Team";
import { useTranslations } from "next-intl";
import '../../global.css';

export default function WhyCovelant() {
    const contact_t = useTranslations('components.aboutUs.contact');
    return(
        <section className="overflow-hidden">
        <HeroWhy/>
        <OurMission/>
        <CenteredTextSection/>
        <OurValues/>
        <TimelineScroll/>
        <Team/>
        <ContactSection 
        title={contact_t('title')}
        description={contact_t('description')}
        image={"https://firebasestorage.googleapis.com/v0/b/fir-auth-f8ffb.firebasestorage.app/o/website%2Fimages%2Ffooter-img-2.png?alt=media&token=f824e483-abb4-4e34-ad26-5cfa8bc4ba00"}/>
        </section>
    )
}