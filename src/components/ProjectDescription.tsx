import { motion } from "framer-motion";

export default function ProjectDescription({ children }: { children: string }) {
  return (
    <div className="h-[24rem]">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        key={children}
        className="bebas text-[2rem] m-[5px]"
      >
        <span className="bebas text-[2rem] text-purple-600">Description: </span>
        {children}
      </motion.p>
    </div>
  );
}
