"use client";

import Loader from "../loader";
import Task from "./task";
import { useAppSelector } from "@/hooks/redux";

export default function Tasks() {
  const tasksState = useAppSelector((state) => state.tasks);
  const userState = useAppSelector((state) => state.user);

  if (tasksState.loading) {
    return (
      <div className="flex items-center justify-center">
        <Loader childClassName="border-blue-500" />
      </div>
    );
  }

  if (userState.authenticated) {
    return tasksState.list.length > 0 ? (
      <div className="grid grid-cols-1 gap-4 pb-4">
        {tasksState.list.map((task) => (
          <Task key={task._id} {...task} />
        ))}
      </div>
    ) : (
      <p className="text-center text-sm font-bold text-slate-500">
        No tasks to show for the moment
      </p>
    );
  }

  return (
    <p className="text-center text-sm font-bold text-slate-500">
      Please authenticate to show your tasks
    </p>
  );
}
