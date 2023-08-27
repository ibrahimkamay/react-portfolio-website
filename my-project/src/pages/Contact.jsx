import React from "react";
import { ImMail4 } from "react-icons/im";
import { TiSocialLinkedinCircular } from "react-icons/ti";

const Contact = () => {
  return (
    <div className="lg:container lg:mx-auto">
      <p className="text-center text-3xl font-thin text-base animate__animated animate__fadeIn">
        Get in touch
      </p>
      <h3 className="text-center text-first-color text-3xl font-bold animate__animated animate__fadeInDown">
        Contact Me
      </h3>
      <div className="flex items-center justify-center mt-10 gap-20 h-[700px] ">
        <div className="flex justify-center rounded-full border border-[#a3a3a3] bg-metal my-8 mx-auto p-8 gap-4 animate__animated animate__fadeInUp">
          <div className="flex items-center gap-2 text-xl transition duration-0 hover:duration-150 hover:underline hover:text-first-color">
            <ImMail4 className="text-2xl" />
            <a href="mailto:ibrahimkamayweb@gmail.com">
              ibrahimkamayweb@gmail.com
            </a>
          </div>

          <div className="flex items-center text-xl gap-1 transition duration-0 hover:duration-150 hover:underline hover:text-first-color">
            <TiSocialLinkedinCircular className="text-3xl" />
            <a href="https://www.linkedin.com/in/halil-ibrahim-kamay/">
              Linkedin
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
