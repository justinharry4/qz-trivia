// import useData from "./useData";
import useFetch from "./useFetch";
import { getQuiz } from "../services/quiz-service";
import type { Quiz } from "../services/quiz-service";

const useQuiz = (quizId: number) => {
  const { data, error, isLoading } = useFetch<Quiz>(() => getQuiz(quizId));
  return { quiz: data, error, isLoading };
};

export default useQuiz;
