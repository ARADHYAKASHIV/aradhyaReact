import React from "react";
import { motion } from "framer-motion";
import { CgCPlusPlus } from "react-icons/cg";
import { DiJavascript1, DiReact, DiNodejs, DiMongodb, DiPython, DiGit, DiDatabase, DiGitCommit, DiUbuntu } from "react-icons/di";
import { SiMysql, SiHtml5, SiCss3, SiBootstrap, SiGnubash, SiTailwindcss, SiAlibabacloud, SiPhp } from "react-icons/si";
import Magnet from "../Animations/Magnet";

const skills = [
  { icon: <CgCPlusPlus size={40} />, name: "C++" },
  { icon: <DiJavascript1 size={40} />, name: "JavaScript" },
  { icon: <SiMysql size={40} />, name: "MySQL" },
  { icon: <DiDatabase size={40} />, name: "Databases" },
  { icon: <DiPython size={40} />, name: "Python" },
  { icon: <SiPhp size={40} />, name: "PHP" },
  { icon: <DiNodejs size={40} />, name: "Node.js" },
  { icon: <SiHtml5 size={40} />, name: "HTML5" },
  { icon: <SiCss3 size={40} />, name: "CSS3" },
  { icon: <DiReact size={40} />, name: "React" },
  { icon: <DiGitCommit size={40} />, name: "Git Commits" },
  { icon: <SiBootstrap size={40} />, name: "Bootstrap" },
  { icon: <SiGnubash size={40} />, name: "Bash" },
  { icon: <SiTailwindcss size={40} />, name: "Tailwind CSS" },
  { icon: <DiUbuntu size={40} />, name: "Ubuntu" },
  { icon: <DiMongodb size={40} />, name: "MongoDB" },
  { icon: <DiGit size={40} />, name: "Git" },
  { icon: <SiAlibabacloud size={40} />, name: "Alibaba Cloud" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

function Techstack() {
  return (
    <div className="tw-py-10 tw-px-4 md:tw-px-8 tw-max-w-7xl tw-mx-auto">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="tw-grid tw-grid-cols-2 sm:tw-grid-cols-3 md:tw-grid-cols-4 lg:tw-grid-cols-6 tw-gap-4 md:tw-gap-6"
      >
        {skills.map((skill, index) => (
          <Magnet key={index} padding={50} magnetStrength={3}>
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.05 }}
              className="tw-group tw-flex tw-flex-col tw-items-center tw-justify-center tw-p-6 tw-rounded-2xl tw-bg-[#0f0c1b]/60 tw-backdrop-blur-md tw-border tw-border-white/5 hover:tw-border-[#c770f0]/50 hover:tw-bg-[#c770f0]/10 tw-transition-all tw-duration-300 hover:tw-shadow-[0_0_20px_rgba(199,112,240,0.15)] tw-cursor-pointer tw-relative tw-overflow-hidden"
            >
              <div className="tw-absolute tw-inset-0 tw-opacity-0 group-hover:tw-opacity-100 tw-bg-gradient-to-t tw-from-[#c770f0]/20 tw-to-transparent tw-transition-opacity tw-duration-500"></div>
              <div className="tw-text-white/70 group-hover:tw-text-[#c770f0] tw-transition-colors tw-duration-300 tw-mb-3 tw-z-10">
                {skill.icon}
              </div>
              <p className="tw-text-white/80 group-hover:tw-text-white tw-text-sm tw-font-medium tw-transition-colors tw-duration-300 tw-z-10">
                {skill.name}
              </p>
            </motion.div>
          </Magnet>
        ))}
      </motion.div>
    </div>
  );
}

export default Techstack;
