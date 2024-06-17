import Layouts from "../../layouts";
import Shape from "/img/header-shape.png";
import BurstBloat from "/img/burst-bloat.svg";

const PortfolioPage = () => {
  return (
    <Layouts>
      <section id="portfolio" className="p-5 md:p-12">
        <div className="flex items-center gap-x-6 mb-3">
          <h1 className="font-bold text-[40px] text-black dark:text-white">Portfolio</h1>
          <div className="h-[3px] w-44 rounded-lg bg-primary"></div>
        </div>
        <div className="relative w-fit">
          <h1 className="text-[28px] font-bold text-black dark:text-white z-10 relative">🚀 Highlight Projects</h1>
          <div className="absolute left-0 bottom-1 flex items-center dark:hidden">
            <img src={Shape} alt="shape" loading="lazy" className="w-24 h-6" />
          </div>
          <div className="absolute -right-10 -top-7">
            <img src={BurstBloat} alt="burstbloat" loading="lazy" className="" />
          </div>
        </div>
      </section>
    </Layouts>
  );
};

export default PortfolioPage;
