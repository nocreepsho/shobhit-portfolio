"use client";

import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const Contact = () => {
    const { ref } = useSectionInView("Contact", 0.95);

    return (
        <div
            ref={ref}
            id="contact"
            className="flex items-center justify-center min-h-[300px] mt-24 md:mt-20 scroll-mt-32">
            <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: {
                    ease: "easeOut",
                }
            }}
            viewport={{ once: true }}
            className="flex flex-col justify-center items-center max-w-[900px] gap-10">
                <h1 className="heading_text">Contact Me</h1>
                <div className="text-brown text-lg md:text-xl font-semibold px-6 md:px-2 text-center flex flex-col flex-wrap md:flex-row max-w-[720px] items-center justify-center">
                    <ul>
                        <li className=" font-bold px-2 py-1 rounded-lg flex flex-row items-center gap-2">
                            <MdEmail className="text-4xl" />
                            <a
                                href="mailto:shobhit.narayan@gmail.com"
                                className="hover:text-dark_brown"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="email"
                            >shobhit.narayan@gmail.com</a>
                        </li>
                        <li className="mt-5 font-bold px-2 py-1 rounded-lg flex flex-row items-center gap-2">
                            <FaLinkedin className="text-4xl" />
                            <a
                                href="https://www.linkedin.com/in/shobhitn/"
                                className="hover:text-dark_brown"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="LinkedIn"
                            >shobhitn</a>
                        </li>
                    </ul>
                </div>
            </motion.div>
        </div>
    )
}

export default Contact