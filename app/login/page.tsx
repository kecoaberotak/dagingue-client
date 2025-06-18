"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/services/auth.service";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg("");

    const error = await login(email, password);

    if (error) {
      setErrorMsg(error);
      return;
    }

    router.push("/admin");
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
