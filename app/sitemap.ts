import { getNewsPosts } from "app/news/utils";

export const baseUrl = "https://ai-curated-news.vercel.app";

export default async function sitemap() {
  let news = getNewsPosts().map((post) => ({
    url: `${baseUrl}/news/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let routes = ["", "/news"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...news];
}
