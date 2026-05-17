import React, { useRef, useState } from "react";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { Badge } from "../ui/badge";

function ProjectCards(props) {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="tw-relative tw-group tw-h-full tw-flex tw-flex-col tw-rounded-2xl tw-bg-[#0f0c1b]/80 tw-backdrop-blur-md tw-border tw-border-white/10 tw-overflow-hidden hover:tw-shadow-[0_8px_30px_rgba(199,112,240,0.15)] tw-transition-all tw-duration-300"
    >
      <div
        className="tw-pointer-events-none tw-absolute tw-inset-0 tw-opacity-0 tw-transition-opacity tw-duration-500 tw-ease-in-out"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(199,112,240,0.1), transparent 40%)`,
        }}
      />
      
      <div
        className="tw-pointer-events-none tw-absolute tw-inset-0 tw-opacity-0 tw-transition-opacity tw-duration-500 tw-ease-in-out"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(199,112,240,0.4), transparent 40%)`,
          WebkitMaskImage: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
          WebkitMaskComposite: `xor`,
          maskComposite: `exclude`,
          padding: `1px`,
          borderRadius: `inherit`,
        }}
      />

      <div className="tw-w-full tw-overflow-hidden tw-z-10">
        <img 
          src={props.imgPath} 
          alt="project_img" 
          className="tw-w-full tw-object-cover tw-opacity-80 group-hover:tw-opacity-100 group-hover:tw-scale-105 tw-transition-all tw-duration-700 tw-ease-out" 
        />
      </div>
      
      <div className="tw-p-6 tw-flex tw-flex-col tw-flex-grow tw-z-10 bg-gradient-to-t from-[#0f0c1b] to-transparent">
        <h3 className="tw-text-white tw-text-[1.4rem] tw-font-bold tw-text-center tw-mb-4">{props.title}</h3>
        
        <p className="tw-text-white/70 tw-text-[1rem] tw-leading-relaxed tw-text-justify tw-mb-6 tw-flex-grow">
          {props.description}
        </p>

        {props.techStack && props.techStack.length > 0 && (
          <div className="tw-flex tw-flex-wrap tw-justify-center tw-gap-2 tw-mb-6">
            {props.techStack.map((tech, index) => (
              <Badge key={index} variant="secondary" className="tw-bg-[#c770f0]/10 tw-text-[#c770f0] tw-font-normal tw-border-none tw-px-3 tw-py-1 tw-backdrop-blur-sm group-hover:tw-bg-[#c770f0]/20 tw-transition-colors">
                {tech}
              </Badge>
            ))}
          </div>
        )}

        <div className="tw-flex tw-justify-center tw-gap-4 tw-mt-auto">
          <a href={props.ghLink} target="_blank" rel="noopener noreferrer" className="tw-flex tw-items-center tw-gap-2 tw-px-5 tw-py-2 tw-rounded-full tw-bg-[#c770f0] tw-text-white hover:tw-text-white tw-text-sm tw-font-medium hover:tw-bg-[#a855f7] hover:tw-shadow-[0_0_15px_rgba(168,85,247,0.4)] tw-transition-all tw-no-underline cursor-pointer">
            <BsGithub size={18} />
            {props.isBlog ? "Blog" : "GitHub"}
          </a>
          {!props.isBlog && props.demoLink && (
            <a href={props.demoLink} target="_blank" rel="noopener noreferrer" className="tw-flex tw-items-center tw-gap-2 tw-px-5 tw-py-2 tw-rounded-full tw-bg-transparent tw-border tw-border-[#c770f0] tw-text-[#c770f0] hover:tw-text-[#c770f0] tw-text-sm tw-font-medium hover:tw-bg-[#c770f0]/10 tw-transition-all tw-no-underline cursor-pointer">
              <CgWebsite size={18} />
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
export default ProjectCards;
