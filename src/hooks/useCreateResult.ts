import useMutation from "./useMutation";
import { createResult } from "../services/result-service";
import type { Result } from "../services/result-service";

const useCreateResult = () => {
  const { data, error, isLoading, mutate } = useMutation<Result>(createResult);
  return { result: data, createResult: mutate, submitting: isLoading, error };
};

export default useCreateResult;
