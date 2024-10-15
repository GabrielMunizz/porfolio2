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
    <div className="w-[100%] duration-300 justify-center mt-[2rem]">
      <a
        className="bebas flex flex-row items-center rounded-md px-2 text-[1.2rem] lg:text-[1.5rem] hover:text-purple-600 transition ease-in delay-50"
        href={link}
        target="_blank"
      >
        {children}
        {text}
      </a>
    </div>
  );
}
