import Container from "@/components/Container";
import Image from "next/image";
import { useContext } from "react";
import PorfolioContext from "../context/PortfolioContext";
import bgImage from "../../assets/desktop.jpg";
import FindMe from "@/components/FindMe";

export default function ContactMe() {
  const { contactMeRef } = useContext(PorfolioContext);

  return (
    <Container containerRef={contactMeRef}>
      <div className="
          flex flex-row relative 
          justify-end items-center 
          w-[100%] h-[100%]
        ">
        <FindMe />
        <div className="
            absolute left-0 inset-0 
            w-[60%] hidden lg:block
          ">
          <Image
            className="
              rounded-md w-full 
              h-full"
            src={bgImage}
            alt="background image"
            layout="fill"
          />
          <div className="
              absolute inset-0 
              bg-gradient-to-r from-transparent 
              via-transparent to-black
            " 
          />
        </div>
      </div>
    </Container>
  );
}