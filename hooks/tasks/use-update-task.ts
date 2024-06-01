"use client";

import { tasksFetch } from "@/api/tasks";
import { useAppDispatch } from "../redux";
import { tasksSliceActions } from "@/features/tasks";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

interface Data {
  title: string;
  description: string;
  loading: boolean;
}

export default function useUpdateTask() {
  const accessToken = sessionStorage.getItem("access_token")!;
  const [updateTaskData, setUpdateTaskData] = useState<Data>({
    title: "",
    description: "",
    loading: false,
  });
  const dispatch = useAppDispatch();
  const { toast } = useToast();

  async function updateTask(taskId: string) {
    if (updateTaskData.loading) return;
    try {
      setUpdateTaskData((prev) => ({ ...prev, loading: true }));
      const axiosRes = await tasksFetch.updateTask(
        {
          title: updateTaskData.title,
          description: updateTaskData.description,
        },
        taskId,
        accessToken
      );
      dispatch(
        tasksSliceActions.updateTask({
          id: taskId,
          title: updateTaskData.title,
          description: updateTaskData.description,
        })
      );
      toast({
        title: "Done!",
        description: axiosRes.data.message,
      });
      setUpdateTaskData((prev) => ({
        ...prev,
        title: "",
        description: "",
        loading: false,
      }));
    } catch (error: any) {
      toast({
        title: "Cannot update task!",
        description: error.response.data.message,
        variant: "destructive",
      });
      setUpdateTaskData((prev) => ({
        ...prev,
        loading: false,
      }));
    }
  }

  return { updateTaskData, setUpdateTaskData, updateTask };
}
