import { ComponentProps } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "../ui/button";

interface Props extends ComponentProps<"div"> {}

export default function AuthPopup({ className, children, ...rest }: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className={cn(className)} {...rest}>
          {children}
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Please Authenticate to continue.</DialogTitle>
          <DialogDescription>
            Once you join Todo App, you can complete this action.
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-1 gap-2">
          <Link href="/login">
            <Button className="w-full">Login</Button>
          </Link>
          <Link href="/register">
            <Button variant="outline" className="w-full">
              Create account
            </Button>
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
}
