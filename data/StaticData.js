export const Cards = () => { 
    return [{
      image: "https://firebasestorage.googleapis.com/v0/b/fir-auth-f8ffb.firebasestorage.app/o/website%2Fimages%2Fsphere.png?alt=media&token=672360d9-0587-489e-a8d9-4686ca288524",
      title: "Save Time & Effort",
      description:
        "Unlock unparalleled efficiency with AI-powered analysis, automating time-consuming tasks so coaches can focus on what truly matters – winning.",
    },
    {
      image: "https://firebasestorage.googleapis.com/v0/b/fir-auth-f8ffb.firebasestorage.app/o/website%2Fimages%2Fcoin.png?alt=media&token=1bcabb2a-82a4-4ab3-bec9-66939aa38ee4",
      title: "Lower Costs, Higher Returns",
      description:
        "Maximize your investment with AI solutions that cut down on operational costs while delivering game-changing insights to drive superior team performance and better ROI.",
    },
    {
      image: "https://firebasestorage.googleapis.com/v0/b/fir-auth-f8ffb.firebasestorage.app/o/website%2Fimages%2Fven.png?alt=media&token=c9b2f6fc-990d-4c19-88a9-c7eafb013c75",
      title: "Optimized for Winning",
      description:
        "Supercharge your game plan with AI-driven strategies that pinpoint high-impact opportunities, helping your team score more and win bigger.",
    },]
}

export const Statistics = [
  { percentage: "40%", label: "Preformance"},
  { percentage: "90%", label: "Time Saved"},
  { percentage: "30%", label: "Analysis Accuracy"},
  { percentage: "20%", label: "Passing Accuracy"},
  { percentage: "30%", label: "Shot Accuracy" },
  { percentage: "8%", label: "Sprint speed" },
  { percentage: "15%", label: "Touches/minute"},
  { percentage: "20%", label: "Dribbles Rate"},
  { percentage: "25%", label: "Defensive Actions"},
  { percentage: "15%", label: "Raly Win Rate"},
  { percentage: "10%", label: "Possession %" },
  { percentage: "20%", label: "Passing Networks" },
  { percentage: "25%", label: "Attacking Zones"},
  { percentage: "25%", label: "Defensive Zones"},
  { percentage: "15%", label: "Expected Goals"},
  { percentage: "20%", label: "Expected Assists"},
  { percentage: "30%", label: "Pressure Applied" },
  { percentage: "20%", label: "Offensive Efficiency" },
  { percentage: "15%", label: "Transition Speed"},
  { percentage: "25%", label: "Player Positioning"},
  { percentage: "40%", label: "Player Movement"},
  { percentage: "15%", label: "Spacing"},
  { percentage: "40%", label: "Player Fatigue Levels" },
  { percentage: "20%", label: "Recovery Time" },
];

export const ContactUsData = [
  {
    title: "See the results for yourself :)",
    description:
      "Get in contact with a member of our team and we’ll help you answer any further questions and start our journey together.",
    image: "https://firebasestorage.googleapis.com/v0/b/fir-auth-f8ffb.firebasestorage.app/o/website%2Fimages%2Ffooter-img-1.png?alt=media&token=b7acb823-a415-4c8c-b842-e7616c245d8b",
  },
  {
    title: "Experience the Impact",
    description:
      "Let’s explore how AI Technology can elevate your games. Reach out to our team, we’re here to answer your questions and get you started.",
    image: "https://firebasestorage.googleapis.com/v0/b/fir-auth-f8ffb.firebasestorage.app/o/website%2Fimages%2Ffooter-img-2.png?alt=media&token=f824e483-abb4-4e34-ad26-5cfa8bc4ba00",
  }
]

export const values = [
  {
    title: "Transparency",
    paragraph:
      "We believe honesty and openness are essential to building trust. We empower users by giving them control over their digital presence, ensuring that every interaction on our platform is clear and straightforward.",
  },
  {
    title: "Innovation",
    paragraph:
      "At Covelant, we push boundaries with cutting-edge technology to revolutionize the sports industry. By creating personalized experiences, we aim to make every session on our platform both impactful and forward-thinking.",
  },
  {
    title: "Integrity",
    paragraph:
      "Ethical practices are at the heart of our operations. We prioritize respecting user privacy and fostering a trustworthy environment, in order for all parties involved to feel secured and valued.",
  },
  {
    title: "Effectiveness",
    paragraph:
      "Our focus is on delivering results that matter. Covelant is designed to maximize preformance, ensuring that every use of our platform achieves measurable success and resonates with our users.",
  },
];

export const pricingData = [
  {
    title: "Free Plan",
    monthlyPrice: "Free",
    yearlyPrice: "Free",
    period: "",
    description: [
      "Upload up to 2 matches per month",
      "Single-player analytics dashboards",
      "1 user account",
    ],
  },
  {
    title: "Coach Plan",
    monthlyPrice: "99€",
    yearlyPrice: "899€",
    period: "/m",
    badge: "Most Popular",
    description: [
      "Unlimited match uploads",
      "All standard AI stats",
      "Multi-player analytics dashboards",
      "Export analytics to PDF/CSV",
    ],
  },
  {
    title: "Elite Plan",
    monthlyPrice: "499€",
    yearlyPrice: "3,999€",
    period: "/m",
    badge: "Federation",
    description: [
      "All Pro features",
      "No limits on uploads or access",
      "Priority customer support",
      "Dedicated onboarding session",
    ],
    highlight: ["All Pro features", "No limits on uploads or access"],
  }]

export const adStepsData = () => {
    return [
        {
          imageSrc: "https://firebasestorage.googleapis.com/v0/b/fir-auth-f8ffb.firebasestorage.app/o/website%2Fimages%2Fupload.jpg?alt=media&token=5a1bcb52-0a7d-4f2e-83a8-e2c3d1ee0916",
          stepNumber: "1",
          title: "Upload Matches & Training Session",
          description: "upload any video footage that is either recorded from your phone or the in build arena cameras, our software is designed to handle both.",
          bulletPoints: [
            { heading: "Any video will work", text: "if you filmed it, you can analyse it" },
            { heading: "Upload in minutes", text: "upload your footage in minutes" },
            { heading: "Data security", text: "your videos are ecrypted at all times" }
          ]
        },
        {
          imageSrc: "https://firebasestorage.googleapis.com/v0/b/fir-auth-f8ffb.firebasestorage.app/o/website%2Fimages%2FAI.jpg?alt=media&token=07dcb22a-dd6d-485e-83b5-b0ff275d5931",
          stepNumber: "2",
          title: "AI Video Analysis",
          description: "Don't worry about the technical stuff, our AI will analyze everything for you in a matter of minutes.",
          bulletPoints: [
            { heading: "Targeted selection", text: "Ensure the AI focusses on specific elements to analyse" },
            { heading: "Error and fault detection", text: "Let the AI figure out what went wrong and how to improve" },
            { heading: "Customize everything", text: "Easily filter the data you do not want to focus on what really counts" }
          ]
        },
        {
          imageSrc: "https://firebasestorage.googleapis.com/v0/b/fir-auth-f8ffb.firebasestorage.app/o/website%2Fimages%2FvoidanceReport.jpg?alt=media&token=7d7766cb-8bfc-403a-844c-230b0ebb9003",
          stepNumber: "3",
          title: "Immediately improve",
          description: "With the power of AI reports, you can now not only train more effectively, but also predict the future of your game.",
          bulletPoints: [
            { heading: "Vulnerability detection", text: "Detect where the flaws of an opponent's tactics" },
            { heading: "Coach assist", text: "Gain insightfull tips from our AI and depth of knowledge it can present" },
            { heading: "Instant training", text: "Gain recommended training routines to improve your game for the next match" }
          ]
        }
      ];
}
