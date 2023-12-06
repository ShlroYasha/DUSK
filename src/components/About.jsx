import { motion } from "framer-motion"
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { fadeIn, slideIn } from "../utils/motion";
const About = () => {
  const Callto = ({ phone, children }) => {
    return <a href={`tel:${phone}`}>{children}</a>;
  };
  return (
    <div >
      
      <motion.div
        variants={fadeIn('center', 'tween', 0.2, 1)}
        className="flex-col text-center bg-neutral-800 p-20 rounded-3xl z-0"
      >
       <h3 className="text-center object-fill text-yellow-400 text-[125px] font-extrabold font-['Monument Extended'] tracking-[3.75px]">WHO WE ARE?</h3>
        <p className={styles.sectionSubText}> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to</p>
        
        
        <div className="mt-8 ml-[370px] font-extrabold font-['Monument Extended'] tracking-[3.75px]">
        <div className=" w-[300px] object-fill text-center text-neutral-900 bg-yellow-400 rounded-[50px] border border-black">
        <a href="" target="_blank"
          className="text-[40px] hover:text-white"> ABOUT US </a>
        </div>
        </div>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(About, "about");