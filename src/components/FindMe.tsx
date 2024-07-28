import Github from "./Github";
import LinkedinButton from "./LinkedinButton";

export default function FindMe() {
  return (
    <div className="flex flex-col justify-start items-center w-[45%] h-[80%]">
      <h2 className="bebas text-[2.5rem]">...or find me here:</h2>
      <LinkedinButton />
      <Github />
    </div>
  );
}
