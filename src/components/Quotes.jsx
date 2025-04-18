import React from "react";

const BespokeWebsites = ({
  textLines = ["We develop bespoke", "websites with three", "things in mind"],
  gradientBackground = "bg-gradient-to-r from-black via-zinc-900 to-zinc-900",
}) => {
  return (
    <div
      className={`w-full h-screen flex items-center justify-center ${gradientBackground}`}
    >
      <div className="text-center px-4">
        {textLines.map((line, index) => (
          <h1
            key={index}
            className="text-4xl md:text-6xl lg:text-8xl capitalize leading-tigh text-white"
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
