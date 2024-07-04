export default function Title({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row items-start justify-center mt-[1rem] ">
      <span className="covered text-purple-600 text-[6rem] mt-[-2rem] h-[5rem]">
        #
      </span>
      <h1 className="bebas uppercase sm:text-6xl md:text7xl lg:8xl">
        {children}
      </h1>
    </div>
  );
}
