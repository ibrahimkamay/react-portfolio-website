import React from "react";
import pp from "../assets/pp.png";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import {
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoSass,
} from "react-icons/bi";
import { GrLocationPin } from "react-icons/gr";
import ReactTyped from "react-typed";
import "animate.css";
import AnimatedPage from "../components/AnimatedPages";

const Profile = () => {
  return (
    <div className="lg:container lg:mx-auto px-4">
      <div className="flex justify-center items-center gap-20 h-[700px]">
        <div>
          <img
            className="animate__animated animate__fadeInDown"
            src={pp}
            alt="deneme"
          />
        </div>
        <div className="text-center animate__animated animate__fadeInRight">
          <p className="font-semibold text-second-color">Hello, I'm</p>
          <h1 className="text-3xl font-bold text-first-color">
            Halil İbrahim Kamay
          </h1>
          <p className="text-2xl text-gray-600 mb-4">
            <ReactTyped
              strings={["Jr.Frontend Developer"]}
              typeSpeed={200}
              loop
            />
          </p>
          <p className="flex text-sm items-center justify-center mb-4">
            based in Istanbul, Turkey <GrLocationPin />
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-first-color text-white-color hover:bg-gray-100 text-gray-800 font-semibold py-4 px-10  rounded-xl border-gray-400 rounded shadow">
              Show CV
            </button>
            <button className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 border rounded-xl border-gray-400 rounded shadow">
              Contact us
            </button>
          </div>
          <div className="flex justify-center mt-4 gap-4">
            <a href="https://github.com/ibrahimkamay">
              <BsGithub className="text-3xl  hover:text-first-color " />
            </a>
            <a href="https://www.linkedin.com/in/halil-ibrahim-kamay/">
              <BsLinkedin className="text-3xl hover:text-first-color" />
            </a>
          </div>
          <div className="mt-12 flex gap-7 items-center">
            <p className="text-sm font-semibold">Tech Stack | </p>
            <div className="flex gap-6 items-center">
              <BiLogoHtml5
                size={30}
                className="hover:text-first-color transition-all"
              />
              <BiLogoCss3
                size={30}
                className="hover:text-first-color transition-all"
              />
              <BiLogoJavascript
                size={30}
                className="hover:text-first-color transition-all"
              />
              <BiLogoReact
                size={30}
                className="hover:text-first-color transition-all"
              />
              <BiLogoTailwindCss
                size={30}
                className="hover:text-first-color transition-all"
              />
              <BiLogoSass
                size={30}
                className="hover:text-first-color transition-all"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
