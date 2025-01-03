"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";

const Confetti = () => {
  useEffect(() => {
    // Initial burst
    const duration = 8 * 1000;
    const animationEnd = Date.now() + duration;

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    const interval: NodeJS.Timer = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50;

      // Create confetti from both sides
      confetti({
        particleCount,
        startVelocity: 8,
        spread: 180,
        origin: { x: randomInRange(0.1, 0.3), y: 0.5 },
        colors: ["#ffd93d", "#ff8400", "#ff6b6b", "#4ecdc4"],
        disableForReducedMotion: true,
      });

      confetti({
        particleCount,
        startVelocity: 12,
        spread: 180,
        origin: { x: randomInRange(0.7, 0.9), y: 0.5 },
        colors: ["#ffd93d", "#ff8400", "#ff6b6b", "#4ecdc4"],
        disableForReducedMotion: true,
      });
    }, 250);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return null;
};

export default Confetti;
