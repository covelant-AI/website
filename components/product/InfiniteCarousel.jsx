"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "@styles/InfiniteCarousel.module.css";
import { getStatistics } from "@/data/StaticData";
import { useTranslations } from "next-intl";

export default function InfiniteCarousel() {
  const t = useTranslations("components.product.carousel");
  const items = getStatistics(t); // ← localized labels
  const carouselRef = useRef(null);

  useEffect(() => {
    const el = carouselRef.current;
    let raf;
    const scroll = () => {
      if (el) {
        el.scrollLeft += 0.2;
        if (el.scrollLeft >= el.scrollWidth / 2) el.scrollLeft = 0;
      }
      raf = requestAnimationFrame(scroll);
    };
    raf = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className={styles.container}>
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#F9F9F9] to-transparent"></div>

      <div
        className="absolute w-[975.016px] h-[275.11px] rotate-[10.046deg] flex-shrink-0 rounded-full"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(123, 161, 255, 0.28) 56%, rgba(0, 180, 173, 0.16) 78%, rgba(176, 199, 255, 0.00) 100%)",
          filter: "blur(50px)",
        }}
      />

      <h2 className="text-6xl font-semibold text-black text-left px-96 max-lg:px-2 max-md:text-4xl mb-8 mt-9 border-b border-black pb-4 w-full relative z-10">
        {t("title1")}
        <br />
        {t("title2")}
      </h2>

      <div className={styles.carousel} ref={carouselRef}>
        <div className={styles.carouselContent}>
          {[...items, ...items].map((item, index) => (
            <div key={index} className={styles.card}>
              <div className="flex items-center gap-2">
                <Image
                  src="/icons/arrow.png"
                  alt="Icon"
                  width={34}
                  height={34}
                />
                <h3 className={styles.percentage}>{item.percentage}</h3>
              </div>
              <p className={styles.label}>{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-black mt-4 w-full relative z-10 mb-20" />
    </section>
  );
}
