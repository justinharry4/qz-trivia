import { performApiAction } from "./api-client";
import type { Quiz } from "./quiz-service";
import type { Question, Option } from "./question-service";

interface SimpleAnsweredQuestion {
	question_id: number;
	question_number: number;
	option_id: number;
}

interface AnsweredQuestion {
	id: number;
	question: Question;
	selected_option: Option;
	correct_option: Option;
	question_number: number;
}

export interface Result {
	id: number;
	quiz: Quiz;
	answered_questions: AnsweredQuestion[];
	total_answered: number;
	total_correct: number;
	percentage_score: number;
}

interface CreateResultPayload {
	answered_questions: SimpleAnsweredQuestion[];
}

export const createResult = (quizId: number, quizData: CreateResultPayload) => {
	return performApiAction<Result>(
		"post",
		`/quiz/quizzes/${quizId}/results/`,
		quizData,
	);
};

export const getResult = (quizId: number, resultId: number) => {
	return performApiAction<Result>(
		"get",
		`/quiz/quizzes/${quizId}/results/${resultId}/`,
	);
};
