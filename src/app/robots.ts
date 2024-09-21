export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `https://advay-sanketi-portfolio.vercel.app/sitemap.xml`,
    host: "https://advay-sanketi-portfolio.vercel.app",
  };
}
