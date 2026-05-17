import React from 'react';
import { motion } from 'framer-motion';

const AnimatedContent = ({
  children,
  distance = 100,
  direction = 'vertical',
  reverse = false,
  duration = 0.8,
  ease = "easeOut",
  initialOpacity = 0,
  animateOpacity = true,
  scale = 1,
  threshold = 0.1,
  delay = 0,
  className = '',
  ...props
}) => {
  const axis = direction === 'horizontal' ? 'x' : 'y';
  const offset = reverse ? -distance : distance;

  const initial = {
    [axis]: offset,
    scale: scale,
    opacity: animateOpacity ? initialOpacity : 1,
  };

  const animate = {
    [axis]: 0,
    scale: 1,
    opacity: 1,
  };

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, amount: threshold }}
      transition={{ duration, delay: delay / 1000, ease }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedContent;
