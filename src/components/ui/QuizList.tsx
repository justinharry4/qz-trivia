import { Heading, Text, Stack } from "@chakra-ui/react";

import QuizCard from "./QuizCard";
import PageLoadError from './PageLoadError';
import useQuizzes from "../../hooks/useQuizzes";

const QuizList = () => {
  const { quizzes, error } = useQuizzes();

  if (error) return <PageLoadError message={error} />

  if (quizzes) 
    return (
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
    );
};

export default QuizList;
