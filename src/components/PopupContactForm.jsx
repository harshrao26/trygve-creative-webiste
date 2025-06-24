import React, { useState } from "react";
import { X } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const PopupContactForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectDescription: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) =>
    setFormData(f => ({ ...f, [name]: value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const now = new Date();
      const ist = new Date(now.getTime() + 330 * 60 * 1000);
      const timestamp = ist.toISOString().replace("T", " ").split(".")[0];
      const clean = v => (typeof v === "string" ? v : v == null ? "" : v.toString());

      const payload = {
        name: clean(formData.name),
        email: clean(formData.email),
        phone: clean(formData.phone),
        projectDescription: clean(formData.projectDescription),
        timestamp
      };

      await axios.post(
        "https://hook.eu2.make.com/5xu4mcnfhtacg70kw33dw7dqy2r3q1al",
        payload
      );
      onClose();
      navigate('/thank-you')

    } catch (err) {
      console.error("Submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4">
      <div className="relative z-10 w-full max-w-lg px-6 py-8 backdrop-blur-2xl border border-white/20 rounded-2xl text-white bg-black/80">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl sm:text-3xl text-center font-bold mb-6">
          Let's Start Something Great
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "Name", name: "name", type: "text" },
              { label: "Email", name: "email", type: "email" }
            ].map(({ label, name, type }) => (
              <div key={name} className="flex flex-col">
                <label className="mb-1 text-sm uppercase">{label}</label>
                <input
                  name={name}
                  type={type}
                  value={formData[name]}
                  onChange={handleChange}
                  placeholder={label}
                  className="bg-transparent border-b border-white/30 focus:border-white outline-none py-2 placeholder:text-white/50"
                  required
                />
              </div>
            ))}
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-sm uppercase">Phone</label>
            <input
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              className="bg-transparent border-b border-white/30 focus:border-white outline-none py-2 placeholder:text-white/50"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-sm uppercase">Project Description</label>
            <textarea
              name="projectDescription"
              rows="4"
              value={formData.projectDescription}
              onChange={handleChange}
              placeholder="Tell us about your vision..."
              className="bg-transparent border-b border-white/30 focus:border-white outline-none py-2 placeholder:text-white/50 resize-none"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-6 w-full bg-white text-black font-semibold py-3 rounded-full hover:bg-opacity-90 transition disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : "Send Enquiry →"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupContactForm;
