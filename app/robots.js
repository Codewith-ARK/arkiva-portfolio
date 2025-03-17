export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: ['/','/blog/*'],
      disallow: ['/private/', '/data/', '/app/data/'],
    },
    sitemap: 'https://arkiva.vercel.app/sitemap.xml',
  }
}