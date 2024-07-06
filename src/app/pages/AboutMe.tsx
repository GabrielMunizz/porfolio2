import Description from "@/components/Description";
import DownloadCV from "@/components/DownloadCV";
import Stacks from "@/components/Stacks";
import Title from "@/components/Title";
import Container from "@/components/Container";
// COLOCAR TEXTO DESCRITIVO E STACKS ABAIXO DE ABOUT ME

export default function AboutMe() {
  return (
    <Container>
      <div className="w-[40%] text-center">
        <Title>Image</Title>
      </div>
      <div className="flex flex-col items-center w-[40%]">
        <Title>About Me</Title>
        <Description />
        <Stacks />
        <DownloadCV />
      </div>
    </Container>
  );
}
