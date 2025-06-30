import HeroMain from '@components/HeroMain';
import WhatAreWe from '@components/WhatAreWe';
import BentoBox from '@components/BentoBox';
import HeroContact from '@components/HeroContact';
import PricingSection from '@components/PricingSection';
import ProcessExplained from "@components/ProcessExplained";
import Awards from '@components/UI/Awards';
import '../global.css';

export default function Home() {  
  return (
    <>
    <HeroMain />
    <WhatAreWe />
    <ProcessExplained/>
    <BentoBox />
    <Awards/>
    <PricingSection />
    <HeroContact />
    </>
  );
}
