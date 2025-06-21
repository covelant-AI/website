import Image from "next/image";
import Link from "next/link";
import RadialBlurBg from '@/components/UI/RadialBlurBg';

export default function HeroWhy() {
  return (
    <section className="relative w-full flex justify-center items-center overflow-hidden">

      {/* Bottom Blur Effect */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-b from-transparent to-[#F9F9F9] overflow-hidden"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-between max-md:justify-center min-h-screen md:mt-20 ">
        {/* Left Column */}
        <div className="max-w-2xl w-full text-left md:w-3/5 md:text-left text-center max-md:mt-40">
          <h1 className="text-3xl md:text-4xl xl:text-6xl font-Figtree font-normal text-black leading-snug mb-8">
            Scale you performance effortlessly. Cut costs.<br /> Boost performance.
          </h1>
          <Link href="/contact">
            <button className="bg-[#42B6B1] text-[#F9F9F9] font-semibold text-lg px-10 py-3 rounded-2xl shadow-md hover:bg-teal-600 transition duration-300">
              Contact us
            </button>
          </Link>
        </div>

        {/* Right Column - Adjusts Responsively */}
        <div className="relative w-full md:w-[65%] lg:w-[70%] md:absolute md:right-[-20%] max-md:mt-10 max-md:w-[140%] ">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/fir-auth-f8ffb.firebasestorage.app/o/website%2Fimages%2FwhyCovelantHero.png?alt=media&token=0ad43a77-88f4-477d-90af-9abdb97a4cb9"
            alt="Laptop Hero"
            width={1000}
            height={700}
            priority
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}

