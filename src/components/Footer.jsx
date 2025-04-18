import React from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="md:flex-row flex flex-col justify-between items-center border-b border-gray-800 pb-6 mb-6">
          {/* Logo */}
          <div className="text-4xl font-bold">KOTA</div>

          {/* Email with gradient animation */}
          <motion.a
            href="mailto:hello@kota.co.uk"
            className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text hover:from-purple-500 hover:to-blue-500 transition-all"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            hello@kota.co.uk
          </motion.a>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-6 mb-6">
          <a href="#" className="hover:text-gray-400">
            <Linkedin />
          </a>
          <a href="#" className="hover:text-gray-400">
            <Facebook />
          </a>
          <a href="#" className="hover:text-gray-400">
            <Instagram />
          </a>
          <a href="#" className="hover:text-gray-400">
            Bluesky
          </a>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6 mb-6">
          <a href="#" className="hover:text-gray-400">
            Contact
          </a>
          <a href="#" className="hover:text-gray-400">
            FAQs
          </a>
          <a href="#" className="hover:text-gray-400">
            Privacy Policy
          </a>
        </div>

        {/* Sectors */}
        <div className="mb-6">
          <span className="text-gray-500">Our sectors :</span>
          <div className="flex flex-wrap space-x-4 mt-2">
            <span className="border border-gray-600 px-3 py-1 rounded-full text-gray-400 hover:text-white transition-colors">
              Agencies
            </span>
            <span className="border border-gray-600 px-3 py-1 rounded-full text-gray-400 hover:text-white transition-colors">
              SaaS and Tech
            </span>
            <span className="border border-gray-600 px-3 py-1 rounded-full text-gray-400 hover:text-white transition-colors">
              B2B Transformation
            </span>
            <span className="border border-gray-600 px-3 py-1 rounded-full text-gray-400 hover:text-white transition-colors">
              Healthcare
            </span>
            <span className="border border-gray-600 px-3 py-1 rounded-full text-gray-400 hover:text-white transition-colors">
              Media & Entertainment
            </span>
            <span className="border border-gray-600 px-3 py-1 rounded-full text-gray-400 hover:text-white transition-colors">
              Retail
            </span>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-600">© KOTA 2025</div>
      </div>
    </footer>
  );
};

export default Footer