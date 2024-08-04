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
    <div className="hover:scale-[1.2] w-[100%] duration-300 justify-center mt-[2rem]">
      <a
        className="bebas flex flex-row items-center rounded-md px-2 text-[1.5rem]"
        href={link}
        target="_blank"
      >
        {children}
        {text}
      </a>
    </div>
  );
}
