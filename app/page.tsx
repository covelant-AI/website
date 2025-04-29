import HeroMain from '../components/heroMain';
import WhatAreWe from '../components/whatAreWe';
import BentoBox from '../components/bentoBox';
import ContacSection from '../components/contactSection';
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
