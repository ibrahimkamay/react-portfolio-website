import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import AnimatedPage from "../components/AnimatedPages";

const Experience = () => {
  const array = [
    {
      id: 1,
      skills: "HTML",
      level: "Experienced",
    },
    {
      id: 2,
      skills: "CSS",
      level: "Basic",
    },
    {
      id: 3,
      skills: "Tailwind",
      level: "Basic",
    },
    {
      id: 4,
      skills: "Javascript",
      level: "Basic",
    },
    {
      id: 5,
      skills: "React",
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
        <div className="flex justify-center mt-10 gap-20 h-[700px]">
          <div className="flex-1 w-96 h-72 rounded-3xl border border-gray-500 p-8">
            <h2 className="text-center text-3xl font-bold text-second-color">
              Frontend Development
            </h2>
            <div className="flex flex-wrap w-96 justify-around">
              {array.map((item, index) => (
                <div key={index} className="flex">
                  <BsPatchCheckFill />
                  <div>
                    <h3 className="text-2xl">{item.skills}</h3>
                    <p>{item.level}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 w-96 h-72 rounded-3xl border border-gray-500"></div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Experience;
