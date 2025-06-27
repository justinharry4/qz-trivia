import useData from "./useData";

interface Option {
	id: number;
	content: string;
}

export interface Question {
	id: number;
	content: string;
	options: Option[];
}

const useQuestions = (quizId: number) => {
	const { data, error, isLoading, fetchData } = useData<Question[]>(
		`/quiz/quizzes/${quizId}/questions/`,
		{ defer: true },
	);

	return { questions: data, error, isLoading, fetchQuestions: fetchData };
};

export default useQuestions;
