import axios from "axios";
import { ApiError } from "@/models/error/apiError";

export function getApiError(error: unknown): string {
  if (axios.isAxiosError(error) && error.response?.data) {
    const apiError = error.response.data as ApiError;
    return apiError.errors[0];
  }
  return "An error has ocurred.";
}

export default getApiError;