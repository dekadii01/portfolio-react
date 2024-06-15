import { IoSchoolOutline } from "react-icons/io5";
import { BsSuitcaseLg } from "react-icons/bs";
import Layouts from "../../layouts";

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
      </Layouts>
    </div>
  );
};

export default AboutPage;
