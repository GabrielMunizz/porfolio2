import DownloadCV from "@/components/DownloadCV";
import Title from "@/components/Title";

export default function AboutMe() {
  return (
    <div className="flex flex-col justify-center items-center min-w-full min-h-lvh">
      <div className="flex flex-row justify-around items-center border-2 border-white w-[80%] rounded-lg">
        <div>
          <h1>Image</h1>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-row items-center justify-center">
            <span className="covered text-purple-600 text-[6rem] pt-5">#</span>
            <Title>About Me</Title>
          </div>
          <div>
            <DownloadCV />
          </div>
        </div>
      </div>
    </div>
  );
}
