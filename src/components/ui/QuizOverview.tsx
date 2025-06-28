import { Image, Stack, Text, Heading, Center, Button } from "@chakra-ui/react";

import useQuiz from "../../hooks/useQuiz";
import PageLoadError from "./PageLoadError";
import QuizInfoTable from "./QuizInfoTable";

interface QuizOverviewProps {
	quizId: number;
	onStart: () => void;
	isLoading: boolean;
}

const QuizOverview = ({ quizId, onStart, isLoading }: QuizOverviewProps) => {
	const { quiz, error } = useQuiz(quizId);

	if (error) return <PageLoadError message={error} />;

	if (quiz)
		return (
			<Stack gap="3">
				<Image
					src={quiz.cover_image}
					alt={quiz.title + "art"}
					width="100%"
					height="200px"
					rounded="xl"
				/>
				<Heading>{quiz.title}</Heading>
				<Text fontSize="sm">{quiz.description}</Text>
				<QuizInfoTable questionCount={quiz.question_count}></QuizInfoTable>
				<Center>
					<Button
						size="sm"
						colorPalette="blue"
						variant="solid"
						rounded="full"
						loading={isLoading}
						onClick={onStart}
					>
						Start Quiz
					</Button>
				</Center>
			</Stack>
		);
};

export default QuizOverview;
