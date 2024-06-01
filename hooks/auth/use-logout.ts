"use client";

import { authFetch } from "@/api/auth";
import { useToast } from "@/components/ui/use-toast";
import { removeStorageTokens } from "@/utils/remove-storage-tokens";
import { useState } from "react";
import { useAppDispatch } from "../redux";
import { userSliceActions } from "@/features/user";

interface Data {
  loading: boolean;
}

export default function useLogout() {
  const [logoutData, setLogoutData] = useState<Data>({
    loading: false,
  });
  const { toast } = useToast();
  const dispatch = useAppDispatch();

  async function logout() {
    if (typeof window === "undefined") return;
    const refreshToken = localStorage.getItem("refresh_token");
    const accessToken = sessionStorage.getItem("access_token");
    if (logoutData.loading || !refreshToken || !accessToken) return;
    setLogoutData((prev) => ({ ...prev, loading: true }));
    const axiosRes = await authFetch.logout(
      {
        token: refreshToken,
      },
      accessToken
    );
    removeStorageTokens();
    toast({
      title: "In progress!",
      description: axiosRes.data.message,
    });
    dispatch(userSliceActions.logout());
    setLogoutData((prev) => ({ ...prev, loading: false }));
  }

  return { logoutData, setLogoutData, logout };
}
