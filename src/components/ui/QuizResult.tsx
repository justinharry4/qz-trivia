import { useParams, Link } from "react-router";
import { Heading, Text, Stack, Button, Flex } from "@chakra-ui/react";

import useResult from "../../hooks/useResult";
import StatCard from "./StatCard";
import LoadingIndicator from "./LoadingIndicator";
import NotFound from "./NotFound";
import InternalError from "./InternalError";

const QuizResult = () => {
	const params = useParams();
	const quizId = Number(params.quizId);
	const resultId = Number(params.resultId);

	const { result, error, isLoading } = useResult(quizId, resultId);

	if (isLoading) return <LoadingIndicator />;

	if (error) {
		if (error.status === 404) return <NotFound />;
		return <InternalError />;
	}

	if (result) {
		return (
			<Stack alignItems="center">
				<Stack width="100%" alignItems={{ base: "flex-start", md: "center" }}>
					<Heading as="h1" fontSize="3xl" fontWeight="bolder">
						Quiz Result
					</Heading>
					<Text>
						You've completed the '{result.quiz.title}' quiz. Here's how you did:
					</Text>
				</Stack>
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
					<Button asChild colorPalette="blue" rounded="full">
						<Link to={`/quizzes/${quizId}/results/${resultId}/review`}>
							Review Quiz
						</Link>
					</Button>
					<Button asChild variant="surface" colorPalette="gray" rounded="full">
						<Link to="/quizzes">Back to Quizzes</Link>
					</Button>
				</Stack>
			</Stack>
		);
	}
};

export default QuizResult;
