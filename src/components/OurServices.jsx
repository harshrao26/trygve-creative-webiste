import React, { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const OurServices = () => {
  const [rotation, setRotation] = useState(105);

  useEffect(() => {
    const handleScroll = () => {
      const maxRotation = 360;
      const scrollY = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;

      // Percentage scrolled across the full page
      const scrollPercent = scrollY / scrollHeight;
      const scrollRotation = 300 + scrollPercent * (maxRotation - 105);

      setRotation(scrollRotation);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full py-32 px-6 md:px-16 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text Section */}
        <div className="flex flex-col text-center md:text-left w-full md:w-1/2">
          <h2 className="text-6xl md:text-[8rem] leading-[1.1] font-semibold uppercase tracking-tight">
            Our <span className="block md:pl-28">Services</span>
          </h2>
          <p className="mt-8 text-lg md:text-xl text-gray-400 max-w-xl">
            We don’t just create — we design experiences, build tech, and craft
            visibility. From brand identity to SEO, our team ensures your
            digital presence is unforgettable.
          </p>
        </div>

        {/* Scroll-Responsive Rotating Arrow */}
        <div className="relative w-[160px] h-[160px] hidden  md:flex items-center justify-center">
          <ArrowLeft
            size={160}
            className="text-black bg-white rounded-full p-4 shadow-xl transition-transform duration-300"
            style={{
              transform: `rotate(${rotation}deg)`,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default OurServices;
