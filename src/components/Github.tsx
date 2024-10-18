import { SiGithub } from "react-icons/si";

export default function Github() {
  return (
    <div className="
        flex flex-row justify-start 
        items-center w-[100%] 
        duration-300 mt-[2rem] 
        md:mt-[2rem]
        xl:mt-[1.5rem]
        2xl:mt-[2rem]
      ">
      <a
        className="
          bebas flex flex-row items-center 
          rounded-md px-2 
          text-[1.2rem]
          hover:text-purple-600 
          transition ease-in delay-50
          md:text-[2.5rem]
          xl:text-[1.5rem]
          2xl:text-[2.2rem]
          "
        href="https://github.com/GabrielMunizz"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiGithub className="
            text-[2.5rem] 
            md:text-[3.5rem]
            xl:text-[2.5rem]
            2xl:text-[3.5rem]
            text-[#fff] mr-4" 
        />
        github.com/GabrielMunizz
      </a>
    </div>
  );
}