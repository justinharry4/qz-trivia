import { useParams, Link } from "react-router";
import { Heading, Text, Stack, Button, Flex } from "@chakra-ui/react";

import useResult from "../../hooks/useResult";
import StatCard from "./StatCard";
import PageLoadError from "./PageLoadError";

const QuizResult = () => {
	const params = useParams();
	const quizId = Number(params.quizId);
	const resultId = Number(params.resultId);

	const { result, error } = useResult(quizId, resultId);

	if (error) return <PageLoadError message={error} />;

	if (result) {
		return (
			<Stack alignItems="center">
				<Heading
					fontSize="3xl"
					alignSelf={{ base: "flex-start", md: "center" }}
				>
					Quiz Result
				</Heading>
				<Text alignSelf={{ base: "flex-start", md: "center" }}>
					You've completed the '{result.quiz.title}' quiz. Here's how you did:
				</Text>
				<Flex
					direction={{ base: "column", sm: "row" }}
					mt="5"
					gap="5"
					width="100%"
				>
					<StatCard
						title="score"
						value={`${result.total_correct}/${result.total_answered}`}
					/>
					<StatCard
						title="percentage score"
						value={result.percentage_score + "%"}
					/>
				</Flex>
				<Stack width="45%" alignItems="stretch" mt="6">
					<Button colorPalette="blue" rounded="full">
						Review Quiz
					</Button>
					<Button asChild variant="surface" colorPalette="gray" rounded="full">
						<Link to="/">Back to Quizzes</Link>
					</Button>
				</Stack>
			</Stack>
		);
	}
};

export default QuizResult;
