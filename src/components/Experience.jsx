import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { portfolio1 } from "../assets";
import { portfolio2 } from "../assets";
import { portfolio3 } from "../assets";
import { portfolio4 } from "../assets";
import { portfolio5 } from "../assets";
const ExperienceCard = ({ experience }) => {
  return (
    <div>
      
    </div>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <div className="flex  text-neutral-900  text-[125px] font-extrabold font-['Monument Extended'] ">
          <h1 className="mr-5 tracking-[-10px]">OUR </h1> <h1 className="tracking-[-10px]">Portfolio </h1>
        </div>
      
      </motion.div>
      <motion.div variants={textVariant()}>
        <div className="flex text-neutral-900 text-[30px] ">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to
        </div>
      
      </motion.div>

        <div className="mt-10 grid grid-cols-3 gap-4">
          <div className="photo1"><img className="flex w-[560px] h-[644px] " src={portfolio1} alt ="photo" /></div>
          <div className="photo1"><img className="flex w-[560px] h-[644px] " src={portfolio2} alt ="photo" /></div>
          <div className="photo1"><img className="flex w-[560px] h-[644px] " src={portfolio3} alt ="photo" /></div>
          <div className="photo1"><img className="flex w-[560px] h-[644px] " src={portfolio4} alt ="photo" /></div>
          <div className="photo1"><img className="flex w-[560px] h-[644px] " src={portfolio5} alt ="photo" /></div>
          <div className="photo1"><img className="flex w-[560px] h-[644px] " src={portfolio1} alt ="photo" /></div>

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