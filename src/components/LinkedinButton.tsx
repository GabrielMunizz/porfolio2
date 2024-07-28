import { SiLinkedin } from "react-icons/si";

export default function LinkedinButton() {
  return (
    <div className="hover:scale-[1.2] w-[30%] duration-300 justify-center mt-[2rem]">
      <button className="flex flex-row justify-center w-[100%] rounded-md items-center bebas">
        <a
          className="flex flex-row items-center border-2 rounded-md"
          href="https://www.linkedin.com/in/gabriel-muniz-dev/"
          target="_blank"
        >
          <div className="bg-[#fff] rounded-lg">
            <SiLinkedin className="text-[5rem] text-[#0a6ac4]" />
          </div>
        </a>
      </button>
    </div>
  );
}
