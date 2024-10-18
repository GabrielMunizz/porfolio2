import { SiLinkedin } from 'react-icons/si';

export default function LinkedinButton() {
  return (
    <div className="
        flex flex-row justify-center 
        items-center w-[100%] 
        duration-300 mt-[2rem] 
        md:mt-[4rem]
      ">
      <a
        className="
          bebas flex flex-row items-center 
          rounded-md px-2 
          text-[1.2rem] md:text-[2.5rem] 
          hover:text-purple-600 
          transition ease-in delay-50"
        href="https://www.linkedin.com/in/gabriel-muniz-dev/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiLinkedin className="
            text-[2.5rem] md:text-[3.5rem] 
            mr-4 text-[#0a6ac4] z-10" 
        />
        linkedin.com/in/gabriel-muniz-dev/
      </a>
    </div>
  );
}