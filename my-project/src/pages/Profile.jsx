import React from "react";
import pp from "../assets/pp.png";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Profile = () => {
  return (
    <div className="lg:container lg:mx-auto px-4">
      <div className="flex justify-center items-center gap-20 h-[700px]">
        <div>
          <img src={pp} alt="deneme" />
        </div>
        <div className="self-center text-center">
          <p className="font-semibold">Hello, I'm</p>
          <h1 className="text-3xl font-bold">Halil İbrahim Kamay</h1>
          <p className="text-2xl text-gray-600 mb-4">Jr. Frontend Developer</p>
          <div className="flex gap-4 justify-center">
            <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border rounded-xl border-gray-400 rounded shadow">
              CV İndir
            </button>
            <button class="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 border rounded-xl border-gray-400 rounded shadow">
              İletişime Geç
            </button>
          </div>
          <div className="flex justify-center mt-4 gap-4">
            <BsGithub className="text-3xl" />
            <BsLinkedin className="text-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
