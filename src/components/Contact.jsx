import { motion } from "framer-motion"
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
const Contact = () => {
  const Callto = ({ phone, children }) => {
    return <a href={`tel:${phone}`}>{children}</a>;
  };
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-3xl"
      >
        <p className={styles.sectionSubText}>Connect with me</p>
        <h3 className={styles.sectionHeadText}>Contact :</h3>
        <div
          className="mt-10 mb-20 flex flex-col gap-8"
        >
          <div className="flex flex-col">
            <span className="text-[20px] text-secondary font-medium mb-4">
              <h1>Mail me</h1></span>
              <div className="bg-tertiary">
            <a href="mailto:f20201781@hyderabad.bits-pilani.ac.in"
              className="text-secondary text-[14px]  py-1 flex justify-center hover:text-white" > f20201781@hyderabad.bits-pilani.ac.in</a>
              </div>
          </div>
          <div className="flex flex-col">
            <span className="text-secondary text-[20px] font-medium ">
              <h1>Call me </h1>
              <div className="bg-tertiary">
                <p className="text-secondary text-[14px] py-1 flex justify-center hover:text-white">
                  <Callto phone="+917017122004">+91 7017122004</Callto>
                </p>
              </div>
            </span>
          </div>
        </div>
        <p className={styles.sectionSubText}>Also checkout my</p>
        <a href="https://github.com/Manav2003" target="_blank"
          className=" mt-5 text-secondary text-[15px] bg-tertiary flex justify-center hover:text-white" rel="noreferrer"> Github </a>
        <a href="https://leetcode.com/user2839vm/" target="_blank"
          className="mt-5 text-secondary text-[15px] bg-tertiary flex justify-center hover:text-white" rel="noreferrer"> LeetCode </a>

      </motion.div>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")