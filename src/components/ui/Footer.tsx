import { List, Text, Flex, Link, HStack, Box } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router";

import QzBrandText from "../../assets/qz-brand-text.svg?react";

interface WhiteLinkProps {
	children: React.ReactNode;
}

const WhiteLink = ({ children }: WhiteLinkProps) => (
	<Link color="white">{children}</Link>
);

const Footer = () => (
	<HStack
		as="footer"
		width="100%"
		mt="24"
		py={{ base: "4", sm: "8" }}
		px={{ base: "8", sm: "12" }}
		columnGap={{ sm: "10%" }}
		bg="blue.600"
		gap="5"
		color="white"
		position="relative"
		wrap="wrap"
		justifyContent="center"
	>
		<Flex
			asChild
			gap="1"
			justifyContent="space-between"
			direction={{ base: "column", sm: "row" }}
			alignSelf={{ base: "flex-start", sm: "center" }}
			grow={{ base: "1", sm: "1" }}
			width={{ base: "35%", sm: "100%" }}
			px={{ base: "0px", sm: "3%", md: "15%" }}
		>
			<List.Root variant="plain">
				<List.Item>
					<RouterLink to="/about">About Us</RouterLink>
				</List.Item>
				<List.Item>
					<WhiteLink>Contact</WhiteLink>
				</List.Item>
				<List.Item>
					<WhiteLink>Privacy Policy</WhiteLink>
				</List.Item>
				<List.Item>
					<WhiteLink>Terms of Service</WhiteLink>
				</List.Item>
			</List.Root>
		</Flex>
		<Box width="200px">
			<QzBrandText style={{ width: "100%", height: "100%" }} />
		</Box>
		<Text>&copy; QZ Trivia 2025. All rights reserved.</Text>
	</HStack>
);

export default Footer;
