"use client";

import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {/* Background track */}
      <div className="fixed top-0 left-0 right-0 h-2 bg-white/10 backdrop-blur-sm z-[100]" />
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-gradient-to-r from-white/50 to-white/80 origin-left z-[100]"
        style={{ scaleX }}
      />
    </>
  );
};

export default ScrollProgress;
