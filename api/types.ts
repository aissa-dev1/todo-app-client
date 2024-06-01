export type RegisterData = {
  email: string;
  password: string;
  userName: string;
};

export type LoginData = {
  email: string;
  password: string;
};

export type RefreshAccessTokenData = {
  token: string;
};

export type LogoutData = {
  token: string;
};

export type CreateTaskData = {
  userId: string;
  title: string;
  description: string;
};

export type UpdateTaskData = {
  title: string;
  description: string;
};
