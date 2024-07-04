import LogoRender from "./LogoRender";
import dockerLogo from "../assets/dockerLogo.png";
import javaLogo from "../assets/javaLogo.png";
import nodeLogo from "../assets/nodeLogo.png";
import reduxLogo from "../assets/reduxLogo.png";
import typeScriptLogo from "../assets/typescript-1024.png";
import nextLogo from "../assets/next.png";
import postgresLogo from "../assets/PostgreSQL-removebg-preview.png";
import mySqlLogo from "../assets/mySQLLogo.png";
import djangoLogo from "../assets/django-removebg-preview.png";

export default function Stacks() {
  return (
    <div className="w-full mb-[2rem]">
      <h2 className="bebas text-[3rem] h-[4rem]">Stacks:</h2>
      <div className="flex flex-row flex-wrap px-[1rem] justify-center items-center w-[100%] border-2 rounded-lg">
        <LogoRender url={nextLogo} alt="Next Logo" title="Next.JS" />
        <LogoRender url={typeScriptLogo} alt="Redux Logo" title="TypeScript" />
        <LogoRender url={reduxLogo} alt="Redux Logo" title="Redux" />
        <LogoRender url={nodeLogo} alt="Node Logo" title="Node.JS" />
        <LogoRender url={djangoLogo} alt="Django Logo" title="Django" />
        <LogoRender url={dockerLogo} alt="Docker Logo" title="Docker" />
        <LogoRender url={javaLogo} alt="Java Logo" title="Java" />
        <LogoRender
          url={postgresLogo}
          alt="PostgreSQL Logo"
          title="PostgreSQL"
        />
        <LogoRender url={mySqlLogo} alt="MySQL Logo" title="MySQL" />
      </div>
    </div>
  );
}
