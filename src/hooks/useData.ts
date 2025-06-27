import { useState, useEffect } from "react";
import apiClient, { AxiosCanceledError } from "../services/api-client";

interface UseDataOptions {
  defer?: boolean;
}

const useData = <T>(path: string, { defer = false }: UseDataOptions = {}) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (controller: AbortController | null = null) => {
    setIsLoading(true);

    const config = controller ? { signal: controller.signal } : {};

    apiClient
      .get<T>(path, config)
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

  useEffect(() => {
    if (!defer) {
      const controller = new AbortController();
      fetchData(controller);
      return () => controller.abort();
    }
  }, []);

  return { data, error, isLoading, fetchData };
};

export default useData;
