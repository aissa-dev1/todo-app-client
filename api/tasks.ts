import axios from "axios";
import { CreateTaskData, UpdateTaskData } from "./types";

class TasksFetch {
  async findUserTasks(userId: string, accessToken: string) {
    const axiosRes = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/tasks/users/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return axiosRes;
  }

  async createOne(data: CreateTaskData, accessToken: string) {
    const axiosRes = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/tasks`,
      data,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return axiosRes;
  }

  async updateTask(data: UpdateTaskData, taskId: string, accessToken: string) {
    const axiosRes = await axios.patch(
      `${process.env.NEXT_PUBLIC_API_URL}/tasks/update-task/${taskId}`,
      data,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return axiosRes;
  }

  async completeTask(taskId: string, accessToken: string) {
    const axiosRes = await axios.patch(
      `${process.env.NEXT_PUBLIC_API_URL}/tasks/complete-task/${taskId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return axiosRes;
  }

  async uncompleteTask(taskId: string, accessToken: string) {
    const axiosRes = await axios.patch(
      `${process.env.NEXT_PUBLIC_API_URL}/tasks/uncomplete-task/${taskId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return axiosRes;
  }

  async deleteTask(taskId: string, accessToken: string) {
    const axiosRes = await axios.delete(
      `${process.env.NEXT_PUBLIC_API_URL}/tasks/${taskId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return axiosRes;
  }

  async deleteTasks(userId: string, accessToken: string) {
    const axiosRes = await axios.delete(
      `${process.env.NEXT_PUBLIC_API_URL}/tasks/users/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return axiosRes;
  }
}

export const tasksFetch = new TasksFetch();
