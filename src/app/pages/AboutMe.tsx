import Description from "@/components/Description";
import DownloadCV from "@/components/DownloadCV";
import Stacks from "@/components/Stacks";
import Title from "@/components/Title";
import Container from "@/components/Container";
import { useContext } from "react";
import PorfolioContext from "../context/PortfolioContext";
// COLOCAR TEXTO DESCRITIVO E STACKS ABAIXO DE ABOUT ME

export default function AboutMe() {
  const { homeRef } = useContext(PorfolioContext);
  return (
    <Container containerRef={homeRef}>
      <div className="flex flex-col items-center w-[40%] h-full">
        <Title>About Me</Title>
        <Description />
      </div>
      <div className="w-[40%] h-full text-center">
        <Title>Image</Title>
      </div>
      <div className="flex flex-col justify-center items-center absolute w-full bottom-0">
        <Stacks />
        <DownloadCV />
      </div>
    </Container>
  );
}
