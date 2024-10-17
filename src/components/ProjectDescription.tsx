import { motion } from "framer-motion";

export default function ProjectDescription({ children }: { children: string }) {
  return (
    <div className="h-[14rem] xl:h-[24rem] 2xl:mt-[-4.5rem]">
      <motion.span className="bebas text-[0.95rem] h800:text-[1.2rem] md:text-[1.5rem] 2xl:text-[2rem] text-purple-600">
        Description:{" "}
      </motion.span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        key={children}
        className="bebas text-[0.95rem] m-[5px] h800:text-[1.2rem] md:text-[1.5rem] 2xl:text-[2rem]"
      >
        {children}
      </motion.span>
    </div>
  );
}
