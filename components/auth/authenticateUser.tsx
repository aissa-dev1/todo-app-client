"use client";

import useAccessProfile from "@/hooks/user/use-access-profile";
import useFetchTasks from "@/hooks/tasks/use-fetch-tasks";
import useRefreshAccessToken from "@/hooks/auth/use-refresh-access-token";
import { PropsWithChildren, useEffect } from "react";

interface Props extends PropsWithChildren {}

export default function AuthenticateUser({ children }: Props) {
  const { refreshAccessToken } = useRefreshAccessToken();
  const { accessProfile } = useAccessProfile();
  useFetchTasks();

  async function bootstrap() {
    if (typeof window === "undefined") return;
    await refreshAccessToken();
    const accessToken = sessionStorage.getItem("access_token");
    await accessProfile(accessToken);
  }

  useEffect(() => {
    bootstrap();
  }, []);

  return <>{children}</>;
}
