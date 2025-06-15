import React from "react";
import WorkDetailCard from "./WorkDetailCard";
import p1 from "../assets/p1.webp";
import p2 from "../assets/p2.webp";
import p3 from "../assets/p3.webp";
import p6 from "../assets/p6.webp";

const OurWorkSection = () => {
  return (
    <section className="bg-black mb-2 overflow-hidden">
      {/* Left Section - OUR WORK */}
      <div className=" text-white py-20 px-8 md:px-20 h- flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="w-full md:w-1/2 py-10">
          <h1 className="text-7xl md:text-9xl font-semibold leading-tighter text-white">
            OUR <br /> <span className="ml-20">WORK</span>
          </h1>
        </div>

        {/* Right Section - Headline and Description */}
        <div className="w-full md:w-1/2 bg-w">
          <h2 className="text-4xl md:text-6xl font-semibold leading-tight">
            Making brands a damn site better.
          </h2>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
            Let’s face it, first impressions matter. Your website’s an
            opportunity to wow your audience, so why choose bad design? Brands
            win over fans when they’re brave enough to go beyond their creative
            comfort zone.
          </p>
        </div>
      </div>

      <div className="md:px-10 px-4 bg-white md:py-20 py-10 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 ">
        <WorkDetailCard
          title="Drink Groovy"
          year="2023"
          description="Creating a vibrant brand for juice lovers."
          tags={["Web design & development", "Agencies"]}
          imageUrl= {p2}
          bgColor="bg-orange-800"
        />
       
        <WorkDetailCard
          title="CMP Techsseract LLP"
          year="2023"
          description=" We took on the challenge of creating a new website for CMP Techsseract LLP, a global pioneer in design."
          tags={["Branding", "E-commerce"]}
          imageUrl={p1}
          bgColor="bg-green-900"
        />
        <WorkDetailCard
          title="Streamify"
          year="2023"
          description="Immersive experiences for content viewers."
          tags={["Digital Design", "Creative Agency"]}
          imageUrl={p3}
          bgColor="bg-black"
        />
        <WorkDetailCard
          title="threads of identity"
          year="2023"
          description="We embraced the challenge of developing a new e-commerce website for Threads of Identity, a global leader in design."
          tags={["Web design & development", "Agencies"]}
          imageUrl={p6}
          bgColor="bg-orange-800"
        />
      </div>
    </section>
  );
};

export default OurWorkSection;
