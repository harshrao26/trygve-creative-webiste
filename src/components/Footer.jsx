import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="md:flex-row flex flex-col justify-between items-center border-b border-gray-800 pb-6 mb-6">
          {/* Logo + Branding */}
          <div>
            <p className="text-4xl font-bold">Trygve Pixels</p>
            <p className="text-gray-500 text-sm mt-2">
              Powered By{" "}
              <motion.span
                className="md:text-base font-great-vibes font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                Trygve Studio Private Limited
              </motion.span>
            </p>
          </div>

          {/* Email */}
          <motion.a
            href="mailto:info@trygvepixels.com"
            className="md:text-5xl font-great-vibes text-2xl mt-4 md:mt-0 font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text hover:from-purple-500 hover:to-blue-500 transition-all"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            info@trygvepixels.com
          </motion.a>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-6 mb-6 text-xl">
          <a href="#" className="hover:text-gray-400"><FaLinkedin /></a>
          <a href="#" className="hover:text-gray-400"><FaFacebook /></a>
          <a href="#" className="hover:text-gray-400"><FaInstagram /></a>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6 mb-6">
          <a href="#" className="hover:text-gray-400">Contact</a>
          <a href="#" className="hover:text-gray-400">FAQs</a>
          <a href="/privacy" className="hover:text-gray-400">Privacy Policy</a>
        </div>

        {/* Sectors */}
        <div className="mb-6">
          <span className="text-gray-500">Our sectors :</span>
          <div className="flex flex-wrap gap-3 mt-2">
            {["Agencies", "SaaS and Tech", "B2B Transformation", "Healthcare", "Media & Entertainment", "Retail"].map((sector, i) => (
              <span
                key={i}
                className="border border-gray-600 px-3 py-1 rounded-full text-gray-400 hover:text-white transition-colors"
              >
                {sector}
              </span>
            ))}
          </div>
        </div>

        {/* Company Info */}
        <div className="text-gray-400 text-sm mb-6 space-y-2">
           <p><FaMapMarkerAlt className="inline mr-2" /> Levana Cyber Heights, 10th Floor – Regus, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh, 226010, India</p>
          <p><FaMapMarkerAlt className="inline mr-2" /> HO: 728, Eden Enclave, Kursi Road, Lucknow, 226026</p>
          <p><FaPhone className="inline mr-2" /> +91 9554440400</p>
           {/* <p><FaGlobe className="inline mr-2" /> www.trygvepixels.com</p> */}
        </div>

        {/* Footer Note */}
        <div className="text-center text-gray-600">
          © Trygve Pixels 2025
        </div>
      </div>
    </footer>
  );
};

export default Footer;
