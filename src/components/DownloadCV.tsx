import { MdDownload } from 'react-icons/md';

const DownloadCV = () => {
  return (
    <button className="flex flex-row items-center bg-transparent text-white mt-[2rem] transition-all hover:text-purple-600 transition ease-in delay-50">
      <MdDownload className="text-white text-[3rem] z-10 mr-2" />
      <a
        href="../assets/Cv_Muniz.pdf"
        className="bebas flex flex-row items-center rounded-md px-2 text-[1.2rem] lg:text-[1.5rem]"
        download
      >
        Download CV
      </a>
    </button>
  );
};

export default DownloadCV;
