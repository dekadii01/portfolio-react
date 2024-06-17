import { IoSchoolOutline } from "react-icons/io5";
import { BsSuitcaseLg } from "react-icons/bs";
import Layouts from "../../layouts";
import ReactLogo from "/img/skills/react.svg";
import TailwindLogo from "/img/skills/tailwind.svg";
import JsLogo from "/img/skills/javascript.svg";
import New from "/img/skills/new.svg";
import NewDark from "/img/skills/new-dark.svg";
import LaravelLogo from "/img/skills/laravel.svg";
import PhpLogo from "/img/skills/php.svg";
import BootstrapLogo from "/img/skills/bootstrap.svg";
import PostmanLogo from "/img/skills/postman.svg";
import MysqliLogo from "/img/skills/mysql.svg";
import CssLogo from "/img/skills/css.svg";
import HtmlLogo from "/img/skills/html.svg";
import CanvaLogo from "/img/skills/canva.svg";
import FigmaLogo from "/img/skills/figma.svg";
import GitLogo from "/img/skills/git.svg";
import GithubLogo from "/img/skills/github.svg";
import WordpressLogo from "/img/skills/wordpress.svg";
import Footer from "../../components/Footer";

const AboutPage = () => {
  return (
    <div>
      <Layouts>
        <section id="education-exp" className="p-5 md:p-12">
          <div className="flex items-center gap-x-6 mb-3">
            <h1 className="font-bold text-[40px] text-black dark:text-white">Resume</h1>
            <div className="h-[3px] w-44 rounded-lg bg-primary"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-x-5 gap-y-5 lg:gap-y-0">
            <div id="education">
              <div className="flex items-center gap-x-3 mb-5">
                <IoSchoolOutline className="text-4xl text-primary" />
                <h1 className="text-[28px] font-bold text-black dark:text-white">Education</h1>
              </div>
              <div className="bg-[#fff4f4] py-5 px-4 rounded-lg dark:bg-transparent dark:border dark:border-[#353535]">
                <p className="text-bodytext dark:text-abuDark text-[15px] font-medium ">2021-2024</p>
                <h1 className="my-1 text-[16.6px] dark:text-[16.5px] text-black dark:text-white">SMKN 1 DENPASAR - Software Engineering</h1>
                <p className="text-bodytext dark:text-abuDark text-[15px] font-medium ">Denpasar, Bali</p>
              </div>
              <div className="bg-[#eef5fa] py-5 px-4 rounded-lg dark:bg-transparent dark:border dark:border-[#353535] my-4">
                <p className="text-bodytext dark:text-abuDark text-[15px] font-medium ">2018-2021</p>
                <h1 className="my-1 text-[16.6px] text-black dark:text-white">SMPN 3 ABIANSEMAL - Junior High School</h1>
                <p className="text-bodytext dark:text-abuDark text-[15px] font-medium ">Badung, Bali</p>
              </div>
              <div className="bg-[#fff4f4] py-5 px-4 rounded-lg dark:bg-transparent dark:border dark:border-[#353535]">
                <p className="text-bodytext dark:text-abuDark text-[15px] font-medium ">2012-2018</p>
                <h1 className="my-1 text-[16.6px] md:text-[17.5px] text-black dark:text-white">SDN 1 SIBANG KAJA - Elementary School</h1>
                <p className="text-bodytext dark:text-abuDark text-[15px] font-medium ">Badung, Bali</p>
              </div>
            </div>
            <div id="experience">
              <div className="flex items-center gap-x-3 mb-5">
                <BsSuitcaseLg className="text-[34px] text-primary" />
                <h1 className="text-[28px] font-bold text-black dark:text-white">Experience</h1>
              </div>
              <div className="bg-[#eef5fa] py-5 px-4 rounded-lg dark:bg-transparent dark:border dark:border-[#353535]">
                <p className="text-bodytext dark:text-abuDark text-[15px] font-medium ">2024-Present</p>
                <h1 className="my-1 text-[16.6px] text-black dark:text-white">Freelancer</h1>
                <p className="text-bodytext dark:text-abuDark text-[15px] font-medium ">Freelancer</p>
              </div>
              <div className="bg-[#fff4f4] py-5 px-4 rounded-lg dark:bg-transparent dark:border dark:border-[#353535] my-4">
                <p className="text-bodytext dark:text-abuDark text-[15px] font-medium ">2023-2024</p>
                <h1 className="my-1 text-[16.6px] text-black dark:text-white">PT Hooki Global Kreasi - Web Developer</h1>
                <p className="text-bodytext dark:text-abuDark text-[15px] font-medium ">Internship</p>
              </div>
              <div className="bg-[#eef5fa] py-5 px-4 rounded-lg dark:bg-transparent dark:border dark:border-[#353535]">
                <p className="text-bodytext dark:text-abuDark text-[15px] font-medium ">2022-2023</p>
                <h1 className="my-1 text-[16.6px] text-black dark:text-white">PT Guna Teknologi Nusantara - Web Developer</h1>
                <p className="text-bodytext dark:text-abuDark text-[15px] font-medium ">Internship</p>
              </div>
            </div>
          </div>
        </section>
        <section id="skills" className="bg-[#f8fbfb] dark:bg-[#0d0d0d] p-5 md:p-12">
          <div className="relative w-fit">
            <h1 className="text-[28px] font-bold text-black dark:text-white">🎯 Specialized Skills</h1>
            <div className="absolute -right-16 md:-right-20 -top-12 md:-top-10 flex items-center">
              <img src={New} alt="new" loading="lazy" className="hidden dark:block" />
              <img src={NewDark} alt="new" loading="lazy" className="block dark:hidden" />
              <span>😎</span>
            </div>
          </div>
          <p className="text-base text-abuDark mb-5">Here are a few skills that I have developed and honed.</p>
          <div className="grid grid-cols-4 lg:grid-cols-5 gap-5">
            <div className="flex justify-center">
              <div className="shadow-lg cursor-pointer flex justify-center z-30 md:w-[144px] w-[70px] border dark:border-none hover:border-none md:h-[140px] h-[71px] rounded-md dark:bg-[#0d0d0d] md:p-5 p-3 dark:shadow-[0px_1px_5px_0px_#000] hover:-translate-y-2 transition-all duration-100 ease-in hover:shadow-sky-300 hover:shadow-lg dark:hover:shadow-sky-300 dark:hover:shadow-lg">
                <img src={ReactLogo} alt="logo skills adipramana" className="md:w-16 w-8" loading="lazy" />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="shadow-lg cursor-pointer flex justify-center z-30 md:w-[144px] w-[70px] border dark:border-none hover:border-none md:h-[140px] h-[71px] rounded-md dark:bg-[#0d0d0d] md:p-5 p-3 dark:shadow-[0px_1px_5px_0px_#000] hover:-translate-y-2 transition-all duration-100 ease-in hover:shadow-[#FF2D20] hover:shadow-lg dark:hover:shadow-[#FF2D20] dark:hover:shadow-lg">
                <img src={LaravelLogo} alt="logo skills adipramana" className="md:w-16 w-8" loading="lazy" />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="shadow-lg cursor-pointer flex justify-center z-30 md:w-[144px] w-[70px] border dark:border-none hover:border-none md:h-[140px] h-[71px] rounded-md dark:bg-[#0d0d0d] md:p-5 p-3 dark:shadow-[0px_1px_5px_0px_#000] hover:-translate-y-2 transition-all duration-100 ease-in hover:shadow-sky-500 hover:shadow-lg dark:hover:shadow-sky-500 dark:hover:shadow-lg">
                <img src={TailwindLogo} alt="logo skills adipramana" className="md:w-14 w-6" loading="lazy" />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="shadow-lg cursor-pointer flex justify-center z-30 md:w-[144px] w-[70px] border dark:border-none hover:border-none md:h-[140px] h-[71px] rounded-md dark:bg-[#0d0d0d] md:p-5 p-3 dark:shadow-[0px_1px_5px_0px_#000] hover:-translate-y-2 transition-all duration-100 ease-in hover:shadow-[#7952B3] hover:shadow-lg dark:hover:shadow-[#7952B3] dark:hover:shadow-lg">
                <img src={BootstrapLogo} alt="logo skills adipramana" className="md:w-16 w-8" loading="lazy" />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="shadow-lg cursor-pointer flex justify-center z-30 md:w-[144px] w-[70px] border dark:border-none hover:border-none md:h-[140px] h-[71px] rounded-md dark:bg-[#0d0d0d] md:p-5 p-3 dark:shadow-[0px_1px_5px_0px_#000] hover:-translate-y-2 transition-all duration-100 ease-in hover:shadow-primary hover:shadow-lg dark:hover:shadow-primary dark:hover:shadow-lg">
                <img src={JsLogo} alt="logo skills adipramana" className="md:w-16 w-8" loading="lazy" />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="shadow-lg cursor-pointer flex justify-center z-30 md:w-[144px] w-[70px] border dark:border-none hover:border-none md:h-[140px] h-[71px] rounded-md dark:bg-[#0d0d0d] md:p-5 p-3 dark:shadow-[0px_1px_5px_0px_#000] hover:-translate-y-2 transition-all duration-100 ease-in hover:shadow-[#777BB3] hover:shadow-lg dark:hover:shadow-[#777BB3] dark:hover:shadow-lg">
                <img src={PhpLogo} alt="logo skills adipramana" className="md:w-16 w-8" loading="lazy" />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="shadow-lg cursor-pointer flex justify-center z-30 md:w-[144px] w-[70px] border dark:border-none hover:border-none md:h-[140px] h-[71px] rounded-md dark:bg-[#0d0d0d] md:p-5 p-3 dark:shadow-[0px_1px_5px_0px_#000] hover:-translate-y-2 transition-all duration-100 ease-in hover:shadow-[#00758F] hover:shadow-lg dark:hover:shadow-[#00758F] dark:hover:shadow-lg">
                <img src={MysqliLogo} alt="logo skills adipramana" className="md:w-16 w-8" loading="lazy" />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="shadow-lg cursor-pointer flex justify-center z-30 md:w-[144px] w-[70px] border dark:border-none hover:border-none md:h-[140px] h-[71px] rounded-md dark:bg-[#0d0d0d] md:p-5 p-3 dark:shadow-[0px_1px_5px_0px_#000] hover:-translate-y-2 transition-all duration-100 ease-in hover:shadow-[#1572B6] hover:shadow-lg dark:hover:shadow-[#1572B6] dark:hover:shadow-lg">
                <img src={CssLogo} alt="logo skills adipramana" className="md:w-16 w-8" loading="lazy" />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="cursor-pointer flex justify-center z-30 md:w-[144px] w-[70px] border dark:border-none hover:border-none md:h-[140px] h-[71px] rounded-md dark:bg-[#0d0d0d] md:p-5 p-3 shadow-lg dark:shadow-[0px_1px_5px_0px_#000] hover:-translate-y-2 transition-all duration-100 ease-in hover:shadow-[#E34F26] hover:shadow-lg dark:hover:shadow-[#E34F26] dark:hover:shadow-lg">
                <img src={HtmlLogo} alt="logo skills adipramana" className="md:w-16 w-8" loading="lazy" />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="cursor-pointer flex justify-center z-30 md:w-[144px] w-[70px] border dark:border-none hover:border-none md:h-[140px] h-[71px] rounded-md dark:bg-[#0d0d0d] md:p-5 p-3 shadow-lg dark:shadow-[0px_1px_5px_0px_#000] hover:-translate-y-2 transition-all duration-100 ease-in hover:shadow-[#21759B] hover:shadow-lg dark:hover:shadow-[#21759B] dark:hover:shadow-lg">
                <img src={WordpressLogo} alt="logo skills adipramana" className="md:w-16 w-8" loading="lazy" />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="cursor-pointer flex justify-center z-30 md:w-[144px] w-[70px] border dark:border-none hover:border-none md:h-[140px] h-[71px] rounded-md dark:bg-[#0d0d0d] md:p-5 p-3 shadow-lg dark:shadow-[0px_1px_5px_0px_#000] hover:-translate-y-2 transition-all duration-100 ease-in hover:shadow-[#A259FF] hover:shadow-lg dark:hover:shadow-[#A259FF] dark:hover:shadow-lg">
                <img src={FigmaLogo} alt="logo skills adipramana" className="md:w-16 w-8" loading="lazy" />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="cursor-pointer flex justify-center z-30 md:w-[144px] w-[70px] border dark:border-none hover:border-none md:h-[140px] h-[71px] rounded-md dark:bg-[#0d0d0d] md:p-5 p-3 shadow-lg dark:shadow-[0px_1px_5px_0px_#000] hover:-translate-y-2 transition-all duration-100 ease-in hover:shadow-[#FF6C37] hover:shadow-lg dark:hover:shadow-[#FF6C37] dark:hover:shadow-lg">
                <img src={PostmanLogo} alt="logo skills adipramana" className="md:w-16 w-8" loading="lazy" />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="cursor-pointer flex justify-center z-30 md:w-[144px] w-[70px] border dark:border-none hover:border-none md:h-[140px] h-[71px] rounded-md dark:bg-[#0d0d0d] md:p-5 p-3 shadow-lg dark:shadow-[0px_1px_5px_0px_#000] hover:-translate-y-2 transition-all duration-100 ease-in hover:shadow-[#000] hover:shadow-lg dark:hover:shadow-[#000] dark:hover:shadow-lg">
                <img src={GithubLogo} alt="logo skills adipramana" className="md:w-16 w-8 " loading="lazy" />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="cursor-pointer flex justify-center z-30 md:w-[144px] w-[70px] border dark:border-none hover:border-none md:h-[140px] h-[71px] rounded-md dark:bg-[#0d0d0d] md:p-5 p-3 shadow-lg dark:shadow-[0px_1px_5px_0px_#000] hover:-translate-y-2 transition-all duration-100 ease-in hover:shadow-[#DC143C] hover:shadow-lg dark:hover:shadow-[#DC143C] dark:hover:shadow-lg">
                <img src={GitLogo} alt="logo skills adipramana" className="md:w-16 w-8" loading="lazy" />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="cursor-pointer flex justify-center z-30 md:w-[144px] w-[70px] border dark:border-none hover:border-none md:h-[140px] h-[71px] rounded-md dark:bg-[#0d0d0d] md:p-5 p-3 shadow-lg dark:shadow-[0px_1px_5px_0px_#000] hover:-translate-y-2 transition-all duration-100 ease-in hover:shadow-sky-800 hover:shadow-lg dark:hover:shadow-sky-800 dark:hover:shadow-lg">
                <img src={CanvaLogo} alt="logo skills adipramana" className="md:w-16 w-8" loading="lazy" />
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </Layouts>
    </div>
  );
};

export default AboutPage;
