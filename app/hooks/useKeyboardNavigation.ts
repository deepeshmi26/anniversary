"use client";

import { useEffect } from "react";

export const useKeyboardNavigation = (numberOfSections: number) => {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const sections = document.querySelectorAll("section");
      const currentSection = Math.floor(window.scrollY / window.innerHeight);

      switch (event.key) {
        case "ArrowDown":
        case "PageDown":
          event.preventDefault();
          if (currentSection < numberOfSections - 1) {
            sections[currentSection + 1]?.scrollIntoView({
              behavior: "smooth",
            });
          }
          break;
        case "ArrowUp":
        case "PageUp":
          event.preventDefault();
          if (currentSection > 0) {
            sections[currentSection - 1]?.scrollIntoView({
              behavior: "smooth",
            });
          }
          break;
        case "Home":
          event.preventDefault();
          sections[0]?.scrollIntoView({ behavior: "smooth" });
          break;
        case "End":
          event.preventDefault();
          sections[numberOfSections - 1]?.scrollIntoView({
            behavior: "smooth",
          });
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [numberOfSections]);
};
