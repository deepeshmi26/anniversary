"use client";

import { useEffect, useState } from "react";

interface NavigationDotsProps {
  numberOfSections: number;
}

const NavigationDots = ({ numberOfSections }: NavigationDotsProps) => {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionIndex = Array.from(sections).indexOf(
            entry.target as HTMLElement
          );
          setActiveSection(sectionIndex);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const scrollToSection = (index: number) => {
    const sections = document.querySelectorAll("section");
    sections[index]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-50">
      {Array.from({ length: numberOfSections }).map((_, index) => (
        <button
          key={index}
          onClick={() => scrollToSection(index)}
          className={`w-2 h-2 rounded-full transition-all duration-300 ${
            activeSection === index
              ? "bg-primary-dark scale-110"
              : "bg-text-secondary/40 hover:bg-text-secondary/60"
          }`}
          aria-label={`Scroll to section ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
