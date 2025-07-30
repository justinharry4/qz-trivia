// import useData from "./useData";
import useFetch from "./useFetch";
import { getQuestions } from "../services/question-service";
import type { Question } from "../services/question-service";

const useQuestions = (quizId: number) => {
  const { data, error, isLoading, fetchData } = useFetch<Question[]>(
    () => getQuestions(quizId),
    { defer: true },
  );

  return { questions: data, fetchQuestions: fetchData, error, isLoading };
};

export default useQuestions;
