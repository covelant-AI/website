import Intro from "@components/faq/Intro";
import FaqList from "@components/faq/FaqList";
import Contact from "@components/faq/Contact";
import '../../global.css';

export default function Faq() {
    return (
        <div className="flex flex-col z-1 gap-y-[80px] lg:gap-y-[160px] px-[10%] overflow-hidden pb-[80px]">
            <Intro />
            <FaqList /> 
            <Contact/>
        </div>
    )
}