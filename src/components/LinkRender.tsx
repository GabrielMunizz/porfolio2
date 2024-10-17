import { motion } from "framer-motion";

type LinkRenderProps = {
  children: string;
  category: string;
};

export default function LinkRender({ children, category }: LinkRenderProps) {
  return (
    <div className="flex flex-row">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        key={category}
        className="bebas text-[0.95rem] h800:text-[1.2rem] md:text-[1.5rem] 2xl:text-[2rem] text-purple-600"
      >
        {`${category}:`}
      </motion.p>
      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        key={children}
        className="bebas text-[0.95rem] h800:text-[1.1rem] md:text-[1.5rem] 2xl:text-[2rem] ml-[5px]"
        href={children}
        target="_blank"
      >
        {children}
      </motion.a>
    </div>
  );
}
