import { HStack, Image, Link } from "@chakra-ui/react";
import Navigation from "./Navigation";
import Avatar from "./Avatar";
import qzBrandText from "../../assets/qz-brand-text.svg";

const NavBar = () => (
  <HStack as="header" px={{ base: "2", md: "8" }} py="3" bg="gray.200" gap="4">
    <Link href="/">
      <Image src={qzBrandText} alt="qz trivia log" width="170px" />
    </Link>
    <HStack justifyContent="space-between" flexGrow="1">
      <Navigation />
      <Avatar />
    </HStack>
  </HStack>
);

export default NavBar;
