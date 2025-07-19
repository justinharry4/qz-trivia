import { Heading, Button, Stack, Text, Image } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router";

import notFound from "../../assets/not-found.png";
import Vecteezy from "./Vecteezy";

const NotFound = () => {
	return (
		<Stack>
			<Heading fontSize="3xl" fontWeight="bolder">
				We couldn't find what you were looking for
			</Heading>
			<Text mt="2">
				The page or resource you're trying to access doesn't seem to exist. It
				might have been moved, deleted, or never existed at all.
			</Text>
			<Stack alignItems="center">
				<Image
					src={notFound}
					alt="page not found"
					my="10"
					width={{ base: "200px", sm: "40%", md: "300px" }}
				/>
				<Button colorPalette="blue" rounded="full">
					<RouterLink to="/">Return to Homepage</RouterLink>
				</Button>
				<Vecteezy />
			</Stack>
		</Stack>
	);
};

export default NotFound;
