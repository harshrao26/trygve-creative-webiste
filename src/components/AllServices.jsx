import React from "react";
import Card from "./Card"; // Ensure correct import

const ServicesPage = () => {
  const serviceData = {
    title: "Web Design & Development",
    tags: [
      "Creative Web Design",
      "Web Development",
      "Copywriting",
      "E-Commerce WordPress",
    ],
    description: "Crafting digital experiences...",
    videoSrc: "https://kota-content.b-cdn.net/app/uploads/2024/02/homepage.mp4",
    link: "/services/web-design",
  };

  return (
    <div>
      <Card {...serviceData} />
    </div>
  );
};

export default ServicesPage;
