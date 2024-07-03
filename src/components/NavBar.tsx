import Tab from "./Tab";

export default function NavBar() {
  return (
    <nav className="absolute flex justify-center items-center w-1/3 border-4 border-sky-500 mt-4 min-h-16">
      <ul className="flex flex-row justify-around min-w-full">
        <Tab>Home</Tab>
        <Tab>Projects</Tab>
        <Tab>Contact-me</Tab>
      </ul>
    </nav>
  );
}
