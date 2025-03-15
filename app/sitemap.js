import blogPosts from "@/data/BlogPostData";

export default function sitemap() {
  const baseUrl = "https://arkiva.vercel.app";
  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    ...blogPosts.map((post) => ({
      // Use `url` consistently, and note that post.url already includes a leading slash.
      url: `${baseUrl}${post.url}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.7,
    })),
  ];
}
