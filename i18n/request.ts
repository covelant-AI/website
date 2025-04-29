import {getRequestConfig} from 'next-intl/server';
import {headers} from 'next/headers';

export default getRequestConfig(async () => {
  const headersList = await headers();
  const locale = headersList.get('x-next-intl-locale') || 'en';
  const messages = {
    heroMain: (await import(`../app/locales/${locale}/heroMain.json`)).default,
    bentoBox: (await import(`../app/locales/${locale}/bentoBox.json`)).default,
  };

  return { 
    messages,
    locale
  };
}); 