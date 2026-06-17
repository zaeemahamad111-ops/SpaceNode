'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import RevealWrapper from '@/components/ui/RevealWrapper';

const testimonials = [
  {
    quote: "Space Node transformed our vision into a timeless space that feels both deeply rooted and beautifully contemporary.",
    name: "Anand Menon",
    designation: "Client",
    company: "The Kerala Residence",
    image: "/images/expertise-architecture.png",
    clientImage: ""
  },
  {
    quote: "Their meticulous attention to detail and profound understanding of light created a workspace that our team genuinely loves.",
    name: "Sarah Jenkins",
    designation: "CEO",
    company: "TechNova Solutions",
    image: "/images/expertise-interior.png",
    clientImage: ""
  },
  {
    quote: "From concept to execution, the process was seamless. They masterfully blended nature with architecture to give us an unforgettable retreat.",
    name: "Arun Patel",
    designation: "Managing Director",
    company: "Luxe Hospitality Group",
    image: "/images/expertise-landscape.png",
    clientImage: ""
  }
];

export default function AboutTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 md:py-32 bg-[#F8F9FA] overflow-hidden" aria-label="Client Testimonials">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        
        <RevealWrapper className="mb-12">
          <span className="font-sans text-[11px] font-semibold tracking-[0.25em] uppercase text-[#0D7A9E] block mb-4">
            Client Voices
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#161616] leading-tight">
            Perspectives from<br /><span className="italic text-[#0D7A9E]">our clients</span>
          </h2>
        </RevealWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          
          {/* Architectural Image Side */}
          <div className="lg:col-span-5 relative h-[400px] md:h-[500px] w-full overflow-hidden bg-[#E5E7EB]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="absolute inset-0"
              >
                <Image
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].company}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </motion.div>
            </AnimatePresence>
            
            {/* Architectural overlay lines */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-8 left-8 w-8 h-px bg-white/60" />
              <div className="absolute top-8 left-8 w-px h-8 bg-white/60" />
              <div className="absolute bottom-8 right-8 w-8 h-px bg-white/60" />
              <div className="absolute bottom-8 right-8 w-px h-8 bg-white/60" />
            </div>
          </div>

          {/* Testimonial Content Side */}
          <div className="lg:col-span-7 flex flex-col justify-between py-6">
            
            <div className="relative min-h-[300px] md:min-h-[250px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <svg className="w-8 h-8 mb-6" viewBox="0 0 40 40" fill="none">
                    <circle cx="10" cy="10" r="3" fill="#0D7A9E" opacity="0.8"/>
                    <circle cx="30" cy="30" r="2.5" fill="#0D7A9E" opacity="0.6"/>
                    <line x1="10" y1="10" x2="30" y2="30" stroke="#0D7A9E" strokeWidth="1" opacity="0.5"/>
                  </svg>
                  
                  <blockquote className="font-serif text-3xl md:text-4xl text-[#161616] leading-[1.3] mb-10">
                    &ldquo;{testimonials[currentIndex].quote}&rdquo;
                  </blockquote>
                  
                  <div className="flex items-center gap-5">
                    {/* Circular Avatar Cutout */}
                    <div className="w-14 h-14 rounded-full overflow-hidden bg-[#E5E7EB] border border-[#D1D5DB] flex items-center justify-center relative shrink-0">
                      {testimonials[currentIndex].clientImage && testimonials[currentIndex].clientImage.trim().length > 0 ? (
                        <Image
                          src={testimonials[currentIndex].clientImage}
                          alt={testimonials[currentIndex].name}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <svg className="w-6 h-6 text-[#9CA3AF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                      )}
                    </div>
                    <div>
                      <div className="font-sans font-semibold text-sm text-[#161616] mb-0.5 tracking-wide">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="font-sans text-[10px] tracking-[0.15em] uppercase text-[#0D7A9E]">
                        {testimonials[currentIndex].designation}, {testimonials[currentIndex].company}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Progress indicators */}
            <div className="flex items-center gap-3 mt-12 md:mt-0">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-1 transition-all duration-300 ${
                    currentIndex === i ? 'w-12 bg-[#0D7A9E]' : 'w-4 bg-[#D1D5DB] hover:bg-[#9CA3AF]'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
