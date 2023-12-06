import { motion } from 'framer-motion';
import { styles } from '../styles';
import { StarsCanvas } from './canvas';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {TextPlugin} from 'gsap/TextPlugin';
gsap.registerPlugin(ScrollTrigger,TextPlugin);

const Hero = () => {

  
  return (
    <section className='relative w-full h-screen mx-auto bg-yellow-400'>
      <div className={`${styles.paddingX} pt-[100px] absolute inset-0 top-[120px] mx-w-7xl justify-center text-center mx-auto flex felex-row items-start gap-5`}>
        
        <div class >
          <h1 className={`${styles.heroHeadText} text-black `}>
            WE THE DUSK
          </h1>
          <p className={`font-['Futura Lt BT'] font-normal text-black sm:text-[18px] text-[14px]`}>
          WHERE CREATIVITY MEETS TWILIGHT  
          </p>
        </div>
      </div>

      
      <div className=' absolute xs:bottom-4 bottom-1 w-full flex justify-center items-center'>
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
      <StarsCanvas />
    </section>
  )
}

export default Hero