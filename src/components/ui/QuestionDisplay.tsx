import { Stack, RadioGroup, Field } from "@chakra-ui/react";

import { decodeHtml } from "../../utils/utils";
import type { Question } from "../../hooks/useQuestions";

interface QuestionDisplayProps {
	question: Question;
}

const QuestionDisplay = ({ question }: QuestionDisplayProps) => (
	<Field.Root>
		<Field.Label fontWeight="bolder" fontSize="lg">
			{decodeHtml(question.content)}
		</Field.Label>
		<RadioGroup.Root variant="outline" colorPalette="blue" w="100%" mt="5">
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
	</Field.Root>
);

export default QuestionDisplay;
