import NavBar from "@/components/NavBar";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";

export default function Home() {
  return (
    <main className="flex relative flex-col flex-center items-center justify-start min-h-screen w-full">
      <NavBar />
      <AboutMe />
      <Projects />
    </main>
  );
}
