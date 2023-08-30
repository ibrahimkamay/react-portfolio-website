import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import AnimatedPage from "../components/AnimatedPages";

const Experience = () => {
  const frontend = [
    {
      id: 1,
      skills: "HTML",
      level: "Experienced",
    },
    {
      id: 2,
      skills: "CSS",
      level: "Experienced",
    },
    {
      id: 3,
      skills: "Wordpress",
      level: "Experienced",
    },
    {
      id: 4,
      skills: "Javascript",
      level: "Intermediate",
    },
    {
      id: 5,
      skills: "Tailwind",
      level: "Intermediate",
    },
    {
      id: 5,
      skills: "React JS",
      level: "Intermediate",
    },
  ];
  const graphic = [
    {
      id: 1,
      skills: "Photoshop",
      level: "Experienced",
    },
    {
      id: 2,
      skills: "Illustrator",
      level: "Experienced",
    },
    {
      id: 3,
      skills: "Premiere Pro",
      level: "Intermediate",
    },
    {
      id: 4,
      skills: "After Effects",
      level: "Intermediate",
    },
    {
      id: 5,
      skills: "Figma",
      level: "Basic",
    },
    {
      id: 5,
      skills: "XD",
      level: "Basic",
    },
  ];
  return (
    <AnimatedPage>
      <div className="lg:container lg:mx-auto">
        <p className="text-center text-3xl font-thin text-base text-base animate__animated animate__fadeIn">
          Keşfet
        </p>
        <h3 className="text-center text-first-color text-3xl font-bold animate__animated animate__fadeInDown">
          Deneyim
        </h3>
        <div className="flex justify-center mt-10 gap-4">
          {" "}
          {/* en dış container*/}
          <div className="flex-1 rounded-3xl text-center border border-gray-500 p-8">
            <h2 className="text-center text-3xl font-bold text-second-color mb-12">
              Web Development
            </h2>
            <div className="flex flex-wrap text-left flex-row justify-around gap-8">
              {frontend.map((item, index) => (
                <div key={index} className="flex w-40  justify-around">
                  <BsPatchCheckFill className="mt-1" size={24} />
                  <div>
                    <h3 className="text-xl">{item.skills}</h3>
                    <p className="font-thin">{item.level}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 rounded-3xl text-center border border-gray-500 p-8">
            <h2 className="text-center text-3xl font-bold text-second-color mb-12">
              Design Tools
            </h2>
            <div className="flex flex-wrap text-left flex-row justify-around gap-8">
              {graphic.map((item, index) => (
                <div key={index} className="flex w-40  justify-around">
                  <BsPatchCheckFill className="mt-1" size={24} />
                  <div>
                    <h3 className="text-xl">{item.skills}</h3>
                    <p className="font-thin">{item.level}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Experience;
