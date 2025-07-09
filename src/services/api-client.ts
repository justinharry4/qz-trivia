import axios, { CanceledError } from "axios";
import type { AxiosRequestConfig, Method, AxiosResponse } from "axios";

export const AxiosCanceledError = CanceledError;

const apiClient = axios.create({ baseURL: "http://localhost:8000" });

export interface ApiActionResult<T> {
	request: Promise<AxiosResponse<T>>;
	cancel: () => void;
}

export const performApiAction = <T>(
	method: Method,
	url: string,
	data?: any,
	config?: AxiosRequestConfig,
): ApiActionResult<T> => {
	const controller = new AbortController();
	const signal = controller.signal;

	return {
		request: apiClient.request<T>({
			method,
			url,
			data,
			signal,
			...config,
		}),
		cancel: () => controller.abort(),
	};
};

export default apiClient;
