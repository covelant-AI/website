import Intro from "@components/approach/Intro";
import Problems from "@components/approach/Problems";
import InfiniteCarousel from "@components/InfiniteCarousel";
import ScalingCards from "@components/ScalingCards";
export default function Approach() {
    return (
        <div className="bg-[#F9F9F9] flex flex-col items-center justify-center z-1 gap-y-[80px] lg:gap-y-[160px] px-[10%] overflow-x-hidden">
            <Intro />
            <Problems />
            <InfiniteCarousel/>
            <ScalingCards/>
        </div>   
    )
}