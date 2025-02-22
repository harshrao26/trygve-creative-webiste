import React from "react";
import StackedCards from "./StackedCards";

const HomePage = () => {
  return (
    <div className="bg-black min-h-screen flex gap-10 justify-center items-center">
      <StackedCards
        cards={[
          {
            id: 1,
            imageUrl:
              "https://plus.unsplash.com/premium_vector-1718248782521-e34794dec428?q=80&w=1424&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "We are a strategic design consultancy",
            description: "For change-makers in business.",
          },
          {
            id: 2,
            imageUrl:
              "https://plus.unsplash.com/premium_vector-1714618831548-47d99d27142f?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Frame",
            description: "Design research, Vision and purpose.",
          },
          {
            id: 3,
            imageUrl:
              "https://plus.unsplash.com/premium_vector-1726060273712-1f98b2ebdaff?q=80&w=1456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "About us",
            description:
              "We believe in people and what they can achieve together.",
          },
        ]}
      />
    </div>
  );
};

export default HomePage;
