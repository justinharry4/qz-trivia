import useResource from "./useResource";
import type { ApiActionResult } from "../services/api-client";

const useMutation = <T>(action: (...args: any[]) => ApiActionResult<T>) => {
	const { data, error, isLoading, handleResponse } = useResource<T>();

	const mutate = (...args: any[]) => {
		const { request } = action(...args);
		handleResponse(request);
	};

	return { data, error, isLoading, mutate };
};

export default useMutation;
