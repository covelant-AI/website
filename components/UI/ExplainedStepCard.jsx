import Image from "next/image";

export default function ExplainedStepCard({
  imageSrc,
  stepNumber,
  title,
  description,
  bulletPoints,
}) {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-20 lg:px-40 py-20 my-20 font-Figtree">
      {/* Left Side - Image Card */}
      <div className="relative w-72 h-96 rounded-xl overflow-hidden shadow-lg">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
        {/* Bubble Number */}
        <div className="absolute top-3 left-3 bg-[#E2F0F4] text-black text-lg font-bold px-8 py-1 rounded-full shadow-md">
          {stepNumber}
        </div>
      </div>

      {/* Right Side - Content */}
      <div className="w-full md:w-1/2">
        <h2 className="text-5xl max-md:text-4xl font-bold text-black">
          {title}
        </h2>
        <p className="text-black mt-4">{description}</p>

        {/* Bullet Points */}
        <div className="mt-6 space-y-4">
          {bulletPoints.map((point, index) => (
            <div key={index} className="flex items-center gap-3">
              {point.icon}
              <div>
                <h4 className="text-black font-semibold">{point.heading}</h4>
                <p className="text-gray-500 text-sm">{point.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
