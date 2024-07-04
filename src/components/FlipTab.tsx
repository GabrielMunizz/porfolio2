"use client";

import { motion } from "framer-motion";

type TabProps = {
  children: string;
};

export default function FlipTab({ children }: TabProps) {
  const variant1 = {
    initial: { y: 0 },
    hovered: { y: "-100%" },
  };
  const variant2 = {
    initial: { y: "100%" },
    hovered: { y: 0 },
  };

  const DURATION = 0.35;
  const STAGGER = 0.03;
  return (
    <motion.li
      initial="initial"
      whileHover="hovered"
      className="relative block bebas overflow-hidden whitespace-nowrap uppercase mt-2 sm:text-7xl md:text8xl lg:9xl hover:cursor-pointer"
      style={{
        lineHeight: 0.85,
      }}
    >
      <div>
        {children.split("").map((letter, i) => {
          return (
            <motion.span
              transition={{
                duration: DURATION,
                delay: STAGGER * i,
                ease: "easeInOut",
              }}
              className="inline-block"
              variants={variant1}
              key={i}
            >
              {letter}
            </motion.span>
          );
        })}
      </div>

      <div className="absolute inset-0">
        {children.split("").map((letter, i) => {
          return (
            <motion.span
              transition={{
                duration: DURATION,
                delay: STAGGER * i,
                ease: "easeInOut",
              }}
              className="inline-block text-purple-600"
              variants={variant2}
              key={i}
            >
              {letter}
            </motion.span>
          );
        })}
      </div>
    </motion.li>
  );
}
