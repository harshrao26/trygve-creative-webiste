// // src/components/Marquee.js
// import React from "react";
// import logo from "../assets/logo.png"; // Place your logo in src/assets

// const Marquee = () => {
//   return (
//     <div className="relative w-screen h-screen overflow-hidden bg-black flex justify-center items-center">
//       <div className="absolute whitespace-nowrap flex items-center justify-center w-full animate-marquee">
//         <span className="text-white text-6xl uppercase mx-8 flex items-center space-x-4">
//           <span>TRYGVE</span>
//           <img src={logo} alt="Logo" className="w-12 h-12" />
//           <span>PIXELS</span>
//           <img src={logo} alt="Logo" className="w-12 h-12" />
//           <span>TRYGVE</span>
//           <img src={logo} alt="Logo" className="w-12 h-12" />
//           <span>PIXELS</span>
//           <img src={logo} alt="Logo" className="w-12 h-12" />
//         </span>
//       </div>
//     </div>
//   );
// };

// export default Marquee;


// src/components/Marquee.js
import React from 'react';
import bottomVideo from '../assets/bottomVideo.mp4'; // Ensure your logo is in src/assets
import { VelocityScroll } from '../components/magicui/scroll-based-velocity';


const Marquee = () => {
    return (
      <div className="relative w-full md:h-screen h-80 bg-bl overflow-hidden bg-black">
        {/* Background Video */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-10 z-10"></div>
        <video
          className="absolute top-0 left-0 w-full h-full object-fill rounded-ful"
          src={bottomVideo}
          autoPlay
          loop
          muted
          playsInline
          
        />

        {/* Overlay to darken video for better text contrast */}

        {/* Infinite Marquee */}
        <div className="absolute top-1/2 transform -translate-y-1/2 w-full overflow-hidden">
          <div className="">
            <VelocityScroll>TRYGVE PIXELS {"   "}</VelocityScroll>
          </div>
        </div>
      </div>
    );
};

export default Marquee;
