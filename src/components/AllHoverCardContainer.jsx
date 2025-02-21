import React from "react";
import HoverCard from "./HoverCard";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-10">
      <HoverCard
        number="01/"
        title="Beauty"
        description="Developing stunning one-of-a-kind digital design that catches people’s eyes and brings your brand to life online."
        imageUrl="https://plus.unsplash.com/premium_vector-1713201017366-f764a073f393?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aWxsdXN0cmF0aW9ufGVufDB8MXwwfHx8MA%3D%3D"
      />
      <HoverCard
        number="02/"
        title="Thought"
        description="As a web design agency, we love to deliver meaningful and intuitive user experiences that build trust with your target audience."
        imageUrl="https://plus.unsplash.com/premium_vector-1720439945329-007bc26b3a08?q=80&w=1491&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <HoverCard
        number="03/"
        title="Impact"
        description="Designing tailor-made solutions that resonate with your customers and drives them to act."
        imageUrl="https://plus.unsplash.com/premium_vector-1721492690435-ec1c8fa2d62b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </div>
  );
};

export default HomePage;
