import { Flex, Heading, Text } from "@/once-ui/components";

export default function NotFound() {
  return (
    <Flex
      as="section"
      direction="column"
      alignItems="center"
      justifyContent="center"
      padding="l"
    >
      <Text marginBottom="s" variant="display-strong-xl">
        404
      </Text>
      <Heading marginBottom="l" variant="display-strong-xs">
        Looks like you're lost in the digital void!
      </Heading>
      <Text
        marginBottom="l"
        variant="body-default-l"
        onBackground="neutral-weak"
      >
        The page you're trying to access doesn't exist, but feel free to explore
        the rest of my work!
      </Text>
      <Text variant="body-default-m" onBackground="neutral-strong">
        Head back to the <a href="/">homepage</a> or check out some of my{" "}
        <a href="/projects">projects</a>. 🚀
      </Text>
    </Flex>
  );
}
