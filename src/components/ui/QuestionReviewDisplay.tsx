import {
  RadioGroup,
  Stack,
  Icon,
  HStack,
  Heading,
  Text,
} from "@chakra-ui/react";
import { FaCircleCheck, FaCircleXmark } from "react-icons/fa6";

import { decodeHtml } from "../../utils/utils";
import type { AnsweredQuestion } from "../../services/result-service";
import type { Option } from "../../services/question-service";

interface QuestionReviewDisplayProps {
  answeredQuestion: AnsweredQuestion;
}

const QuestionReviewDisplay = ({
  answeredQuestion: aq,
}: QuestionReviewDisplayProps) => {
  const isSelected = (opt: Option) => aq.selected_option?.id == opt.id;
  const isCorrect = (opt: Option) => aq.correct_option.id === opt.id;

  const redProps = { bg: "red.200", borderColor: "red.400" };
  const greenProps = { bg: "green.200", borderColor: "green.400" };
  const grayProps = { borderColor: "gray.400" };

  return (
    <Stack gap="2">
      <Heading as="h2" fontSize="xl">
        Question {aq.question_number}
      </Heading>
      <Text fontSize="md">{decodeHtml(aq.question.content)}</Text>
      {!aq.selected_option && (
        <HStack
          py="2"
          px="4"
          mt="2"
          rounded="md"
          justifyContent="space-between"
          {...redProps}
        >
          <Text fontStyle="italic" fontWeight="bold" color="gray.500">
            No Option Selected
          </Text>
          <Icon size="md" color="red.600">
            <FaCircleXmark />
          </Icon>
        </HStack>
      )}
      <RadioGroup.Root
        variant="outline"
        colorPalette="blue"
        width="100%"
        size="md"
        value={String(aq.selected_option?.id || "")}
        readOnly
      >
        <Stack gap="2" alignItems="stretch">
          {aq.question.options.map((opt) => (
            <HStack
              key={opt.id}
              py="2"
              pl="2"
              pr="4"
              justifyContent="space-between"
              borderWidth="1px"
              borderRadius="md"
              {...(isCorrect(opt) ? greenProps : {})}
              {...(!isCorrect(opt) && isSelected(opt) ? redProps : {})}
              {...(!isCorrect(opt) && !isSelected(opt) ? grayProps : {})}
            >
              <RadioGroup.Item value={String(opt.id)} borderColor="inherit">
                <RadioGroup.ItemHiddenInput />
                <RadioGroup.ItemIndicator />
                <RadioGroup.ItemText>
                  {decodeHtml(opt.content)}
                </RadioGroup.ItemText>
              </RadioGroup.Item>
              {isSelected(opt) && isCorrect(opt) && (
                <Icon size="md" color="green.600">
                  <FaCircleCheck />
                </Icon>
              )}
              {isSelected(opt) && !isCorrect(opt) && (
                <Icon size="md" color="red.600">
                  <FaCircleXmark />
                </Icon>
              )}
            </HStack>
          ))}
        </Stack>
      </RadioGroup.Root>
    </Stack>
  );
};

export default QuestionReviewDisplay;
