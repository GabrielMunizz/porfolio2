import useMeasure from "react-use-measure";
import LogoRender from "./LogoRender";
import stacks from "@/utils/stacks";
import { animate, useMotionValue, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Stacks() {
  const FAST_DURATION = 25;
  const SLOW_DURATION = 75;
  const [duration, setDuration] = useState(FAST_DURATION);

  // useMeasure gets the width of the ref component
  const [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);

  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    let controls;
    const finalPosition = -width / 2 - 8;

    // We have a change of state here, so the component will render again. This will create a glitch when hovering over the stack card.
    // So we'll create a condition here: if hovers during the animation, finishes the animation before component renders.

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender((prev) => !prev);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return controls?.stop;
  }, [xTranslation, width, duration, rerender, mustFinish]);

  return (
    <div
      className="
        flex flex-col justify-center items-center 
        md:items-start md:w-[98%] 
        lg:w-[39rem] 2xl:w-[50rem] 
        2xl:mb-[2rem]
      "
    >
      <h2
        className="
          bebas hidden h800:block 
          text-[1.5rem] h800:mb-[-1.5rem] 
          md:pl-4 md:mb-0 md:text-[3rem] 
          text-center h-[4rem] 
          lg:text-[2.5rem] lg:mb-[-2rem]
        "
      >
        Stacks:
      </h2>

      <div
        className="
          w-[99%] md:w-[99%] 
          md:mx-[auto] relative 
          overflow-hidden h-[7rem] 
          h800:h-[8rem] md:h-[10rem]
        "
      >
        <motion.div
          style={{ x: xTranslation }}
          className="flex absolute left-0 gap-4 z-10"
          ref={ref}
          onHoverStart={() => {
            setMustFinish(true);
            setDuration(SLOW_DURATION);
          }}
          onHoverEnd={() => {
            setMustFinish(true);
            setDuration(FAST_DURATION);
          }}
        >
          {[...stacks, ...stacks].map((item, i) => (
            <LogoRender key={i} url={item.url} title={item.title} />
          ))}
        </motion.div>

        <div
          className="
            absolute bg-gradient-to-r 
            from-black via-black/80 
            to-transparent z-10 
            h-[70%] md:h-[90%] 
            top-[10%] left-[-2%] 
            md:left-[-1%] w-[12%]
          "
        />

        <div
          className="
            absolute bg-gradient-to-l 
            from-black via-black 
            to-transparent z-10 
            h-[70%] md:h-[90%] 
            top-[10%] right-[-2%] 
            md:right-[-4.5%] 
            lg:right-[-2%] w-[12%]
          "
        />
      </div>
    </div>
  );
}
