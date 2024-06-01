"use client";

import { Card, CardDescription, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { useAppSelector } from "@/hooks/redux";
import useLogout from "@/hooks/auth/use-logout";
import Loader from "../loader";

export default function WelcomeCard() {
  const userState = useAppSelector((state) => state.user);
  const { logoutData, logout } = useLogout();

  if (!userState.authenticated || userState.loading) return null;

  return (
    <Card className="flex flex-col gap-3 p-6 bg-gradient-to-r from-blue-700/5 to-purple-700/15">
      <CardTitle className="text-center xl:text-left">
        Welcome {userState.payload.userName}
      </CardTitle>
      <div className="flex items-center justify-between">
        <CardDescription>Sign out</CardDescription>
        <Button
          onClick={async () => {
            await logout();
          }}
        >
          {logoutData.loading ? <Loader /> : "Confirm"}
        </Button>
      </div>
    </Card>
  );
}
