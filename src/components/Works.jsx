
import { motion } from "framer-motion";

import { SectionWrapper } from '../hoc';
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      
       
      <div  className=" flex justify-between ">
      
        
      <div className="mt-5 mb-5 text-stone-300 text-[4.16vw] font-normal font-['Futura Lt BT']">
        <h3>{name}</h3>
      </div>
      
        
    </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div  variants={textVariant()}>
        
        <div className="flex h-30 text-yellow-400 text-[6.510vw] font-extrabold font-['Monument Extended'] ">
          <h1 className="mr-5">OUR </h1> <h1>SERVICES </h1>
        </div>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to
        </motion.p>
      </div>
      <div className="mt-20 flex-col">
        {projects.map((project, index) => (
          <div className="place-self-stretch border-2 border-neutral-900 border-t-stone-300">
              <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
            </div>
          
        ))}

      </div>
    </>
  )
}

export default SectionWrapper(Works, "work");