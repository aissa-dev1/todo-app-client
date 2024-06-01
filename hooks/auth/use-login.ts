"use client";

import { authFetch } from "@/api/auth";
import { LoginData } from "@/api/types";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Data extends LoginData {
  loading: boolean;
}

export default function useLogin() {
  const router = useRouter();
  const [loginData, setLoginData] = useState<Data>({
    email: "",
    password: "",
    loading: false,
  });
  const { toast } = useToast();

  async function login() {
    if (loginData.loading) return;
    try {
      setLoginData((prev) => ({ ...prev, loading: true }));
      const axiosRes = await authFetch.login({
        email: loginData.email,
        password: loginData.password,
      });
      sessionStorage.setItem("access_token", axiosRes.data.accessToken);
      localStorage.setItem("refresh_token", axiosRes.data.refreshToken);
      router.push("/");
    } catch (error: any) {
      toast({
        title: "Login failed!",
        description: error.response.data.message,
        variant: "destructive",
      });
      setLoginData((prev) => ({ ...prev, loading: false }));
    }
  }

  return { loginData, setLoginData, login };
}
