import { performApiAction } from "./api-client";

export interface Option {
  id: number;
  content: string;
}

export interface Question {
  id: number;
  content: string;
  options: Option[];
}

export const getQuestions = (quizId: number) => {
  return performApiAction<Question[]>(
    "get",
    `/quiz/quizzes/${quizId}/questions/`,
  );
};
