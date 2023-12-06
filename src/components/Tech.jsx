import { motion } from "framer-motion"
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { fadeIn, slideIn } from "../utils/motion";
const Tech = () => {
  const Callto = ({ phone, children }) => {
    return <a href={`tel:${phone}`}>{children}</a>;
  };
  return (
    <div >
      
    <motion.div
      variants={fadeIn('center', 'tween', 0.2, 1)}
      className="flex-col text-center bg-neutral-800 p-20 rounded-3xl z-0"
    >
     <h3 className="text-center object-fill text-white text-[125px] font-extrabold font-['Monument Extended'] tracking-[3.75px] uppercase">Let’s discuss your ideas!</h3>
      
      
      
      <div className="px-8 mt-8 ml-[370px] w-full object-center">
      <h4 className=" font-normal font-['Futura Md BT'] tracking-[3.75px] text-[40px] hover:text-white w-[300px] object-fill text-center text-neutral-900 bg-yellow-400 rounded-[50px] border border-black">
      Contact Us
      </h4>
      </div>
    </motion.div>
  </div>
  )
}

export default SectionWrapper(Tech, "contact");