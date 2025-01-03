"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

const Section = ({ children, className = "" }: SectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      ref={ref}
      className={`min-h-screen w-full flex items-center justify-center ${className}`}
    >
      <motion.div
        className="max-w-4xl w-full h-full text-center p-8"
        variants={variants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section;
