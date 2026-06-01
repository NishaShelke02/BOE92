import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.thearomaveda.com',
      lastModified: new Date(),
    },
    {
      url: 'https://www.thearomaveda.com/about',
    },
    {
      url: 'https://www.thearomaveda.com/products',
    },
    {
      url: 'https://www.thearomaveda.com/contact',
    },
  ]
}