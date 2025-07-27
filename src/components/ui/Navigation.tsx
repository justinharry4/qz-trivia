import { HStack, Button } from "@chakra-ui/react";
import { Link } from "react-router";

const Navigation = () => (
	<HStack as="nav" fontWeight="bold" gap="7" fontSize="sm">
		<Button
			asChild
			fontWeight="bold"
			variant="ghost"
			rounded="full"
			px={{ base: "1", md: "4" }}
			_hover={{ color: "white", bg: "blue.600" }}
		>
			<Link to="/">Home</Link>
		</Button>
	</HStack>
);

export default Navigation;
