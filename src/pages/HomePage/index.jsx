import { FaCode } from "react-icons/fa";
import Layouts from "../../layouts";
import { MdOutlineDesignServices } from "react-icons/md";
import LogoIgnos from "/img/clients/ignos.png";
import { TiCameraOutline } from "react-icons/ti";

const HomePage = () => {
  return (
    <Layouts>
      <section id="about">
        <div className="flex items-center gap-x-6 mb-3">
          <h1 className="font-bold text-[40px] text-black dark:text-white">About</h1>
          <div className="h-[3px] w-44 rounded-lg bg-primary"></div>
        </div>
        <p className="text-bodytext text-justify text-base dark:text-abuDark">
          I am a vocational school student majoring in Software Engineering with enthusiasm and deep interest in the world of web development. I am committed to continuing to learn and develop my skills, especially in the field of web
          design.
          <br />
          <br /> As a beginner who is enthusiastic about exploring the world of the web, I focus on an attractive and interactive display as well as a good user experience.
        </p>
        <h1 className="text-3xl font-medium my-4 text-black dark:text-white">Interested In?</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 lg:gap-y-0 md:gap-x-5 mb-5">
          <div className="bg-[#fff4f4] rounded-lg dark:bg-transparent dark:border dark:border-[#353535]">
            <div className="flex gap-x-3 py-5 pl-5  pr-3 items-start">
              <MdOutlineDesignServices className="text-fuchsia-500 text-[120px] h-fit" />
              <div>
                <h1 className="font-medium text-xl mb-1 text-black dark:text-white">Ui/Ux Design</h1>
                <p className="text-base text-bodytext dark:text-abuDark">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto delectus ipsa quia facere repellendus accusantium.</p>
              </div>
            </div>
          </div>
          <div className="bg-[#eef5fa] rounded-lg dark:bg-transparent dark:border dark:border-[#353535]">
            <div className="flex gap-x-3 py-5 pl-5  pr-3 items-start">
              <FaCode className="text-primary text-[120px] h-fit" />
              <div>
                <h1 className="font-medium text-xl mb-1 text-black dark:text-white">Web Development</h1>
                <p className="text-base text-bodytext dark:text-abuDark">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto delectus ipsa quia facere repellendus accusantium.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 lg:gap-y-0 md:gap-x-8 ">
          <div className="bg-[#eef5fa] rounded-lg dark:bg-transparent dark:border dark:border-[#353535]">
            <div className="flex gap-x-3 py-5 pl-5  pr-3 items-start">
              <TiCameraOutline className="text-pink-500 text-[120px] h-fit" />
              <div>
                <h1 className="font-medium text-xl mb-1 text-black dark:text-white">Photography</h1>
                <p className="text-base text-bodytext dark:text-abuDark">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto delectus ipsa quia facere repellendus accusantium.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="client" className="mt-14">
        <h1 className="text-3xl font-medium text-black dark:text-white text-center ">Client</h1>
        <div className="flex justify-center">
          <img src={LogoIgnos} alt="" width={150} className="drop-shadow-lg"/>
        </div>
      </section>
    </Layouts>
  );
};

export default HomePage;
