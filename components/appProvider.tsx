"use client";

import { store } from "@/store";
import { PropsWithChildren } from "react";
import { Provider } from "react-redux";

interface Props extends PropsWithChildren {}

export default function AppProvider({ children }: Props) {
  return <Provider store={store}>{children}</Provider>;
}
