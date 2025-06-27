import { useState, useEffect } from "react";
import apiClient, { AxiosCanceledError } from "../services/api-client";

const useData = <T>(path: string) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<T>(path, { signal: controller.signal })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        if (err instanceof AxiosCanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { data, error };
};

export default useData;
