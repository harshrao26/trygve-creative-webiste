import React from "react";
import HoverCard from "./HoverCard";

const HomePage = () => {
  return (
    <div>
      <HoverCard
        number="01/"
        title="Beauty"
        description="Developing stunning one-of-a-kind digital design that catches people’s eyes and brings your brand to life online."
        imageUrl="https://via.placeholder.com/400x300"
      />
      <HoverCard
        number="02/"
        title="Thought"
        description="As a web design agency, we love to deliver meaningful and intuitive user experiences that build trust with your target audience."
        imageUrl="https://example.com/thought-image.png"
      />
      <HoverCard
        number="03/"
        title="Impact"
        description="Designing tailor-made solutions that resonate with your customers and drives them to act."
        imageUrl="https://example.com/impact-image.png"
      />
    </div>
  );
};

export default HomePage;
