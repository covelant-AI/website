import Intro from "@components/approach/Intro";
import Problems from "@components/approach/Problems";

export default function Approach() {
    return (
        <div className="bg-[#F9F9F9] flex flex-col items-center justify-center z-1 gap-y-[160px] px-[10%]">
            <Intro />
            <Problems />
        </div>   
    )
}