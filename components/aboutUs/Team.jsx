import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/UI/Draggable-card";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { getTeamData } from "@/data/StaticData";

export default function Team() {
  const t = useTranslations("components.aboutUs.team");
  const items = getTeamData(t);
  console.log(items);

  return (
    <section className="my-20">
      <div className="mb-10 text-center">
        <h2 className="text-6xl font-bold text-neutral-800 dark:text-neutral-200">
          {t("heading")}
        </h2>
        <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
          {t("subheading")}
        </p>
      </div>

      <div className="h-px w-[60vw] relative left-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-gray-400 to-transparent" />

      <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
        <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
          {t("quote.text")}
          <br />- {t("quote.author")}
        </p>

        {items.map((item, idx) => (
          <DraggableCardBody key={idx} className={item.className}>
            <img
              src={item.image}
              alt={item.title}
              className="pointer-events-none rounded-md relative z-10 h-80 w-80 object-cover"
            />
            <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
              {item.title}
            </h3>
            <p className="text-center text-neutral-500 dark:text-neutral-400">
              {item.jobTitle}
            </p>
            <Link href={item.Link} target="_blank" rel="noopener noreferrer">
              <button className="mt-2 w-full rounded-lg border-2 border-gray-200 px-4 py-2 text-black hover:bg-[#42B6B1] hover:text-white hover:cursor-pointer">
                {t("cta")}
              </button>
            </Link>
          </DraggableCardBody>
        ))}
      </DraggableCardContainer>

      <div className="h-px w-[60vw] relative left-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
    </section>
  );
}
