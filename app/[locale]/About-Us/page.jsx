import HeroWhy from "@components/aboutUs/HeroWhy";
import OurMission from "@components/aboutUs/OurMission";
import CenteredTextSection from "@components/aboutUs/CenteredTextSection";
import OurValues from "@components/aboutUs/OurValues"
import ContactSection from "@/components/UI/ContactSection"
import TimelineScroll from "@components/aboutUs/TimelineScroll";
import Team from "@components/aboutUs/Team";
import { ContactUsData } from "../../../data/StaticData";
import '../../global.css';

export default function WhyCovelant() {
    return(
        <>
        <section className="overflow-hidden">
        <HeroWhy/>
        <OurMission/>
        <CenteredTextSection/>
        <OurValues/>
        <TimelineScroll/>
        <Team/>
        <ContactSection 
        title={ContactUsData[1].title}
        description={ContactUsData[1].description}
        image={ContactUsData[1].image}/>
        </section>
        </>
    )
}