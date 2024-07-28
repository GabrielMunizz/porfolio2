import { createContext, MutableRefObject } from "react";

export type PortfolioContextType = {
  homeRef: MutableRefObject<HTMLDivElement | null>;
  projectsRef: MutableRefObject<HTMLDivElement | null>;
  contactMeRef: MutableRefObject<HTMLDivElement | null>;
};

const PorfolioContext = createContext({} as PortfolioContextType);

export default PorfolioContext;
