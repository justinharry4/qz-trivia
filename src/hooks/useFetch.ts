import { useEffect } from "react";
import useResource from "./useResource";
import type { ApiActionResult } from "../services/api-client";

interface UseFetchOptions {
  defer?: boolean;
}

const useFetch = <T>(
  action: () => ApiActionResult<T>,
  options: UseFetchOptions = {},
) => {
  const defer = options.defer || false;
  const { data, error, isLoading, handleResponse } = useResource<T>();

  const fetchData = () => {
    const { request, cancel } = action();
    handleResponse(request);
    return cancel;
  };

  useEffect(() => {
    if (!defer) {
      const cancel = fetchData();
      return cancel;
    }
  }, []);

  return { data, error, isLoading, fetchData };
};

export default useFetch;
