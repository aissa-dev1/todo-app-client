"use client";

import { tasksFetch } from "@/api/tasks";
import { tasksSliceActions } from "@/features/tasks";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux";

export default function useFetchTasks() {
  const userState = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  async function fetchTasks() {
    if (typeof window === "undefined") return;
    const accessToken = sessionStorage.getItem("access_token");
    if (!userState.payload.sub || !accessToken) return;
    try {
      dispatch(tasksSliceActions.setLoading(true));
      const axiosRes = await tasksFetch.findUserTasks(
        userState.payload.sub,
        accessToken
      );
      dispatch(tasksSliceActions.updateTasks(axiosRes.data.tasks));
      dispatch(tasksSliceActions.setLoading(false));
    } catch (error: any) {
      dispatch(tasksSliceActions.setLoading(false));
    }
  }

  useEffect(() => {
    fetchTasks();
  }, [userState]);
}
