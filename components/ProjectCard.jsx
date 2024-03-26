"use client";

import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

import { FaGithub } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";

const ProjectCard = ({ title, description, img, technologies, links }) => {

    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"]
    });

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return (
        <motion.div
            ref={ref}
            style={{
                scale: scaleProgress,
                opacity: opacityProgress
            }}
            className="flex flex-col w-[320px] md:w-[500px] border-darker_leaf_green border-4 items-center justify-center mt-10 rounded-xl">

            <div className="relative group">

                <img src={`/${img}`} alt={title} className="rounded-t-lg transition duration-500 ease-in-out transform hover:scale-105" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out z-10">
                    {links.github !== '' && (
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.9 }}
                            href={links.github}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Github link"
                        >
                            <FaGithub className="text-[50px] text-darker_leaf_green opacity-90" />
                        </motion.a>
                    )}
                    {links.demo !== '' && (
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.9 }}
                            href={links.demo}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Demo link"
                        >
                            <FaGlobe className="text-[50px] text-darker_leaf_green opacity-90 ml-4" />
                        </motion.a>
                    )}
                </div>
                <div className="rounded-t-lg absolute inset-0 bg-dark_brown opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out"></div>

            </div>
            <div className="flex flex-col p-4 w-full">
                <div className="flex flex-row items-center justify-between gap-4">
                    <h2 className="text-xl md:text-2xl font-bold text-dark_brown">{title}</h2>

                </div>
                <p className="text-lg text-brown mt-2 font-semibold">{description}</p>
                <div className="flex flex-row gap-4 mt-4 flex-wrap">
                    {technologies.map((tech, index) => (
                        <span key={index} className="text-sm font-semibold text-dark_brown bg-leaf_green px-2 py-1 rounded-lg">{tech}</span>
                    ))}
                </div>
            </div>

        </motion.div>
    )
}

export default ProjectCard