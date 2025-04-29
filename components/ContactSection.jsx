import Image from "next/image";
import Link from "next/link";

export default function ContactSection({title, description, image}) { 
  return (
    <section className="relative mt-60 mb-20 flex flex-col md:flex-row items-center justify-between px-6 md:px-16  max-w-6xl mx-auto">
      {/* Left Side - Text & Button */}
      <div className="w-full md:w-1/2 text-left">
        <h2 className="text-6xl font-bold text-black mb-4">
          {title}
          <span className="flex mt-6 max-lg:px-4">
            {["member4.png", "member3.png", "member2.png", "member1.jpeg"].map((member, index) => (
              <div
                key={index}
                className={`w-14 h-14 border-2 border-[#E7E7E7] rounded-full bg-gray-300 ${index !== 0 ? "-ml-7" : ""}`}
                style={{
                  backgroundImage: `url('/images/${member}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            ))}
          </span>
        </h2>
        <p className="text-gray-700 text-lg mb-6">
          {description}
        </p>
        <Link href="/contact">
          <button className="bg-[#42B6B1] text-white font-semibold text-lg px-6 py-3 rounded-xl shadow-md hover:bg-teal-600 transition duration-300">
            Contact us
          </button>
        </Link>
      </div>

      {/* Right Side - Fragmented Image */}
      <div className="w-full md:w-1/2 flex justify-center items-center relative">
          <div className="w-40 md:w-40 md:h-40 shadow-md">
            {/* Background Gradient */}
          <div
            className="absolute"
            style={{
              width: "1206.207px",
              height: "448.3px",
              transform: "rotate(-22.12deg)",
              flexShrink: 0,
              borderRadius: "1206.207px",
              background: "radial-gradient(50% 50% at 50% 50%, rgba(123, 161, 255, 0.24) 56%, rgba(0, 180, 173, 0.14) 78%, rgba(176, 199, 255, 0.00) 100%)",
              filter: "blur(50px)",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%) rotate(-22.12deg)",
            }}
          ></div>
            <Image src={image} alt="Fragment" width={500} height={500} className="content-cover scale-[2.6]" />
          </div>
      </div>
    </section>
  );
}





