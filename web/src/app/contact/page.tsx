'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import { ArrowRight, MapPin, Phone, Mail, Camera, Users, Briefcase } from 'lucide-react';
import RevealWrapper from '@/components/ui/RevealWrapper';
import NodeMesh from '@/components/ui/NodeMesh';

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '', email: '', phone: '', projectType: '', budget: '', message: '',
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
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 bg-[#F8F9FA] overflow-hidden" aria-label="Contact hero">
        <div className="absolute right-0 inset-y-0 w-1/2 opacity-10 pointer-events-none">
          <NodeMesh variant="hero" animated={false} />
        </div>
        <div className="max-w-[1440px] mx-auto px-6 md:px-20 relative z-10">
          <RevealWrapper>
            <span className="font-sans text-[11px] font-semibold tracking-[0.25em] uppercase text-[#0D7A9E] block mb-6">
              Start a Journey
            </span>
            <h1 className="font-serif text-5xl md:text-7xl text-[#161616] leading-[1.05] tracking-[-0.02em] max-w-3xl">
              Let's Build Something<br />
              <span className="italic text-[#0D7A9E]">Extraordinary</span>.
            </h1>
          </RevealWrapper>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 md:py-28 bg-[#F8F9FA]" aria-label="Contact form and info">
        <div className="max-w-[1440px] mx-auto px-6 md:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Office Info */}
            <div className="lg:col-span-4">
              <RevealWrapper>
                <div className="mb-12">
                  <h2 className="font-sans text-[10px] font-semibold tracking-[0.2em] uppercase text-[#0D7A9E] mb-6">
                    Studio
                  </h2>
                  <address className="not-italic font-serif text-2xl text-[#161616] leading-relaxed mb-6">
                    First Floor, Velleparambil building,<br />
                    Kaloor, Cochin-17,<br />
                    Kerala<br />
                  </address>
                </div>

                <div className="mb-10 pb-10 border-b border-[#E5E7EB]">
                  <h3 className="font-sans text-[10px] font-semibold tracking-[0.2em] uppercase text-[#0D7A9E] mb-5">
                    Inquiries
                  </h3>
                  <div className="space-y-3">
                    <a href="mailto:enquiries@spacenodearchitects.in"
                      className="flex items-center gap-2.5 font-sans text-sm text-[#161616] hover:text-[#0D7A9E] transition-colors duration-300 group">
                      <Mail size={14} className="text-[#0D7A9E]" />
                      enquiries@spacenodearchitects.in
                    </a>
                    <a href="tel:04843175594"
                      className="flex items-center gap-2.5 font-sans text-sm text-[#161616] hover:text-[#0D7A9E] transition-colors duration-300">
                      <Phone size={14} className="text-[#0D7A9E]" />
                      0484 3175594
                    </a>
                    <a href="https://wa.me/914842345678" target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-sans text-[11px] font-semibold tracking-[0.15em] uppercase text-[#0D7A9E] mt-2 hover:text-[#0A2333] transition-colors duration-300">
                      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      WhatsApp Messaging
                    </a>
                  </div>
                </div>

                  {/* Social section removed */}
              </RevealWrapper>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-8">
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
                      {/* Name */}
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
                      {/* Email */}
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
                      {/* Phone */}
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
                      {/* Project Type */}
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

                    {/* Budget field removed */}

                    {/* Message */}
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

                    {/* Submit */}
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
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-[450px] relative overflow-hidden" aria-label="Office location map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125521.44428490645!2d76.18900775!3d9.9312328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d514abec6bf%3A0xbd582caa5f6a3b36!2sKochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1705000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'grayscale(30%) contrast(1.1)' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Space Node Architects — Cochin, Kerala office location"
        />
        <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm p-4 border-l-2 border-[#0D7A9E] shadow-lg">
          <div className="font-sans text-[10px] tracking-[0.15em] uppercase text-[#0D7A9E] mb-1">Visit the Studio</div>
          <div className="font-sans text-sm text-[#161616]">By appointment only</div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-28 bg-[#F8F9FA] text-center" aria-label="Book consultation CTA">
        <RevealWrapper>
          <p className="font-serif text-3xl md:text-5xl text-[#161616] leading-tight mb-10 max-w-3xl mx-auto px-6">
            Ready to translate your vision<br />
            into architectural <span className="italic text-[#0D7A9E]">permanence</span>?
          </p>
          <a href="#contact-form"
            className="inline-flex items-center gap-3 border border-[#0A2333] text-[#0A2333] px-10 py-5 font-sans text-[11px] font-semibold tracking-[0.2em] uppercase hover:bg-[#0A2333] hover:text-white transition-all duration-300">
            GET US NOW <ArrowRight size={14} />
          </a>
        </RevealWrapper>
      </section>

      {/* Portfolio Submission / Job Vacancies */}
      <section id="careers-apply" className="py-24 md:py-32 bg-white" aria-labelledby="portfolio-heading">
        <div className="max-w-[1440px] mx-auto px-6 md:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left */}
            <div className="lg:col-span-4">
              <RevealWrapper>
                <div className="mb-8 font-sans text-[11px] font-semibold tracking-[0.15em] uppercase text-[#0D7A9E] leading-loose">
                  <p>JOB VACANCY STATUS</p>
                  <p>LOOKING FOR AN ARCHITECT</p>
                  <p>NO VACANCIES ...ETC</p>
                </div>
                <h2 id="portfolio-heading" className="font-serif text-4xl md:text-5xl text-[#161616] mb-8">
                  Submit Your<br /><span className="italic text-[#0D7A9E]">Portfolio</span>
                </h2>
                <div>
                  <p className="font-sans text-[10px] tracking-[0.15em] uppercase text-[#0D7A9E] mb-2">Inquiries</p>
                  <a href="mailto:careers@spacenodearchitects.in"
                    className="font-sans text-sm text-[#161616] hover:text-[#0D7A9E] transition-colors duration-300">
                    careers@spacenodearchitects.in
                  </a>
                </div>
              </RevealWrapper>
            </div>

            {/* Form */}
            <div className="lg:col-span-8">
              <RevealWrapper delay={0.1}>
                <form className="space-y-8" id="portfolio-form" aria-label="Portfolio submission form">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="careers-name" className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#0D7A9E] block mb-2">Full Name *</label>
                      <input id="careers-name" name="name" type="text" required placeholder="Your name"
                        className="w-full bg-transparent border-b border-[#D9D4CC] focus:border-[#0D7A9E] py-3 font-sans text-sm text-[#161616] placeholder-[#6B7280]/50 outline-none transition-colors duration-300"/>
                    </div>
                    <div>
                      <label htmlFor="careers-email" className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#0D7A9E] block mb-2">Email Address *</label>
                      <input id="careers-email" name="email" type="email" required placeholder="your@email.com"
                        className="w-full bg-transparent border-b border-[#D9D4CC] focus:border-[#0D7A9E] py-3 font-sans text-sm text-[#161616] placeholder-[#6B7280]/50 outline-none transition-colors duration-300"/>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="careers-location" className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#0D7A9E] block mb-2">Current Home Location</label>
                      <input id="careers-location" name="location" type="text" placeholder="Your city"
                        className="w-full bg-transparent border-b border-[#D9D4CC] focus:border-[#0D7A9E] py-3 font-sans text-sm text-[#161616] placeholder-[#6B7280]/50 outline-none transition-colors duration-300"/>
                    </div>
                    <div>
                      <label htmlFor="careers-portfolio" className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#0D7A9E] block mb-2">Portfolio Link (URL)</label>
                      <input id="careers-portfolio" name="portfolio" type="url" placeholder="https://"
                        className="w-full bg-transparent border-b border-[#D9D4CC] focus:border-[#0D7A9E] py-3 font-sans text-sm text-[#161616] placeholder-[#6B7280]/50 outline-none transition-colors duration-300"/>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="careers-statement" className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#0D7A9E] block mb-2">Statement of Intent</label>
                    <textarea id="careers-statement" name="statement" rows={4}
                      placeholder="Briefly describe your design philosophy..."
                      className="w-full bg-transparent border-b border-[#D9D4CC] focus:border-[#0D7A9E] py-3 font-sans text-sm text-[#161616] placeholder-[#6B7280]/50 outline-none transition-colors duration-300 resize-none"/>
                  </div>
                  <div className="flex justify-end pt-4">
                    <button type="button" id="careers-submit-btn"
                      className="group inline-flex items-center gap-3 bg-[#0A2333] text-white px-10 py-5 font-sans text-[11px] font-semibold tracking-[0.2em] uppercase hover:bg-[#0D7A9E] transition-all duration-300">
                      Submit Application
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </form>
              </RevealWrapper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
