"use client";

import { usersFetch } from "@/api/users";
import { removeStorageTokens } from "@/utils/remove-storage-tokens";
import { useAppDispatch, useAppSelector } from "../redux";
import { userSliceActions } from "@/features/user";

export default function useAccessProfile() {
  const userState = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  async function accessProfile(accessToken: string | null) {
    if (typeof window === "undefined" || !accessToken || userState.fetched) {
      return;
    }
    try {
      const axiosRes = await usersFetch.accessProfile(accessToken);
      dispatch(
        userSliceActions.login({
          ...axiosRes.data.profile,
          sub: axiosRes.data.profile._id,
        })
      );
      dispatch(userSliceActions.disableFetch());
      dispatch(userSliceActions.setLoading(false));
    } catch (error) {
      removeStorageTokens();
      dispatch(userSliceActions.logout());
      dispatch(userSliceActions.setLoading(false));
    }
  }

  return { accessProfile };
}
