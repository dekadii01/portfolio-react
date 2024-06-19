import React from "react";

const PortfolioCard = ({ link, image, logo, title, description, techStack }) => {
  const getLogoClass = (title) => {
    if (title === "Skilline" ) {
      return "object-cover w-14 my-2";
    }else if( title === "TeamFlow" || title === "Ladi TV"){
        return "object-cover w-24 my-2";
    }
    return "object-cover w-8 my-2";
  };

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="bg-white shadow-sm dark:bg-[#0d0d0d] p-3 rounded-lg hover:shadow-lg hover:scale-[1.010] cursor-pointer md:rounded-xl transition-all duration-150 ease-in">
      <img src={image} alt={`project ${title}`} loading="lazy" />
      {logo ? <img src={logo} alt={`logo ${title}`} className={getLogoClass(title)} loading="lazy" /> : <h1 className="my-2 text-black dark:text-white">{title}</h1>}
      <div className="flex items-center gap-x-1">
        <p className="md:text-base text-sm text-[#26343b] dark:text-white">{description} •</p>
        <div className="flex items-center gap-x-1">
          {techStack.map((tech, index) => (
            <img key={index} src={tech} alt={`tech stack logo ${title}`} className="md:w-[26px] w-5 object-contain aspect-[4/3]" />
          ))}
        </div>
      </div>
    </a>
  );
};

export default PortfolioCard;
