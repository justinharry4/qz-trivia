import { useState } from "react";
import { useForm } from "react-hook-form";
import { Text, Stack, Button, Flex } from "@chakra-ui/react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import QuestionDisplay from "./QuestionDisplay";
import QuizFormNavigation from "./QuizFormNavigation";
import type { Question } from "../../services/question-service";
import useCreateResult from "../../hooks/useCreateResult";

const schema = z.record(z.coerce.number().optional());

export type FormValues = z.infer<typeof schema>;

interface QuizFormProps {
	quizId: Number;
	questions: Question[];
	onCancel: () => void;
}

const QuizForm = ({ quizId, questions, onCancel }: QuizFormProps) => {
	const { control, handleSubmit, getValues, setValue } = useForm<FormValues>({
		resolver: zodResolver(schema),
	});
	const [currentIndex, setCurrentIndex] = useState(0);
	const { result, error, submitting, createResult } = useCreateResult();

	if (result) console.log(result);

	const onSubmit = (data: FormValues) => {
		const answeredQuestions = [];

		for (const field in data) {
			const [questionNumber, questionId] = field.split("-").slice(1);
			const optionId = data[field];
			answeredQuestions.push({
				question_id: Number(questionId),
				question_number: Number(questionNumber),
				option_id: optionId,
			});
		}

		const payload = { answered_questions: answeredQuestions };
		createResult(quizId, payload);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Stack gap="6">
				<Text>
					Question {currentIndex + 1} of {questions.length}
				</Text>
				<QuestionDisplay
					question={questions[currentIndex]}
					index={currentIndex}
					control={control}
					getValues={getValues}
					setValue={setValue}
				/>
				<QuizFormNavigation
					currentIndex={currentIndex}
					totalQuestions={questions.length}
					onNext={() => setCurrentIndex(currentIndex + 1)}
					onPrev={() => setCurrentIndex(currentIndex - 1)}
				/>
				<Flex direction="row">
					<Button
						type="button"
						variant="subtle"
						colorPalette="red"
						rounded="md"
						onClick={onCancel}
					>
						Cancel Quiz
					</Button>
				</Flex>
			</Stack>
		</form>
	);
};

export default QuizForm;
