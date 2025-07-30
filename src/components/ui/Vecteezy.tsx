import { Text, Link } from "@chakra-ui/react";

const Vecteezy = () => (
  <Text fontStyle="italic" color="gray.500" mt="5">
    Error image by{" "}
    <Link
      href="https://www.vecteezy.com"
      colorPalette="blue"
      target="_blank"
      rel="noreferrer noopener"
    >
      Vecteezy
    </Link>
  </Text>
);

export default Vecteezy;
