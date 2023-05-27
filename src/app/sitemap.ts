import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://nicholasdevries.github.io/",
      lastModified: new Date(),
    },
  ];
}
