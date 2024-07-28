import TextArea from "./TextArea";
import TextInput from "./TextInput";

export default function SendMe() {
  return (
    <div className="flex flex-col items-center w-[45%] h-[80%]">
      <form className="flex flex-col items-center w-[100%] h-[100%]" action="">
        <h3 className="bebas text-[2.5rem]">You can send me a message here:</h3>
        <div className="flex flex-col justify-center items-center w-[80%] h-[80%]">
          <TextInput>E-mail</TextInput>
          <TextArea>Message</TextArea>
          <button className="mt-[2rem] rounded-2xl border-2 mb-[1rem] bg-black px-6 py-3 font-semibold uppercase text-white transition-all duration-300 hover:text-purple-600 hover:border-purple-600 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_blueviolet] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
