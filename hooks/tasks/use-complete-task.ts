"use client";

import { tasksFetch } from "@/api/tasks";
import { useAppDispatch } from "../redux";
import { tasksSliceActions } from "@/features/tasks";
import { useToast } from "@/components/ui/use-toast";

export default function useCompleteTask() {
  const accessToken = sessionStorage.getItem("access_token")!;
  const { toast } = useToast();
  const dispatch = useAppDispatch();

  async function completeTask(taskId: string) {
    const axiosRes = await tasksFetch.completeTask(taskId, accessToken);
    dispatch(tasksSliceActions.completeTask(taskId));
    toast({
      title: "Done!",
      description: axiosRes.data.message,
    });
  }

  return { completeTask };
}
