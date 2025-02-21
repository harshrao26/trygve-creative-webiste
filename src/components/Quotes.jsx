import React from "react";

const BespokeWebsites = ({
  textLines = ["We develop bespoke", "websites with three", "things in mind"],
  gradientBackground = "bg-gradient-to-r from-purple-100 via-pink-100 to-blue-300",
}) => {
  return (
    <div
      className={`w-full h-screen flex items-center justify-center ${gradientBackground}`}
    >
      <div className="text-center px-4">
        {textLines.map((line, index) => (
          <h1
            key={index}
            className="text-4xl md:text-6xl lg:text-8xl capitalize leading-tigh text-black"
          >
            {line}
            {/* {index === textLines.length - 1 && (
              <span className="block underline decoration-black decoration-[5px] mt-2">
                &nbsp;
              </span>
            )} */}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default BespokeWebsites;
