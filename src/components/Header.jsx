import { useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="flex items-center justify-between p-4 shadow relative bg-slate-50 sm:px-[2.5rem] md:px-[4rem]">
      <h1 className="font-bold text-xl  mr-6 sm:mr-[3rem] md:mr-[3rem] md:text-[30px]">
        pti.
      </h1>
      <div className="flex items-center  bg-white shadow  rounded-md w-full">
        <RiSearchLine className=" ml-1 pl-1 text-red-300 md:text-lg" />
        <input
          type="text"
          placeholder="Search Audiobook"
          className="outline-none pl-1 py-1 text-sm w-full  mr-1 md:py-[8px] md:text-base "
        />
      </div>
      <div>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className=" flex items-center justify-between bg-white shadow rounded-md font-bold text-sm px-2 py-1  w-[7rem] ml-1 md:py-[8px] md:text-base md:w-[8rem]"
        >
          MENU
          {!isOpen ? (
            <FaChevronUp className="h-3 text-red-400" />
          ) : (
            <FaChevronDown className="h-3 text-red-400" />
          )}
        </button>

        {isOpen && (
          <div className="shadow bg-white absolute w-[7rem] mt-1 rounded-md py-1 ml-1  md:w-[8rem]">
            <div
              className={`w-full ${
                location.pathname === "/" ? "text-red-400 bg-zinc-300 " : ""
              }  px-2 text-sm md:text-base`}
            >
              <Link to="/">Home</Link>
            </div>
            <div
              className={`w-full ${
                location.pathname === "/details"
                  ? "text-red-400 bg-zinc-300 "
                  : ""
              }  px-2 text-sm md:text-base`}
            >
              <Link to="/details">Details</Link>
            </div>
            <div
              className={`w-full ${
                location.pathname === "/category"
                  ? "text-red-400  bg-zinc-300"
                  : ""
              } px-2 text-sm md:text-base`}
            >
              <Link to="/category">Category</Link>
            </div>
            <div
              className={`w-full ${
                location.pathname === "#" ? "text-red-400 bg-zinc-300 " : ""
              } px-2 text-sm md:text-base`}
            >
              <Link to="#">My Favorites</Link>
            </div>
            <div
              className={`w-full ${
                location.pathname === "#" ? "text-red-400 bg-zinc-300" : ""
              }  px-2 text-sm md:text-base`}
            >
              <Link to="#">Profile</Link>
            </div>
            <div
              className={`w-full ${
                location.pathname === "#" ? "text-red-400 bg-zinc-300" : ""
              }  px-2 text-sm md:text-base`}
            >
              <Link to="#">Log In/Sign Up</Link>
            </div>
          </div>
        )}
      </div>
      <div className="hidden p-2 text-[16px] bg-red-400 rounded-full  text-white ml-12 sm:flex md:ml-[4rem] md:p-3 md:text-[18px]">
        <FaUser />
      </div>
    </div>
  );
};

export default Header;
