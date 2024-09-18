import { motion } from "framer-motion";

export default function ProjectTitle({ children }: { children: string }) {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      key={children}
      className="bebas text-[2rem] md:text-[3.5rem] xl:text-[5rem]"
    >
      {children}
    </motion.p>
  );
}
