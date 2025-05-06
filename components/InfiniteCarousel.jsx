"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "../styles/InfiniteCarousel.module.css";
import { Statistics } from "@/data/StaticData";

export default function InfiniteCarousel() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    let animationFrame;

    const scroll = () => {
      if (carousel) {
        carousel.scrollLeft += 1;
        if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
          carousel.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section className={styles.container}>
        {/* Top Blur */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#F9F9F9] to-transparent"></div>

      {/* Background Gradient */}
      <div
        className="absolute w-[975.016px] h-[275.11px] rotate-[10.046deg] flex-shrink-0 rounded-full"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(123, 161, 255, 0.28) 56%, rgba(0, 180, 173, 0.16) 78%, rgba(176, 199, 255, 0.00) 100%)",
          filter: "blur(50px)",
        }}
      ></div>
      <h2 className="text-6xl font-semibold text-black text-left px-96 max-lg:px-2 max-md:text-4xl mb-8 mt-9 border-b border-black pb-4 w-full relative z-10">
        What Covelant Tech<br/> Can Do for You
      </h2>
      <div className={styles.carousel} ref={carouselRef}>
        <div className={styles.carouselContent}>
          {[...Statistics, ...Statistics].map((item, index) => (
            <div key={index} className={styles.card}>
              <div className="flex items-center gap-2">
                <Image src="/icons/arrow.png" alt="Icon" width={34} height={34} />
                <h3 className={styles.percentage}>{item.percentage}</h3>
              </div>
              <p className={styles.label}>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-black mt-4 w-full relative z-10 mb-20"></div>
    </section>
  );
}

