import React, { useState } from "react";

const EnhancedHoverDetailCard = ({
  title = "Project Title",
  year = "2023",
  description = "We took on the challenge of creating a new website, a global pioneer in design.",
  tags = ["Web design & development", "Agencies"],
  imageUrl = "https://via.placeholder.com/600x400",
  bgColor = "bg-gray-900",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative rounded-3xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.02] 
        
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Title and Year - Always Visible */}
      {/* <div className="absolute top-4 left-4">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <p className="text-lg text-gray-300">{year}</p>
      </div> */}

      {/* Image Section */}
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover rounded-3xl"
      />

      {/* Hover Details */}
      <div
        className={`absolute inset-0 p-6 flex flex-col justify-center items-center text-center rounded-3xl transition-all duration-500 ease-in-out backdrop-blur-md ${
          isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{
          background: "rgba(0, 0, 0, 0.6)",
        }}
      >
        <h3 className="md:text-3xl text-2xl font-bold capitalize text-white mb-4">{title}</h3>
        <p className="md:text-lg text-gray-200 mb-6">{description}</p>
        {/* <div className="flex flex-wrap gap-3 justify-center">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-white bg-opacity-20 text-black rounded-full text-sm font-semibold backdrop-blur-lg"
            >
              {tag}
            </span>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default EnhancedHoverDetailCard;
