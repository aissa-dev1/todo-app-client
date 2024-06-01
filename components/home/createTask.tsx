"use client";

import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import AuthPopup from "../auth/authPopup";
import Loader from "../loader";
import { useAppSelector } from "@/hooks/redux";
import useCreateTask from "@/hooks/tasks/use-create-task";

export default function CreateTask() {
  const userState = useAppSelector((state) => state.user);
  const { createTaskData, setCreateTaskData, createTask } = useCreateTask();

  if (userState.loading) {
    return (
      <div className="flex items-center justify-center">
        <Loader />
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 lg:items-end gap-3">
      <div className="flex flex-col gap-2 md:col-span-2 lg:col-span-5">
        <Label htmlFor="title" className="w-fit">
          Task title
        </Label>
        <Input
          id="title"
          type="text"
          placeholder="Do something"
          value={createTaskData.title}
          onChange={(e) => {
            setCreateTaskData((prev) => ({ ...prev, title: e.target.value }));
          }}
        />
      </div>
      <div className="flex flex-col gap-2 md:col-span-2 lg:col-span-5">
        <Label htmlFor="description" className="w-fit">
          Task description
        </Label>
        <Input
          id="description"
          type="text"
          placeholder="Why you should do something"
          value={createTaskData.description}
          onChange={(e) => {
            setCreateTaskData((prev) => ({
              ...prev,
              description: e.target.value,
            }));
          }}
        />
      </div>
      <div className="lg:col-span-2">
        {userState.authenticated ? (
          <Button
            className="w-full"
            onClick={async () => {
              await createTask();
            }}
          >
            {createTaskData.loading ? (
              <Loader childClassName="border-black" />
            ) : (
              "Create"
            )}
          </Button>
        ) : (
          <AuthPopup>
            <Button className="w-full">Create</Button>
          </AuthPopup>
        )}
      </div>
    </div>
  );
}
