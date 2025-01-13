"use client";

import Image from "next/image";

const StarMap = () => {
  return (
    <div className="relative w-full h-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Star map overlay */}
      <div className="w-full h-full relative z-10">
        <div className="absolute inset-0 blur-[100px] opacity-50"></div>
        <Image
          src="/star-map.jpg"
          alt="Star Map"
          fill
          className="object-contain relative z-10"
          priority
        />
      </div>
    </div>
  );
};

export default StarMap;
