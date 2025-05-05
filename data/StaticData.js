import Image from "next/image";

export const Cards = () => { 
    return [{
      image: "/images/sphere.png",
      title: "Save Time & Effort",
      description:
        "No more back-and-forth negotiations or complex content production. Simply choose the right influencers, and Voidance adapts your existing ad in seconds.",
    },
    {
      image: "/images/coin.png",
      title: "Lower Costs, Higher Returns",
      description:
        "Instead of producing new content for each influencer, Voidance repurposes a proven ad, drastically reducing production costs while maximizing reach.",
    },
    {
      image: "/images/ven.png",
      title: "Optimized for Conversions",
      description:
        "By leveraging a well-crafted, high-performing ad and tailoring it to multiple audiences, Voidance ensures your campaigns scale effectively without losing impact.",
    },]
}

export const Statistics = [
  { percentage: "700%", label: "Engagement"},
  { percentage: "60%", label: "Conversions"},
  { percentage: "62%", label: "Sentiment"},
  { percentage: "418%", label: "Screen time"},
  { percentage: "75%", label: "Brand Retention" },
  { percentage: "32%", label: "Efficiency" },
];

export const ContactUsData = [
  {
    title: "See the results for yourself :)",
    description:
      "Get in contact with a member of our team and we’ll help you answer any further questions and start our journey together.",
    image: "/images/footer-img-1.png",
  },
  {
    title: "Experience the Impact",
    description:
      "Let’s explore how Voidance Technology can elevate your campaigns. Reach out to our team, we’re here to answer your questions and get you started.",
    image: "/images/footer-img-2.png",
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
      "At Covelant, we push boundaries with cutting-edge technology to revolutionize advertising. By creating personalized experiences, we aim to make every campaign both impactful and forward-thinking.",
  },
  {
    title: "Integrity",
    paragraph:
      "Ethical practices are at the heart of our operations. We prioritize respecting user privacy and fostering a trustworthy environment, in order for all parties involved to feel secured and valued.",
  },
  {
    title: "Effectiveness",
    paragraph:
      "Our focus is on delivering results that matter. Covelant is designed to maximize engagement, ensuring that every campaign achieves measurable success and resonates with its intended audience.",
  },
];

export const pricingData = [
  {
    title: "Free Plan",
    price: "Free",
    period: "",
    description: [
      "Upload up to 2 matches per month",
      "Single-player analytics dashboards",
      "1 user account",
    ],
  },
  {
    title: "Coach Plan",
    price: "99€",
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
    price: "499€",
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
          imageSrc: "/images/upload.jpg",
          stepNumber: "1",
          title: "Upload Matches & Training Session",
          description: "upload any video footage that is either recorded from your phone or the in build arena cameras, our software is designed to handle both.",
          bulletPoints: [
            { heading: "Any video will work", text: "if you filmed it, you can analyse it" },
            { heading: "upload in minutes", text: "upload your footage in minutes" },
            { heading: "data security", text: "your videos are ecrypted at all times" }
          ]
        },
        {
          imageSrc: "/images/AI.jpeg",
          stepNumber: "2",
          title: "AI Video Analysis",
          description: "Don't worry about the technical stuff, our AI will analysse everything for you in a matter of minutes.",
          bulletPoints: [
            { heading: "Targeted selection", text: "Ensure the AI focusses on specific elements to analyse" },
            { heading: "Error and fault detection", text: "Let the AI figure out what went wrong and how to improve" },
            { heading: "Custimize everything", text: "Easily filter the data you do not want to focuss on what really counts" }
          ]
        },
        {
          imageSrc: "/images/voidanceReport.jpg",
          stepNumber: "3",
          title: "Voidance",
          description: "With the power of Voidance reports, you can now not only train more effectively, but also predict the future of your game.",
          bulletPoints: [
            { heading: "vulnerability detection", text: "Detect where the flaws of an oponents tactics" },
            { heading: "Coach assist", text: "Gain insightfull tips from our AI and depth of knowledge it can present" },
            { heading: "Instant training", text: "Gain recomended training routines to improve your game for the next match" }
          ]
        }
      ];
}
