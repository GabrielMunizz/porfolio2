import LogoRender from "./LogoRender";
import stacks from "@/utils/stacks";

export default function Stacks() {
  return (
    <div className="w-full mb-[2rem]">
      <h2 className="bebas text-[3rem] h-[4rem]">Stacks:</h2>
      <div className="flex flex-row flex-wrap px-[1rem] justify-center items-center w-[100%] border-2 rounded-lg">
        {stacks.map((item, i) => (
          <LogoRender key={i} url={item.url} title={item.title} />
        ))}
      </div>
    </div>
  );
}
