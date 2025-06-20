import { Box, Heading, Text, Stack } from "@chakra-ui/react";
import QuizCard from "./QuizCard";

const QuizList = () => {
  const quiz = {
    title: "Mythology",
    description:
      "Dive into ancient myths, gods, and legends from cultures around the world.",
    coverImage: "http://localhost:8000/media/quiz/images/myth.jpg",
  };

  return (
    <Box as="main" mx={{ base: "5", md: "15%" }}>
      <Stack mt="7" mb="5" gap="2">
        <Heading as="h1" fontSize="3xl" fontWeight="700">
          Available Quizzes
        </Heading>
        <Text color="gray.500" fontSize="sm">
          Choose a quiz to test your knowledge.
        </Text>
      </Stack>
      <Stack>
        <QuizCard
          title={quiz.title}
          description={quiz.description}
          imageUrl={quiz.coverImage}
        />
      </Stack>
    </Box>
  );
};

export default QuizList;
