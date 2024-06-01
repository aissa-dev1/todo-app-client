"use client";

import { useAppSelector } from "@/hooks/redux";
import useAccessProfile from "@/hooks/user/use-access-profile";
import useRefreshAccessToken from "@/hooks/auth/use-refresh-access-token";
import { useRouter } from "next/navigation";
import { PropsWithChildren, useEffect } from "react";

interface Props extends PropsWithChildren {}

export default function AuthGuard({ children }: Props) {
  const router = useRouter();
  const userState = useAppSelector((state) => state.user);
  const { refreshAccessToken } = useRefreshAccessToken();
  const { accessProfile } = useAccessProfile();

  async function bootstrap() {
    if (typeof window === "undefined") return;
    await refreshAccessToken();
    const accessToken = sessionStorage.getItem("access_token");
    await accessProfile(accessToken);
    if (userState.authenticated) {
      router.push("/");
    }
  }

  useEffect(() => {
    bootstrap();
  }, [userState]);

  return <>{children}</>;
}
