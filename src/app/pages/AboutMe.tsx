import Description from "@/components/Description";
import DownloadCV from "@/components/DownloadCV";
import Stacks from "@/components/Stacks";
import Title from "@/components/Title";
// COLOCAR TEXTO DESCRITIVO E STACKS ABAIXO DE ABOUT ME

export default function AboutMe() {
  return (
    <div className="flex flex-col justify-center items-center min-w-full min-h-lvh">
      <div className="flex flex-row justify-around items-center border-2 border-white w-[80%] rounded-lg">
        <div className="w-[40%] text-center">
          <Title>Image</Title>
        </div>
        <div className="flex flex-col items-center w-[40%]">
          <div className="flex flex-row items-start justify-center mt-[1rem] ">
            <span className="covered text-purple-600 text-[6rem] mt-[-2rem] h-[5rem]">
              #
            </span>
            <Title>About Me</Title>
          </div>
          <Description />
          <Stacks />
          <DownloadCV />
        </div>
      </div>
    </div>
  );
}
