import React from 'react'
import { ArrowRight } from 'lucide-react';

const Card = () => {
  return (
    <div className=" bg-gray-100 py-10">
      <div className="flex gap-4 px-10 rounded-4xl mx-10 py-16 bg-white">
        <div className="w-1/2 flex flex-col items-start gap-6">
          <p className="text-7xl ">Web design & development</p>
          <div className="flex gap-2 flex-wrap">
            <p className="px-4 py-2 border-zinc-400 border-[1.8px] rounded-full">
              Creative web design
            </p>
            <p className="px-4 py-2 border-zinc-400 border-[1.8px] rounded-full">
              Web development
            </p>
            <p className="px-4 py-2 border-zinc-400 border-[1.8px] rounded-full">
              Copywriting
            </p>
            <p className="px-4 py-2 border-zinc-400 border-[1.8px] rounded-full">
              E-Commerce WordPress
            </p>
          </div>
          <p className="text-xl">
            Crafting digital experiences where beauty meets ROI, turning heads
            and unlocking revenue potential with every click.
          </p>
          <button className="px-4 py-2 border-zinc-400 border-[1.8px] rounded-full flex gap-2">
            Find Out More
            <ArrowRight className="inline-block" />
          </button>
        </div>
        <div className="w-1/2">
          <video
            src="https://kota-content.b-cdn.net/app/uploads/2024/02/homepage.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="rounded-tr-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Card