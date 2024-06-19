import React from "react";
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
import LadiTvLogo from "/img/logoladi-dark.png";
import PortfolioCard from "../../components/PortfolioCard";

const PortfolioPage = () => {
  const projects = [
    {
      link: "http://ignosstuduio.id/",
      image: IgnosWeb,
      logo: LogoIgnos,
      title: "Ignos Studio",
      description: "Booking System",
      techStack: [Vite, Laravel, Tailwind],
    },
    {
      link: "https://dekadii01.github.io/destinize-website/",
      image: TravelWeb,
      logo: "https://dekadii01.github.io/destinize-website/assets/img/logo-travel.svg",
      title: "Destinize",
      description: "Company Profile",
      techStack: [Tailwind, Splide, Javascript],
    },
    {
      link: "https://dekadii01.github.io/skilline-website/",
      image: SkillineWeb,
      logo: "https://dekadii01.github.io/skilline-website/assets/img/logo-skilline.svg",
      title: "Skilline",
      description: "Company Profile",
      techStack: [Tailwind, Splide, Javascript],
    },
    {
      link: "https://dekadii01.github.io/teamflow-website/",
      image: TeamFlowWeb,
      logo: "https://dekadii01.github.io/teamflow-website/assets/img/logo.svg",
      title: "TeamFlow",
      description: "Company Profile",
      techStack: [Tailwind, Javascript],
    },
    {
      link: "http://laditv.epizy.com/",
      image: LadiTv,
      logo: LadiTvLogo,
      title: "Ladi TV",
      description: "Content Management System",
      techStack: [Bootstrap, Php, Javascript],
    },
    {
      link: "https://dekadii01.github.io/the-malaka/",
      image: TheMalakaWeb,
      logo: "https://dekadii01.github.io/the-malaka/assets/img/logo.png",
      title: "The Malaka",
      description: "Company Profile",
      techStack: [Bootstrap, Javascript],
    },
    {
      link: "https://dekadii01.github.io/portfolio-tailwind-css/",
      image: PersonalTailwind,
      logo: null,
      title: "Adi Pramana Tailwind",
      description: "Personal Website",
      techStack: [Tailwind, Javascript],
    },
    {
      link: "https://adipramana.vercel.app/",
      image: PersonalBootstrap,
      logo: null,
      title: "Adi Pramana Bootstrap",
      description: "Personal Website",
      techStack: [Bootstrap, Javascript],
    },
    {
      link: "https://dekadii01.github.io/wordpress/",
      image: Wordpress,
      logo: LogoWordpress,
      title: "WordPress Site",
      description: "Personal Website",
      techStack: [LogoWordpress],
    },
  ];

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
          {projects.map((project, index) => (
            <PortfolioCard key={index} {...project} />
          ))}
        </div>
      </section>
      <Footer />
    </Layouts>
  );
};

export default PortfolioPage;
