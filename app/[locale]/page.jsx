import HeroMain from '@components/HeroMain';
import WhatAreWe from '@components/WhatAreWe';
import BentoBox from '@components/BentoBox';
import HeroContact from '@components/HeroContact';
import PricingSection from '@components/PricingSection';
import ProcessExplained from "@components/ProcessExplained";
import Credits from '@components/UI/credits';
import '../global.css';

export default function Home() {  
  return (
    <>
    <HeroMain />
    <WhatAreWe />
    <ProcessExplained/>
    <BentoBox />
    <PricingSection />
    <Credits/>
    <HeroContact />
    </>
  );
}
