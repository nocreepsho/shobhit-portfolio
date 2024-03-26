import Image from "next/image";

const DashedArrow = () => {
    const leaf_green = "#b1c29d";
    return (
        <div className="mt-32">
            <div className="flex items-center justify-center text-dark_brown ">
            <svg width="100" height="100" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25 5L25 40" stroke={leaf_green} strokeWidth="2" strokeDasharray="1 6" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M20 35L25 40L30 35" stroke={leaf_green} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            </div>
        </div>
    );
};

export default DashedArrow;