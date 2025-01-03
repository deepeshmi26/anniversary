"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface EntryWrapperProps {
  children: React.ReactNode;
}

const EntryWrapper = ({ children }: EntryWrapperProps) => {
  const [isEntered, setIsEntered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const quotes = [
    "Every love story is beautiful...",
    "But ours is my favorite ✨",
    "365 days of...",
    "Laughter 😊",
    "Adventures 🌟",
    "Growing Together 🌱",
    "And endless love ❤️",
    "Let's celebrate us! ✨",
  ];

  const handleEnter = async () => {
    setIsAnimating(true);
    // Increased animation time for more quotes
    setTimeout(() => setIsEntered(true), 12000);
  };

  return (
    <AnimatePresence mode="wait">
      {!isEntered ? (
        <motion.div
          key="entry"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
          className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-white to-primary/5 relative overflow-hidden font-elegant"
        >
          {/* Background Patterns */}
          <div className="absolute inset-0 pattern-dots opacity-[0.15]" />

          {/* Decorative Elements */}
          <div className="absolute top-10 left-10 w-32 h-32 illustration-heart animate-float-slow" />
          <div className="absolute bottom-20 right-10 w-40 h-40 illustration-balloons animate-float" />
          <div className="absolute top-20 right-20 w-24 h-24 illustration-gift animate-float-slower" />
          <div className="absolute bottom-32 left-20 w-28 h-28 illustration-cake animate-float-slow" />

          {/* Confetti Background */}
          <div className="absolute inset-0 confetti-pattern opacity-[0.07]" />

          {/* Floating Shapes */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-blob animate-float-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/10 rounded-blob2 animate-float-slower" />
          <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-primary-dark/10 rounded-blob3 animate-float" />

          {/* Animated Text Container */}
          <AnimatePresence>
            {isAnimating && (
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                {quotes.map((text, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: [0, 1, 1, 0],
                      y: [20, 0, 0, -20],
                    }}
                    transition={{
                      duration: 2,
                      times: [0, 0.2, 0.8, 1],
                      delay: index * 1.5,
                      ease: "easeInOut",
                    }}
                    className={`absolute text-2xl md:text-3xl text-center 
                      ${
                        index === 0 || index === 1
                          ? "font-romantic bg-gradient-to-r from-primary-dark to-accent bg-clip-text text-4xl md:text-5xl"
                          : index === quotes.length - 1
                          ? "font-romantic text-3xl md:text-4xl bg-gradient-to-r from-primary via-primary-dark to-accent bg-clip-text"
                          : "font-classic text-text-primary"
                      }
                    `}
                  >
                    {text}
                  </motion.p>
                ))}
              </div>
            )}
          </AnimatePresence>

          {/* Entry Button */}
          <motion.button
            onClick={handleEnter}
            animate={
              isAnimating
                ? {
                    y: -100,
                    opacity: 0,
                    transition: { duration: 0.8, ease: "easeOut" },
                  }
                : {}
            }
            className="relative px-12 py-6 rounded-2xl bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 group z-10"
            whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary via-primary-dark to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative inline-flex items-center text-2xl font-romantic text-text-primary group-hover:text-white transition-colors duration-500">
              Begin Our Journey
              <svg
                className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform duration-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </motion.button>
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EntryWrapper;
