import { Heading, Stack, Text, Link, Image } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router";

import ErrorImage from "./ErrorImage";
import Vecteezy from "./Vecteezy";
import internalError from "../../assets/internal-error.png";

const InternalError = () => {
	return (
		<Stack>
			<Heading fontSize="3xl" fontWeight="bolder">
				Something went wrong on our end
			</Heading>
			<Text mt="2">
				We're having a bit of trouble loading this page right now. Please try
				refreshing the page or{" "}
				<Link asChild variant="underline" colorPalette="blue">
					<RouterLink to="/">head back to the homepage</RouterLink>
				</Link>
				.
			</Text>
			<Text>Thanks for your patience.</Text>
			<Stack alignItems="center">
				<Image
					src={internalError}
					alt="internal error"
					my="10"
					width={{ base: "150px", sm: "28%", md: "200px" }}
				/>
				<Vecteezy />
			</Stack>
		</Stack>
	);
};

export default InternalError;
