"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

import { IoCloseOutline } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { useState, useContext } from "react";
import Link from "next/link";
import { useActiveSectionContext } from "@/context/ActiveSectionContextProvider";

const NavBar = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const [isOpen, setIsOpen] = useState(false);


  const menuItems = [
    {
      name: "Home",
      hash: "#home"
    },
    {
      name: "About",
      hash: "#about"
    },
    {
      name: "Projects",
      hash: "#projects"
    },
    {
      name: "Skills",
      hash: "#skills"
    },
    {
      name: "Experience",
      hash: "#experience"
    },
    {
      name: "Contact",
      hash: "#contact"
    }
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <header className="w-full relative z-[999] pt-6">
      <nav className="">

        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:max-w-[720px] md:rounded-full md:min-h-12 bg-darker_leaf_green md:bg-opacity-80 bg-opacity-100 mx-auto justify-between items-center p-2 md:shadow-xl shadow-darker_leaf_green/50 shadow-none hidden md:flex fixed left-0 right-0 ml-auto mr-auto backdrop-blur-[0.2rem]">
          <ul className='main_menu flex flex-col md:flex-row gap-8 items-center justify-center w-full font-bold text-dark_brown text-xl'>
            {menuItems.map((item, index) => (
              <motion.li
                key={index}
                onClick={() => {
                  setActiveSection(item.name);
                  setTimeOfLastClick(Date.now());
                }}
                className={`group relative px-2 py-1 cursor-pointer hover:text-black`}
              >
                {/* <span className='relative z-10'>{item.name}</span> */}
                <Link href={item.hash} className="relative z-10">{item.name}</Link>
                {item.name == activeSection &&
                  <motion.span
                    layoutId="activeSection"
                    className="inset-0 bg-opacity-100 rounded-2xl bg-beige shadow-inner shadow-black/15 absolute"
                    transition={{ duration: 0.2 }} />
                }
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Mobile Menu */}
        <div className='md:hidden'>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className='fixed top-10 right-8 text-3xl z-20'>
            {!isOpen
              ? <FiMenu onClick={() => setIsOpen(true)} />
              : <IoCloseOutline className='text-4xl' onClick={() => setIsOpen(false)} />
            }
          </motion.div>

          <motion.div
            initial={{ height: 0 }}
            animate={{ height: isOpen ? '100%' : 0 }}
            transition={{ duration: 0.5 }}
            className='fixed top-0 left-0 w-full h-full bg-darker_leaf_green z-10 flex flex-col justify-center items-center'>
            {isOpen && <ul className='flex flex-col items-center gap-8 '>
              {menuItems.map((item, index) => (
                <motion.li
                  key={index}
                  onClick={() => {
                    setActiveSection(item.name)
                    setIsOpen(false)
                  }}
                  className={`group relative px-2 py-1 cursor-pointer text-dark_brown text-xl font-bold hover:text-black`}
                >
                  {/* <span className='relative z-10'>{item.name}</span> */}
                  <Link href={item.hash} className="relative z-10">{item.name}</Link>
                  {item.name == activeSection && <motion.span layoutId="activeSection" className="inset-0 bg-opacity-100 rounded-2xl bg-beige shadow-inner shadow-black/15 absolute" />}
                </motion.li>
              ))}
            </ul>
            }
          </motion.div>
        </div>
      </nav>
    </header>
  )
}

export default NavBar