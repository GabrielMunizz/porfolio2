import ProjectDescription from "@/components/ProjectDescription";
import ProjectTitle from "@/components/ProjectTitle";
import Title from "@/components/Title";
import { projects } from "@/utils/projects";
import Image from "next/image";

export default function Projects() {
  return (
    <div className="flex flex-col justify-center items-center min-w-full min-h-[100vh]">
      <div className="flex flex-row justify-around items-start border-2 border-white w-[80%] h-[85vh] mt-[9vh] rounded-lg">
        <div className="flex flex-col justify-around w-[40%]">
          <Title>Projects</Title>
          <div className="flex flex-col justify-center items-start p-[1rem] py-[10rem]">
            <ProjectTitle>{projects[0].title}</ProjectTitle>
            <ProjectDescription>
              {projects[0].descriptionEng}
            </ProjectDescription>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-[50%] h-[80%] my-[auto]">
          <Image src={projects[0].image} alt={projects[0].title} />
        </div>
      </div>
    </div>
  );
}
