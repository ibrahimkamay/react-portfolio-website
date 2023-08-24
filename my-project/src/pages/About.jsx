import React from "react";
import { TbAwardFilled } from "react-icons/tb";
import pp from "../assets/pp.png";

const About = () => {
  return (
    <div className="lg:container lg:mx-auto">
      <p className="text-center text-3xl font-thin text-base">
        Neler bilmek istiyorsun?
      </p>
      <h3 className="text-center text-3xl font-bold">Hakkımda</h3>
      <div className="flex justify-center items-center gap-20 h-[700px]">
        <div className="flex w-1/3 h-full items-center justify-center">
          <img src={pp} alt="" />
        </div>
        <div className="flex w-2/3 h-full items-stretch justify-center flex-col ">
          <div className="flex items-stretch justify-center gap-8 my-8">
            <div className="p-6 flex-1 w-96 text-center flex flex-col items-center rounded-3xl border border-gray-500">
              <TbAwardFilled className="text-3xl" />
              <h3 className="font-semibold mt-1">Deneyim</h3>
              <p>
                2+ years
                <br />
                Frontend Development
              </p>
            </div>
            <div className="p-6 flex-1 w-96 text-center flex flex-col items-center rounded-3xl border border-gray-500">
              <TbAwardFilled className="text-3xl" />
              <h3 className="font-semibold mt-1">Deneyim</h3>
              <p>
                2+ years
                <br />
                Frontend Development
              </p>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic vero
            soluta commodi atque quasi dolor ipsum doloribus aut odit dolorum
            laborum quibusdam eveniet itaque repudiandae distinctio, cupiditate
            deleniti asperiores dicta.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
