import React from "react";
import v1 from '../assets/v2.gif'
const Hero = () => {
  return (
    <div
      className="max-w-8xl  mx-auto bg-cover bg-center  flex flex-col   justify-end px-16 py-10 h-screen "
      style={{ backgroundImage: `url(${v1})` }}
    >
      <h2 className="font-great-vibes  text-[12vw] leading-tight">
        Your Vision, <br />{" "}
        <p className="pl-40 font-great-vibes">Our Expertise</p>
      </h2>
      <p className="text-xl  max-w-2xl self-end text-right">
        We are a{" "}
        <span className="inline-block font-bold">
          creative web design and development agency
        </span>
        , crafting visually stunning, user-friendly, and high-performance
        websites that captivate audiences, elevate brands, and drive real
        business results.
      </p>
    </div>
  );
};

export default Hero;
