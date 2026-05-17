import React from "react";
import { motion } from "framer-motion";
import {
  SiVisualstudiocode,
  SiJupyter,
  SiLinux,
  SiGithub,
  SiWindows,
  SiMicrosoftteams,
  SiKalilinux,
} from "react-icons/si";
import Magnet from "../Animations/Magnet";

const tools = [
  { icon: <SiWindows size={40} />, name: "Windows" },
  { icon: <SiVisualstudiocode size={40} />, name: "VS Code" },
  { icon: <SiKalilinux size={40} />, name: "Kali Linux" },
  { icon: <SiLinux size={40} />, name: "Linux" },
  { icon: <SiGithub size={40} />, name: "GitHub" },
  { icon: <SiJupyter size={40} />, name: "Jupyter" },
  { icon: <SiMicrosoftteams size={40} />, name: "MS Teams" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

function Toolstack() {
  return (
    <div className="tw-py-10 tw-px-4 md:tw-px-8 tw-max-w-7xl tw-mx-auto">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="tw-grid tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-grid-cols-4 tw-gap-4 md:tw-gap-6 tw-justify-center"
      >
        {tools.map((tool, index) => (
          <Magnet key={index} padding={50} magnetStrength={3}>
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.05 }}
              className="tw-group tw-flex tw-flex-col tw-items-center tw-justify-center tw-p-6 tw-rounded-2xl tw-bg-[#0f0c1b]/60 tw-backdrop-blur-md tw-border tw-border-white/5 hover:tw-border-[#c770f0]/50 hover:tw-bg-[#c770f0]/10 tw-transition-all tw-duration-300 hover:tw-shadow-[0_0_20px_rgba(199,112,240,0.15)] tw-cursor-pointer tw-relative tw-overflow-hidden"
            >
              <div className="tw-absolute tw-inset-0 tw-opacity-0 group-hover:tw-opacity-100 tw-bg-gradient-to-t tw-from-[#c770f0]/20 tw-to-transparent tw-transition-opacity tw-duration-500"></div>
              <div className="tw-text-white/70 group-hover:tw-text-[#c770f0] tw-transition-colors tw-duration-300 tw-mb-3 tw-z-10">
                {tool.icon}
              </div>
              <p className="tw-text-white/80 group-hover:tw-text-white tw-text-sm tw-font-medium tw-transition-colors tw-duration-300 tw-z-10">
                {tool.name}
              </p>
            </motion.div>
          </Magnet>
        ))}
      </motion.div>
    </div>
  );
}

export default Toolstack;
