"use client";
import { ReactNode, useRef } from "react";

type TabProps = {
  children: ReactNode;
};

export default function Tab({ children }: TabProps) {
  const ref = useRef<HTMLAnchorElement | null>(null);
  return (
    <li className="text-2xl hover:bg-purple-700 hover:cursor-pointer">
      {children}
    </li>
  );
}
