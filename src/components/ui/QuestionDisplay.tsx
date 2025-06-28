import { Stack, RadioGroup, Field } from "@chakra-ui/react";
import { Controller } from "react-hook-form";
import type { Control, UseFormGetValues } from "react-hook-form";

import type { FormData } from "./QuizForm";
import { decodeHtml } from "../../utils/utils";
import type { Question } from "../../hooks/useQuestions";

interface QuestionDisplayProps {
	question: Question;
	index: number;
	control: Control;
	getValues: UseFormGetValues<FormData>;
}

const QuestionDisplay = ({
	question,
	index,
	control,
	getValues,
}: QuestionDisplayProps) => {
	const fieldName = `q-${index + 1}-${question.id}`;

	return (
		<Field.Root>
			<Field.Label fontWeight="bolder" fontSize="lg">
				{decodeHtml(question.content)}
			</Field.Label>
			<Controller
				name={fieldName}
				control={control}
				defaultValue="0"
				render={({ field }) => (
					<RadioGroup.Root
						name={field.name}
						value={String(getValues(fieldName) ?? "")}
						onValueChange={({ value }) => {
							field.onChange(value);
						}}
						variant="outline"
						colorPalette="blue"
						w="100%"
						mt="5"
					>
						<Stack gap="3" alignItems="stretch">
							{question.options.map((option) => (
								<RadioGroup.Item
									key={option.id}
									value={`${option.id}`}
									p="3"
									borderWidth="2px"
									borderColor="grey.500"
									borderRadius="md"
									focusRing="inside"
									focusRingColor="blue.300"
								>
									<RadioGroup.ItemHiddenInput />
									<RadioGroup.ItemIndicator />
									<RadioGroup.ItemText>
										{decodeHtml(option.content)}
									</RadioGroup.ItemText>
								</RadioGroup.Item>
							))}
						</Stack>
					</RadioGroup.Root>
				)}
			/>
		</Field.Root>
	);
};

export default QuestionDisplay;
