"use client";

import React from "react";
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
      className="flex flex-col justify-center items-center min-w-full min-h-screen"
    >
      <div
        className="
          flex flex-row justify-around items-center relative
          border-2 border-white rounded-lg
          w-[90%] sm:w-[80%] md:w-[90%] lg:w-[95%] xl:w-[95%] 2xl:w-[80%]
          h-[85vh] sm:h-[80vh] md:h-[85vh]
          mt-[5vh] sm:mt-[8vh] md:mt-[10vh] lg:mt-[15vh] 2xl:mt-[10vh]
        "
      >
        {children}
      </div>
    </motion.div>
  );
}
