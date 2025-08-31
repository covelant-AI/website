import React from "react";
import { Timeline } from "@/components/UI/timeline";
import { useTranslations } from "next-intl";
import { getTimelineData } from "@/data/StaticData";

export default function TimelineScroll() {
  const t = useTranslations("components.aboutUs.timeline");
  const data = getTimelineData(t); 

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
