import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/UI/Draggable-card";
import Link from "next/link";

export default function Team() {
  const items = [
    {
      title: "Eric Steffen",
      jobTitle: "Product Manager",
      image: "./images/member3.png",
      className: "absolute top-20 right-[35%] rotate-[2deg]",
      Link: "https://www.linkedin.com/in/eric-steffen-18ba79253/",
    },
    {
      title: "Amit Amanna",
      jobTitle: "CTO",
      image: "./images/member5.jpeg",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
      Link: "https://www.linkedin.com/in/amit-amanna-54a151152/",
    },
    {
      title: "Raul Cuza",
      jobTitle: "Account Executive",
      image: "./images/member4.png",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
      Link: "https://www.linkedin.com/in/raul-cuza-ba9b841bb/",
    },
    {
      title: "Nicolò Forti",
      jobTitle: "CDO",
      image: "./images/member2.png",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
      Link: "https://www.linkedin.com/in/nicol%C3%B2-forti-47698019b/",
    },
    {
      title: "Omar Badawy",
      jobTitle: "CEO",
      image:
        "./images/member1.jpeg",
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
      Link: "https://www.linkedin.com/in/osbadawy",
    },
  ];
  return (
    <section className="my-20">
        <div className="mb-10 text-center">
        <h2 className="text-6xl font-bold text-neutral-800 dark:text-neutral-200">
          Meet Our Team
        </h2>
        <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
          The driving force behind Covelant's success
        </p>
      </div>
    
    <div className="h-px w-[60vw] relative left-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-gray-400 to-transparent"/>

    
    <DraggableCardContainer
      className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
      <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
        When you see a good move, look for a better one.<br/>
        - Emanuel Lasker
      </p>
      {items.map((item) => (
        <DraggableCardBody className={item.className}>
          <img
            src={item.image}
            alt={item.title}
            className="pointer-events-none rounded-md relative z-10 h-80 w-80 object-cover" />
                <h3
                  className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
                  {item.title}
                </h3>
                <p className="text-center text-neutral-500 dark:text-neutral-400">
                  {item.jobTitle}
                </p>
            <Link href={item.Link} target="_blank" rel="noopener noreferrer">
            <button className="mt-2 w-full rounded-lg border-2 border-gray-200 px-4 py-2 text-black hover:bg-[#42B6B1] hover:text-white hover:cursor-pointer">
                LinkedIn Profile
            </button>
            </Link>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
    <div className="h-px w-[60vw] relative left-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-gray-400 to-transparent"/>
    </section>
  );
}
