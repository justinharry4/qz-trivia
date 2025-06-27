import useData from "./useData";
import type { Quiz } from './useQuiz';

const useQuizzes = () => {
  const {data, error} = useData<Quiz[]>("/quiz/quizzes/");
  return { quizzes: data, error }
};

export default useQuizzes;
