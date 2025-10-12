// app/[locale]/layout.tsx (or .jsx)
import { NextIntlClientProvider } from 'next-intl';
import Footer from "@/components/UI/Footer";
import NavigationBar from '@/components/UI/NavigationBar';
import { getMessages } from 'next-intl/server';
import Script from "next/script";

export const viewport = {
  themeColor: '#6EB6B3',
  colorScheme: 'light',
};

export async function generateMetadata({ params }) {
  const { locale } = params;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.covelant.com';
  const url = `${siteUrl}/${locale}`;
  const title = {
    default: 'Covelant',
    template: '%s | Covelant'
  };
  const description =
    'AI sports analytics for tennis: ball speed, bounce maps, highlights, tactical dashboards—for clubs, coaches, players & federations.';

  const images = [
    {
      url: `${siteUrl}/og/covelant-og.jpg`,
      width: 1200,
      height: 630,
      alt: 'Covelant – AI Sports Analytics for Tennis',
    },
  ];

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        'x-default': `${siteUrl}/en`,
        en: `${siteUrl}/en`,
        de: `${siteUrl}/de`,
      },
    },
    openGraph: {
      type: 'website',
      url,
      title: 'AI Sports Analytics for Tennis | Covelant',
      description,
      siteName: 'Covelant',
      images,
      locale,
    },
    twitter: {
      card: 'summary_large_image',
      title: 'AI Sports Analytics for Tennis | Covelant',
      description,
      images,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        maxImagePreview: 'large',
        maxVideoPreview: -1,
        maxSnippet: -1,
      },
    },
    icons: {
      icon: '/favicon.ico',
      apple: '/apple-touch-icon.png',
      shortcut: '/favicon-16x16.png',
    },
    manifest: '/site.webmanifest',
    category: 'technology'
  };
}

export default async function RootLayout({ children, params }) {
  const { locale } = params;
  const messages = await getMessages();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.covelant.com';

  const orgLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Covelant",
    url: siteUrl,
    logo: `${siteUrl}/icons/icon-512x512.png`
  };

  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Covelant",
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/search?q={query}`,
      "query-input": "required name=query"
    }
  };

  return (
    <html lang={locale}>
      <body className="geistSans variable geistMono variable figtree variable antialiased">
        {/* Skip link for a11y (also helps Core Web Vitals/UX) */}
        <a href="#main" className="sr-only focus:not-sr-only">Skip to content</a>

        {/* JSON-LD */}
        <Script id="ld-org" type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }} />
        <Script id="ld-website" type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }} />

        <NextIntlClientProvider locale={locale} messages={messages}>
          <header role="banner" aria-label="Primary">
            <NavigationBar />
          </header>
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-S6W5SMQV8D"></script>
          <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments)}
            gtag('js', new Date());
            
            gtag('config', 'G-S6W5SMQV8D');
          </script>

          <main id="main">{children}</main>

          <footer role="contentinfo">
            <Footer />
          </footer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
