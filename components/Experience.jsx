"use client";

import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const slideInAnimationVariants = {
    initial:{
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            ease: "easeIn",  
        }
        
    }
}

const Experience = () => {
    const { ref } = useSectionInView("Experience", 0.35);

    const leaf_green = "#b1c29d"; // color for svg dashed lines


    const experience = [
        {
            title: 'Software Engineer – Mitacs Accelerate',
            company: 'University of Windsor & Sinai Health, Health Commons Solutions Lab',
            duration: '2022 - Present',
            description: [
                "Developed complex MVC web application using MERN stack, increasing user engagement by 30%",
                "Leveraged NodeJS, React, and MongoDB to implement full-stack features, and deployed the application using Heroku",
                "Led a team of 6 developers by delegating tasks, communicating milestones and progress to clients through weekly reports",
                "Streamlined debugging time by refactoring code with object-oriented design principles, reducing error rates",

            ]
        },
        {
            title: 'IT, Logistics & Scheduling Operator',
            company: 'Assisted Living Southwestern Ontario',
            duration: '2022 - Present',
            description: [
                "Designed, developed and published organization’s website using WordPress ensuring complaiance with AODA standards",
                "Leveraged Microsoft Sharepoint and Power Automate to automate new hire, termination, transfer, and other processes",
                "Migrated systems to Microsoft 365 and provided training to senior management",
                "Operated Scheduling software AlayaCare to manage staff and client schedules, and perform data exploration",
                "Provided IT assistance to internal stakeholders, troubleshooting issues and swiftly resolving them to ensure minimal disruptions to operations"

            ]
        },
        {
            title: 'Student Intern',
            company: 'Cyient Ltd.',
            duration: '2018',
            description: [
                "Developed a solution for a Transmit Receive Module using Java, Swing, and RxTx libraries",
                "Interacted with hardware and electronic teams to achieve a full duplex serial communication with an FPGA board",
                "Applied object-oriented design solutions such as abstraction and polymorphism to design the architecture of the application layers"
            ]
        },
    ];

    return (
        <div
            ref={ref}
            id="experience"
            className="flex items-center justify-center min-h-[300px] mt-24 md:mt-20 scroll-mt-32">
            <div className="flex flex-col justify-center items-center gap-12">
                <h1 className="heading_text">My Experience</h1>
                <div className="flex flex-col">
                    {experience.map((exp, index) => (
                        <motion.div 
                        variants={slideInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        key={index}
                        className="p-0">
                            <div className="experience_container flex flex-col w-[330px] md:w-[700px] border-darker_leaf_green border-4 rounded-xl p-4 gap-1">
                                <div className="flex flex-row justify-between items-center w-full">
                                    <h2 className="text-xl md:text-2xl font-bold text-dark_brown">{exp.title}</h2>
                                    <p className="md:text-md text-sm font-semibold text-dark_brown bg-leaf_green px-2 py-1 rounded-lg ">{exp.duration}</p>
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-darker_leaf_green w-3/4">{exp.company}</h3>
                                <ul className="list-disc px-5">
                                    {exp.description.map((point, index) => (
                                        <li key={index} className="text-md md:text-lg text-brown font-semibold mt-2">{point}</li>
                                    ))}
                                </ul>

                            </div>

                            {/* dashed lines */}
                            {index !== experience.length - 1 && (
                                <div>
                                    <div className="flex items-center justify-center text-dark_brown ">
                                        <svg width="100" height="100" viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M25 5L25 40" stroke={leaf_green} strokeWidth="2" strokeDasharray="1 6" strokeLinecap="round" strokeLinejoin="round" />

                                        </svg>
                                    </div>
                                </div>
                            )}
                        </motion.div>

                    ))}
                </div>

            </div>
        </div>
    )
}

export default Experience