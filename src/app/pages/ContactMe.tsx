import Container from "@/components/Container";
import { useContext } from "react";
import PorfolioContext from "../context/PortfolioContext";

export default function ContactMe() {
  const { contactMeRef } = useContext(PorfolioContext);
  return (
    <Container containerRef={contactMeRef}>
      <div></div>
    </Container>
  );
}
