import React from "react";
import { set } from "react-hook-form";
import { useState } from "react";
import { NavLink ,Link, useNavigate } from "react-router-dom";
import {MdMenu} from "react-icons/md"
import {FaXmark} from "react-icons/fa6"
import { logout } from "../utils/auth"; // Import the logout function


const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const HandleMenuToggler = () => {
    setisMenuOpen(!isMenuOpen);
  };

  const Navitems = [
    { path: "/", title: "Start a search" },
    { path: "/my-job", title: "My Jobs" },
    { path: "/salaryest", title: "Salary Estimate" },
    { path: "/Post-job", title: "Post a Jobs" },
  ];
  return (
     <header className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <nav className="flex justify-between items-center py-6">
        <a className="text-2xl" href="/">
          <h1>
            Job <span className="text-[#3575E2]">Portal</span>
          </h1>
        </a>
        <ul className="hidden md:flex gap-12 ">
          {Navitems.map(({ path, title }) => (
            <li className="text-base text-primary" key={path}>
              <NavLink
                to={path}
                className={({ isActive, }) =>
                  isActive ? "active" : ""
                }
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
        < div className="text-base text-primary font-medium space-x-5 hidden lg:block">
        <button
            onClick={() => logout(navigate)} // Call logout with navigate function
            className="py-2 px-5 border rounded-sm bg-blue text-white"
          >
            Log Out
          </button>           </div>
        <div className="md:hidden block">
            <button onClick={HandleMenuToggler}>
                {
                isMenuOpen?<FaXmark className="w-8 h-8 text-primary"/>:<MdMenu className="w-8 h-8 text-primary"/>
                }
            </button>
        </div>
      </nav>
      <div className={`px-4 bg-black py-5 rounded-sm ${isMenuOpen?"":"hidden"}`}>
        <ul>
        {Navitems.map(({ path, title }) => (
            <li className="text-base text-white first:text-white py-1" key={path}>
              <NavLink
                to={path}
                className={({ isActive, }) =>
                  isActive ? "active" : ""
                }
              >
                {title}
              </NavLink>
            </li>
          ))}
 <li className="text-white py-1">
 <button
              onClick={() => logout(navigate)} // Call logout with navigate function
              className="text-white"
            >
              Log Out
            </button>
          </li>

        </ul>
      </div>
    </header>
  );
};

export default Navbar;
