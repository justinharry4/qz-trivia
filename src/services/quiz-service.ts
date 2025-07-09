import { performApiAction } from "./api-client";

export interface Quiz {
	id: number;
	title: string;
	description: string;
	cover_image: string;
	question_count: number;
}

export const getQuizzes = () => {
	return performApiAction<Quiz[]>("get", "/quiz/quizzes/");
};

export const getQuiz = (quizId: number) => {
	return performApiAction<Quiz>("get", `/quiz/quizzes/${quizId}/`);
};
