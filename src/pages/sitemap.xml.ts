import type { APIRoute } from 'astro';
import { services } from '../data/services';
import { projects } from '../data/projects';

export const GET: APIRoute = ({ site }) => {
  const base = site!.href.replace(/\/$/, '');
  const lastmod = new Date().toISOString().slice(0, 10);
  const paths = [
    ['/', '1.0'],
    ['/services/', '0.9'],
    ['/projects/', '0.9'],
    ['/about/', '0.7'],
    ['/contact/', '0.8'],
    ...services.map((s) => [`/services/${s.slug}/`, '0.8']),
    ...projects.map((p) => [`/projects/${p.slug}/`, '0.7']),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map(([path, priority]) => `  <url><loc>${base}${path}</loc><lastmod>${lastmod}</lastmod><priority>${priority}</priority></url>`).join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
