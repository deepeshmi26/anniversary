"use client";

import { useEffect, useState } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const anniversaryDate = new Date("2025-01-13T00:00:00+05:30"); // IST timezone
      const now = new Date();
      const difference = anniversaryDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft(); // Initial calculation

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="glass rounded-2xl p-8 shadow-lg">
      <h2 className="text-2xl mb-4 text-center font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-primary">
        First Anniversary In
      </h2>
      <div className="grid grid-cols-4 gap-8">
        {[
          { value: timeLeft.days, label: "Days" },
          { value: timeLeft.hours, label: "Hours" },
          { value: timeLeft.minutes, label: "Minutes" },
          { value: timeLeft.seconds, label: "Seconds" },
        ].map((item, index) => (
          <div key={index} className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary-dark mb-2">
              {String(item.value).padStart(2, "0")}
            </div>
            <div className="text-sm text-text-secondary">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
