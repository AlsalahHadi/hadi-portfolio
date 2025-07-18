import type { MetadataRoute } from 'next';
import { about } from '@/data';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${about.website}/sitemap.xml`,
  };
}
