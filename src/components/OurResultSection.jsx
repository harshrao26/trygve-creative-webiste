import React from "react";
import AllStackedCards from "./AllStackedCards";

const OurWorkSection = () => {
  return (
    <section className="bg-black">
      {/* Left Section - OUR WORK */}
      <div className=" text-white  px-8 md:px-20 pt-20 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="w-full md:w-1/2">
          <h1 className="text-7xl md:text-9xl font-semibold leading-tighter text-white">
            OUR <br /> <span className="ml-20">RESULTS</span>
          </h1>
        </div>
      
      </div>
  <AllStackedCards />

  
    </section>
  );
};

export default OurWorkSection;
