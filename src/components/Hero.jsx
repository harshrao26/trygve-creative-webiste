import React from "react";
import v1 from '../assets/v2.gif'
import {SpinningText} from '../components/magicui/spinning-text'
import {ShimmerButton} from '../components/magicui/shimmer-button'
import {InteractiveHoverButton} from '../components/magicui/interactive-hover-button'
const Hero = () => {
  return (
    <div
      className="  mx-auto bg-cover bg-center  flex flex-col   justify-end  px-16 py-4 h-screen "
      style={{ backgroundImage: `url(${v1})` }}
    >
      <h2 className="xp text-[10rem] leading-[140px] tracking-tighter">
        Your Vision, <br />{" "}
        <p className="pl-40 font-great-vibes ">
          Our <br /> <p className="pl-60 font-great-vibes">Expertise</p>
        </p>
      </h2>
      <div className="flex justify-between items-center ">
        <div className="px-8">
          <SpinningText>learn more • earn more • grow more</SpinningText>
          {/* <ShimmerButton className="shadow-2xl">
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
              Shimmer Button
            </span>
          </ShimmerButton> */}
        </div>
        <div>
          <p className="text-xl  max-w-2xl self-end text-right mt-8">
            We are a{" "}
            <span className="inline-block font-bold">
              creative web design and development agency
            </span>
            , crafting visually stunning, user-friendly, and high-performance
            websites that captivate audiences, elevate brands, and drive real
            business results.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
