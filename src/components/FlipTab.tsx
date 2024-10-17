"use client"

import scrollToSection from "@/utils/scrollToSection";
import { motion } from "framer-motion";
import { MutableRefObject, useState } from "react";

type TabProps = {
  children: string;
  targetRef: MutableRefObject<HTMLDivElement | null>;
};

export default function FlipTab({ children, targetRef }: TabProps) {
  const [isTaped, setIsTaped] = useState(false);
  
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

  const handleTap = () => {
    setTimeout(() => {
      setIsTaped(false);
    }, DURATION * 1500);
  };
  
  return (
    <motion.li
      initial="initial"
      whileHover="hovered"      
      animate={isTaped ? "hovered" : "initial"}
      onTapStart={() => setIsTaped(true)}
      onTap={handleTap}
      className="relative block bebas overflow-hidden whitespace-nowrap uppercase mt-1 text-3xl sm:text-7xl md:text8xl md:mt-2 lg:9xl hover:cursor-pointer"
      style={{
        lineHeight: 0.9,
      }}
      onClick={() => scrollToSection(targetRef)}
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
