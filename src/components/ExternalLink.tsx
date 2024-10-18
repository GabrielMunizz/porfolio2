import { ReactNode } from "react";

type ExternalLinkProps = {
  children: ReactNode;
  text: string;
  link: string;
};

export default function ExternalLink({
  children,
  text,
  link,
}: ExternalLinkProps) {
  return (
    <div
      className="
        flex flex-row justify-start 
        items-center w-[100%] 
        duration-300 
        mt-[2rem] md:mt-[2rem]
      "
    >
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
        href={link}
        target="_blank"
      >
        {children}
        {text}
      </a>
    </div>
  );
}