import React from "react";

const Header = () => {
  return (
    <div className="w-full text-black h-40 px-40 flex items-center justify-between ">
      <div className="text-black text-3xl">
        <a href="/">Logo</a>
      </div>
      <div>
        <ul className="flex gap-8 text-black text-3xl">
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
