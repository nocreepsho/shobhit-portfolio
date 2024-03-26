"use client";

import { useEffect } from "react";

import ProjectCard from "./ProjectCard";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/ActiveSectionContextProvider";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const Projects = () => {
    const { ref } = useSectionInView("Projects", 0.3);

    const projects = [
        {
            title: 'Music Factory',
            description: 'Interface for a text to music generator. Uses Meta\'s MusicGen model. Hosted the model on Replicate to spin up an API. Used WavesurferJS to visualize the audio waveform',
            img: 'music_factory.jpg',
            technologies: ['React', 'NextJS', 'Tailwind', 'WavesurferJS', 'Replicate'],
            links: {
                demo: '',
                github: 'https://github.com/nocreepsho/music_factory',
            }
        },
        {
            title: 'Forever Dungeon',
            description: 'An infinite text adventure game using the OPENAI APIs. It uses the gpt3.5-turbo model to generate the story and provides several options to the user. The story continues infinitely based on the users choices. For a better experience, the text is also passed to the DALL-E API to generate a relevant image.',
            img: 'forever_dungeon.jpg',
            technologies: ['React', 'Vite', 'GPT-3.5', 'DALL-E', 'API'],
            links: {
                demo: '',
                github: 'https://github.com/nocreepsho/ForeverDungeon',
            }
        },
        {
            title: 'Roboko',
            description: 'Front-end web design and brand development for a fictional robot rental company. The website is built with React and TailwindCSS. 3D elements were added using Spline3D, and The logo and branding were created using Logo.com and Photoshop',
            img: 'roboko.jpg',
            technologies: ['Front-end', 'React', 'Typescript', 'NextJS', 'Tailwind', 'Framer Motion', 'Spline3D'],
            links: {
                demo: 'https://roboko.vercel.app/',
                github: 'https://github.com/nocreepsho/Roboko',
            }
        },
        {
            title: 'My Portfolio',
            description: 'This website! showcases my work and projects. Built with NextJS and TailwindCSS. The animations are done using Framer Motion.',
            img: 'portfolio.jpg',
            technologies: ['React', 'NextJS', 'Tailwind', 'Framer Motion'],
            links: {
                demo: '',
                github: 'https://github.com/nocreepsho/shobhit-portfolio',
            }
        }
    ]

    return (
        <div
            ref={ref}
            id="projects"
            className="flex items-center justify-center min-h-[300px] mt-10 md:mt-24 scroll-mt-32">
            <div className="flex flex-col justify-center items-center max-w-[900px]">
                <motion.h1
                    initial={{ opacity: 0,  }}
                    whileInView={{ opacity: 1 }}
                    className="heading_text"
                >
                    Projects
                </motion.h1>
                <div className="flex flex-col">

                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Projects