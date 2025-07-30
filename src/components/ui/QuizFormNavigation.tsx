import { HStack, Button, Flex } from "@chakra-ui/react";

interface QuizFormNavigationProps {
  currentIndex: number;
  totalQuestions: number;
  onNext: () => void;
  onPrev: () => void;
  onCancel: () => void;
  isSubmitting: boolean;
}

const QuizFormNavigation = ({
  currentIndex,
  totalQuestions,
  onNext,
  onPrev,
  onCancel,
  isSubmitting,
}: QuizFormNavigationProps) => (
  <>
    <HStack justifyContent="space-between">
      <Button
        type="button"
        disabled={currentIndex === 0}
        variant="outline"
        colorPalette="black"
        rounded="md"
        borderWidth="2px"
        _hover={{ bg: "gray.200" }}
        onClick={onPrev}
      >
        Back
      </Button>
      {currentIndex < totalQuestions - 1 ? (
        <Button
          type="button"
          variant="solid"
          colorPalette="blue"
          rounded="md"
          onClick={(e) => {
            e.preventDefault();
            onNext();
          }}
        >
          Next
        </Button>
      ) : (
        <Button
          type="submit"
          variant="solid"
          colorPalette="blue"
          rounded="md"
          loading={isSubmitting}
        >
          Submit Quiz
        </Button>
      )}
    </HStack>
    <Flex direction="row" mt="4">
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
  </>
);

export default QuizFormNavigation;
