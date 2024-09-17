import Description from "@/components/Description";
import DownloadCV from "@/components/DownloadCV";
import Stacks from "@/components/Stacks";
import Container from "@/components/Container";
import { useContext } from "react";
import PorfolioContext from "../context/PortfolioContext";
import Image from "next/image";
import myImage from "../../assets/image.png";
import gridBG from "../../assets/grid.png";
// COLOCAR TEXTO DESCRITIVO E STACKS ABAIXO DE ABOUT ME

export default function AboutMe() {
  const { homeRef } = useContext(PorfolioContext);
  return (
    <Container containerRef={homeRef}>
      <div className="flex flex-col relative items-center w-full h-full z-10 md:w-[40%]">
        <Description />
        <div className="absolute top-16 md:top-3 md:left-0 w-[20rem] h-[20rem] md:w-[30rem] md:h-[35rem] opacity-30 rounded-[50%] overflow-hidden z-0">
          <Image className="w-full h-full" src={gridBG} alt="grid background" />
        </div>
      </div>
      <div className="hidden md:flex flex-col relative justify-start items-center w-[50%] h-full pl-[10%]">
        <Image
          className="md:rounded-[50%] md:w-[15rem] md:h-[14rem] md:mt-[1.5rem] md:z-10 md:object-cover"
          src={myImage}
          alt="Gabriel's picture"
        />
      </div>
      <div className="flex flex-col justify-center items-start absolute w-full bottom-0 pl-12 z-40 hidden">
        <Stacks />
      </div>
    </Container>
  );
}
