import Container from "@/components/Container";
import { useContext } from "react";
import PorfolioContext from "../context/PortfolioContext";
import SendMe from "@/components/SendMe";
import FindMe from "@/components/FindMe";

export default function ContactMe() {
  const { contactMeRef } = useContext(PorfolioContext);
  return (
    <Container containerRef={contactMeRef}>
      <div className="flex flex-row justify-around items-center w-[100%] h-[100%]">
        <SendMe />
        <FindMe />
      </div>
    </Container>
  );
}
