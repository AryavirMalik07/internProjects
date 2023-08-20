import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="border-b-[2px] h-[70px] flex items-center">
      <div className=" flex items-center gap-[50px] w-[80%] m-auto">
        <div>
          <Link to="/">
            <img
              src="https://ambula.app/assets/images/logo.png"
              alt="image"
              className="w-[80px] h-[32px]"
            />
          </Link>
        </div>
        <div>
          <ul className="flex items-center gap-[20px]">
            <li className="list-none">
              <Link className="text-md text-slate-500 font-medium" to="/">
                {" "}
                Home
              </Link>
            </li>
            <li>
              <Link className="text-md text-slate-500 font-medium" to="/about">
                {" "}
                About
              </Link>
            </li>
            <li>
              <Link
                className="text-md text-slate-500 font-medium"
                to="/contact"
              >
                {" "}
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
