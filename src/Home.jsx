import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero2";
import OurServices from "./components/OurServices";
import Card from "./components/Card";
import Quotes from "./components/Quotes";
import AllHoverCardContainer from "./components/AllHoverCardContainer.jsx";
import OurWorkSection from "./components/OurWorkSection.jsx";
import OurResultSection from "./components/OurResultSection.jsx";
import BottomMarquee from "./components/BottomMarquee.jsx";
import Articles from "./components/Articles.jsx";
import FAQ from "./components/FAQ.jsx";
import Footer from "./components/Footer.jsx";
import { TextReveal } from "./components/magicui/text-reveal.jsx";
// import { CoolMode } from "./components/magicui/cool-mode.jsx";
import AnimatedBackground from "./components/AnimatedBackground";
import ScrollEnquiryForm from "./components/ScrollEnquiryForm.jsx";
import icon from "./assets/icon.png";
const App = () => {
  return (
    <div className="">
      <Nav />

      <div className="fixed bottom-10 right-10 p-4 z-50">
  <a
    href="https://wa.me/919554440400?text=Hi%2C%20I%E2%80%99m%20looking%20for%20Website%20Development%20%2F%20SEO%20services%20for%20my%20business.%20I%20came%20across%20your%20website%20trygvepixels.com%20and%20would%20like%20to%20know%20more%20about%20your%20offerings.%20Please%20get%20in%20touch%20when%20you%E2%80%99re%20available.%20Thanks!"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src={icon} // replace with your icon path or import
      alt="Chat on WhatsApp"
      className="md:h-20 h-16 hover:scale-105 transition-transform duration-300"
    />
  </a>
</div>


      <Hero />

      <TextReveal
        className="mx-auto max-w-8xl"
        text="WE ARE HERE TO FULLFILL YOUR ALL DIGITAL SOLUTION NEEDS"
      />
      <BottomMarquee />

      <OurServices />
      <Card />
      <Card
        title="Digital Marketing & SEO"
        description="Delivering eye-catching motion graphics and campaigns that earn attention, spark emotion, and increase conversions."
        tags={["Motion graphics", "Creative campaigns", "Marketing support"]}
        buttonText="Find out more"
        videoSrc="https://kota-content.b-cdn.net/app/uploads/2024/02/homepage-3.mp4"
      />
      <Quotes
        textLines={[
          "We develop bespoke",
          "websites with three",
          "things in mind",
        ]}
      />
      <AllHoverCardContainer />

      <OurWorkSection />
      {/* <OurResultSection /> */}
      <ScrollEnquiryForm />
      {/* <Articles /> */}
      <FAQ />

      {/* <CoolMode>Click Me!</CoolMode> */}
    </div>
  );
};

export default App;
