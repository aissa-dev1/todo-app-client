"use client";

import { tasksFetch } from "@/api/tasks";
import { useAppDispatch } from "../redux";
import { tasksSliceActions } from "@/features/tasks";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

interface Data {
  loading: boolean;
}

export default function useDeleteTask() {
  const accessToken = sessionStorage.getItem("access_token")!;
  const [deleteTaskData, setDeleteTaskData] = useState<Data>({
    loading: false,
  });
  const dispatch = useAppDispatch();
  const { toast } = useToast();

  async function deleteTask(taskId: string) {
    if (deleteTaskData.loading) return;
    setDeleteTaskData((prev) => ({ ...prev, loading: true }));
    const axiosRes = await tasksFetch.deleteTask(taskId, accessToken);
    dispatch(tasksSliceActions.deleteTask(taskId));
    toast({
      title: "Done!",
      description: axiosRes.data.message,
    });
    setDeleteTaskData((prev) => ({ ...prev, loading: false }));
  }

  return { deleteTaskData, setDeleteTaskData, deleteTask };
}
