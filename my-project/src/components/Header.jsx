import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/iklogo.png";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className="w-full text-black h-40 px-40 flex items-center justify-between ">
      <div className="text-black text-3xl">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <FiMenu
        className="lg:hidden block h-12 w-12 cursor-pointer"
        onClick={() => setMenu(!menu)}
      />
      <nav
        className={`${
          menu ? "block" : "hidden"
        } lg:flex lg:items-center lg:w-auto`}
      >
        <ul className="flex gap-8 text-black text-3xl">
          <li>
            <Link to="/about" className="hover:text-first-color">
              About
            </Link>
          </li>
          <li>
            <Link to="/experience" className="hover:text-first-color">
              Experience
            </Link>
          </li>
          <li>
            <Link to="/skills" className="hover:text-first-color">
              Skills
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-first-color">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
