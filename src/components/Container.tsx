import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col justify-center items-center min-w-full min-h-[100vh]">
      <div className="flex flex-row justify-around items-center border-2 border-white w-[80%] h-[85vh] mt-[10vh] shadow-[4px_4px_0px_white] rounded-lg">
        {children}
      </div>
    </div>
  );
}
