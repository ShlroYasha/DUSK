import { motion } from "framer-motion"
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { fadeIn, slideIn } from "../utils/motion";
const Boxcontent = () => {
  const Callto = ({ phone, children }) => {
    return <a href={`tel:${phone}`}>{children}</a>;
  };
  return (
    <div>
      <motion.div
        variants={fadeIn('bottom', 'tween', 0.2, 1)}
        className="flex-col text-center bg-neutral-800 p-20 rounded-3xl"
      >
        <h3 className="text-center object-fill text-yellow-400 text-[50px] font-extrabold font-['Monument Extended'] tracking-[3.75px]">
            In the <span className="text-white">pixels </span>and <span className="text-white">palettes </span>lie the power to move minds and manifest destinies.
        </h3>
        
       
        
        

      </motion.div>
      
    </div>
  )
}

export default SectionWrapper(Boxcontent,"work");