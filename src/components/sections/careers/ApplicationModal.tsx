'use client';

import { useState } from 'react';
import Modal from '@/components/ui/Modal';
import { ArrowRight, Paperclip, CheckCircle } from 'lucide-react';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobRole: string | null;
}

export default function ApplicationModal({ isOpen, onClose, jobRole }: ApplicationModalProps) {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    location: '',
    intent: '',
  });
  const [file, setFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call for now (until CMS/Backend is built)
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const handleClose = () => {
    // Reset form after closing if it was submitted
    setTimeout(() => {
      if (submitted) {
        setSubmitted(false);
        setFormState({ name: '', email: '', location: '', intent: '' });
        setFile(null);
      }
    }, 300);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      {submitted ? (
        <div className="flex flex-col items-center justify-center min-h-[350px] text-center">
          <div className="w-16 h-16 rounded-full bg-[#E5F5FA] flex items-center justify-center mb-6">
            <CheckCircle className="w-8 h-8 text-[#0D7A9E]" />
          </div>
          <h3 className="font-serif text-3xl text-[#161616] mb-3">Application Received</h3>
          <p className="font-sans font-light text-[#6B7280] max-w-sm mb-8 leading-relaxed">
            Thank you for applying for the <span className="font-semibold text-[#161616]">{jobRole}</span> position. We will review your portfolio and be in touch soon.
          </p>
          <button
            onClick={handleClose}
            className="group inline-flex items-center gap-3 bg-[#0A2333] text-white px-8 py-4 font-sans text-[11px] font-semibold tracking-[0.2em] uppercase hover:bg-[#0D7A9E] transition-all duration-300"
          >
            Close
          </button>
        </div>
      ) : (
        <div>
          <div className="mb-10">
            <span className="font-sans text-[10px] font-semibold tracking-[0.2em] uppercase text-[#0D7A9E] block mb-2">
              Apply For
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#161616] leading-tight">
              {jobRole || 'Join Space Node'}
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8" aria-label="Job application form">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Name */}
              <div className="group">
                <label htmlFor="app-name" className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#0D7A9E] block mb-2">
                  Full Name *
                </label>
                <input
                  id="app-name"
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
                <label htmlFor="app-email" className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#0D7A9E] block mb-2">
                  Email Address *
                </label>
                <input
                  id="app-email"
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

            {/* Location */}
            <div>
              <label htmlFor="app-location" className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#0D7A9E] block mb-2">
                Current Home Location
              </label>
              <input
                id="app-location"
                name="location"
                type="text"
                value={formState.location}
                onChange={handleChange}
                placeholder="Your city"
                className="w-full bg-transparent border-b border-[#D9D4CC] focus:border-[#0D7A9E] py-3 font-sans text-sm text-[#161616] placeholder-[#6B7280]/50 outline-none transition-colors duration-300"
              />
            </div>

            {/* CV Upload */}
            <div>
              <label className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#0D7A9E] block mb-2">
                Upload CV / Portfolio *
              </label>
              <div className="mt-2 relative">
                <input
                  type="file"
                  id="app-file"
                  required
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                />
                <label
                  htmlFor="app-file"
                  className="w-full flex items-center justify-between bg-transparent border border-[#D9D4CC] hover:border-[#0D7A9E] border-dashed px-4 py-4 cursor-pointer transition-colors duration-300 group"
                >
                  <span className={`font-sans text-sm truncate pr-4 ${file ? 'text-[#161616]' : 'text-[#6B7280]/50'}`}>
                    {file ? file.name : 'Select file (PDF, Max 5MB)'}
                  </span>
                  <Paperclip size={16} className={`${file ? 'text-[#0D7A9E]' : 'text-[#6B7280] group-hover:text-[#0D7A9E]'} transition-colors flex-shrink-0`} />
                </label>
              </div>
            </div>

            {/* Statement of Intent */}
            <div>
              <label htmlFor="app-intent" className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#0D7A9E] block mb-2">
                Statement of Intent
              </label>
              <textarea
                id="app-intent"
                name="intent"
                rows={4}
                value={formState.intent}
                onChange={handleChange}
                placeholder="Briefly describe your design philosophy..."
                className="w-full bg-transparent border-b border-[#D9D4CC] focus:border-[#0D7A9E] py-3 font-sans text-sm text-[#161616] placeholder-[#6B7280]/50 outline-none transition-colors duration-300 resize-none"
              />
            </div>

            {/* Submit */}
            <div className="flex items-center justify-between pt-6">
              <p className="font-sans text-[10px] tracking-[0.1em] text-[#6B7280]">
                * Required fields
              </p>
              <button
                type="submit"
                disabled={loading}
                className="group relative inline-flex items-center justify-center gap-3 bg-[#0A2333] text-white px-10 py-5 font-sans text-[11px] font-semibold tracking-[0.2em] uppercase hover:bg-[#0D7A9E] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden"
              >
                <span className={`flex items-center gap-3 transition-opacity duration-300 ${loading ? 'opacity-0' : 'opacity-100'}`}>
                  Submit Application
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
                {loading && (
                  <span className="absolute inset-0 flex items-center justify-center">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  </span>
                )}
              </button>
            </div>
          </form>
        </div>
      )}
    </Modal>
  );
}
