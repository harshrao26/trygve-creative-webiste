// src/components/Navbar.js
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import logo from "../assets/logo.png"; // Make sure you have a logo in src/assets

const menuItems = [
  { title: "Work", link: "#" },
  { title: "Agency", link: "#" },
  {
    title: "Services",
    subItems: [
      { title: "Web design & development", link: "#", active: true },
      { title: "Branding", link: "#" },
      { title: "Digital marketing", link: "#" },
    ],
  },
  { title: "Blog", link: "#" },
  { title: "Culture", link: "#" },
  { title: "Contact", link: "#" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleSubMenu = (title) => {
    setActiveMenu(activeMenu === title ? null : title);
  };

  return (
    <div className="relative">
      {/* Top Navbar */}
      <nav className="fixed top-0 left-0 w-full flex justify-between items-center p-4 z-50 bg-transparent">
        {/* Logo on the Left */}
        <a href="/" className="flex items-center">
          <img src={logo} alt="Logo" className="w-10 h-10 mr-2" />
          <span className="text-xl font-semibold text-white">BrandName</span>
        </a>
        {/* Hamburger Menu on the Right */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white bg-black rounded-full p-2 shadow-md focus:outline-none"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Slide-in Sidebar Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed top-4 right-4 w-80 bg-white shadow-lg rounded-3xl p-6 z-40"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <ul className="space-y-4 mt-8">
              {menuItems.map((item, index) => (
                <li key={index} className="font-semibold">
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() =>
                      item.subItems
                        ? toggleSubMenu(item.title)
                        : setMenuOpen(false)
                    }
                  >
                    <a href={item.link} className="block hover:text-gray-600">
                      {item.title}
                    </a>
                    {item.subItems && (
                      <span>
                        {activeMenu === item.title ? (
                          <ChevronUp className="w-5 h-5" />
                        ) : (
                          <ChevronDown className="w-5 h-5" />
                        )}
                      </span>
                    )}
                  </div>
                  {item.subItems && activeMenu === item.title && (
                    <motion.ul
                      className="pl-4 mt-2 space-y-2 text-gray-500"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.subItems.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <a
                            href={subItem.link}
                            className={`pt-3 text-zinc-400 block ${subItem.active ? "" : ""}`}
                          >
                            {subItem.title}
                          </a>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </li>
              ))}
            </ul>
            <button className="mt-10 flex items-center text-black border border-black px-4 py-2 rounded-full hover:bg-black hover:text-white transition duration-300">
              Start your project <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
