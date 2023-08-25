import React from 'react'
import { BiCodeAlt } from "react-icons/bi";
import {LiaConnectdevelop} from "react-icons/lia"
import {BsFillPaletteFill} from "react-icons/bs";


const Skills = () => {
  return (
    <div className="lg:container lg:mx-auto">
    <p className="text-center text-3xl font-thin text-base animate__animated animate__fadeIn">
      Yetenekler
    </p>
    <h3 className="text-center text-3xl font-bold animate__animated animate__fadeInDown">Skills</h3>
    <div className="flex justify-center mt-10 gap-20 h-[700px]">
        <div className='flex gap-7 items-center w-[1400px]'>
            <div className='w-1/3 flex items-center h-18 bg-metal px-4 py-4 rounded-xl gap-3 drop-shadow-md'>
                <BiCodeAlt className='text-4xl text-first-color'/>
                <div>
                    <h2 className='font-bold'>Programming Language</h2>
                <p className='text-sm'>C++,Javascript</p>
                </div>
                </div>
            <div className='w-1/3 flex items-center h-18 bg-metal px-4 py-4 rounded-xl gap-3 drop-shadow-md'>
            <LiaConnectdevelop className='text-4xl text-first-color'/>
            <div>
                <h2 className='font-bold'>Web Development</h2>
            <p className='text-sm'>React.js, Tailwind, Wordpress, Tailwind</p>
            </div></div>
            <div className='w-1/3 flex items-center h-18 bg-metal px-4 py-4 rounded-xl gap-3 drop-shadow-md'>
            <BsFillPaletteFill className='text-4xl text-first-color'/>
                <div>
                <h2 className='font-bold'>Design Tools</h2>
            <p className='text-sm'> Photoshop, Illustrator, After Effects, Premiere Pro, XD, </p></div>
            </div>
        </div>
      </div>
      </div>
  )
}

export default Skills