import { MutableRefObject } from "react";

const scrollToSection = (ref: MutableRefObject<HTMLDivElement | null>) => {
  ref?.current?.scrollIntoView({ behavior: "smooth" });
};

export default scrollToSection;
