import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import OurServices from "./components/OurServices";
import Card from "./components/Card";
import Quotes from "./components/Quotes";
import AllHoverCardContainer from "./components/AllHoverCardContainer.jsx";
import OurWorkSection from "./components/OurWorkSection.jsx";
import OurResultSection from "./components/OurResultSection.jsx";
import Footer from "./components/Footer.jsx";
const App = () => {
  return (
    <div>
      <Nav />
      <Hero />
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
    
      <OurResultSection />
      <Footer />
    </div>
  );
};

export default App;
