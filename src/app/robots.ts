export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `https://advaysanketi.github.io/sitemap.xml`,
    host: "https://advaysanketi.github.io",
  };
}
