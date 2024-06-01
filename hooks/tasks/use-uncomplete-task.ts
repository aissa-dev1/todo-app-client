"use client";

import { tasksFetch } from "@/api/tasks";
import { useAppDispatch } from "../redux";
import { tasksSliceActions } from "@/features/tasks";
import { useToast } from "@/components/ui/use-toast";

export default function useUnCompleteTask() {
  const accessToken = sessionStorage.getItem("access_token")!;
  const { toast } = useToast();
  const dispatch = useAppDispatch();

  async function uncompleteTask(taskId: string) {
    const axiosRes = await tasksFetch.uncompleteTask(taskId, accessToken);
    dispatch(tasksSliceActions.uncompleteTask(taskId));
    toast({
      title: "Done!",
      description: axiosRes.data.message,
    });
  }

  return { uncompleteTask };
}
