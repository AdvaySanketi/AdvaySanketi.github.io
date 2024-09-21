import { getPosts } from "@/app/utils";

export default async function sitemap() {
  let projects = getPosts(["src", "app", "projects", "projects"]).map(
    (post) => ({
      url: `https://advay-sanketi-portfolio.vercel.app/projects/${post.slug}`,
      lastModified: post.metadata.publishedAt,
    })
  );

  let routes = ["/", "/about", "/projects"].map((route) => ({
    url: `https://advay-sanketi-portfolio.vercel.app${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    priority: route === "/" ? 1.0 : 0.8,
    changefreq: "daily",
  }));

  return [...routes, ...projects];
}
