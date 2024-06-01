export type UserAccessPayload = {
  sub: string;
  email: string;
  userName: string;
  joinedAt: number;
};

export type TaskType = {
  _id: string;
  userId: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
};

export type updateTaskPayload = {
  id: string;
  title: string;
  description: string;
};
