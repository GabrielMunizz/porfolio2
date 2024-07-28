export default function TextInput({ children }: { children: string }) {
  return (
    <div className="flex flex-col justify-center items-start">
      <label
        className="bebas text-[2rem] text-purple-600"
        htmlFor={`${children}`}
      >
        {children}
      </label>
      <input
        className="rounded-md w-[25rem] h-[2rem]"
        id={`${children}`}
        type="text"
      />
    </div>
  );
}
