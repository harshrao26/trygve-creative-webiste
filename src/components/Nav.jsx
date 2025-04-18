import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import logo from "../assets/logo.png";

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
  const [scrolled, setScrolled] = useState(false);
  const [showNav, setShowNav] = useState(true);

  const lastScrollY = useRef(0);

  const toggleSubMenu = (title) => {
    setActiveMenu(activeMenu === title ? null : title);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 10);

      // Show/hide logic
      if (currentScrollY > lastScrollY.current) {
        // Scrolling down
        setShowNav(false);
      } else {
        // Scrolling up
        setShowNav(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Top Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full flex justify-between items-center px-8 py-2 z-50 transition-all duration-300 ${
          scrolled ? "backdrop-blur-md bg-white/30 shadow-md" : "bg-transparent"
        } ${showNav ? "translate-y-0" : "-translate-y-full"}`}
      >
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src={logo} alt="Logo" className="w-24 h-24" />
        </a>

        {/* Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white bg-black rounded-full p-2 shadow-md z-[100000000] fixed top-6 right-6"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Sidebar */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed top-20 right-6 w-80 bg-white shadow-2xl rounded-3xl p-6 z-[1000]"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <ul className="space-y-4">
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
                            className="pt-3 text-zinc-400 block"
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
