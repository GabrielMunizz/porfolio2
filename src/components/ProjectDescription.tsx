export default function ProjectDescription({ children }: { children: string }) {
  return <p className="bebas text-[2rem]">{`Description: ${children}`}</p>;
}
