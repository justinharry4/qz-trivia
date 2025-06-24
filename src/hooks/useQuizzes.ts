import { useState, useEffect } from "react";
import apiClient, { AxiosCanceledError } from "../services/api-client";

interface Quiz {
  id: number;
  title: string;
  description: string;
  cover_image: string;
}

const useQuizzes = () => {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<Quiz[]>("/quiz/quizzes/", { signal: controller.signal })
      .then((res) => {
        setQuizzes(res.data);
      })
      .catch((err) => {
        if (err instanceof AxiosCanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { quizzes, error };
};

export default useQuizzes;
