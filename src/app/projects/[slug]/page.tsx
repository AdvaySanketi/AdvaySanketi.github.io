import { notFound } from "next/navigation";
import { CustomMDX } from "@/app/components/mdx";
import { formatDate, getPosts } from "@/app/utils";
import {
  AvatarGroup,
  Button,
  Flex,
  Heading,
  SmartImage,
  Text,
} from "@/once-ui/components";

interface WorkParams {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  let posts = getPosts(["src", "app", "projects", "projects"]);

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: WorkParams) {
  let post = getPosts(["src", "app", "projects", "projects"]).find(
    (post) => post.slug === params.slug
  );

  if (!post) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    images,
    image,
    team,
  } = post.metadata;
  let ogImage = image
    ? `https://advay-sanketi-portfolio.vercel.app${image}`
    : `https://advay-sanketi-portfolio.vercel.app/og?title=${title}`;

  return {
    title,
    description,
    images,
    team,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `https://advay-sanketi-portfolio.vercel.app/projects/${post.slug}`,
      images: [
        {
          url: ogImage,
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

export default function Project({ params }: WorkParams) {
  let post = getPosts(["src", "app", "projects", "projects"]).find(
    (post) => post.slug === params.slug
  );

  if (!post) {
    notFound();
  }

  const avatars =
    post.metadata.team?.map((person) => ({
      src: person.avatar,
    })) || [];

  return (
    <Flex
      as="section"
      fillWidth
      maxWidth="m"
      direction="column"
      alignItems="center"
      gap="l"
    >
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `https://advay-sanketi-portfolio.vercel.app${post.metadata.image}`
              : `https://advay-sanketi-portfolio.vercel.app/og?title=${post.metadata.title}`,
            url: `https://advay-sanketi-portfolio.vercel.app/projects/${post.slug}`,
            author: {
              "@type": "Person",
              name: "Advay Sanketi",
            },
          }),
        }}
      />
      <Flex fillWidth maxWidth="xs" gap="16" direction="column">
        <Button
          href="/projects"
          variant="tertiary"
          size="s"
          prefixIcon="chevronLeft"
        >
          Projects
        </Button>
        <Heading variant="display-strong-s">{post.metadata.title}</Heading>
      </Flex>
      {post.metadata.images.length > 0 && (
        <SmartImage
          aspectRatio="16 / 9"
          radius="m"
          alt="image"
          src={post.metadata.images[0]}
        />
      )}
      <Flex
        style={{ margin: "auto" }}
        as="article"
        maxWidth="xs"
        fillWidth
        direction="column"
      >
        <Flex gap="12" marginBottom="24" alignItems="center">
          {post.metadata.team && (
            <AvatarGroup reverseOrder avatars={avatars} size="m" />
          )}
          <Text variant="body-default-s" onBackground="neutral-weak">
            {formatDate(post.metadata.publishedAt)}
          </Text>
        </Flex>
        <CustomMDX source={post.content} />
      </Flex>
    </Flex>
  );
}
