import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.boe9.com",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://www.boe9.com/about",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://www.boe9.com/products",
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: "https://www.boe9.com/services",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://www.boe9.com/contact",
      lastModified: new Date(),
      priority: 0.8,
    },
  ];
}