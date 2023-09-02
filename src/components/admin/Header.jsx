import React from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="relative flex w-full flex-wrap items-center justify-between bg-dark  py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4">
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        <div className="ml-2 text-neutral-800  dark:text-neutral-200 text-light">
          <div className=" text-xl font-semibold flex items-center gap-3">
         <FaUser />  User Interface
          </div>
     
          Surigao City Events Horizon
        </div>
        
      </div>
    </nav>
  );
};

export default Header;
