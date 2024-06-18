import Layouts from "../../layouts";
import Footer from "../../components/Footer";
import Shape from "/img/header-shape.png";
import BurstBloat from "/img/burst-bloat.svg";
import IgnosWeb from "/img/projects/ignos-studio.webp";
import LadiTv from "/img/projects/ladi-tv.webp";
import PersonalBootstrap from "/img/projects/porto-bootstrap.webp";
import PersonalTailwind from "/img/projects/porto-tailwind.webp";
import SkillineWeb from "/img/projects/skilline-web.webp";
import TeamFlowWeb from "/img/projects/teamflow-web.webp";
import TheMalakaWeb from "/img/projects/the-malaka-web.webp";
import TravelWeb from "/img/projects/travel-web.webp";
import Wordpress from "/img/projects/wordpress.webp";
import LogoIgnos from "/img/clients/ignos.png";
import Tailwind from "/img/skills/tailwind.svg";
import Vite from "/img/skills/vite.svg";
import Bootstrap from "/img/skills/bootstrap.svg";
import Laravel from "/img/skills/laravel.svg";
import Php from "/img/skills/php.svg";
import Javascript from "/img/skills/javascript.svg";
import LogoWordpress from "/img/skills/wordpress.svg";
import Splide from "/img/skills/splide.png";

const PortfolioPage = () => {
  return (
    <Layouts>
      <section id="portfolio" className="p-5 md:p-12">
        <div className="flex items-center gap-x-6 mb-3">
          <h1 className="font-bold text-[40px] text-black dark:text-white">Portfolio</h1>
          <div className="h-[3px] w-44 rounded-lg bg-primary"></div>
        </div>
        <div className="relative w-fit mb-3">
          <h1 className="text-[28px] font-bold text-black dark:text-white z-10 relative">🚀 Highlight Projects</h1>
          <div className="absolute left-0 bottom-1 flex items-center dark:hidden">
            <img src={Shape} alt="shape" loading="lazy" className="w-24 h-6" />
          </div>
          <div className="absolute -right-10 -top-7">
            <img src={BurstBloat} alt="burstbloat" loading="lazy" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-y-5">
          <a href="http://ignosstuduio.id/" target="_blank" className="bg-white shadow-sm dark:bg-[#0d0d0d] p-3 rounded-lg hover:shadow-lg hover:scale-[1.010] cursor-pointer md:rounded-xl  transition-all duration-150 ease-in">
            <img src={IgnosWeb} alt="project adi pramana" loading="lazy" />
            <img src={LogoIgnos} alt="logo project" className="object-cover w-8 my-2" loading="lazy" />
            <div className="flex items-center">
              <p className="md:text-base text-sm text-[#26343b] dark:text-white">Booking System •</p>
              <div className="flex items-center">
                <img src={Vite} alt="tech stack logo adi pramana" className="md:w-[26px] w-5 object-contain aspect-[4/3]" />
                <img src={Laravel} alt="tech stack logo adi pramana" className="md:w-[26px] w-5 object-contain aspect-[4/3]" />
                <img src={Tailwind} alt="tech stack logo adi pramana" className="md:w-[26px] w-5 object-contain aspect-[4/3]" />
              </div>
            </div>
          </a>
          <a
            href="https://dekadii01.github.io/destinize-website/"
            target="_blank"
            className="bg-white shadow-sm dark:bg-[#0d0d0d] p-3 rounded-lg hover:shadow-lg hover:scale-[1.010] cursor-pointer md:rounded-xl  transition-all duration-150 ease-in"
          >
            <img src={TravelWeb} alt="project adi pramana" loading="lazy" />
            <img src="https://dekadii01.github.io/destinize-website/assets/img/logo-travel.svg" alt="logo project" className="object-cover w-8 my-2" loading="lazy" />
            <div className="flex items-center gap-x-1">
              <p className="md:text-base text-sm text-[#26343b] dark:text-white">Company Profile •</p>
              <div className="flex items-center ">
                <img src={Tailwind} alt="tech stack logo adi pramana" className="md:w-[26px] w-5 object-contain aspect-[4/3]" />
                <img src={Splide} alt="tech stack logo adi pramana" className="md:w-[26px] w-5 object-contain aspect-[4/3]" />
                <img src={Javascript} alt="tech stack logo adi pramana" className="md:w-[26px] w-5 object-contain aspect-[4/3]" />
              </div>
            </div>
          </a>
          <a
            href="https://dekadii01.github.io/skilline-website/"
            target="_blank"
            className="bg-white shadow-sm dark:bg-[#0d0d0d] p-3 rounded-lg hover:shadow-lg hover:scale-[1.010] cursor-pointer md:rounded-xl  transition-all duration-150 ease-in"
          >
            <img src={SkillineWeb} alt="project adi pramana" loading="lazy" />
            <img src="https://dekadii01.github.io/skilline-website/assets/img/logo-skilline.svg" alt="logo project" className="object-cover w-14 my-2" loading="lazy" />
            <div className="flex items-center gap-x-1">
              <p className="md:text-base text-sm text-[#26343b] dark:text-white">Company Profile •</p>
              <div className="flex items-center ">
                <img src={Tailwind} alt="tech stack logo adi pramana" className="md:w-[26px] w-5 object-contain aspect-[4/3]" />
                <img src={Splide} alt="tech stack logo adi pramana" className="md:w-[26px] w-5 object-contain aspect-[4/3]" />
                <img src={Javascript} alt="tech stack logo adi pramana" className="md:w-[26px] w-5 object-contain aspect-[4/3]" />
              </div>
            </div>
          </a>
          <a
            href="https://dekadii01.github.io/teamflow-website/"
            target="_blank"
            className="bg-white shadow-sm dark:bg-[#0d0d0d] p-3 rounded-lg hover:shadow-lg hover:scale-[1.010] cursor-pointer md:rounded-xl  transition-all duration-150 ease-in"
          >
            <img src={TeamFlowWeb} alt="project adi pramana" loading="lazy" />
            <img src="https://dekadii01.github.io/teamflow-website/assets/img/logo.svg" alt="logo project" className="object-cover w-32 my-2" loading="lazy" />
            <div className="flex items-center gap-x-1">
              <p className="md:text-base text-sm text-[#26343b] dark:text-white">Company Profile •</p>
              <div className="flex items-center ">
                <img src={Tailwind} alt="tech stack logo adi pramana" className="md:w-[26px] w-5 object-contain aspect-[4/3]" />
                <img src={Javascript} alt="tech stack logo adi pramana" className="md:w-[26px] w-5 object-contain aspect-[4/3]" />
              </div>
            </div>
          </a>
          <a href="http://laditv.epizy.com/" target="_blank" className="bg-white shadow-sm dark:bg-[#0d0d0d] p-3 rounded-lg hover:shadow-lg hover:scale-[1.010] cursor-pointer md:rounded-xl  transition-all duration-150 ease-in">
            <img src={LadiTv} alt="project adi pramana" loading="lazy" />
            <img src="http://laditv.epizy.com/assets/images/logos/logoladi-dark.png" alt="logo project" className="object-cover w-16 my-2" loading="lazy" />
            <div className="flex items-center gap-x-1">
              <p className="md:text-base text-sm text-[#26343b] dark:text-white">Content Management System •</p>
              <div className="flex items-center gap-x-1">
                <img src={Bootstrap} alt="tech stack logo adi pramana" className="md:w-[26px] w-5 object-contain aspect-[4/3]" />
                <img src={Php} alt="tech stack logo adi pramana" className="md:w-[26px] w-5 object-contain aspect-[4/3]" />
                <img src={Javascript} alt="tech stack logo adi pramana" className="md:w-[26px] w-5 object-contain aspect-[4/3]" />
              </div>
            </div>
          </a>
          <a
            href="https://dekadii01.github.io/the-malaka/"
            target="_blank"
            className="bg-white shadow-sm dark:bg-[#0d0d0d] p-3 rounded-lg hover:shadow-lg hover:scale-[1.010] cursor-pointer md:rounded-xl  transition-all duration-150 ease-in"
          >
            <img src={TheMalakaWeb} alt="project adi pramana" loading="lazy" />
            <img src="https://dekadii01.github.io/the-malaka/assets/img/logo.png" alt="logo project" className="object-cover w-8 my-2" loading="lazy" />
            <div className="flex items-center gap-x-1">
              <p className="md:text-base text-sm text-[#26343b] dark:text-white">Company Profile •</p>
              <div className="flex items-center ">
                <img src={Bootstrap} alt="tech stack logo adi pramana" className="md:w-[26px] w-5 object-contain aspect-[4/3]" />
                <img src={Javascript} alt="tech stack logo adi pramana" className="md:w-[26px] w-5 object-contain aspect-[4/3]" />
              </div>
            </div>
          </a>
          <a
            href="https://dekadii01.github.io/portfolio-tailwind-css/"
            target="_blank"
            className="bg-white shadow-sm dark:bg-[#0d0d0d] p-3 rounded-lg hover:shadow-lg hover:scale-[1.010] cursor-pointer md:rounded-xl  transition-all duration-150 ease-in"
          >
            <img src={PersonalTailwind} alt="project adi pramana" loading="lazy" />
            <h1 className="text-sky-500 my-2">Adi Pramana</h1>
            <div className="flex items-center gap-x-1">
              <p className="md:text-base text-sm text-[#26343b] dark:text-white">Personal Website •</p>
              <div className="flex items-center ">
                <img src={Tailwind} alt="tech stack logo adi pramana" className="md:w-[26px] w-5 object-contain aspect-[4/3]" />
                <img src={Javascript} alt="tech stack logo adi pramana" className="md:w-[26px] w-5 object-contain aspect-[4/3]" />
              </div>
            </div>
          </a>
          <a href="https://adipramana.vercel.app/" target="_blank" className="bg-white shadow-sm dark:bg-[#0d0d0d] p-3 rounded-lg hover:shadow-lg hover:scale-[1.010] cursor-pointer md:rounded-xl  transition-all duration-150 ease-in">
            <img src={PersonalBootstrap} alt="project adi pramana" loading="lazy" />
            <h1 className="my-2 text-black dark:text-white">Adi Pramana</h1>
            <div className="flex items-center gap-x-1">
              <p className="md:text-base text-sm text-[#26343b] dark:text-white">Personal Website •</p>
              <div className="flex items-center ">
                <img src={Bootstrap} alt="tech stack logo adi pramana" className="md:w-[26px] w-5 object-contain aspect-[4/3]" />
                <img src={Javascript} alt="tech stack logo adi pramana" className="md:w-[26px] w-5 object-contain aspect-[4/3]" />
              </div>
            </div>
          </a>
          <a
            href="https://dekadii01.github.io/wordpress/"
            target="_blank"
            className="bg-white shadow-sm dark:bg-[#0d0d0d] p-3 rounded-lg hover:shadow-lg hover:scale-[1.010] cursor-pointer md:rounded-xl  transition-all duration-150 ease-in"
          >
            <img src={Wordpress} alt="project adi pramana" loading="lazy" />
            <h1 className="text-black dark:text-white my-2">Adi Pramana</h1>
            <div className="flex items-center">
              <p className="md:text-base text-sm text-[#26343b] dark:text-white">Personal Website •</p>
              <div className="flex items-center">
                <img src={LogoWordpress} alt="tech stack logo adi pramana" className="md:w-[26px] w-5 object-contain aspect-[4/3]" />
              </div>
            </div>
          </a>
        </div>
      </section>
      <Footer />
    </Layouts>
  );
};

export default PortfolioPage;
