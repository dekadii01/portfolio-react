import React, { useEffect } from "react";
import CardLeft from "../components/CardLeft";
import CardRight from "../components/CardRight";
import Ellipse from "/img/ellipse.svg";
import Navbar from "../components/Navbar";
import { initFlowbite } from "flowbite";
import BackToTop from "../components/BackToTop";

const Layouts = (props) => {
  useEffect(() => {
    initFlowbite();
  }, []);
  return (
    <div className="w-full min-h-[100dvh] dark:bg-zinc-950 bg-blue-50 relative py-14">
      <img src={Ellipse} alt="" className="absolute top-0 inline-block dark:hidden " />
      <Navbar />

      <div className="container grid grid-cols-9 md:px-10 lg:px-0 lg:space-x-5 lg:mt-36 gap-y-5 lg:gap-0">
        <CardLeft />
        <div className="col-span-9 lg:col-span-6 bg-white dark:bg-black rounded-xl h-fit">{props.children}</div>
        <CardRight />
      </div>
      <BackToTop />
    </div>
  );
};

export default Layouts;
