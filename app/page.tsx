"use client";

import CountdownTimer from "./components/CountdownTimer";
import Header from "./components/Header";
import Message from "./components/Message";
import Stats from "./components/Stats";
import CallToAction from "./components/CallToAction";
import Section from "./components/SectionContainer";
import NavigationDots from "./components/NavigationDots";
import { useKeyboardNavigation } from "./hooks/useKeyboardNavigation";
import Confetti from "./components/Confetti";
import EntryWrapper from "./components/EntryWrapper";

const MainContent = () => {
  useKeyboardNavigation(4);

  return (
    <main
      className="h-screen overflow-y-auto snap-y snap-mandatory relative"
      onScroll={(e) => e.stopPropagation()}
    >
      {/* Modern Shapes */}
      <div className="shape shape-1" />
      <div className="shape shape-2" />
      <div className="shape shape-3" />

      <NavigationDots numberOfSections={4} />
      <Confetti />

      <Section>
        <div className="flex flex-col items-center justify-center gap-32 h-screen">
          <Header />
          <CountdownTimer />
        </div>
      </Section>

      <Section className="relative">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat flex flex-col h-full items-center justify-center"
          style={{ backgroundImage: 'url("/love-romantic-illustration.png")' }}
        >
          {/* Content with backdrop blur */}
          <div className="relative z-10 h-full mt-16">
            <Message />
          </div>
        </div>
      </Section>

      <Section>
        <Stats />
      </Section>

      <Section>
        <CallToAction />
      </Section>
    </main>
  );
};

export default function Home() {
  return (
    // <EntryWrapper>
    <MainContent />
    // </EntryWrapper>
  );
}
