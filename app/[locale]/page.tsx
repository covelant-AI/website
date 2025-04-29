import { useTranslations } from "next-intl";
import HeroMain from '../../components/HeroMain';
import WhatAreWe from '../../components/WhatAreWe';
import BentoBox from '../../components/BentoBox';
import ContacSection from '../../components/ContactSection';
import '../../styles/global.css';

export default function Home() {
  const t = useTranslations();
  
  return (
    <>
    <HeroMain />
    <WhatAreWe />
    <BentoBox />
    <ContacSection />
    </>
  );
}
