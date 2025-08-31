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
      product: {
        intro: (await import(`../app/locales/${locale}/components/product/intro.json`)).default,
        problems: (await import(`../app/locales/${locale}/components/product/problems.json`)).default,
        solution: (await import(`../app/locales/${locale}/components/product/solution.json`)).default,
        contact: (await import(`../app/locales/${locale}/components/product/contact.json`)).default,
      },
      faq:{
        intro: (await import(`../app/locales/${locale}/components/faq/intro.json`)).default,
        faqList: (await import(`../app/locales/${locale}/components/faq/faqList.json`)).default,
        contact: (await import(`../app/locales/${locale}/components/faq/contact.json`)).default,
      }
    },
  };

  return { 
    messages,
    locale
  };
}); 