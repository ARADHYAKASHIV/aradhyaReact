import React from 'react';
import { motion } from 'framer-motion';

const FadeContent = ({
  children,
  blur = false,
  duration = 1000,
  ease = "easeOut",
  delay = 0,
  threshold = 0.1,
  initialOpacity = 0,
  className = '',
  ...props
}) => {
  return (
    <motion.div
      initial={{ opacity: initialOpacity, filter: blur ? 'blur(10px)' : 'blur(0px)' }}
      whileInView={{ opacity: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: threshold }}
      transition={{ duration: duration / 1000, delay: delay / 1000, ease }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default FadeContent;
