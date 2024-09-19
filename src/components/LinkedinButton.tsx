import { SiLinkedin } from "react-icons/si";

export default function LinkedinButton() {
  return (
    <div className="xl:hover:scale-[1.2] w-[100%] duration-300 justify-center mt-[2rem]">
      <a
        className="bebas flex flex-row items-center rounded-md px-2 text-[1.2rem] lg:text-[1.5rem] hover:text-purple-600 transition ease-in delay-50"
        href="https://www.linkedin.com/in/gabriel-muniz-dev/"
        target="_blank"
      >
        <div className="relative rounded-lg mr-4 w-[2.5rem] h-[2.5rem]">
          <div className="bg-[#fff] w-[80%] rounded-lg absolute top-1 right-1 h-[80%] z-0" />
          <SiLinkedin className="text-[2.5rem] absolute text-[#0a6ac4] z-10" />
        </div>
        linkedin.com/in/gabriel-muniz-dev/
      </a>
    </div>
  );
}
