import React from "react";
import WorkDetailCard from "./WorkDetailCard";

const OurWorkSection = () => {
  return (
    <section className="bg-black">
      {/* Left Section - OUR WORK */}
      <div className=" text-white py-20 px-8 md:px-20 h-screen flex flex-col md:flex-row items-center justify-between gap-10">
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
            Let’s face it, first impressions matter. Your website’s an
            opportunity to wow your audience, so why choose bad design? Brands
            win over fans when they’re brave enough to go beyond their creative
            comfort zone.
          </p>
        </div>
      </div>

      <div className="px-10 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-10">
        <WorkDetailCard
          title="Tangerine"
          year="2023"
          description="We took on the challenge of creating a new website for Tangerine, a global pioneer in design."
          tags={["Web design & development", "Agencies"]}
          imageUrl="https://cdn.dribbble.com/userupload/14894778/file/original-b7e38994449398e4c9282d16da8bb301.jpg?resize=400x0"
          bgColor="bg-orange-800"
        />
        <WorkDetailCard
          title="Wogan Coffee"
          year="2023"
          description="Creating a vibrant brand for coffee lovers."
          tags={["Branding", "E-commerce"]}
          imageUrl="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3bb5f691632079.5e372adaa9f70.png"
          bgColor="bg-green-900"
        />
        <WorkDetailCard
          title="PixelArtworks"
          year="2023"
          description="Immersive experiences for digital natives."
          tags={["Digital Design", "Creative Agency"]}
          imageUrl="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a9ba6291632079.5e4957028d678.jpg"
          bgColor="bg-black"
        />
        <WorkDetailCard
          title="Tangerine"
          year="2023"
          description="We took on the challenge of creating a new website for Tangerine, a global pioneer in design."
          tags={["Web design & development", "Agencies"]}
          imageUrl="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7b43be72445533.60c978f7b5f71.jpg"
          bgColor="bg-orange-800"
        />
      </div>
    </section>
  );
};

export default OurWorkSection;
