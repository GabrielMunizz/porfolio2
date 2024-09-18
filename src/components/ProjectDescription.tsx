import { motion } from "framer-motion";

export default function ProjectDescription({ children }: { children: string }) {
  return (
    <div className="h-[14rem] xl:h-[24rem]">
      <span className="bebas text-[1rem] md:text-[1.5rem] xl:text-[2rem] text-purple-600">
        Description:{" "}
      </span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        key={children}
        className="bebas text-[1rem] m-[5px] md:text-[1.5rem] xl:text-[2rem]"
      >
        {children}
      </motion.span>
    </div>
  );
}
