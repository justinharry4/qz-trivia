import useFetch from "./useFetch";
import { getResult } from "../services/result-service";

const useResult = (quizId: number, resultId: number) => {
  const { data, error, isLoading } = useFetch(() =>
    getResult(quizId, resultId),
  );
  return { result: data, error, isLoading };
};

export default useResult;
