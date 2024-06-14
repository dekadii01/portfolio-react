import { FaCode } from "react-icons/fa";
import Layouts from "../../layouts";
import { MdOutlineDesignServices } from "react-icons/md";

const HomePage = () => {
  return (
    <Layouts>
      <div className="flex items-center gap-x-6 mb-3">
        <h1 className="font-bold text-[40px] text-black dark:text-white">About</h1>
        <div className="h-[3px] w-44 rounded-lg bg-primary"></div>
      </div>
      <p className="text-bodytext text-justify text-base dark:text-abuDark">
        I am a vocational school student majoring in Software Engineering with enthusiasm and deep interest in the world of web development. I am committed to continuing to learn and develop my skills, especially in the field of web design.
        <br />
        <br /> As a beginner who is enthusiastic about exploring the world of the web, I focus on an attractive and interactive display as well as a good user experience.
      </p>
      <h1 className="text-3xl font-medium my-4 text-black dark:text-white">Interested In?</h1>
      <div className="flex gap-x-8">
        <div className="bg-[#fff4f4] rounded-lg dark:bg-transparent border border-[#353535]">
          <div className="flex gap-x-3 py-5 pl-5  pr-3 items-start">
            <MdOutlineDesignServices className="text-fuchsia-500 text-[120px] h-fit" />
            <div>
              <h1 className="font-medium text-xl mb-1 text-black dark:text-white">Ui/Ux Design</h1>
              <p className="text-base text-bodytext dark:text-abuDark">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto delectus ipsa quia facere repellendus accusantium.</p>
            </div>
          </div>
        </div>
        <div className="bg-[#eef5fa] rounded-lg dark:bg-transparent border border-[#353535]">
          <div className="flex gap-x-3 py-5 pl-5  pr-3 items-start">
            <FaCode className="text-primary text-[120px] h-fit" />
            <div>
              <h1 className="font-medium text-xl mb-1 text-black dark:text-white">Web Development</h1>
              <p className="text-base text-bodytext dark:text-abuDark">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto delectus ipsa quia facere repellendus accusantium.</p>
            </div>
          </div>
        </div>
      </div>
    </Layouts>
  );
};

export default HomePage;
