'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import RevealWrapper from '@/components/ui/RevealWrapper';

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: '', email: '', phone: '', projectType: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <RevealWrapper delay={0.1}>
      {submitted ? (
        <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center">
          <div className="w-16 h-16 rounded-full border-2 border-[#0D7A9E] flex items-center justify-center mb-6">
            <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#0D7A9E]" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3 className="font-serif text-3xl text-[#161616] mb-3">Message Sent</h3>
          <p className="font-sans font-light text-[#6B7280] max-w-xs">
            Thank you for reaching out. We'll get back to you within 24 hours.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8" id="contact-form" aria-label="Contact form">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group">
              <label htmlFor="contact-name" className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#0D7A9E] block mb-2">
                Full Name *
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                value={formState.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full bg-transparent border-b border-[#D9D4CC] focus:border-[#0D7A9E] py-3 font-sans text-sm text-[#161616] placeholder-[#6B7280]/50 outline-none transition-colors duration-300"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#0D7A9E] block mb-2">
                Email Address *
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                value={formState.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full bg-transparent border-b border-[#D9D4CC] focus:border-[#0D7A9E] py-3 font-sans text-sm text-[#161616] placeholder-[#6B7280]/50 outline-none transition-colors duration-300"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label htmlFor="contact-phone" className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#0D7A9E] block mb-2">
                Phone Number
              </label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                value={formState.phone}
                onChange={handleChange}
                placeholder="+91 000 000 0000"
                className="w-full bg-transparent border-b border-[#D9D4CC] focus:border-[#0D7A9E] py-3 font-sans text-sm text-[#161616] placeholder-[#6B7280]/50 outline-none transition-colors duration-300"
              />
            </div>
            <div>
              <label htmlFor="contact-project-type" className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#0D7A9E] block mb-2">
                Project Type
              </label>
              <select
                id="contact-project-type"
                name="projectType"
                value={formState.projectType}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-[#D9D4CC] focus:border-[#0D7A9E] py-3 font-sans text-sm text-[#161616] outline-none transition-colors duration-300 appearance-none cursor-pointer"
              >
                <option value="" className="text-[#6B7280]">Select project type</option>
                <option>Residential Architecture</option>
                <option>Commercial Architecture</option>
                <option>Hospitality</option>
                <option>Interior Design</option>
                <option>Landscape Design</option>
                <option>Project Consultancy</option>
                <option>Mixed Use</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="contact-message" className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#0D7A9E] block mb-2">
              Project Description *
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={5}
              value={formState.message}
              onChange={handleChange}
              placeholder="Tell us about your vision..."
              className="w-full bg-transparent border-b border-[#D9D4CC] focus:border-[#0D7A9E] py-3 font-sans text-sm text-[#161616] placeholder-[#6B7280]/50 outline-none transition-colors duration-300 resize-none"
            />
          </div>

          <div className="flex items-center justify-between pt-4">
            <p className="font-sans text-[10px] tracking-[0.1em] text-[#6B7280]">
              * Required fields
            </p>
            <button
              type="submit"
              id="contact-submit-btn"
              className="group inline-flex items-center gap-3 bg-[#0A2333] text-white px-10 py-5 font-sans text-[11px] font-semibold tracking-[0.2em] uppercase hover:bg-[#0D7A9E] transition-all duration-300"
            >
              Send Inquiry
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </form>
      )}
    </RevealWrapper>
  );
}
