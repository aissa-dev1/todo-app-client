"use client";

import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import useLogin from "@/hooks/auth/use-login";
import Loader from "../loader";

export default function LoginCard() {
  const { loginData, setLoginData, login } = useLogin();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome back!</CardTitle>
        <CardDescription>We were eagerly awaiting your return.</CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-1 gap-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="email" className="w-fit">
            Email
          </Label>
          <Input
            id="email"
            type="text"
            placeholder="youraddress@mail.com"
            value={loginData.email}
            onChange={(e) => {
              setLoginData((prev) => ({
                ...prev,
                email: e.target.value,
              }));
            }}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="password" className="w-fit">
            Password
          </Label>
          <Input
            id="password"
            type="password"
            placeholder="@pass@word"
            value={loginData.password}
            onChange={(e) => {
              setLoginData((prev) => ({
                ...prev,
                password: e.target.value,
              }));
            }}
          />
        </div>
        <div className="flex flex-col-reverse gap-2 md:grid md:grid-cols-2 md:gap-4">
          <Link href="/">
            <Button className="w-full" variant="outline">
              Home
            </Button>
          </Link>
          <Button
            onClick={async () => {
              await login();
            }}
          >
            {loginData.loading ? (
              <Loader childClassName="border-blue-500" />
            ) : (
              "Continue"
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
