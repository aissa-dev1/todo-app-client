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
import { Switch } from "../ui/switch";
import { Button } from "../ui/button";
import useRegister from "@/hooks/auth/use-register";
import Loader from "../loader";

export default function RegisterCard() {
  const { registerData, setRegisterData, register } = useRegister();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Join us today!</CardTitle>
        <CardDescription>
          We were looking for people like you to join.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="email" className="w-fit">
            Email
          </Label>
          <Input
            id="email"
            type="text"
            placeholder="youraddress@mail.com"
            value={registerData.email}
            onChange={(e) => {
              setRegisterData((prev) => ({ ...prev, email: e.target.value }));
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
            value={registerData.password}
            onChange={(e) => {
              setRegisterData((prev) => ({
                ...prev,
                password: e.target.value,
              }));
            }}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="userName" className="w-fit">
            User Name
          </Label>
          <Input
            id="userName"
            type="text"
            placeholder="Someone"
            value={registerData.userName}
            onChange={(e) => {
              setRegisterData((prev) => ({
                ...prev,
                userName: e.target.value,
              }));
            }}
          />
        </div>
        <div className="flex items-center justify-between gap-2">
          <Label>Agree to our terms & privacy</Label>
          <Switch
            checked={registerData.termsAgree}
            onClick={() => {
              setRegisterData((prev) => ({
                ...prev,
                termsAgree: !prev.termsAgree,
              }));
            }}
          />
        </div>
      </CardContent>
      <CardContent className="flex flex-col-reverse gap-2 md:grid md:grid-cols-2 md:gap-4">
        <Link href="/">
          <Button className="w-full" variant="outline">
            Home
          </Button>
        </Link>
        <Button
          onClick={async () => {
            await register();
          }}
        >
          {registerData.loading ? (
            <Loader childClassName="border-blue-500" />
          ) : (
            "Join"
          )}
        </Button>
      </CardContent>
    </Card>
  );
}
