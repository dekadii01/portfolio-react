import React from "react";
import CardLeft from "../components/CardLeft";
import CardRight from "../components/CardRight";
import Ellipse from "/img/ellipse.svg";
import BgEllipse from "/img/bg-ellipse.svg";
import Navbar from "../components/Navbar";

const Layouts = (props) => {
  return (
    <div className="w-full min-h-[100dvh] dark:bg-slate-800 bg-blue-50 relative py-14">
      <img src={Ellipse} alt="" className="absolute top-0" />
      <img src={BgEllipse} alt="" className="absolute -bottom-10 left-1/2 transform -translate-x-1/2" />
      <Navbar />

      <div className="container grid grid-cols-9 md:px-10 lg:px-0 lg:space-x-5 md:mt-36">
        <CardLeft />
        <div className="col-span-9 lg:col-span-6 bg-white dark:bg-black rounded-xl p-12">{props.children}</div>
        <CardRight />
      </div>
    </div>
  );
};

export default Layouts;
