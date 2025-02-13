import React, { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const OurServices = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Multiply by -0.5 to rotate anti-clockwise
      setRotation(window.scrollY * -1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-16 flex items-end justify-between">
      <div>
        <p className="text-9xl uppercase">Our</p>
        <span className="pl-40 text-9xl uppercase">Services</span>
      </div>
      <div className="inline-block">
        <ArrowLeft
          className="bg-[#CFEDFD] rounded-full transition-transform duration-300"
          size={160}
          style={{ transform: `rotate(${rotation}deg)` }}
        />
      </div>
    </div>
  );
};

export default OurServices;
