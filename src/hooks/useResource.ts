import { useState } from "react";
import type { AxiosResponse } from "axios";
import { AxiosCanceledError } from "../services/api-client";

const useResource = <T>() => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleResponse = (request: Promise<AxiosResponse<T>>) => {
    setIsLoading(true);

    request
      .then((res) => {
        setData(res.data);
        setError("");
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof AxiosCanceledError) return;
        setError(err.message);
        setData(null);
        setIsLoading(false);
      });
  };

  return { data, error, isLoading, handleResponse };
};

export default useResource;
