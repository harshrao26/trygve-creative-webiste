import React, { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import clsx from "clsx";

const SlideInEnquirySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full min-h-screen bg-black text-white flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-32 overflow-hidden"
    >
      {/* Left Text Section */}
      <div className="w-full md:w-1/2 space-y-6">
      <h2 className="text-4xl md:text-5xl font-great-vibes font-bold leading-snug">
  Let’s build something{" "}
  <span className="bg-gradient-to-r font-great-vibes from-[#4C8CFF] to-[#A05FFF] bg-clip-text text-transparent">
    impactful
  </span>
</h2>

        <p className="text-lg md:text-xl text-white/80 max-w-xl">
          We help brands, creators, and businesses bring their ideas to life. If
          you're ready to launch or scale — we’d love to hear from you.
        </p>
      </div>

      {/* Right Form Section */}
      <div
        className={clsx(
          "w-full md:w-1/2 transition-all duration-1000 ease-in-out transform",
          isVisible ? "translate-x-0 opacity-100" : "translate-x-32 opacity-0"
        )}
      >
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-2xl">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-semibold">Enquire Now</h3>
          
          </div>

          <p className="text-sm text-white/60 mb-6">
            We usually respond within 24 hours. Let’s talk about how we can help
            you grow.
          </p>

          <form className="space-y-5">
            {/* Name */}
            <div className="flex flex-col">
              <label className="text-sm mb-1">Name</label>
              <input
                type="text"
                placeholder="Your full name"
                className="bg-transparent border-b border-white/30 focus:border-white outline-none py-2 placeholder:text-white/40"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-sm mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="bg-transparent border-b border-white/30 focus:border-white outline-none py-2 placeholder:text-white/40"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col">
              <label className="text-sm mb-1">Phone</label>
              <input
                type="tel"
                placeholder="+91 98765 43210"
                className="bg-transparent border-b border-white/30 focus:border-white outline-none py-2 placeholder:text-white/40"
              />
            </div>

            {/* Project Description */}
            <div className="flex flex-col">
              <label className="text-sm mb-1">Project Description</label>
              <textarea
                rows="4"
                placeholder="Tell us what you’re building or need help with..."
                className="bg-transparent border-b border-white/30 focus:border-white outline-none py-2 placeholder:text-white/40 resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full mt-4 bg-white text-black py-3 rounded-full font-semibold hover:bg-opacity-90 transition"
            >
              Send Enquiry →
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SlideInEnquirySection;
