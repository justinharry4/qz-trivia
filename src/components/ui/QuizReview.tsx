import { useParams } from "react-router";
import { Heading, Text, Stack, HStack, Button } from "@chakra-ui/react";

import useResult from "../../hooks/useResult";
import QuestionReviewDisplay from "./QuestionReviewDisplay";
import QuizResultTable from "./QuizResultTable";
import PageLoadError from "./PageLoadError";

const QuizReview = () => {
	const params = useParams();
	const quizId = Number(params.quizId);
	const resultId = Number(params.resultId);

	const { result, error } = useResult(quizId, resultId);

	if (error) return <PageLoadError message={error} />;

	if (result)
		return (
			<Stack gap="6">
				<Stack gap="3">
					<Heading as="h1" fontSize="3xl" fontWeight="bolder">
						Quiz Review
					</Heading>
					<Text>Review your answers and see how you did.</Text>
				</Stack>
				<Stack gap="4">
					{result.answered_questions.map((aq) => (
						<QuestionReviewDisplay key={aq.id} answeredQuestion={aq} />
					))}
				</Stack>
				<Stack mt="4" gap="4">
					<Heading fontSize="2xl" fontWeight="bolder">
						Quiz Review Summary
					</Heading>
					<QuizResultTable result={result} />
				</Stack>
				<HStack mt="4" gap="4">
					<Button variant="surface" colorPalette="gray" rounded="full">
						Retake Quiz
					</Button>
					<Button colorPalette="blue" rounded="full">
						Back to Quizzes
					</Button>
				</HStack>
			</Stack>
		);
};

export default QuizReview;
