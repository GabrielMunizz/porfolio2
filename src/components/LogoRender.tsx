import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type LogoRenderProps = {
  url: StaticImageData;
  title: string;
};

export default function LogoRender({ url, title }: LogoRenderProps) {
  const [showOverlay, setShowOverlay] = useState(false);
  return (
    <motion.div
      className="flex flex-col justify-center items-center relative min-w-[100px] min-h-[120px] my-[0.8rem]"
      onHoverStart={() => setShowOverlay(true)}
      onHoverEnd={() => setShowOverlay(false)}
    >
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            className="absolute inset-0 z-10 justify-center items-center flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute bg-black pointer-events-none opacity-50 h-full w-full " />
            <motion.h1
              className="bg-transparent text-white font-semibold text-[2rem] z-10 px-3 py-2 flex justify-center items-center"
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              exit={{ y: 10 }}
            >
              <span className="bebas">{title}</span>
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>
      <Image
        style={{ width: "100px", minHeight: "100px" }}
        src={url}
        alt={`${title} logo`}
      />
    </motion.div>
  );
}
