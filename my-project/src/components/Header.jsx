import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/iklogo.png"

const Header = () => {
  return (
    <div className="w-full text-black h-40 px-40 flex items-center justify-between ">
      <div className="text-black text-3xl">
      <Link to="/"><img src={logo} alt="" /></Link>
      </div>
      <div>
        <ul className="flex gap-8 text-black text-3xl">
          <li>
          <Link to="/about" className="hover:text-first-color">About</Link>
          </li>
          <li>
          <Link to="/experience" className="hover:text-first-color">Experience</Link>

          </li>
          <li>
          <Link to="/skills" className="hover:text-first-color">Skills</Link>
          </li>
          <li>
            <a href="#contact" className="hover:text-first-color">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
