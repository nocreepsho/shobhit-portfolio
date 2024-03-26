"use client";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/ActiveSectionContextProvider";
import { useSectionInView } from "@/lib/hooks";

import { motion } from "framer-motion";

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100
    },
    animate: (index) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        }
    })
}

const Skills = () => {
    const { ref } = useSectionInView("Skills", 0.9);

    const skills = [
        "Javascript",
        "React",
        "NextJS",
        "Tailwind",
        "Typescript",
        "NodeJS",
        "Express",
        "HTML",
        "CSS",
        "Python",
        "MongoDB",
        "Git",
        "REST API",
        "Spline3D",
        "Framer Motion",
        "Photoshop"
    ];

    return (
        <div
            ref={ref}
            id="skills"
            className="flex items-center justify-center min-h-[300px] mt-24 md:mt-20 scroll-mt-28">
            <div className="flex flex-col justify-center items-center max-w-[900px] gap-11">
                <h1 className="heading_text">My Skills</h1>
                <div className="text-brown font-semibold text-xl px-6 md:px-2 text-center flex flex-wrap md:flex-row gap-2 w-full md:max-w-[720px] items-center justify-center">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInAnimationVariants}
                            initial="initial"
                            whileInView="animate"
                            custon={index}
                            viewport={{ once: true }}
                            className="text-lg font-semibold text-dark_brown bg-leaf_green px-2 py-1 rounded-lg"
                        >
                            {skill}
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )

}

export default Skills