import axios, {
  type AxiosError,
  type AxiosInstance,
  type CreateAxiosDefaults,
} from "axios";

import { env } from "@/env/client";

export class ApiError extends Error {
  constructor(
    public readonly status: number | undefined,
    public readonly data: unknown,
    message: string,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

function toApiError(error: unknown): ApiError {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError<{ message?: string }>;
    const message =
      axiosError.response?.data?.message ??
      axiosError.message ??
      "Request failed";
    return new ApiError(
      axiosError.response?.status,
      axiosError.response?.data,
      message,
    );
  }
  if (error instanceof Error) {
    return new ApiError(undefined, undefined, error.message);
  }
  return new ApiError(undefined, undefined, "Unknown error");
}

function attachErrorInterceptor(instance: AxiosInstance) {
  instance.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(toApiError(error)),
  );
  return instance;
}

async function getAuthToken(): Promise<string | undefined> {
  if (typeof window === "undefined") {
    const { auth } = await import("@/auth");
    const session = await auth();
    return session?.accessToken;
  }
  const { getSession } = await import("next-auth/react");
  const session = await getSession();
  return session?.accessToken;
}

const baseConfig = {
  baseURL: env.NEXT_PUBLIC_API_URL,
  headers: {
    Accept: "application/json, multipart/form-data",
  },
} satisfies CreateAxiosDefaults;

export const publicApi = attachErrorInterceptor(axios.create(baseConfig));

export const authApi = attachErrorInterceptor(axios.create(baseConfig));

authApi.interceptors.request.use(async (config) => {
  const token = await getAuthToken();
  if (token) {
    config.headers.set("Authorization", `Bearer ${token}`);
  }
  return config;
});
