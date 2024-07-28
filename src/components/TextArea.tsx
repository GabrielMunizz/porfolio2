export default function TextArea({ children }: { children: string }) {
  return (
    <div className="flex flex-col justify-center items-start mt-[2rem]">
      <label
        className="bebas text-[2rem] text-purple-600"
        htmlFor={`${children}`}
      >
        {children}
      </label>
      <textarea className="rounded-md w-[25rem] h-[12rem]" id={`${children}`} />
    </div>
  );
}
