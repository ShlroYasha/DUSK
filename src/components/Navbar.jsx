import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';


const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`{
        styles.paddingX
        }  w-full flex item-center py-5 fixed top-0 z-20 bg-yellow-400  `}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to="/"
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }
          }
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className="text-black text-[40px] cursor-pointer flex text-center font-extrabold font-['Monument Extended']">
            DUSK &nbsp;
            
          </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>{
          navLinks.map((Link) => (
            <li
              key={Link.id}
              className={`${active === Link.title
                ? "text-black"
                : "text-black"} 
              hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(Link.title)}>
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt='menu' className='w-[15px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)} />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-x1`}>
            <ul className='list-none flex flex-col justify-end items-start gap-5'>{
              navLinks.map((Link) => (
                <li
                  key={Link.id}
                  className={`${active === Link.title
                    ? "text-black"
                    : "text-black"}
              font-poppins text-[16px] font-medium cursor-pointer hover:text-white`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(Link.title);
                  }}>
                  <a href={`#${Link.id}`}>{Link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

    </nav>
  )
}

export default Navbar