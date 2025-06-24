import React, { useState } from 'react';
import AnimatedBackground from './AnimatedBackground';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectDescription: ''
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
      const timestamp = ist.toISOString().replace('T', ' ').split('.')[0];
      const clean = v => (typeof v === 'string' ? v : v == null ? '' : v.toString());

      const payload = {
        name: clean(formData.name),
        email: clean(formData.email),
        phone: clean(formData.phone),
        projectDescription: clean(formData.projectDescription),
        timestamp
      };

      await axios.post(
        'https://hook.eu2.make.com/5xu4mcnfhtacg70kw33dw7dqy2r3q1al',
        payload
      );
      // you can clear or show a thank-you here
      navigate('/thank-you')
      setFormData({ name: '', email: '', phone: '', projectDescription: '' });

    } catch (err) {
      console.error('Submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative flex items-center justify-center overflow-hidden text-white">
      <div className="relative z-10 w-full max-w-2xl px-10 py-12 backdrop-blur-2xl border border-white/20 rounded-3xl">
        <h2 className="text-3xl text-center font-bold mb-8 tracking-tight leading-tight">
          Let's Start Something Great
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { label: 'Name', name: 'name', type: 'text' },
              { label: 'Email', name: 'email', type: 'email' }
            ].map(({ label, name, type }) => (
              <div key={name} className="flex flex-col">
                <label className="mb-2 text-sm uppercase tracking-widest">
                  {label}
                </label>
                <input
                  name={name}
                  type={type}
                  value={formData[name]}
                  onChange={handleChange}
                  placeholder={label}
                  required
                  className="bg-transparent border-b border-white/30 focus:border-white outline-none py-2 placeholder:text-white/50"
                />
              </div>
            ))}
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-sm uppercase tracking-widest">Phone</label>
            <input
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              required
              className="bg-transparent border-b border-white/30 focus:border-white outline-none py-2 placeholder:text-white/50"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-sm uppercase tracking-widest">Note</label>
            <textarea
              name="projectDescription"
              rows="4"
              value={formData.projectDescription}
              onChange={handleChange}
              placeholder="Tell us about your vision..."
              required
              className="bg-transparent border-b border-white/30 focus:border-white outline-none py-2 placeholder:text-white/50 resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-8 w-full bg-white text-black font-semibold tracking-wide py-3 rounded-full hover:bg-opacity-90 transition duration-300 disabled:opacity-50"
          >
            {isSubmitting ? 'Sending...' : 'Send Enquiry →'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
