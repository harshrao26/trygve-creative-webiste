import React from 'react';
import AnimatedBackground from './AnimatedBackground';

const ContactForm = () => {
  return (
    <div className="relative  flex items-center justify-center overflow-hidden  text-white">

      <div className="relative z-10 w-full max-w-2xl px-10 py-12  backdrop-blur-2xl border border-white/20 rounded-3xl ">
        <h2 className="text-3xl text-center font-bold mb-8 tracking-tight leading-tight">
          Let's Start Something Great
        </h2>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="mb-2 text-sm uppercase tracking-widest">Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="bg-transparent border-b border-white/30 focus:border-white outline-none py-2 placeholder:text-white/50"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-2 text-sm uppercase tracking-widest">Email</label>
              <input
                type="email"
                placeholder="john@example.com"
                className="bg-transparent border-b border-white/30 focus:border-white outline-none py-2 placeholder:text-white/50"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-sm uppercase tracking-widest">Phone</label>
            <input
              type="tel"
              placeholder="+91 98765 43210"
              className="bg-transparent border-b border-white/30 focus:border-white outline-none py-2 placeholder:text-white/50"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-sm uppercase tracking-widest">Note</label>
            <textarea
              rows="4"
              placeholder="Tell us about your vision..."
              className="bg-transparent border-b border-white/30 focus:border-white outline-none py-2 placeholder:text-white/50 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-8 w-full bg-white text-black font-semibold tracking-wide py-3 rounded-full hover:bg-opacity-90 transition duration-300"
          >
            Send Inquiry →
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
