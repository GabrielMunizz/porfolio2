"use client";
import LinkRender from "@/components/LinkRender";
import ProjectDescription from "@/components/ProjectDescription";
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
      <div
        className="
          flex flex-col justify-start w-full h-full 
          md:flex-row md:justify-around 
          md:items-center md:relative
        "
      >
        <AnimatePresence>
          <div
            id="projects"
            className="
              flex flex-col justify-around 
              w-[100%] h-full lg:w-[50%] 
              lg:justify-start lg:mt-[2rem] 
              2xl:w-[40%] 2xl:mt-0
            "
          >
            <div
              className="
                flex flex-row justify-between w-full 
                md:justify-around
              "
            >
              <ProjectButton handleIndex={handleIndex} direction="previous">
                <MdNavigateBefore />
              </ProjectButton>
              <ProjectTitle>
                {projects[projNumber].title}
              </ProjectTitle>
              <ProjectButton handleIndex={handleIndex} direction="next">
                <MdNavigateNext />
              </ProjectButton>
            </div>

            <div
              className="
                flex flex-col items-center w-full h-[30%] 
                md:h-[40%] xl:hidden 
                h800:my-[-10%] md:my-0
              "
            >
              <motion.div
                className="
                  overflow-hidden relative 
                  w-[90%] h-full 
                  lg:w-[90%] lg:h-[60%] 
                  rounded-md
                "
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                key={projNumber}
              >
                <Image
                  id="projectImage"
                  fill
                  className="object-cover"
                  src={projects[projNumber].image}
                  alt={projects[projNumber].title}
                />
              </motion.div>
            </div>

            <div
              className="
                flex flex-col justify-start items-start 
                h-[20rem] p-[1rem] 
                lg:h-[25rem] lg:mt-[5rem] 
                xl:h-[30rem] xl:py-[4rem] 
                2xl:p-2 2xl:h-[24rem] 2xl:mt-[8rem]                
              "
            >
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

          <div
            className="
              xl:flex flex-col justify-center items-center 
              w-[50%] h-[80%] 
              my-[auto] hidden
            "
          >
            <motion.div
              className="
                overflow-hidden relative 
                w-[50%] h-[10%] 
                lg:w-[90%] lg:h-[60%]
              "
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              key={projNumber}
            >
              <Image
                id="projectImage"
                fill
                className="object-cover"
                src={projects[projNumber].image}
                alt={projects[projNumber].title}
              />
            </motion.div>
          </div>
        </AnimatePresence>
      </div>
    </Container>
  );
}
