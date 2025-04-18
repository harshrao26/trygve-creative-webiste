import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const StackedCards = ({
  cards = [
    {
      id: 1,
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1677694240478-b5032550b7f7?q=80&w=1424&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Frame",
      description: "Design research, Vision and purpose.",
    },
    {
      id: 2,
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1661601101622-404d3ef8827a?q=80&w=1424&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "We are a strategic design consultancy",
      description: "For change-makers in business.",
    },
    {
      id: 3,
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1677462529017-34d5b1050e6c?q=80&w=1424&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "About us",
      description: "We believe in people and what they can achieve together.",
    },
  ],
}) => {
  const [visibleCards, setVisibleCards] = useState(cards);

  const handleCardRemove = () => {
    const newCards = [...visibleCards];
    newCards.push(newCards.shift()); // Rotate the cards
    setVisibleCards(newCards);
  };

  const handleDragEnd = (event, info) => {
    if (Math.abs(info.offset.x) > 100) {
      handleCardRemove();
    }
  };

  return (
    <div className="relative flex justify-center items-center min-h-[80vh] overflow-hidden">
      <AnimatePresence>
        {visibleCards.map((card, index) => (
          <motion.div
            key={card.id}
            className={`absolute w-[85%] md:w-[60%] max-w-[800px] h-[65vh] rounded-3xl overflow-hidden shadow-lg cursor-pointer transition-transform duration-500`}
            style={{
              zIndex: visibleCards.length - index,
              transform: `scale(${1 - index * 0.04}) translateX(${
                index * 15
              }px) translateY(${index * 10}px)`,
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={card.imageUrl}
              alt={card.title}
              className="w-full h-full object-cover rounded-3xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end p-6 rounded-3xl">
              <h2 className="text-2xl font-bold text-white">{card.title}</h2>
              <p className="text-md text-gray-300">{card.description}</p>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Bottom Right Arrow Button */}
      <button
        className="absolute bottom-4 right-20 p-4 bg-black rounded-full shadow-md hover:shadow-lg transition-shadow"
        onClick={handleCardRemove}
      >
        <ArrowRight className="text-white w-6 h-6" />
      </button>
      <h1 className="text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi tempora velit mollitia, vero neque quidem magnam a in alias, maiores soluta odio. Inventore consequatur delectus excepturi qui non facilis molestias repudiandae doloremque laudantium, labore corporis ullam blanditiis commodi? Molestiae maxime ducimus voluptate quidem vitae totam voluptates non, obcaecati aut facilis nobis dicta! Facilis dolorem ad necessitatibus dolorum veritatis nulla numquam tenetur aut reiciendis eius sed libero saepe magni a animi, quod suscipit incidunt assumenda consectetur ex hic optio asperiores iste eaque. Unde eum tempore asperiores numquam libero, molestias vitae possimus magni reprehenderit amet, molestiae modi natus sit alias, quasi ducimus?</h1>
    </div>
  );
};

export default StackedCards;
