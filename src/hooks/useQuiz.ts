import useData from './useData';

export interface Quiz {
  id: number;
  title: string;
  description: string;
  cover_image: string;
  question_count: number;
 }

const useQuiz = (quizId: number) => {
  const { data, error } = useData<Quiz>(`/quiz/quizzes/${quizId}/`);
  return { quiz: data, error }
}

export default useQuiz;