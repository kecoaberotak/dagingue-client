import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";

type LoginResponse = {
  token: string;
};

export async function login(email: string, password: string): Promise<void | string> {
  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/signin`, { email, password });

    const { token } = response.data.result as LoginResponse;

    // Simpan token
    localStorage.setItem("token", token);
    Cookies.set("token", token, { path: "/" });
  } catch (error: unknown) {
    const err = error as AxiosError;
    const errorMessage = (err?.response?.data as { message?: string })?.message || err.message;
    return errorMessage;
  }
}

export function logout() {
  localStorage.removeItem("token");
  Cookies.remove("token");
}
