import { SiGithub } from "react-icons/si";

export default function Github() {
  return (
    <div className="flex flex-row hover:scale-[1.2] border-2 rounded-md duration-300 justify-center mt-[5rem]">
      <button className="p-[0.2rem] bg-[#000] w-[100%] rounded-md justify-center items-center bebas">
        <a
          className="flex flex-row text-[3.5rem]"
          href="https://github.com/GabrielMunizz"
          target="_blank"
        >
          <SiGithub className="text-[5rem] text-[#fff] " />
        </a>
      </button>
    </div>
  );
}
