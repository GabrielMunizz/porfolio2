"use client";
import LinkRender from "@/components/LinkRender";
import ProjectDescription from "@/components/ProjectDescription";
import Title from "@/components/Title";
import { projects } from "@/utils/projects";
import Image from "next/image";
import { useContext, useState } from "react";
import Container from "@/components/Container";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import ProjectButton from "@/components/ProjectButton";
import { motion, AnimatePresence } from "framer-motion";
import ProjectTitle from "@/components/ProjectTitle";
import PorfolioContext from "../context/PortfolioContext";

export default function Projects() {
  const { projectsRef } = useContext(PorfolioContext);
  const [projNumber, setProjNumber] = useState(0);

  const handleIndex = (direction: string) => {
    setProjNumber((prev) => {
      if (direction === "next") {
        return prev === projects.length - 1 ? 0 : prev + 1;
      }
      return prev === 0 ? projects.length - 1 : prev - 1;
    });
  };

  return (
    <Container containerRef={projectsRef}>
      <AnimatePresence>
        <div id="projects" className="flex flex-col justify-around w-[40%]">
          <div className="flex flex-row justify-between">
            <ProjectButton handleIndex={handleIndex} direction="previous">
              <MdNavigateBefore />
            </ProjectButton>
            <ProjectTitle>{projects[projNumber].title}</ProjectTitle>
            <ProjectButton handleIndex={handleIndex} direction="next">
              <MdNavigateNext />
            </ProjectButton>
          </div>
          <div className="flex flex-col justify-center items-start h-[45rem] p-[1rem] py-[8rem]">
            <ProjectDescription>
              {projects[projNumber].descriptionEng}
            </ProjectDescription>
            <LinkRender category="Deploy">
              {projects[projNumber].deploy}
            </LinkRender>
            <LinkRender category="GitHub">
              {projects[projNumber].url}
            </LinkRender>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-[50%] h-[80%] my-[auto]">
          <motion.div
            className="overflow-hidden relative w-[90%] h-[60%] rounded-md"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            key={projNumber}
          >
            <Image
              id="projectImage"
              fill
              style={{ objectFit: "cover" }}
              src={projects[projNumber].image}
              alt={projects[projNumber].title}
            />
          </motion.div>
        </div>
      </AnimatePresence>
    </Container>
  );
}
