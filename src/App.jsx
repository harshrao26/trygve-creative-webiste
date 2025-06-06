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
import Routing from "./Routes.jsx";
const App = () => {
  return (
    <div className="bg-blac">
      <Nav />
      <Routing />
      
      <Footer />
      {/* <CoolMode>Click Me!</CoolMode> */}
    </div>
  );
};

export default App;
