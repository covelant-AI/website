import HeroMain from '@components/HeroMain';
import WhatAreWe from '@components/WhatAreWe';
import BentoBox from '@components/BentoBox';
import HeroContact from '@components/HeroContact';
import '../../styles/global.css';

export default function Home() {  
  return (
    <>
    <HeroMain />
    <WhatAreWe />
    <BentoBox />
    <HeroContact />
    </>
  );
}
