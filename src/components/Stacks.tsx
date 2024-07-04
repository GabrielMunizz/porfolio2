import LogoRender from "./LogoRender";
import dockerLogo from "../assets/dockerLogo.png";
import javaLogo from "../assets/javaLogo.png";
import nodeLogo from "../assets/nodeLogo.png";
import reduxLogo from "../assets/reduxLogo.png";
import typeScriptLogo from "../assets/typescript-1024.png";

export default function Stacks() {
  return (
    <div className="w-full mb-[2rem]">
      <h2 className="bebas text-[3rem] h-[4rem]">Stacks</h2>
      <div className="flex flex-row justify-center items-center w-[100%] border-2 rounded-lg">
        <LogoRender url={typeScriptLogo} alt="Redux Logo" title="TypeScript" />
        <LogoRender url={reduxLogo} alt="Redux Logo" title="Redux" />
        <LogoRender url={nodeLogo} alt="Node Logo" title="Node.JS" />
        <LogoRender url={dockerLogo} alt="Docker Logo" title="Docker" />
        <LogoRender url={javaLogo} alt="Java Logo" title="Java" />
      </div>
    </div>
  );
}
