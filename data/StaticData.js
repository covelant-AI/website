export const getCards = (t) => [
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/fir-auth-f8ffb.firebasestorage.app/o/website%2Fimages%2Fsphere.png?alt=media&token=672360d9-0587-489e-a8d9-4686ca288524",
    title: t("cards.0.title"),
    description: t("cards.0.description"),
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/fir-auth-f8ffb.firebasestorage.app/o/website%2Fimages%2Fcoin.png?alt=media&token=1bcabb2a-82a4-4ab3-bec9-66939aa38ee4",
    title: t("cards.1.title"),
    description: t("cards.1.description"),
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/fir-auth-f8ffb.firebasestorage.app/o/website%2Fimages%2Fven.png?alt=media&token=c9b2f6fc-990d-4c19-88a9-c7eafb013c75",
    title: t("cards.2.title"),
    description: t("cards.2.description"),
  },
];

export const Statistics = [
  { percentage: "40%", label: "Preformance" },
  { percentage: "90%", label: "Time Saved" },
  { percentage: "30%", label: "Analysis Accuracy" },
  { percentage: "20%", label: "Passing Accuracy" },
  { percentage: "30%", label: "Shot Accuracy" },
  { percentage: "8%", label: "Sprint speed" },
  { percentage: "15%", label: "Touches/minute" },
  { percentage: "20%", label: "Dribbles Rate" },
  { percentage: "25%", label: "Defensive Actions" },
  { percentage: "15%", label: "Raly Win Rate" },
  { percentage: "10%", label: "Possession %" },
  { percentage: "20%", label: "Passing Networks" },
  { percentage: "25%", label: "Attacking Zones" },
  { percentage: "25%", label: "Defensive Zones" },
  { percentage: "15%", label: "Expected Goals" },
  { percentage: "20%", label: "Expected Assists" },
  { percentage: "30%", label: "Pressure Applied" },
  { percentage: "20%", label: "Offensive Efficiency" },
  { percentage: "15%", label: "Transition Speed" },
  { percentage: "25%", label: "Player Positioning" },
  { percentage: "40%", label: "Player Movement" },
  { percentage: "15%", label: "Spacing" },
  { percentage: "40%", label: "Player Fatigue Levels" },
  { percentage: "20%", label: "Recovery Time" },
];

export const getStatistics = (t) =>
  Statistics.map((s, i) => ({
    percentage: s.percentage,
    label: t(`stats.${i}.label`), // localized label
  }));

export const getValues = (t) => [
  {
    title: t("values.0.title"),
    paragraph: t("values.0.paragraph"),
  },
  {
    title: t("values.1.title"),
    paragraph: t("values.1.paragraph"),
  },
  {
    title: t("values.2.title"),
    paragraph: t("values.2.paragraph"),
  },
  {
    title: t("values.3.title"),
    paragraph: t("values.3.paragraph"),
  },
];

export const getPricingData = (t) => [
  {
    title: t("free.title"),
    monthlyPrice: t("free.monthlyPrice"), // e.g., "Free"
    yearlyPrice: t("free.yearlyPrice"), // e.g., "Free"
    period: "",
    description: [
      t("free.desc.0"),
      t("free.desc.1"),
      t("free.desc.2"),
      t("free.desc.3"),
    ],
  },
  {
    title: t("athlete.title"),
    monthlyPrice: t("athlete.monthlyPrice"), // "12.99€"
    previousPrice: "",
    yearlyPrice: t("athlete.yearlyPrice"), // "3.75€"
    period: "/w",
    badge: "",
    description: [
      t("athlete.desc.0"),
      t("athlete.desc.1"),
      t("athlete.desc.2"),
      t("athlete.desc.3"),
      t("athlete.desc.4"),
      t("athlete.desc.5"),
      t("athlete.desc.6"),
    ],
  },
  {
    title: t("federation.title"),
    monthlyPrice: t("federation.monthlyPrice"), // "Federation+"
    previousPrice: "",
    yearlyPrice: t("federation.yearlyPrice"), // "Federation+"
    period: "",
    badge: "",
    description: [
      t("federation.desc.0"),
      t("federation.desc.1"),
      t("federation.desc.2"),
      t("federation.desc.3"),
      t("federation.desc.4"),
      t("federation.desc.5"),
      t("federation.desc.6"),
    ],
  },
];

export const adStepsData = (t) => {
  return [
    {
      imageSrc:
        "https://firebasestorage.googleapis.com/v0/b/fir-auth-f8ffb.firebasestorage.app/o/website%2Fimages%2Fupload.jpg?alt=media&token=5a1bcb52-0a7d-4f2e-83a8-e2c3d1ee0916",
      stepNumber: "1",
      title: t("step1.title"),
      description: t("step1.description"),
      bulletPoints: [
        {
          heading: t("step1.bullets.0.heading"),
          text: t("step1.bullets.0.text"),
        },
        {
          heading: t("step1.bullets.1.heading"),
          text: t("step1.bullets.1.text"),
        },
        {
          heading: t("step1.bullets.2.heading"),
          text: t("step1.bullets.2.text"),
        },
      ],
    },
    {
      imageSrc:
        "https://firebasestorage.googleapis.com/v0/b/fir-auth-f8ffb.firebasestorage.app/o/website%2Fimages%2FAI.jpg?alt=media&token=07dcb22a-dd6d-485e-83b5-b0ff275d5931",
      stepNumber: "2",
      title: t("step2.title"),
      description: t("step2.description"),
      bulletPoints: [
        {
          heading: t("step2.bullets.0.heading"),
          text: t("step2.bullets.0.text"),
        },
        {
          heading: t("step2.bullets.1.heading"),
          text: t("step2.bullets.1.text"),
        },
        {
          heading: t("step2.bullets.2.heading"),
          text: t("step2.bullets.2.text"),
        },
      ],
    },
    {
      imageSrc:
        "https://firebasestorage.googleapis.com/v0/b/fir-auth-f8ffb.firebasestorage.app/o/website%2Fimages%2FtennisArial.jpg?alt=media&token=36c68600-c392-42af-898b-9e89f6b6c8d7",
      stepNumber: "3",
      title: t("step3.title"),
      description: t("step3.description"),
      bulletPoints: [
        {
          heading: t("step3.bullets.0.heading"),
          text: t("step3.bullets.0.text"),
        },
        {
          heading: t("step3.bullets.1.heading"),
          text: t("step3.bullets.1.text"),
        },
        {
          heading: t("step3.bullets.2.heading"),
          text: t("step3.bullets.2.text"),
        },
      ],
    },
  ];
};

export const getTimelineData = (t) => [
  {
    title: t("items.0.title"),
    content: (
      <div>
        <p className="mb-8 text-sm font-semibold text-neutral-800 md:text-lg">
          {t("items.0.paragraph")}
        </p>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/fir-auth-f8ffb.firebasestorage.app/o/website%2Fimages%2Fabout%20us%2F20240729_160048.jpg?alt=media&token=01bdfa1d-eeaf-4fbe-a831-6850e00c1d2f"
            alt="startup template"
            width={500}
            height={500}
            className="h-60 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-80"
          />
        </div>
      </div>
    ),
  },
  {
    title: t("items.1.title"),
    content: (
      <div>
        <p className="mb-8 text-sm font-semibold text-neutral-800 md:text-lg">
          {t("items.1.paragraph")}
        </p>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/fir-auth-f8ffb.firebasestorage.app/o/website%2Fimages%2Fabout%20us%2F20250711_191016.jpg?alt=media&token=8542c9b8-191f-4a54-a036-2d0be7a38f3c"
            alt="hero template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/fir-auth-f8ffb.firebasestorage.app/o/website%2Fimages%2Fabout%20us%2F20250705_183350.jpg?alt=media&token=6d7da1ae-3ade-40be-b7c7-2edb80949a14"
            alt="feature template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/fir-auth-f8ffb.firebasestorage.app/o/website%2Fimages%2Fabout%20us%2F20250503_183605.jpg?alt=media&token=b94e41a6-fb96-4b3b-8a03-3af2adb11397"
            alt="bento template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/fir-auth-f8ffb.firebasestorage.app/o/website%2Fimages%2Fabout%20us%2F20250709_212311.jpg?alt=media&token=7aaabf05-278c-46d3-8b05-6f94137f4c60"
            alt="cards template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
        </div>
      </div>
    ),
  },
  {
    title: t("items.2.title"),
    content: (
      <div>
        <p className="mb-4 text-xs font-semibold text-neutral-800 md:text-lg">
          {t("items.2.paragraph")}
        </p>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/fir-auth-f8ffb.firebasestorage.app/o/website%2Fimages%2Fabout%20us%2FScreenshot%202025-08-31%20143600.png?alt=media&token=ba9d5b2f-4f3f-4e4c-9074-0dfdee174679"
            alt="feature template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/fir-auth-f8ffb.firebasestorage.app/o/website%2Fimages%2Fabout%20us%2FLinkedin%208%20(2).jpg?alt=media&token=3e698aed-961f-456b-b3ce-4726e098d2ba"
            alt="hero template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/fir-auth-f8ffb.firebasestorage.app/o/website%2Fimages%2Fabout%20us%2Fproduct.png?alt=media&token=374cd765-8bef-4d72-b691-a1ed5914e7dc"
            alt="bento template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/fir-auth-f8ffb.firebasestorage.app/o/website%2Fimages%2Fabout%20us%2Fisometric.png?alt=media&token=7ea06456-3575-48c7-9206-615779075ad9"
            alt="bento template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
        </div>
      </div>
    ),
  },
];

export const teamData = [
  {
    title: "Amit Amanna",
    jobTitle: "CTO",
    image: "/images/member5.jpeg",
    className: "absolute top-5 left-[40%] rotate-[8deg]",
    Link: "https://www.linkedin.com/in/amit-amanna-54a151152/",
  },
  {
    title: "Raul Cuza",
    jobTitle: "Account Executive",
    image: "/images/member4.png",
    className: "absolute top-32 left-[55%] rotate-[10deg]",
    Link: "https://www.linkedin.com/in/raul-cuza-ba9b841bb/",
  },
  {
    title: "Nicolò Forti",
    jobTitle: "CDO",
    image: "/images/member2.png",
    className: "absolute top-40 left-[25%] rotate-[-7deg]",
    Link: "https://www.linkedin.com/in/nicol%C3%B2-forti-47698019b/",
  },
];

export const getTeamData = (t) =>
  teamData.map((m, i) => ({
    ...m,
    // If you want names fixed, keep `title: m.title`. If you want them translatable, use the next line:
    title: t.optional ? t(`members.${i}.name`) : m.title, // (or just `t(\`members.${i}.name\`)` if you will translate names)
    jobTitle: t(`members.${i}.role`), // e.g., "Chief Technology Officer" in other languages
  }));
