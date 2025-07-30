import { HStack, Image, Link } from "@chakra-ui/react";
import Navigation from "./Navigation";
import Avatar from "./Avatar";
import qzBrandText from "../../assets/qz-brand-text.svg";

const NavBar = () => (
  <HStack
    as="header"
    px={{ base: "2", md: "8" }}
    py="3"
    gap="4"
    justifyContent="space-between"
    borderBottomWidth="2px"
    borderBottomColor="gray.200"
  >
    <Link href="/">
      <Image src={qzBrandText} alt="qz trivia log" width="170px" />
    </Link>
    <HStack gap="5">
      <Navigation />
      <Avatar />
    </HStack>
  </HStack>
);

// flexGrow="1"

export default NavBar;
