import { Avatar as ChakraAvatar } from "@chakra-ui/react";
import blankAvatar from "../../assets/anonymous.jpeg";

const Avatar = () => (
  <ChakraAvatar.Root>
    <ChakraAvatar.Fallback name="Justin Harry" />
    <ChakraAvatar.Image src={blankAvatar} />
  </ChakraAvatar.Root>
);

export default Avatar;
