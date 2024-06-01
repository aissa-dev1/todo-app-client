"use client";

import { authFetch } from "@/api/auth";
import { removeStorageTokens } from "@/utils/remove-storage-tokens";
import { useAppDispatch, useAppSelector } from "../redux";
import { userSliceActions } from "@/features/user";

export default function useRefreshAccessToken() {
  const userState = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  async function refreshAccessToken() {
    if (typeof window === "undefined") return;
    const refreshToken = localStorage.getItem("refresh_token");
    if (!refreshToken || userState.fetched) return;
    try {
      dispatch(userSliceActions.setLoading(true));
      const axiosRes = await authFetch.refreshAccessToken({
        token: refreshToken,
      });
      sessionStorage.setItem("access_token", axiosRes.data.accessToken);
    } catch (error: any) {
      removeStorageTokens();
      dispatch(userSliceActions.setLoading(false));
    }
  }

  return { refreshAccessToken };
}
