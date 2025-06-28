import { useState } from "react";
import { useForm } from "react-hook-form";
import { Text, Stack, Button, Flex } from "@chakra-ui/react";
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
			<Stack gap="6">
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
