import React from "react";

import {
  Heading,
  Flex,
  Text,
  Button,
  Avatar,
  RevealFx,
} from "@/once-ui/components";
import { Projects } from "@/app/projects/components/Projects";

export function generateMetadata() {
  const title = "Advay Sanketi - That's Me";
  const description =
    "Portfolio website showcasing my work as a Full-Stack Developer";
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
      url: `https://advaysanketi.github.io`,
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

export default function Home() {
  return (
    <Flex
      maxWidth="m"
      fillWidth
      gap="xl"
      direction="column"
      alignItems="center"
    >
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Advay Sanketi - That's Me",
            description:
              "Portfolio website showcasing my work as a Full-Stack Developer",
            url: `https://advaysanketi.github.io`,
            image: `advaysanketi.github.io/og?title=${encodeURIComponent(
              "Advay Sanketi - That's Me"
            )}`,
            publisher: {
              "@type": "Person",
              name: "Advay Sanketi",
              image: {
                "@type": "ImageObject",
                url: `advaysanketi.github.io/images/avatar.jpg`,
              },
            },
          }),
        }}
      />
      <Flex fillWidth direction="column" paddingY="l" gap="m">
        <Flex direction="column" fillWidth maxWidth="s" gap="m">
          <RevealFx translateY="4">
            <Heading wrap="balance" variant="display-strong-l">
              Advay Sanketi
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2}>
            <Text
              wrap="balance"
              onBackground="neutral-weak"
              variant="body-default-l"
            >
              Working towards a Future with a Higher Promise
            </Text>
          </RevealFx>
          <RevealFx translateY="2" delay={0.2}>
            <Text
              wrap="balance"
              onBackground="neutral-weak"
              variant="body-default-l"
            >
              Developer at heart, with a passion for technology and a curiosity
              without bounds. Currently pursuing my BTech in Computer Science at
              PES University in Bengaluru.
            </Text>
          </RevealFx>
          <RevealFx translateY="12" delay={0.4}>
            <Button
              data-border="rounded"
              href="/about"
              variant="tertiary"
              suffixIcon="chevronRight"
              size="m"
            >
              <Flex gap="8" alignItems="center">
                <Avatar
                  style={{ marginLeft: "-0.75rem", marginRight: "0.25rem" }}
                  src="/images/avatar3.jpg"
                  size="m"
                />
                About me
              </Flex>
            </Button>
          </RevealFx>
        </Flex>
      </Flex>
      <RevealFx translateY="16" delay={0.6}>
        <Projects range={[1, 1]} />
      </RevealFx>
      <Projects range={[2]} />
    </Flex>
  );
}
