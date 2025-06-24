import axios, { CanceledError } from "axios";

const apiClient = axios.create({ baseURL: "http://localhost:8000" });

export const AxiosCanceledError = CanceledError;

export default apiClient;
