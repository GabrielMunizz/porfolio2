"use client";

import React, { MutableRefObject, useRef } from "react";
import { useScroll, motion } from "framer-motion";

export default function Container({
  children,
  containerRef,
}: {
  children: React.ReactNode;
  containerRef: React.RefObject<HTMLDivElement>;
}) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });
  return (
    <motion.div
      ref={containerRef}
      style={{ scale: scrollYProgress, opacity: scrollYProgress }}
      className="flex flex-col justify-center items-center min-w-full min-h-[100vh]"
    >
      <div className="flex flex-row justify-around items-center border-2 border-white w-[80%] h-[85vh] mt-[10vh] shadow-[4px_4px_0px_white] rounded-lg">
        {children}
      </div>
    </motion.div>
  );
}
