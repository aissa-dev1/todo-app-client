import { cn } from "@/lib/utils";
import { ComponentProps } from "react";
import Container from "./container";

interface Props extends ComponentProps<"div"> {
  title: string;
}

export default function NavBar({ className, title, children, ...rest }: Props) {
  return (
    <div
      className={cn(
        "fixed top-0 left-0 w-full flex flex-col justify-center h-24 shadow-sm shadow-white/10 bg-opacity-25 backdrop-blur-lg backdrop-filter z-10",
        className
      )}
      {...rest}
    >
      <Container className="flex flex-col gap-1">
        <h3 className="text-lg font-medium">{title}</h3>
      </Container>
    </div>
  );
}
