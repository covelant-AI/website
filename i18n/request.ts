import {getRequestConfig} from 'next-intl/server';
import {headers} from 'next/headers';

export default getRequestConfig(async () => {
  const headersList = await headers();
  const locale = headersList.get('x-next-intl-locale') || 'en';
  const messages = {
    components: {
      heroMain: (await import(`../app/locales/${locale}/components/mainPage/heroMain.json`)).default,
      bentoBox: (await import(`../app/locales/${locale}/components/mainPage/bentoBox.json`)).default,
      whatAreWe: (await import(`../app/locales/${locale}/components/mainPage/whatAreWe.json`)).default,
      processSteps: (await import(`../app/locales/${locale}/components/mainPage/processSteps.json`)).default,
      pricing: (await import(`../app/locales/${locale}/components/mainPage/pricing.json`)).default,
      heroContact: (await import(`../app/locales/${locale}/components/mainPage/heroContact.json`)).default,
      product: {
        intro: (await import(`../app/locales/${locale}/components/product/intro.json`)).default,
        problems: (await import(`../app/locales/${locale}/components/product/problems.json`)).default,
        solution: (await import(`../app/locales/${locale}/components/product/solution.json`)).default,
        contact: (await import(`../app/locales/${locale}/components/product/contact.json`)).default,
        carousel: (await import(`../app/locales/${locale}/components/product/carousel.json`)).default,
        scalingCards: (await import(`../app/locales/${locale}/components/product/scalingCards.json`)).default,
      },
      faq:{
        intro: (await import(`../app/locales/${locale}/components/faq/intro.json`)).default,
        faqList: (await import(`../app/locales/${locale}/components/faq/faqList.json`)).default,
        contact: (await import(`../app/locales/${locale}/components/faq/contact.json`)).default,
      },
      aboutUs:{
        heroWhy: (await import(`../app/locales/${locale}/components/aboutUs/heroWhy.json`)).default,
        ourMission: (await import(`../app/locales/${locale}/components/aboutUs/ourMission.json`)).default,
        centeredTextSection: (await import(`../app/locales/${locale}/components/aboutUs/centeredTextSection.json`)).default,
        ourValues: (await import(`../app/locales/${locale}/components/aboutUs/ourValues.json`)).default,
        timeline: (await import(`../app/locales/${locale}/components/aboutUs/timeline.json`)).default,
        team: (await import(`../app/locales/${locale}/components/aboutUs/team.json`)).default,
        contact: (await import(`../app/locales/${locale}/components/aboutUs/contact.json`)).default,
      }
    },
  };

  return { 
    messages,
    locale
  };
}); 