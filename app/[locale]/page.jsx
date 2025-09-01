import HeroMain from '@components/mainPage/HeroMain';
import WhatAreWe from '@components/mainPage/WhatAreWe';
import BentoBox from '@components/mainPage/BentoBox';
import HeroContact from '@components/mainPage/HeroContact';
import PricingSection from '@components/mainPage/PricingSection';
import ProcessExplained from "@components/mainPage/ProcessExplained";
import Awards from '@components/mainPage/Awards';
import Script from "next/script";
import '../global.css';

export const dynamic = 'force-static';
export const revalidate = 86400; // daily rebuild

export default function Home() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.covelant.com';

  const softwareLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Covelant – AI Sports Analytics",
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Web",
    url: siteUrl,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR"
    }
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteUrl
    }]
  };

  return (
    <>
      <Script id="ld-software" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareLd) }} />
      <Script id="ld-breadcrumb" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      {/* <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} /> */}

      <HeroMain />
      <WhatAreWe />
      <ProcessExplained />
      <BentoBox />
      <Awards />
      {/* If PricingSection lists plans, consider Product/Offer JSON-LD within that component */}
      <PricingSection />
      <HeroContact />
    </>
  );
}
