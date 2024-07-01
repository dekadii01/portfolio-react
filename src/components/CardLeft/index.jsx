import ImgLaba from "/img/adi-pramana.jpg";
import { CiMobile1 } from "react-icons/ci";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { FaCalendarDays } from "react-icons/fa6";
import { IoMdDownload } from "react-icons/io";

const CardLeft = () => {
  const Cv = "https://drive.google.com/drive/folders/18xcgPUFt3v-oLNEkBbdlpRauKueiNxyh";
  return (
    <div className="col-span-9 lg:col-span-2 bg-white rounded-xl dark:bg-black h-fit">
      <img src={ImgLaba} alt="" className="rounded-xl w-9/12 mx-auto mt-10 lg:-mt-24" loading="lazy" />
      <h1 className="font-bold text-2xl text-center mt-5  dark:text-white">Laba Adi Pramana</h1>
      <div className="flex justify-center">
        <div className="bg-abu dark:bg-dark w-fit px-4 py-2 rounded-md text-center mt-2">
          <p className="text-black dark:text-abuDark text-sm">Front-End Developer</p>
        </div>
      </div>
      <div className="flex gap-x-3 justify-center mt-3">
        <a
          href="https://www.instagram.com/dekadii01/"
          target="_blank"
          data-aos="fade-right"
          data-aos-delay="100"
          className="bg-abu dark:bg-dark px-3 py-2 rounded-lg hover:bg-primary dark:hover:bg-primary hover:text-white text-[#e12a72] transition-all ease-in duration-100 block"
        >
          <i className="fa-brands fa-instagram text-[20px] "></i>
        </a>
        <a
          href="https://github.com/dekadii01"
          target="_blank"
          data-aos="fade-right"
          data-aos-delay="200"
          className="bg-abu dark:bg-dark px-3 py-2 rounded-lg hover:bg-primary dark:hover:bg-primary hover:text-white text-black transition-all ease-in duration-100 block"
        >
          <i className="fa-brands fa-github text-[20px]  dark:text-white"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/dekadii/"
          target="_blank"
          data-aos="fade-right"
          data-aos-delay="300"
          className="bg-abu dark:bg-dark px-3 py-2 rounded-lg hover:bg-primary dark:hover:bg-primary hover:text-white text-[#144679] transition-all ease-in duration-100 block"
        >
          <i className="fa-brands fa-linkedin-in  text-[20px]"></i>
        </a>
        <a
          href="https://www.tiktok.com/@abcdemdjjdksnsks"
          target="_blank"
          data-aos="fade-right"
          data-aos-delay="400"
          className="bg-abu dark:bg-dark px-3 py-2 rounded-lg hover:bg-primary dark:hover:bg-primary hover:text-white text-[#000] dark:text-white transition-all ease-in duration-100"
        >
          <i className="fa-brands fa-tiktok text-[20px] "></i>
        </a>
      </div>
      <div className="bg-abu dark:bg-dark mx-5 my-7 px-6 py-5 rounded-lg">
        <div className="flex items-center gap-x-2 " data-aos="fade-right" data-aos-delay="100">
          <div className="bg-white dark:bg-black p-2 rounded-lg shadow-lg">
            <CiMobile1 className="text-2xl font-bold" style={{ color: "rgb(233, 59, 129)" }} />
          </div>
          <div>
            <p className="text-abuDark text-sm">Phone</p>
            <h1 className="text-base text-black dark:text-white">0821-8765-9090</h1>
          </div>
        </div>
        <hr className="h-px my-3 bg-[#e3e3e3] border-0 dark:bg-[#333]" />
        <div className="flex items-center gap-x-2" data-aos="fade-right" data-aos-delay="200">
          <div className="bg-white dark:bg-black p-2 rounded-lg shadow-lg">
            <FaEnvelopeOpenText className="text-2xl font-bold text-[#6AB5B9]" />
          </div>
          <div>
            <p className="text-abuDark text-sm">Email</p>
            <h1 className="text-base text-black dark:text-white">adipram@gmail.com</h1>
          </div>
        </div>
        <hr className="h-px my-3 bg-[#e3e3e3] border-0 dark:bg-[#333]" />
        <div className="flex items-center gap-x-2" data-aos="fade-right" data-aos-delay="300">
          <div className="bg-white dark:bg-black p-2 rounded-lg shadow-lg">
            <MdLocationOn className="text-2xl font-bold text-[#FD7590]" />
          </div>
          <div>
            <p className="text-abuDark text-sm">Location</p>
            <h1 className="text-base text-black dark:text-white">Bali, Indonesia</h1>
          </div>
        </div>
        <hr className="h-px my-3 bg-[#e3e3e3] border-0 dark:bg-[#333]" />
        <div className="flex items-center gap-x-2" data-aos="fade-right" data-aos-delay="400">
          <div className="bg-white dark:bg-black p-2 rounded-lg shadow-lg">
            <FaCalendarDays className="text-2xl font-bold text-[#FD7590]" />
          </div>
          <div>
            <p className="text-abuDark text-sm">Birthday</p>
            <h1 className="text-base text-black dark:text-white">May 28, 2006</h1>
          </div>
        </div>
      </div>
      <a href={Cv} target="_blank" className="bg-primary px-5 py-2 rounded-lg flex items-center w-fit gap-x-2 text-white font-medium mx-auto mb-10 hover:bg-primary/70 transition-all ease-in duration-100">
        <IoMdDownload />
        <p>Download Cv</p>
      </a>
    </div>
  );
};

export default CardLeft;
