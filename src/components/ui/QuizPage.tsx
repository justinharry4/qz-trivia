import { useState } from "react";
import { useParams } from "react-router";
import { Text } from "@chakra-ui/react";

import QuizOverview from "./QuizOverview";
import QuizForm from "./QuizForm";
import useQuestions from "../../hooks/useQuestions";

type Page = "overview" | "form";

const QuizPage = () => {
  const [currentPage, setCurrentPage] = useState<Page>("overview");

  let { quizId } = useParams();
  const parsedQuizId = Number(quizId!);
  const { questions, error, isLoading, fetchQuestions } =
    useQuestions(parsedQuizId);

  const handleStart = () => {
    setCurrentPage("form");
    fetchQuestions();
  };

  const handleCancel = () => {
    setCurrentPage("overview");
  };

  return (
    <>
      {(isLoading || currentPage === "overview" || error) && (
        <>
          <QuizOverview
            quizId={parsedQuizId}
            onStart={handleStart}
            isLoading={isLoading}
          />
          {error && (
            <Text color="red" fontStyle="italic" mt="6">
              We're unable to retrieve quiz data right now. Please try again
              soon.
            </Text>
          )}
        </>
      )}
      {!isLoading && questions && currentPage === "form" && (
        <QuizForm
          quizId={parsedQuizId}
          questions={questions}
          onCancel={handleCancel}
        />
      )}
    </>
  );
};

export default QuizPage;
