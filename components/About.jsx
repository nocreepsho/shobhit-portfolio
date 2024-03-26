"use client";

import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const About = () => {
  const { ref } = useSectionInView("About", 0.75);



  return (
    <motion.div
    initial={{ opacity: 0}}
    whileInView={{ opacity: 1, y:0 }}
    viewport={{ once: true }}
      id="about"
      ref={ref}
      className="flex items-center justify-center min-h-[300px] mt-24 scroll-mt-40"
    >
      <div className="flex flex-col justify-center items-center max-w-[900px]">
        <h1 className="heading_text">About Me</h1>
        <div className="text-brown font-semibold text-lg md:text-xl mt-8 px-6 md:px-2 text-center">
          <div>
            <motion.div
              initial={{ opacity: 0, }}
              whileInView={{ opacity: 1, transition: { duration: 0.5, delay: 0.1, ease: "easeInOut" } }}
              viewport={{ once: true }}
            >
              <h3 className="text-darker_leaf_green font-bold">Tech Generalist</h3>
              <p className="mt-2">Hey there! I'm a Software Engineer and a Technology Generalist. I enjoy exploring all kinds of new things and can quickly adapt and learn from them. I'm well-versed in a variety of languages and tools (Full-Stack), from Python and JavaScript to React and NodeJS.</p>
              <br />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, }}
              whileInView={{ opacity: 1, transition: { duration: 0.5, delay: 0.3, ease: "easeInOut" } }}
              viewport={{ once: true }}
            >
              <h3 className="text-darker_leaf_green font-bold">Design Enthusiast</h3>
              <p className="mt-2">I love design. A creative, clean, and smooth UI always makes me drool! Being a digital artist for more than 2 years now, I've developed a keen eye for design and aesthetics. I'm well versed in creative tools like Photoshop, After Effects, Canva, and Premiere Pro. </p>
              <br />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, }}
              whileInView={{ opacity: 1, transition: { duration: 0.5, delay: 0.5, ease: "easeInOut" } }}
              viewport={{ once: true }}
            >
              <h3 className="text-darker_leaf_green font-bold">Outside of Coding</h3>
              <p className="mt-2">When I'm not coding, you'll find me immersed in creating digital art, reading all kinds of novels, and tinkering with fun side projects.</p>
              <p>I believe in the power of technology to drive creativity and innovation, and I'm excited to continue pushing boundaries and making a difference.</p>
            </motion.div>
          </div>


        </div>
      </div>
    </motion.div>
  )
}

export default About