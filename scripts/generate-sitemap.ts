import fs from 'fs';
import path from 'path';
import { SITE_URL } from '../src/utils/seo/constants';

const pages = [
  {
    url: '/',
    lastmod: new Date().toISOString(),
    changefreq: 'weekly',
    priority: '1.0'
  },
  {
    url: '/services',
    lastmod: new Date().toISOString(),
    changefreq: 'weekly',
    priority: '0.8'
  },
  {
    url: '/about',
    lastmod: new Date().toISOString(),
    changefreq: 'monthly',
    priority: '0.7'
  },
  {
    url: '/contact',
    lastmod: new Date().toISOString(),
    changefreq: 'monthly',
    priority: '0.7'
  },
  {
    url: '/register',
    lastmod: new Date().toISOString(),
    changefreq: 'monthly',
    priority: '0.9'
  }
];

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('')}
</urlset>`;

  fs.writeFileSync(
    path.join(process.cwd(), 'public', 'sitemap.xml'),
    sitemap.trim()
  );
};

generateSitemap();