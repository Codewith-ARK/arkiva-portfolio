export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/data/', '/app/data/'],
    },
    sitemap: 'https://arkiva.vercel.app/',
  }
}