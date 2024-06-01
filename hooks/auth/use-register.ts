"use client";

import { authFetch } from "@/api/auth";
import { RegisterData } from "@/api/types";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Data extends RegisterData {
  termsAgree: boolean;
  loading: boolean;
}

export default function useRegister() {
  const router = useRouter();
  const [registerData, setRegisterData] = useState<Data>({
    email: "",
    password: "",
    userName: "",
    termsAgree: false,
    loading: false,
  });
  const { toast } = useToast();

  async function register() {
    if (registerData.loading) return;
    if (!registerData.termsAgree) {
      toast({
        title: "Register failed!",
        description: "Please agree to our terms and privacy",
        variant: "destructive",
      });
      return;
    }
    try {
      setRegisterData((prev) => ({ ...prev, loading: true }));
      const axiosRes = await authFetch.register({
        email: registerData.email,
        password: registerData.password,
        userName: registerData.userName,
      });
      toast({
        title: "Register done!",
        description: axiosRes.data.message,
      });
      router.push("/login");
    } catch (error: any) {
      toast({
        title: "Register failed!",
        description: error.response.data.message,
        variant: "destructive",
      });
      setRegisterData((prev) => ({ ...prev, loading: false }));
    }
  }

  return { registerData, setRegisterData, register };
}
