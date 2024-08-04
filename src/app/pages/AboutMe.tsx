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
      <div className="flex flex-col relative items-center w-[40%] h-full z-10">
        <Description />
        <div className="absolute top-3 left-0 w-[30rem] h-[35rem] opacity-30 rounded-[50%] overflow-hidden z-0">
          <Image className="w-full h-full" src={gridBG} alt="grid background" />
        </div>
      </div>
      <div className="flex flex-col relative justify-start items-center w-[50%] h-full pl-[10%]">
        <Image
          className="rounded-[25%] w-[35rem] mt-[2.5rem] z-10"
          src={myImage}
          alt="Gabriel's picture"
        />
      </div>
      <div className="flex flex-col justify-center items-center absolute w-full bottom-0 z-20">
        <Stacks />
        <DownloadCV />
      </div>
    </Container>
  );
}
