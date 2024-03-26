"use client";

import Typewriter from "typewriter-effect";
import TextSpan from "./TextSpan";

import { motion } from "framer-motion";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { GrDocumentDownload } from "react-icons/gr";
import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";

const Hero = () => {

  const { ref } = useSectionInView("Home", 0.75);

  const name = "Shobhit Narayan".split("");
  const headlines = ["Software Engineer", "Tech Generalist", "Fullstack Developer"];

  return (
    <div
      ref={ref}
      id="home"
      className="max-w-[988px] mx-auto flex flex-row items-center  scroll-mt-[100rem]">
      <div
        className="flex flex-col p-6 mt-0 md:mt-24 justify-start scroll-mt-[100rem]">
        <div className="mt-24 md:w-[520px] w-[200px]">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-bold text-xl md:text-3xl pl-1 text-darker_leaf_green">
            Hello! I'm
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden md:block"
          >
            {
              name.map((letter, index) => (
                <TextSpan key={index}>{letter}</TextSpan>
              ))
            }
          </motion.div>

          {/* Mobile: No rubber text effect */}
          <motion.div className="md:hidden">
            <motion.h1
              className="cursor-default inline-block font-extrabold text-dark_brown text-[72px] leading-none"
            >
              Shobhit Narayan
            </motion.h1>
          </motion.div>

        </div>
        <motion.div
          initial={{ opacity: 0, }}
          animate={{ opacity: 1, transition: { delay: 0.5 } }}
          className="mt-4 md:mt-6 font-bold text-2xl md:text-4xl pl-1 text-darker_leaf_green ">
          <Typewriter options={{
            strings: headlines,
            autoStart: true,
            loop: true,
          }}
          />
        </motion.div>
        <div className="flex flex-row mt-8 gap-6 text-[50px] text-brown items-center">
          <motion.a
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            href="https://www.linkedin.com/in/shobhitn/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn">
            <FaLinkedin />
          </motion.a>

          <motion.a
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.8 } }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            href="https://github.com/nocreepsho"
            target="_blank"
            rel="noreferrer"
            aria-label="Github">
            <FaGithub />
          </motion.a>

          <motion.a
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 1 } }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            href="/shobhit_narayan_resume.pdf"
            target="_blank"
            rel="noreferrer"
            title="Download Resume"
            aria-label="Download Resume"
          >
            <GrDocumentDownload className="text-[45px]" />
          </motion.a>
        </div>
      </div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="hidden md:flex z-30 mt-32 items-center justify-start scroll-mt-[100rem]">
        <Image
          src="/art2.png"
          alt="Shobhit Narayan"
          width={800}
          height={800}
          priority= {true}
          quality={100}
          unoptimized
        />
      </motion.div>
    </div>
  )
}

export default Hero