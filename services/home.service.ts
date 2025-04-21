import axios, { AxiosError } from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getContentData(): Promise<Array<{ key: string; value: string }> | null> {
  try {
    const response = await axios.get(`${BASE_URL}/api/content`);
    return response.data?.data ?? null;
  } catch (error: unknown) {
    const err = error as AxiosError;
    const errorMessage = (err?.response?.data as { message?: string })?.message || err.message;
    console.error("Failed to fetch landing data:", errorMessage);
    return null;
  }
}
