import React from "react";

import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { portfolio1 } from "../assets";
import { portfolio2 } from "../assets";
import { portfolio3 } from "../assets";
import { portfolio4 } from "../assets";
import { portfolio5 } from "../assets";


const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <div className="flex  text-neutral-900  text-[6.510vw] font-extrabold font-['Monument Extended'] uppercase">
          <h1 className="mr-5">OUR </h1> <h1>Portfolio </h1>
        </div>
      
      </motion.div>
      <motion.div variants={textVariant()}>
        <div className="flex text-neutral-900 text-[2.188vh] ">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to
        </div>
      
      </motion.div>
      <div className=" flex flex-row m-8 text-[1.042vw]">
        
        <div className="mx-3 w-[313px]  bg-yellow-400 rounded-[50px] border border-black">
        <div className=" py-3 text-black text-center font-normal font-['Futura Lt BT']">UI/UX Design</div>
        </div>
        <div className="mx-3 w-[313px] object-center bg-yellow-400 rounded-[50px] border border-black">
        <div className="py-3 text-black text-center font-normal font-['Futura Lt BT']">Web Development</div>
        </div>
        <div className="mx-3 w-[313px] object-center bg-yellow-400 rounded-[50px] border border-black">
        <div className="py-3 text-black text-center font-normal font-['Futura Lt BT']">Copywriting</div> 
        </div>
        <div className="mx-3 w-[313px] object-center bg-yellow-400 rounded-[50px] border border-black">
        <div className="py-3 text-black text-center font-normal font-['Futura Lt BT']">SEO</div>
        </div>

        <div class="basis-2/6"></div>
      </div>

        <div className="mt-10 grid grid-cols-3 gap-4">
          <div className="photo1"><img className="flex w-[29.167vw] h-[35.104vw] " src={portfolio1} alt ="photo" /></div>
          <div className="photo1"><img className="flex w-[29.167vw] h-[35.104vw] " src={portfolio2} alt ="photo" /></div>
          <div className="photo1"><img className="flex w-[29.167vw] h-[35.104vw] " src={portfolio3} alt ="photo" /></div>
          <div className="photo1"><img className="flex w-[29.167vw] h-[35.104vw] " src={portfolio4} alt ="photo" /></div>
          <div className="photo1"><img className="flex w-[29.167vw] h-[35.104vw] " src={portfolio5} alt ="photo" /></div>
          <div className="photo1"><img className="flex w-[29.167vw] h-[35.104vw] " src={portfolio1} alt ="photo" /></div>
        </div>
    

    
    <div className='  xs:bottom-4 bottom-1 w-full flex justify-center items-center'>
      <a href="#about">
        <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
          <motion.div
            animate={{
              y: [0, 30, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity, repeatType: 'loop'
            }}
            className='w-3 h-3 rounded-full bg-secondary mb-1'
          />

        </div>
      </a>

    </div>
    
  </>
  );
};

export default SectionWrapper(Experience, "work");