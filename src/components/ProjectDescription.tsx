import { motion } from "framer-motion";

export default function ProjectDescription({ children }: { children: string }) {
  return (
    <div className="h-[14rem] xl:h-auto 2xl:w-[80%] mb-[2rem]">
      <motion.span className="bebas text-[0.95rem] h800:text-[1rem] md:text-[1.5rem] text-purple-600">
        Description:{" "}
      </motion.span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        key={children}
        className="bebas text-[0.95rem] m-[5px] h800:text-[1rem] md:text-[1.5rem]"
      >
        {children}
      </motion.span>
    </div>
  );
}
