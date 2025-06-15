import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BespokeWebsites = ({
  textLines = ["We develop bespoke", "websites with three", "things in mind"],
  gradientBackground = "bg-gradient-to-r from-black via-zinc-900 to-zinc-900",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectDescription: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => sectionRef.current && obs.unobserve(sectionRef.current);
  }, []);

  const handleChange = ({ target: { name, value } }) =>
    setFormData((prev) => ({ ...prev, [name]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const now = new Date();
      const ist = new Date(now.getTime() + 330 * 60 * 1000);
      const timestamp = ist.toISOString().replace("T", " ").split(".")[0];
      const clean = (v) => (typeof v === "string" ? v : v == null ? "" : v.toString());

      const payload = {
        name: clean(formData.name),
        email: clean(formData.email),
        phone: clean(formData.phone),
        timestamp,
        projectDescription: clean(formData.projectDescription),
      };

      await axios.post("https://hook.eu2.make.com/5xu4mcnfhtacg70kw33dw7dqy2r3q1al", payload);
      navigate("/thank-you");
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`w-full overflow-hidden min-h-screen flex flex-col md:flex-row items-center justify-center px-10 gap-8 capitalize py-16 ${gradientBackground}`} ref={sectionRef}>
      <div className="text-center md:text-left md:w-1/2 space-y-4">
        {textLines.map((line, i) => (
          <h1 key={i} className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight">
            {line}
          </h1>
        ))}
      </div>

      <div
        className={clsx(
          "w-full md:w-1/2 mt-10 md:mt-0 transition-all duration-1000 ease-in-out transform",
          isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
        )}
      >
        <form
          onSubmit={handleSubmit}
          className="bg-\/10 backdrop-blur-md rounded-xl p-8 border border-white/20 shadow-xl text-white space-y-5"
        >
          <h3 className="text-2xl font-semibold">Enquire Now</h3>
          <p className="text-sm text-white/70">We usually respond within 24 hours.</p>

          {["name", "email", "phone"].map((field) => (
            <div key={field}>
              <label className="text-sm capitalize">{field}</label>
              <input
                type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                placeholder={field}
                className="w-full bg-transparent border-b border-white/40 focus:border-white outline-none py-2 placeholder-white/50"
              />
            </div>
          ))}

          <div>
            <label className="text-sm">Project Description</label>
            <textarea
              name="projectDescription"
              rows="4"
              value={formData.projectDescription}
              onChange={handleChange}
              placeholder="Tell us what you’re building..."
              className="w-full bg-transparent border-b border-white/40 focus:border-white outline-none py-2 placeholder-white/50 resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-white text-black font-semibold py-3 rounded-full hover:bg-opacity-90 transition disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : "Send Enquiry →"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BespokeWebsites;
