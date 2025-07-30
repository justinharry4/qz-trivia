import { performApiAction } from "./api-client";

export interface Quiz {
  id: number;
  title: string;
  description: string;
  cover_image: string;
  question_count: number;
}

export const getQuizzes = (limit: number | null) => {
  const queryParams = limit ? { limit } : {};
  return performApiAction<Quiz[]>("get", "/quiz/quizzes/", null, {
    params: queryParams,
  });
};

export const getQuiz = (quizId: number) => {
  return performApiAction<Quiz>("get", `/quiz/quizzes/${quizId}/`);
};
