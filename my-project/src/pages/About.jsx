import React from "react";
import { TbAwardFilled } from "react-icons/tb";
import pp from "../assets/pp.png";
import AnimatedPage from "../components/AnimatedPages";

const About = () => {
  return (
    <AnimatedPage>
    <div className="lg:container lg:mx-auto">
      <p className="text-center text-3xl font-thin text-base animate__animated animate__fadeIn">
        Neler bilmek istiyorsun?
      </p>
      <h3 className="text-center text-3xl font-bold text-first-color animate__animated animate__fadeInDown">Hakkımda</h3>
      <div className="flex justify-center items-center gap-20 h-[700px]">
        <div className="flex w-1/3 h-full items-center justify-center animate__animated animate__fadeInLeft">
          <img src={pp} alt="" />
        </div>
        <div className="flex w-2/3 h-full items-stretch justify-center flex-col animate__animated animate__fadeInRight">
          <div className="flex items-stretch justify-center gap-8 my-8">
            <div className="p-6 flex-1 w-96 text-center flex flex-col items-center rounded-3xl shadow-[0_10px_30pxrgba(0,0,0,0.4)]">
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
    </AnimatedPage>
  );
};

export default About;
