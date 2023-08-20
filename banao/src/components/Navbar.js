import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Navbar = () => {
  return (
    <div className="flex items-center justify-evenly py-4">
      <div className="logo ">
        <h1 className="text-2xl text-lime-600 ">ATG.WORLD</h1>
      </div>
      <div className="flex bg-slate-600 border-2 py-2 px-4 rounded-2xl w-[300px]">
        <FontAwesomeIcon icon="fa-sharp fa-light fa-magnifying-glass" />
        <input
          className="outline-none bg-inherit text-white"
          type="text"
          placeholder="Search for your favourite group of ATG"
        />
      </div>
      <div className="flex items-center gap-[5px]">
        <h1 className="font-semibold text-normal">Create account.</h1>
        <button className="font-semibold text-normal text-sky-600">
          It's Free
        </button>
      </div>
    </div>
  );
};

export default Navbar;
