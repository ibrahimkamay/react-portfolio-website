import React from "react";
import pp from "../assets/pp.png";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import ReactTyped from "react-typed";
import 'animate.css';
import AnimatedPage from "../components/AnimatedPages";


const Profile = () => {
  return (
   
    <div className="lg:container lg:mx-auto px-4">
      <div className="flex justify-center items-center gap-20 h-[700px]">
        <div>
          <img className="animate__animated animate__fadeInDown" src={pp} alt="deneme" />
        </div>
        <div className="self-center text-center animate__animated animate__fadeInRight">
          <p className="font-semibold text-second-color">Hello, I'm</p>
          <h1 className="text-3xl font-bold text-first-color">Halil İbrahim Kamay</h1>
          <p className="text-2xl text-gray-600 mb-4"><ReactTyped strings={["Jr.Frontend Developer"]} typeSpeed={200} loop /></p>
          <div className="flex gap-4 justify-center">
            <button class="bg-first-color text-white-color hover:bg-gray-100 text-gray-800 font-semibold py-4 px-10  rounded-xl border-gray-400 rounded shadow">
              Show CV
            </button>
            <button class="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 border rounded-xl border-gray-400 rounded shadow">
              Contact us
            </button>
          </div>
          <div className="flex justify-center mt-4 gap-4">
            <a href="https://github.com/ibrahimkamay"><BsGithub className="text-3xl  hover:text-first-color " /></a>
            <a href="https://www.linkedin.com/in/halil-ibrahim-kamay/"><BsLinkedin className="text-3xl hover:text-first-color" /></a>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Profile;
