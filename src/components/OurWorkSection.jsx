import React from "react";

const OurWorkSection = () => {
  return (
    <section className="bg-black text-white py-20 px-8 md:px-20 h-screen flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Left Section - OUR WORK */}
      <div className="w-full md:w-1/2">
        <h1 className="text-7xl md:text-9xl font-semibold leading-tighter text-white">
          OUR <br /> <span className="ml-20">WORK</span>
        </h1>
      </div>

      {/* Right Section - Headline and Description */}
      <div className="w-full md:w-1/2">
        <h2 className="text-4xl md:text-6xl font-semibold leading-tight mb-6">
          Making brands a damn site better.
        </h2>
        <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
          Let’s face it, first impressions matter. Your website’s an opportunity
          to wow your audience, so why choose bad design? Brands win over fans
          when they’re brave enough to go beyond their creative comfort zone.
        </p>
      </div>
    </section>
  );
};

export default OurWorkSection;
