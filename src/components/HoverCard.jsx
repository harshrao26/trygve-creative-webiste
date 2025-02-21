import React, { useState } from "react";

const EnhancedBeautyHoverCard = ({
  number = "01/",
  title = "Beauty",
  description = "Developing stunning one-of-a-kind digital design that catches people’s eyes and brings your brand to life online.",
  imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRMjb7WHMOrLybi_A8E6y4qyMSIaEJiRfpiQ&s",
  gradientBackground = "bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500",
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPosition({ x, y });
  };

  return (
    <div
      className={`relative w-full flex items-center justify-center  rounded-3xl  `}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full max-w-7xl flex px-16 py-8 hover:bg-zinc-100 flex-col md:flex-row items-start gap-8 overflow-hidden my-2 hoverborder-[1.8px] border-gray-200 rounded-3xl overflow-hidden group transition-all duration-500 ease-in-out">
        {/* Left Text Section */}
        <div className="w-full text-left">
          <p className="text-2xl text-gray-500 font-semibold">{number}</p>
          <h2 className="text-6xl md:text-7xl font-sembold text-gray-800 transition-colors duration-300 ease-in-out group-hover:text-black">
            {title}
          </h2>

          <div>
            <p className="text-lg text-gray-700 mt-2">{description}</p>
          </div>
          <hr className="border-t-[1px] border-gray-400 my-4 w-full" />
        </div>

        {/* Hover Card Section */}
        <div
          className={`absolute top-0 z-[1000000] left-0 transform ${
            isHovered ? "opacity-100 scale-100" : "opacity-0 scale-90"
          } transition-all duration-500 ease-out pointer-events-none`}
          style={{
            transform: `translate(${position.x}px, ${position.y}px)`,
          }}
        >
          <div className="flex flex-col md:flex-row gap-8  bg-white rounded-3xl shadow-2xl transition-transform duration-500 ease-out">
            <img
              src={imageUrl}
              alt={title}
              className="w-52 h-52 rounded-3xl object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedBeautyHoverCard;
