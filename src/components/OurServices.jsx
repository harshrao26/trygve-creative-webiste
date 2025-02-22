import React, { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const OurServices = () => {
  const [rotation, setRotation] = useState(105); // Start at 105 degrees

  useEffect(() => {
    const handleScroll = () => {
      // Calculate rotation between 105 to 270 degrees
      const scrollRotation = 105 + window.scrollY * 0.2;
      if (scrollRotation <= 270) {
        setRotation(scrollRotation);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-16 flex flex-col md:flex-row items-center justify-between">
      {/* Left Text Section */}
      <div className="text-center md:text-left">
        <p className="text-5xl md:text-8xl lg:text-9xl uppercase font-sembold">
          Our
        </p>
        <span className="block md:inline-block md:pl-24 text-5xl md:text-8xl lg:text-9xl uppercase font-bld">
          Services
        </span>
      </div>

      {/* Rotating Arrow Section */}
      <div className="mt-8 md:mt-0">
        <ArrowLeft
          className="bg-[#CFEDFD] rounded-full transition-transform duration-300"
          size={140}
          style={{ transform: `rotate(${Math.min(rotation, 270)}deg)` }}
        />
      </div>
    </div>
  );
};

export default OurServices;
