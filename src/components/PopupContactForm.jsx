import React from 'react';
import { X } from 'lucide-react';

const PopupContactForm = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-opacity-70 flex items-center justify-center px-4">
      <div className="relative z-10 w-full max-w-lg sm:max-w-md px-6 sm:px-8 py-8 sm:py-10 backdrop-blur-2xl border border-white/20 rounded-2xl sm:rounded-3xl text-white bg-black/80">

        {/* Close Icon */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl sm:text-3xl text-center font-bold mb-6 sm:mb-8 tracking-tight leading-tight">
          Let's Start Something Great
        </h2>

        <form className="space-y-5 sm:space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="flex flex-col">
              <label className="mb-1 text-sm uppercase tracking-widest">Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="bg-transparent border-b border-white/30 focus:border-white outline-none py-2 placeholder:text-white/50"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 text-sm uppercase tracking-widest">Email</label>
              <input
                type="email"
                placeholder="john@example.com"
                className="bg-transparent border-b border-white/30 focus:border-white outline-none py-2 placeholder:text-white/50"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-sm uppercase tracking-widest">Phone</label>
            <input
              type="tel"
              placeholder="+91 98765 43210"
              className="bg-transparent border-b border-white/30 focus:border-white outline-none py-2 placeholder:text-white/50"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-sm uppercase tracking-widest">Note</label>
            <textarea
              rows="4"
              placeholder="Tell us about your vision..."
              className="bg-transparent border-b border-white/30 focus:border-white outline-none py-2 placeholder:text-white/50 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-6 w-full bg-white text-black font-semibold tracking-wide py-3 rounded-full hover:bg-opacity-90 transition duration-300"
          >
            Send Inquiry →
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupContactForm;
