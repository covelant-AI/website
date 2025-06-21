import HeroWhy from "@components/HeroWhy";
import OurMission from "@components/OurMission";
import CenteredTextSection from "@components/CenteredTextSection";
import OurValues from "@components/OurValues"
import ContactSection from "@/components/ContactSection"
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
        <ContactSection 
        title={ContactUsData[1].title}
        description={ContactUsData[1].description}
        image={ContactUsData[1].image}/>
        </section>
        </>
    )
}