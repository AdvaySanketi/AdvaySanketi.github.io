import { getPosts } from "@/app/utils";
import { Flex } from "@/once-ui/components";
import { Projects } from "@/app/projects/components/Projects";

export function generateMetadata() {
  const title = "Advay Sanketi - That's Me";
  const description = "Projects by Advay Sanketi";
  const ogImage = `https://advaysanketi.github.io/og?title=${encodeURIComponent(
    title
  )}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://advaysanketi.github.io/projects`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Work() {
  let allProjects = getPosts(["src", "app", "projects"]);

  return (
    <Flex fillWidth maxWidth="m" direction="column">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            headline: "My projects",
            description: "Projects by Advay Sanketi",
            url: `https://advaysanketi.github.io/projects`,
            image: `advaysanketi.github.io/og?title=My%20Projects`,
            author: {
              "@type": "Person",
              name: "Advay Sanketi",
            },
            hasPart: allProjects.map((project) => ({
              "@type": "CreativeWork",
              headline: project.metadata.title,
              description: project.metadata.summary,
              url: `https://advaysanketi.github.io/projects/${project.slug}`,
              image: `advaysanketi.github.io/${project.metadata.image}`,
            })),
          }),
        }}
      />
      <Projects />
    </Flex>
  );
}
