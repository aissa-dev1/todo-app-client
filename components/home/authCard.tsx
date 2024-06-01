"use client";

import Link from "next/link";
import { Card, CardDescription, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { useAppSelector } from "@/hooks/redux";

export default function AuthCard() {
  const userState = useAppSelector((state) => state.user);

  if (userState.authenticated || userState.loading) return null;

  return (
    <Card className="flex flex-col gap-3 p-6 bg-gradient-to-r from-blue-700/5 to-purple-700/15">
      <CardTitle>Join our family today!</CardTitle>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <CardDescription>You do have an account?</CardDescription>
          <Link href="/login">
            <Button className="w-full">Login</Button>
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <CardDescription>You do not have an account?</CardDescription>
          <Link href="/register">
            <Button variant="outline" className="w-full">
              Create account
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}
