import { Stack, Heading, Text, Link } from "@chakra-ui/react";

const About = () => {
	const linkProps = {
		colorPalette: "blue",
		display: "inline",
		target: "_blank",
		rel: "noreferrer noopener",
	};

	return (
		<Stack gap="3">
			<Heading fontWeight="bold" fontSize="3xl">
				About Us
			</Heading>
			<Text>
				Welcome to{" "}
				<Text as="span" fontWeight="bold">
					QZ Trivia
				</Text>{" "}
				&mdash; a place to explore interesting questions and learn something new
				everyday.
			</Text>
			<Text>
				The quizzes featured here help you test your knowledge across a variety
				of topics, from science and history to pop culture and everyday facts.
				Whether you're brushing up on what you already know or discovering
				something for the first time, QZ Trivia is here to make learning simple,
				engaging, and rewarding.
			</Text>
			<Text>
				No timers. No pressure. Just quality questions and answers you can learn
				from at your own pace.
			</Text>
			<Text fontStyle="italic" color="gray.500" colorPalette="blue">
				All trivia questions on this site are sourced from the{" "}
				<Link href="https://opentdb.com" variant="underline" {...linkProps}>
					Open Trivia Database
				</Link>
				, which provides freely available trivia questions under the{" "}
				<Link
					href="https://creativecommons.org/licenses/by-sa/4.0/"
					variant="underline"
					{...linkProps}
				>
					Creative Commons Attribution-ShareAlike 4.0 International License (CC
					BY-SA 4.0)
				</Link>
			</Text>
		</Stack>
	);
};

export default About;
