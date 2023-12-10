import React from 'react'
import { instagram } from '../assets';
import { Facebook } from '../assets';
import { Twitter } from '../assets';
import { Linkedin } from '../assets';
import { logo2 } from '../assets';
const Footer = () => {
  return (
    <div className='flex-col'>
        <div className='mx-40 my-24'>
            <div className='flex justify-between'>
                <div>
                    <div className=" h-[51px] text-white text-[28px] font-normal font-['Futura Lt BT']">Follow us :</div>
                    <div className='flex'>
                        
                        <div className="w-[43px] h-[42.50px] left-[21.50px] top-[21.25px] ">
                            <img src ={instagram} alt="photo" />
                        </div>
                        <div className="w-[43px] h-[42.50px] left-[21.50px] top-[21.25px] ">
                            <img src ={Twitter} alt="photo" />
                        </div>
                        <div className="w-[43px] h-[42.50px] left-[21.50px] top-[21.25px] ">
                            <img src ={Linkedin} alt="photo" />
                        </div>
                        <div className="w-[43px] h-[42.50px] left-[21.50px] top-[21.25px] ">
                            <img src ={Facebook} alt="photo" />
                        </div>
                    </div>
                    
                </div>
                <img className="w-[13.750vw] h-[10.677vw]" src={logo2} />
            </div>
        </div>
        
        <div className=" text-center text-white text-[2.5vw] font-normal font-['Futura Lt BT']">© 2023 DUSK. All rights reserved.</div>
    </div>
    
  )
}

export default Footer;