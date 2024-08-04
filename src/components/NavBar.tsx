import { useContext } from "react";
import FlipTab from "./FlipTab";
import PorfolioContext from "@/app/context/PortfolioContext";

export default function NavBar() {
  const { homeRef, projectsRef, contactMeRef } = useContext(PorfolioContext);
  return (
    <nav className="flex fixed justify-center items-center w-1/3 border-2 border-white mt-4 min-h-20 rounded-lg bg-black z-50">
      <ul className="flex flex-row justify-around min-w-full">
        <FlipTab targetRef={homeRef}>Home</FlipTab>
        <FlipTab targetRef={projectsRef}>Projects</FlipTab>
        <FlipTab targetRef={contactMeRef}>Contact-me</FlipTab>
      </ul>
    </nav>
  );
}
