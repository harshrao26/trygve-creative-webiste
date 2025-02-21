import React from "react";
import { ArrowRight } from "lucide-react";

const Card = ({
  title = "Web design & development",
  description = "Crafting digital experiences where beauty meets ROI, turning heads and unlocking revenue potential with every click.",
  tags = [
    "Creative web design",
    "Web development",
    "Copywriting",
    "E-Commerce WordPress",
  ],
  buttonText = "Find Out More",
  videoSrc = "https://kota-content.b-cdn.net/app/uploads/2024/02/homepage.mp4",
}) => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="flex flex-col lg:flex-row gap-4 px-4 md:px-10 rounded-4xl mx-4 md:mx-10 py-8 md:py-16 bg-white">
        <div className="w-full lg:w-1/2 flex flex-col items-start gap-4 md:gap-6">
          <p className="text-3xl md:text-5xl lg:text-7xl leading-snug ">
            {title}
          </p>
          <div className="flex gap-4 flex-wrap">
            {tags.map((tag, index) => (
              <p
                key={index}
                className="px-4 py-2 border-zinc-400 border-[1.8px] rounded-full text-sm md:text-base"
              >
                {tag}
              </p>
            ))}
          </div>
          <p className="text-base md:text-xl font-medium">{description}</p>
          <button className="px-4 py-2 border-zinc-400 border-[1.8px] rounded-full flex gap-2 items-center hover:bg-gray-100 transition">
            {buttonText}
            <ArrowRight className="inline-block" />
          </button>
        </div>
        <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
          <video
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            className="rounded-tr-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
