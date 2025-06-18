import { HStack, Link } from "@chakra-ui/react";

const Navigation = () => (
  <HStack as="nav" fontWeight="bold" gap="7">
    <Link href="/">Home</Link>
    <Link>Results</Link>
  </HStack>
);

export default Navigation;
