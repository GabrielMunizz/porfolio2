import { SiGithub } from "react-icons/si";

export default function Github() {
  return (
    <div className="w-[100%] justify-center mt-[2rem] duration-300">
      <a
        className="bebas flex flex-row items-center rounded-md px-2 text-[1.2rem] lg:text-[1.5rem] hover:text-purple-600 transition ease-in delay-80"
        href="https://github.com/GabrielMunizz"
        target="_blank"
      >
        <SiGithub className="text-[2.5rem] text-[#fff] mr-4 " />
        github.com/GabrielMunizz
      </a>
    </div>
  );
}
