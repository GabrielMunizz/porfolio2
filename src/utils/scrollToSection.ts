import { MutableRefObject } from "react";

const scrollToSection = (ref: MutableRefObject<HTMLDivElement | null>) => {
  ref?.current?.scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "center",
  });
};

export default scrollToSection;
