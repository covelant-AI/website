import HeroMain from '../components/HeroMain';
import WhatAreWe from '../components/WhatAreWe';
import BentoBox from '../components/BentoBox';
import ContacSection from '../components/ContactSection';
import '../styles/global.css';

export default function Home() {
  return (
    <>
    <HeroMain />
    <WhatAreWe />
    <BentoBox />
    <ContacSection />
    </>
  );
}
