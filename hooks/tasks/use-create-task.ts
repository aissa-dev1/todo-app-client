"use client";

import { tasksFetch } from "@/api/tasks";
import { CreateTaskData } from "@/api/types";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux";
import { useToast } from "@/components/ui/use-toast";
import { tasksSliceActions } from "@/features/tasks";

interface Data extends Omit<CreateTaskData, "userId"> {
  loading: boolean;
}

export default function useCreateTask() {
  const userState = useAppSelector((state) => state.user);
  const [createTaskData, setCreateTaskData] = useState<Data>({
    title: "",
    description: "",
    loading: false,
  });
  const { toast } = useToast();
  const dispatch = useAppDispatch();

  async function createTask() {
    // if (typeof window === "undefined") return;
    const accessToken = sessionStorage.getItem("access_token")!;
    if (createTaskData.loading) return;
    try {
      setCreateTaskData((prev) => ({ ...prev, loading: true }));
      const axiosRes = await tasksFetch.createOne(
        {
          userId: userState.payload.sub,
          title: createTaskData.title,
          description: createTaskData.description,
        },
        accessToken
      );
      dispatch(tasksSliceActions.createTask(axiosRes.data.task));
      toast({
        title: "Done!",
        description: axiosRes.data.message,
      });
      setCreateTaskData((prev) => ({
        ...prev,
        title: "",
        description: "",
        loading: false,
      }));
    } catch (error: any) {
      toast({
        title: "Cannot create task!",
        description: error.response.data.message,
        variant: "destructive",
      });
      setCreateTaskData((prev) => ({ ...prev, loading: false }));
    }
  }

  return { createTaskData, setCreateTaskData, createTask };
}
