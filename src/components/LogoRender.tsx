import Image, { StaticImageData } from "next/image";

type LogoRenderProps = {
  url: StaticImageData;
  alt: string;
  title: string;
};

export default function LogoRender({ url, alt, title }: LogoRenderProps) {
  return (
    <div className="flex flex-col justify-between items-center w-[100px] h-[120px] m-[0.5rem] p-[0.5rem]">
      <Image width={80} height={80} src={url} alt={alt} />
      <p className="bebas text-[1.2rem] mt-[0.5rem]">{title}</p>
    </div>
  );
}
