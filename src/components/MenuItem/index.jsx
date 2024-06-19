import { Link, useLocation } from "react-router-dom";

const MenuItem = (props) => {
  const location = useLocation();

  return (
    <Link to={props.path} className={`block w-full my-5 rounded-xl text-center py-4 2xl:py-6 font-medium ${location.pathname === props.path ? " bg-primary text-white" : " bg-abu dark:bg-dark text-[#44566C] dark:text-abuDark hover:bg-primary dark:hover:bg-primary hover:text-white dark:hover:text-white transition-all ease-in duration-100"}`}>
      {props.path === "/" && <i className="fa-regular fa-user text-[22px]"></i>}
      {props.path === "/about" && <i className="fa-regular fa-file-lines text-[22px]"></i>}
      {props.path === "/portfolio" && <i className="fa-solid fa-briefcase text-[22px]"></i>}
      {props.path === "/contact" && <i className="fa-regular fa-address-book text-[22px]"></i>}
      <h1 className="text-[15px]">{props.menu}</h1>
    </Link>
  );
};

export default MenuItem;
