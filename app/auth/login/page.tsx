"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios, { AxiosError } from "axios";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg("");

    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/signin`, { email, password });

      console.log(response, "RESPONSE");

      const { token } = response.data.result;

      // Simpan token ke localStorage
      localStorage.setItem("token", token);

      // Redirect ke dashboard
      router.push("/admin");
    } catch (error: unknown) {
      const err = error as AxiosError;
      const errorMessage = (err?.response?.data as { message?: string })?.message || err.message;
      setErrorMsg(errorMessage);
      console.error("Login gagal:", errorMessage);
    }
  };
  return (
    <form className="form-login" onSubmit={handleLogin}>
      <p>Login</p>
      <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
      <button className="button login-button">Login</button>
    </form>
  );
}
