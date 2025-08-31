import HeroMain from '@components/mainPage/HeroMain';
import WhatAreWe from '@components/mainPage/WhatAreWe';
import BentoBox from '@components/mainPage/BentoBox';
import HeroContact from '@components/mainPage/HeroContact';
import PricingSection from '@components/mainPage/PricingSection';
import ProcessExplained from "@components/mainPage/ProcessExplained";
import Awards from '@components/mainPage/Awards';
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
