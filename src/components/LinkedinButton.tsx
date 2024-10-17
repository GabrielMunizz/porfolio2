import { SiLinkedin } from "react-icons/si";

export default function LinkedinButton() {
  return (
    <div className="w-[100%] duration-300 justify-center mt-[2rem]">
      <a
        className="bebas flex flex-row items-center rounded-md px-2 text-[1.2rem] lg:text-[1.5rem] hover:text-purple-600 transition ease-in delay-50"
        href="https://www.linkedin.com/in/gabriel-muniz-dev/"
        target="_blank"
      >
        <div className="relative rounded-lg mr-4 w-[2.5rem] h-[2.5rem]">          
          <SiLinkedin className="text-[2.5rem] absolute right-[1%] text-[#0a6ac4] z-10" />
        </div>
        linkedin.com/in/gabriel-muniz-dev/
      </a>
    </div>
  );
}
