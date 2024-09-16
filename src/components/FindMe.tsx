import ExternalLink from "./ExternalLink";
import Github from "./Github";
import LinkedinButton from "./LinkedinButton";
import { CiMail } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";

export default function FindMe() {
  return (
    <div className="flex flex-col justify-start items-center w-[45%] h-full z-10">
      <div className="mb-[4rem]">
        <h2 className="bebas text-[8rem] font-bold mb-[-5.8rem]">Want to</h2>
        <h2 className="bebas text-[8rem] font-bold mb-[-5.8rem]">
          contact{" "}
          <span className="bebas text-[8rem] font-bold mb-[-5.8rem] text-purple-600">
            me
          </span>
          ?
        </h2>
      </div>
      <div className="w-[60%]">
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
