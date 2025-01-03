"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const KeyboardHelper = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full text-white/80 text-sm"
        >
          Use arrow keys to navigate
          <button
            onClick={() => setIsVisible(false)}
            className="ml-4 text-white/50 hover:text-white"
          >
            ×
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default KeyboardHelper;
