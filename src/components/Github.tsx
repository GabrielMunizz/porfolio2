import { SiGithub } from "react-icons/si";

export default function Github() {
  return (
    <div className="
        flex flex-row justify-start 
        items-center w-[100%] 
        duration-300 mt-[2rem] 
        md:mt-[2rem]
      ">
      <a
        className="
          bebas flex flex-row items-center 
          rounded-md px-2 
          text-[1.2rem] md:text-[2.5rem] 
          hover:text-purple-600 
          transition ease-in delay-50"
        href="https://github.com/GabrielMunizz"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiGithub className="
            text-[2.5rem] md:text-[3.5rem] 
            text-[#fff] mr-4" 
        />
        github.com/GabrielMunizz
      </a>
    </div>
  );
}