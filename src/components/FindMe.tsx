import ExternalLink from "./ExternalLink";
import Github from "./Github";
import LinkedinButton from "./LinkedinButton";
import { CiMail } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";

export default function FindMe() {
  return (
    <div className="flex flex-col justify-start items-center w-full h-full z-10 xl:w-[45%] ">
      <div className="mb-[4rem]">
        <h2 className="bebas text-[4.8rem] mb-[-3.5rem] xl:text-[8rem] font-bold xl:mb-[-5.8rem]">
          Want to
        </h2>
        <h2 className="bebas text-[4.8rem] xl:text-[8rem] font-bold xl:mb-[-5.8rem]">
          contact{" "}
          <span className="bebas text-[4.8rem] xl:text-[8rem] font-bold xl:mb-[-5.8rem] text-purple-600">
            me
          </span>
          ?
        </h2>
      </div>
      <div className="w-full pl-5 mt-[-3rem] xl:w-[60%] xl:pl-0 xl:mt-0">
        <LinkedinButton />
        <Github />
        <ExternalLink
          text="gabrielmfd@gmail.com"
          link="mailto:gabrielmfd@gmail.com"
        >
          <CiMail className="text-[2.5rem] text-white mr-4" />
        </ExternalLink>
        <ExternalLink
          text="+55(32) 984863437"
          link="https://api.whatsapp.com/send?phone=5532984863437"
        >
          <FaWhatsapp className="text-[2.5rem] text-[#2cd16e] mr-4" />
        </ExternalLink>
      </div>
    </div>
  );
}
