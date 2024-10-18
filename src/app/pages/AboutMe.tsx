import Description from "@/components/Description";
import Stacks from "@/components/Stacks";
import Container from "@/components/Container";
import { useContext } from "react";
import PorfolioContext from "../context/PortfolioContext";
import Image from "next/image";
import gridBG from "../../assets/grid.png";
import colorPhoto from '../../assets/foto_port_filtro-fotor-bg-remover-20231017175655.png';

export default function AboutMe() {
  const { homeRef } = useContext(PorfolioContext);
  
  return (
    <Container containerRef={homeRef}>
      <div className="
          flex flex-col relative 
          items-center w-full h-full 
          z-10 xl:w-[60%] 2xl:w-[40%] 
          px-4
        ">
        <Description />
        <div className="
            absolute top-16 md:top-3 md:left-0 
            w-[20rem] h-[20rem] md:w-[30rem] 
            md:h-[35rem] opacity-30 
            rounded-[50%] overflow-hidden z-0
          ">
          <Image 
            className="w-full h-full" 
            src={gridBG} 
            alt="grid background" 
          />
        </div>
      </div>

      <div className="
          hidden xl:flex flex-col 
          relative justify-start items-center 
          w-[50%] h-full pl-[10%] 
          xl:pl-[0%] xl:pt-[0.6px] 
          2xl:pt-[0.3px]
        ">
        <Image
          className="
            md:rounded-[50%] md:w-[15rem] 
            md:h-[14rem] md:mt-[1.5rem] 
            md:z-10 md:object-cover 
            md:object-[center_30%] 
            xl:rounded-[5px] xl:w-full 
            xl:h-full xl:mt-0  
            2xl:mr-[-6.2rem]
          "
          src={colorPhoto}
          alt="Gabriel's picture"
        />
        <div className="
            hidden absolute 
            left-[-1%] 
            w-[50%] h-full 
            bg-gradient-to-r from-black 
            via-black  
            to-transparent z-[15]
            xl:block xl:via-black/80
            xl:h-[99.9%]
            2xl:left-0 2xl:h-full
            
          " 
        />
      </div>

      <Image
        className="
          absolute rounded-[50%] 
          w-[7rem] h-[7rem] z-10 
          object-cover right-[5%] 
          top-4 md:right-10 
          md:top-5 md:w-[15rem] 
          md:h-[15rem] xl:hidden
        "
        src={colorPhoto}
        alt="Gabriel's picture"
      />

      <div className="
          md:flex flex-col 
          justify-center items-start 
          absolute w-full 
          bottom-0 2xl:pl-16 
          z-40
        ">
        <Stacks />
      </div>
    </Container>
  );
}