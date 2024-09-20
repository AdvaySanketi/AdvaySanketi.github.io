import "@/once-ui/styles/index.scss";
import "@/once-ui/tokens/index.scss";

import classNames from "classnames";

import { Flex, Background } from "@/once-ui/components";
import { Footer, Header } from "@/app/components";

import { Inter } from "next/font/google";
import { Source_Code_Pro } from "next/font/google";

import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://advaysanketi.github.io"),
  title: "Advay Sanketi - That's Me",
  description: "Portfolio website showcasing my work as a Full-Stack Developer",
  openGraph: {
    title: `Advay Sanketi's Portfolio`,
    description: "Portfolio website showcasing my work.",
    url: "advaysanketi.github.io",
    siteName: `Advay Sanketi's Portfolio`,
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const primary = Inter({
  variable: "--font-primary",
  subsets: ["latin"],
  display: "swap",
});

type FontConfig = {
  variable: string;
};

const secondary: FontConfig | undefined = undefined;
const tertiary: FontConfig | undefined = undefined;

const code = Source_Code_Pro({
  variable: "--font-code",
  subsets: ["latin"],
  display: "swap",
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <Flex
      as="html"
      lang="en"
      background="page"
      data-neutral="slate"
      data-brand="emerald"
      data-accent="emerald"
      data-solid="color"
      data-solid-style="flat"
      data-theme="dark"
      data-border="playful"
      data-surface="translucent"
      data-transition="all"
      className={classNames(
        primary.variable,
        secondary ? secondary.variable : "",
        tertiary ? tertiary.variable : "",
        code.variable
      )}
    >
      <Flex
        style={{ minHeight: "100vh" }}
        as="body"
        fillWidth
        margin="0"
        padding="0"
        direction="column"
      >
        <Background />
        <Flex fillWidth minHeight="16"></Flex>
        <Header />
        <Flex
          zIndex={0}
          fillWidth
          paddingY="l"
          paddingX="l"
          justifyContent="center"
          flex={1}
        >
          <Flex justifyContent="center" fillWidth minHeight="0">
            {children}
          </Flex>
        </Flex>
        <Footer />
      </Flex>
    </Flex>
  );
}
