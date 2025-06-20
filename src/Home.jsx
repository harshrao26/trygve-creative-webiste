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
import {TextReveal} from "./components/magicui/text-reveal.jsx";
// import { CoolMode } from "./components/magicui/cool-mode.jsx";
import AnimatedBackground from './components/AnimatedBackground'
import ScrollEnquiryForm from "./components/ScrollEnquiryForm.jsx";
const App = () => {
  return (
    <div className="">
      <Nav />
      <Hero />

      <TextReveal className="mx-auto max-w-8xl" text="WE ARE HERE TO FULLFILL YOUR ALL DIGITAL SOLUTION NEEDS"  />
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
