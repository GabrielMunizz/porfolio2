import { useContext } from "react";
import FlipTab from "./FlipTab";
import PorfolioContext from "@/app/context/PortfolioContext";

export default function NavBar() {
  const { homeRef, projectsRef, contactMeRef } = useContext(PorfolioContext);
  
  return (
    <nav
      className="
        flex fixed justify-center items-center 
        w-[90%] border-2 border-white 
        mt-4 min-h-10 rounded-lg bg-black 
        z-50 md:min-h-20 
        lg:w-4/5 xl:w-3/5 2xl:w-1/3
      "
    >
      <ul className="flex flex-row justify-around min-w-full">
        <FlipTab targetRef={homeRef}>Home</FlipTab>
        <FlipTab targetRef={projectsRef}>Projects</FlipTab>
        <FlipTab targetRef={contactMeRef}>Contact-me</FlipTab>
      </ul>
    </nav>
  );
}
