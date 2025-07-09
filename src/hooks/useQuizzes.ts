// import useData from "./useData";
import useFetch from "./useFetch";
import { getQuizzes } from "../services/quiz-service";
import type { Quiz } from "../services/quiz-service";

const useQuizzes = () => {
	const { data, error, isLoading } = useFetch<Quiz[]>(getQuizzes);
	return { quizzes: data, error, isLoading };
};

export default useQuizzes;
