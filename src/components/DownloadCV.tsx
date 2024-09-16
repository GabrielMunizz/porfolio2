const DownloadCV = () => {
  return (
    <button className="rounded-2xl border-2 mb-[1rem] bg-black px-6 py-3 font-semibold uppercase text-white transition-all duration-300 hover:text-purple-600 hover:border-purple-600 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_blueviolet] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
      <a href="../assets/Cv_Muniz.pdf" className="bebas text-[1.8rem]" download>
        Download CV
      </a>
    </button>
  );
};

export default DownloadCV;
