import React from "react";
import { Timeline } from "@/components/UI/timeline";
 
export default function TimelineScroll() {
  const data = [
    {
      title: "Started from the bottom",
      content: (
        <div>
          <p className="mb-8 text-sm font-semibold text-neutral-800 md:text-lg ">
            Covelant started with a simple question from founders Omar Badawy and Nicolo Forti: “What would happen if AI watched a sports match?” 
            Could it understand what’s going on and if it can, could it even predict who might win before the match begins? That spark turned into experiments that
            turned into something they didn't imagine.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/fir-auth-f8ffb.firebasestorage.app/o/website%2Fimages%2Fabout%20us%2F20230622_121813.jpg?alt=media&token=51d6114c-a8c3-4dfb-bcbd-4101dd36077b"
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
      title: "Development Breakthrough",
      content: (
        <div>
          <p className="mb-8 text-sm font-semibold text-neutral-800 md:text-lg ">
          For a long stretch we worked, failed, learned, and iterated, often in frustration and uncertainty. 
          We tried models, datasets, and architectures, and we assembled a team of engineers, designers, and go-to-market leaders who shared the vision. 
          Eventually, we broke through. Since then, we’ve earned a podium finish at the 2025 MIT AI Global Hackathon, refined the product with hands-on feedback 
          from coaches and athletes, and begun conversations with leading federations.
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
      title: "Sideline to Stadium",
      content: (
        <div>
          <p className="mb-8 text-sm font-semibold text-neutral-800 md:text-lg ">
            After months of development and testing, we moved from experiments to stadium trials. 
            By securing partership with the Saudi Arabian Table Tennis Federation and developing close relationship with Racketlon, 
            we were able to finally see our vision come to life.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/fir-auth-f8ffb.firebasestorage.app/o/website%2Fimages%2Fabout%20us%2FIMG-20250131-WA0001%20(1).jpg?alt=media&token=ceb2fcae-8f20-48d5-a812-62a143fc7e5a"
              alt="startup template"
              width={500}
              height={500}
              className="h-60 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-80"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/fir-auth-f8ffb.firebasestorage.app/o/website%2Fimages%2Fabout%20us%2FScreenshot%202025-08-31%20141403.png?alt=media&token=4433af9a-8720-4038-b96e-104724197983"
              alt="startup template"
              width={500}
              height={500}
              className="h-60 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-80"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/fir-auth-f8ffb.firebasestorage.app/o/website%2Fimages%2Fabout%20us%2FScreenshot_20250831_141714_WhatsApp.jpg?alt=media&token=a18a05a8-b354-4e84-ab36-61baf0509475"
              alt="startup template"
              width={500}
              height={500}
              className="h-60 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-80"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/fir-auth-f8ffb.firebasestorage.app/o/website%2Fimages%2Fabout%20us%2FIMG-20250131-WA0000.jpg?alt=media&token=f6dbc789-7939-4197-8563-0956c7051f95"
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
      title: "Launched & Beyond",
      content: (
        <div>
          <p className="mb-4 text-xs font-semibold text-neutral-800 md:text-lg">
            After officially launching Sideline in July of 2025. We are now focused on refining the product, expanding to new sports, and scaling our impact.
            With new monitoring tools, enhanced AI capabilities, and a growing team, we are excited for what lies ahead. We have been accepted to the ALPHA 
            program at Websummit in addition to rolling out new features and partnerships that we are excited to talk about soon. Until then, make sure to follow us on social media and 
            join our Whatsapp community to stay up to date with everything we are working on!
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
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}