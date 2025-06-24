import { Box, Heading, Text, Stack, Center } from "@chakra-ui/react";
import QuizCard from "./QuizCard";
import useQuizzes from "../../hooks/useQuizzes";

const QuizList = () => {
  const { quizzes, error } = useQuizzes();

  return (
    <Box as="main" pt="7" mx={{ base: "5", md: "15%" }}>
      {error && (
        <Text fontWeight="bold" fontSize="lg">
          An error occured while loading this page - {error}
        </Text>
      )}
      {!error && quizzes.length === 0 ? (
        <Center fontWeight="bold">No quizzes are available at this time</Center>
      ) : error && quizzes.length === 0 ? null : (
        <>
          <Stack mb="5" gap="2">
            <Heading as="h1" fontSize="3xl" fontWeight="700">
              Available Quizzes
            </Heading>
            <Text color="gray.500" fontSize="sm">
              Choose a quiz to test your knowledge.
            </Text>
          </Stack>
          <Stack gap="5">
            {quizzes.map((quiz) => (
              <QuizCard
                key={quiz.id}
                title={quiz.title}
                description={quiz.description}
                imageUrl={quiz.cover_image}
              />
            ))}
          </Stack>
        </>
      )}
    </Box>
  );
};

export default QuizList;
