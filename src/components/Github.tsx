import { SiGithub } from "react-icons/si";

export default function Github() {
  return (
    <div className="hover:scale-[1.2] w-[100%] duration-300 justify-center mt-[2rem]">
      <a
        className="bebas flex flex-row items-center rounded-md px-2 text-[1.5rem]"
        href="https://github.com/GabrielMunizz"
        target="_blank"
      >
        <SiGithub className="text-[2.5rem] text-[#fff] mr-4" />
        github.com/GabrielMunizz
      </a>
    </div>
  );
}
