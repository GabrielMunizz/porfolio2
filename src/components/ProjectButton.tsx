import React from "react";

type ProjectButtonProps = {
  children: React.ReactNode;
  handleIndex: (direction: string) => void;
  direction: string;
};

export default function ProjectButton({
  children,
  handleIndex,
  direction,
}: ProjectButtonProps) {
  return (
    <button
      className="text-[3rem] hover:text-purple-600 hover:animate-none duration-300 animate-pulse"
      onClick={() => handleIndex(direction)}
    >
      {children}
    </button>
  );
}
