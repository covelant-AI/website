import Image from "next/image";
import { Cards } from "@/data/StaticData";

export default function ScalingCards() {
  const cards = Cards();
  return (
    <section className="relative flex flex-col items-center text-center py-16 px-6 font-Figtree">
      
      <h2 className="text-6xl max-md:text-4xl font-bold text-black mb-12">
        Effortless Scaling with <br /> Voidance Technology
      </h2>
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-5xl justify-center">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`p-6 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 flex flex-col items-center w-full md:w-1/3 ${
              index === 0 ? "bg-[#D6D7FB]" : index === 1 ? "bg-[#D6E1FB]" : "bg-[#DCEFF2]"
            }`}
          >
            <Image
              src={card.image}
              alt={card.title}
              width={300}
              height={300}
              className="mb-4"
            />
            <h3 className="text-xl font-semibold text-black mb-2">{card.title}</h3>
            <p className="text-gray-600 text-md">{card.description}</p>
          </div>
        ))}
      </div>
</section>
  );
}