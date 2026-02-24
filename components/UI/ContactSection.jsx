import Image from "next/image";
import RadialBlurBg from "@/components/UI/RadialBlurBg";

export default function ContactSection({ title, description, image }) {
  return (
    <section className="relative mt-20 mb-20 flex flex-col md:flex-row items-center justify-between px-6 md:px-16  max-w-6xl mx-auto">
      {/* Left Side - Text & Button */}
      <div className="w-full md:w-1/2 text-left ">
        <h2 className="text-6xl font-bold text-black mb-4">
          {title}
          <span className="flex mt-6 max-lg:px-4">
            {["member5.jpeg", "member4.png", "member2.png"].map(
              (member, index) => (
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
              ),
            )}
          </span>
        </h2>
        <p className="text-gray-700 text-lg mb-6">{description}</p>
      </div>

      {/* Right Side - Fragmented Image */}
      <div className="w-auto md:w-1/2 flex justify-center items-center ">
        {/* Background Gradient */}
        <RadialBlurBg
          className=""
          background={
            "radial-gradient(50% 50% at 50% 50%, rgba(123, 161, 255, 0.24) 56%, rgba(0, 180, 173, 0.14) 78%, rgba(176, 199, 255, 0.00) 100%)"
          }
          width={"100%"}
          height={"60vh"}
          rotate={"-22.12deg"}
          top={"-10vh"}
          left={"-5vw"}
        />

        <div className="w-auto">
          <Image
            src={image}
            alt="Fragment"
            width={500}
            height={500}
            className="content-cover scale-[1.0] pt-9"
          />
        </div>
      </div>
    </section>
  );
}
