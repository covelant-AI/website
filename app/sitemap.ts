import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.covelant.com';
  const locales = ['en','de'];
  const paths = ['','/product','/contact'];

  const urls: MetadataRoute.Sitemap = [];
  for (const l of locales) {
    for (const p of paths) {
      const loc = `${siteUrl}/${l}${p}`;
      urls.push({
        url: loc,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: p === '' ? 1 : 0.7,
      });
    }
  }
  return urls;
}
