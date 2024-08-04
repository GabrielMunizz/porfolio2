import Container from "@/components/Container";
import { useContext } from "react";
import PorfolioContext from "../context/PortfolioContext";

import FindMe from "@/components/FindMe";

export default function ContactMe() {
  const { contactMeRef } = useContext(PorfolioContext);
  return (
    <Container containerRef={contactMeRef}>
      <div className="flex flex-row justify-center items-center w-[100%] h-[100%]">
        <FindMe />
      </div>
    </Container>
  );
}
