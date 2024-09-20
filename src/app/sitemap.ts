import { getPosts } from "@/app/utils";

export default async function sitemap() {
  let projects = getPosts(["src", "app", "projects", "projects"]).map(
    (post) => ({
      url: `https://advaysanketi.github.io/projects/${post.slug}`,
      lastModified: post.metadata.publishedAt,
    })
  );

  let routes = ["/", "/about", "/projects"].map((route) => ({
    url: `https://advaysanketi.github.io${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    priority: route === "/" ? 1.0 : 0.8,
    changefreq: "daily",
  }));

  return [...routes, ...projects];
}
