import { useState } from "react";
import { Text, Stack } from "@chakra-ui/react";

import QuestionDisplay from "./QuestionDisplay";
import QuizFormNavigation from "./QuizFormNavigation";
import type { Question } from "../../hooks/useQuestions";

interface QuizFormProps {
	questions: Question[];
	onCancel: () => void;
}

const QuizForm = ({ questions, onCancel }: QuizFormProps) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const onSubmit = (e) => {
		e.preventDefault();

		console.log("submited");
	};

	return (
		<form onSubmit={onSubmit}>
			<Stack gap="8">
				<Text>
					Question {currentIndex + 1} of {questions.length}
				</Text>
				<QuestionDisplay question={questions[currentIndex]} />
				<QuizFormNavigation
					currentIndex={currentIndex}
					totalQuestions={questions.length}
					onNext={() => setCurrentIndex(currentIndex + 1)}
					onPrev={() => setCurrentIndex(currentIndex - 1)}
				/>
			</Stack>
		</form>
	);
};

export default QuizForm;
