"use client";

// RUBBER BAND EFFECT

import { motion, useAnimationControls } from 'framer-motion';
import { useState, useEffect } from 'react';

const TextSpan = ({ children }) => {

    const controls = useAnimationControls();

    const [isPlaying, setIsPlaying] = useState(false);

    const rubberBand = () => {

        controls.start({
            transform: [
                "scale3d(1,1,1)",
                "scale3d(1.2,.99,1)",
                "scale3d(.80,1.15,1)",
                "scale3d(1.2,.85,1)",
                "scale3d(.9,1.1,1)",
                "scale3d(1,1,1)",
            ],
            transition: {
                duration: 0.5,
            }
        })
        setIsPlaying(true);
    }



    return (
       
        <motion.h1
            animate={controls}
            onMouseOver={() => {
                if(!isPlaying) rubberBand();
            }}
            onAnimationComplete={() => setIsPlaying(false)}
            className="cursor-default inline-block font-extrabold text-dark_brown text-[120px] leading-none ">
            {children}
        </motion.h1>
        
    )
}

export default TextSpan