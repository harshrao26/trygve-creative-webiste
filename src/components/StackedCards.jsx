import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const StackedCards = ({
  cards = [
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
            className={`absolute w-[80%] md:w-[80%] max-w-[800px] h-[70vh] rounded-3xl overflow-hidden shadow-xl cursor-pointer transition-transform duration-500`}
            style={{
              zIndex: visibleCards.length - index,
              transform: `scale(${1 - index * 0.05}) translateY(${
                index * 20
              }px)`,
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
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end p-6">
              <h2 className="text-2xl font-bold text-white">{card.title}</h2>
              <p className="text-lg text-gray-300">{card.description}</p>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Bottom Right Arrow Button */}
      <button
        className="absolute bottom-4 right-4 p-4 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
        onClick={handleCardRemove}
      >
        <ArrowRight className="text-black w-6 h-6" />
      </button>
      <h1 className="text-black hidde">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam hic odio saepe beatae earum tenetur! Quam sunt hic sequi neque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam blanditiis hic mollitia nostrum vel ullam consequuntur vitae deserunt modi a! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt obcaecati blanditiis nam voluptate aspernatur? Porro fuga obcaecati, iure tempore ratione deserunt in ex culpa ut vero delectus eaque facilis cupiditate odit ab commodi voluptate adipisci non repellendus alias. Quo iusto quibusdam est consequatur ipsa, facilis nostrum repellat quidem earum distinctio at nulla. Officiis, in. Facere adipisci dolor expedita corporis officia. Quod voluptatum omnis, possimus adipisci aliquam architecto ab odit voluptate ea consectetur illo facere debitis vel soluta pariatur nostrum aperiam est molestias quos impedit reiciendis! Asperiores voluptatem eligendi quo quibusdam laudantium? Quia, minima voluptatem! Vero mollitia cupiditate consequatur atque nihil?
      </h1>
    </div>
  );
};

export default StackedCards;
