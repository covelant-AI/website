import {getRequestConfig} from 'next-intl/server';
import {headers} from 'next/headers';

export default getRequestConfig(async () => {
  const headersList = await headers();
  const locale = headersList.get('x-next-intl-locale') || 'en';
  const messages = {
    components: {
      heroMain: (await import(`../app/locales/${locale}/components/heroMain.json`)).default,
      bentoBox: (await import(`../app/locales/${locale}/components/bentoBox.json`)).default,
      whatAreWe: (await import(`../app/locales/${locale}/components/whatAreWe.json`)).default,
      approach: {
        intro: (await import(`../app/locales/${locale}/components/approach/intro.json`)).default,
        problems: (await import(`../app/locales/${locale}/components/approach/problems.json`)).default,
        solution: (await import(`../app/locales/${locale}/components/approach/solution.json`)).default,
        contact: (await import(`../app/locales/${locale}/components/approach/contact.json`)).default,
      },
    },
  };

  return { 
    messages,
    locale
  };
}); 