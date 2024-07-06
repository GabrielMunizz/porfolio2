import FlipTab from "./FlipTab";

export default function NavBar() {
  return (
    <nav className="flex fixed justify-center items-center w-1/3 border-2 border-white mt-4 min-h-20 rounded-lg bg-black z-10">
      <ul className="flex flex-row justify-around min-w-full">
        <FlipTab>Home</FlipTab>
        <FlipTab>Projects</FlipTab>
        <FlipTab>Contact-me</FlipTab>
      </ul>
    </nav>
  );
}
