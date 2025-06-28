import { useState } from "react";
import { useForm } from "react-hook-form";
import { Text, Stack } from "@chakra-ui/react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import QuestionDisplay from "./QuestionDisplay";
import QuizFormNavigation from "./QuizFormNavigation";
import type { Question } from "../../hooks/useQuestions";

const schema = z.record(z.coerce.number().optional());

export type FormData = z.infer<typeof schema>;

interface QuizFormProps {
	questions: Question[];
	onCancel: () => void;
}

const QuizForm = ({ questions, onCancel }: QuizFormProps) => {
	const { control, handleSubmit, getValues } = useForm<FormData>({
		resolver: zodResolver(schema),
	});
	const [currentIndex, setCurrentIndex] = useState(0);

	const onSubmit = (data: FormData) => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Stack gap="8">
				<Text>
					Question {currentIndex + 1} of {questions.length}
				</Text>
				<QuestionDisplay
					question={questions[currentIndex]}
					index={currentIndex}
					control={control}
					getValues={getValues}
				/>
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
