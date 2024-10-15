"use client";

import NavBar from "@/components/NavBar";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Lenis from "@studio-freight/lenis";
import { useEffect, useRef } from "react";
import PortfolioContext from "./context/PortfolioContext";
import ContactMe from "./pages/ContactMe";

export default function Home() {
  const homeRef = useRef<null | HTMLDivElement>(null);
  const projectsRef = useRef<null | HTMLDivElement>(null);
  const contactMeRef = useRef<null | HTMLDivElement>(null);

  // Lenis provides a smooth scroll
  useEffect(() => {
    window.scrollTo(0, 0);
    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, []);

  return (
    <PortfolioContext.Provider value={{ homeRef, projectsRef, contactMeRef }}>
      <main className="flex relative flex-col flex-center items-center justify-start min-h-screen w-full">
        <NavBar />
        <AboutMe />
        <Projects />
        <ContactMe />
      </main>
    </PortfolioContext.Provider>
  );
}
