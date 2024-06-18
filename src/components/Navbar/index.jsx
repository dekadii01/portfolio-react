import { DarkThemeToggle, Flowbite } from "flowbite-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="container mx-auto relative z-50">
      <div className=" flex flex-wrap items-center justify-between mx-auto py-4 rounded-full">
        <a href="#" className="">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Adi Pramana.</span>
        </a>
        <div className="flex">
          <Flowbite>
            <DarkThemeToggle />
          </Flowbite>

          <button
            data-collapse-toggle="navbar-hamburger"
            type="button"
            className="inline-flex lg:hidden items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-hamburger"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>

        <div className="hidden w-11/12 sm:w-[96%] absolute top-[50px]" id="navbar-hamburger">
          <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 ">
            <li>
              <Link to="/" className={`${location.pathname === "/" ? "nav-active" : "nav-not-active"}`} aria-current="page">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={`${location.pathname === "/about" ? "nav-active" : "nav-not-active"}`}>
                Resume
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className={`${location.pathname === "/portfolio" ? "nav-active" : "nav-not-active"}`}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/contact" className={`${location.pathname === "/contact" ? "nav-active" : "nav-not-active"}`}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
