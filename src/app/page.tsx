"use client";

import NavBar from "@/components/NavBar";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Lenis from "@studio-freight/lenis";
import { useEffect, useRef } from "react";
import PortfolioContext from "./context/PortfolioContext";

export default function Home() {
  const homeRef = useRef<null | HTMLDivElement>(null);
  const projectsRef = useRef<null | HTMLDivElement>(null);

  // Lenis provides a smooth scroll
  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, []);
  return (
    <PortfolioContext.Provider value={{ homeRef, projectsRef }}>
      <main className="flex relative flex-col flex-center items-center justify-start min-h-screen w-full">
        <NavBar />
        <AboutMe />
        <Projects />
      </main>
    </PortfolioContext.Provider>
  );
}
