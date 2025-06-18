import { HStack, Image, Link } from "@chakra-ui/react";
import Navigation from "./Navigation";
import Avatar from "./Avatar";
import qzLogo from "../../assets/qz-trivia-logo.svg";

const NavBar = () => (
  <HStack as="header" paddingX="8" paddingY="3" bg="gray.200" gap="4">
    <Link href="/">
      <Image src={qzLogo} alt="qz trivia log" width="170px" />
    </Link>
    <HStack justifyContent="space-between" flexGrow="1">
      <Navigation />
      <Avatar />
    </HStack>
  </HStack>
);

export default NavBar;
