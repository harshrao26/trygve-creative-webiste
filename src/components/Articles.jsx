// src/components/Articles.js
import React from "react";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    title: "Time for a rebrand? Start with our Brand Pulse Audit tool",
    category: "EXPERTISE",
    image: "https://via.placeholder.com/600x400.png?text=Audit+Tool",
  },
  {
    title: "Branding inspiration: brand design trends for 2025",
    category: "INSPIRATION",
    image: "https://via.placeholder.com/600x400.png?text=Design+Trends+2025",
  },
  {
    title:
      "Clutch names KOTA a 2024 Global Winner, Clutch Champion & Top Branding Company",
    category: "CULTURE, OUR WORK",
    image: "https://via.placeholder.com/600x400.png?text=Clutch+Awards",
  },
  {
    title: "Time for a rebrand? Start with our Brand Pulse Audit tool",
    category: "EXPERTISE",
    image: "https://via.placeholder.com/600x400.png?text=Audit+Tool",
  },
  {
    title: "Branding inspiration: brand design trends for 2025",
    category: "INSPIRATION",
    image: "https://via.placeholder.com/600x400.png?text=Design+Trends+2025",
  },
  {
    title:
      "Clutch names KOTA a 2024 Global Winner, Clutch Champion & Top Branding Company",
    category: "CULTURE, OUR WORK",
    image: "https://via.placeholder.com/600x400.png?text=Clutch+Awards",
  },
  {
    title: "Time for a rebrand? Start with our Brand Pulse Audit tool",
    category: "EXPERTISE",
    image: "https://via.placeholder.com/600x400.png?text=Audit+Tool",
  },
  {
    title: "Branding inspiration: brand design trends for 2025",
    category: "INSPIRATION",
    image: "https://via.placeholder.com/600x400.png?text=Design+Trends+2025",
  },
  {
title:
      "Clutch names KOTA a 2024 Global Winner, Clutch Champion & Top Branding Company",
    category: "CULTURE, OUR WORK",
    image: "https://via.placeholder.com/600x400.png?text=Clutch+Awards",
  },
];

const Articles = () => {
  return (
    <div className="bg-black py-16 text-white ">
      <div className="max-w-7xl mx-auto px-1 ">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-8xl font-se=mibold">Latest Articles</h1>
          <button className="flex items-center text-white border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition duration-300">
            View our blog <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-white rounded-tr-[60px] text-black overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-30"></div>
              </div>
              <div className="p-4">
                <span className="text-gray-500 text-sm">
                  {article.category}
                </span>
                <h2 className="text-xl font-semibold mt-2">{article.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;
