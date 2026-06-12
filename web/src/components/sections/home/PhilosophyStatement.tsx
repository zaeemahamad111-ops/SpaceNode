'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RevealWrapper from '@/components/ui/RevealWrapper';
import InteractiveNodeMesh from '@/components/ui/InteractiveNodeMesh';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const philosophies = [
  {
    part1: "Architecture is not merely the creation of ",
    italic: "buildings",
    part2: " —",
    sub: "it is the orchestration of spaces, functions, and human experiences."
  },
  {
    part1: "We believe that true design emerges from a ",
    italic: "profound understanding",
    part2: " —",
    sub: "of the context, the environment, and the people who inhabit it."
  },
  {
    part1: "Sustainability is not an ",
    italic: "afterthought",
    part2: " —",
    sub: "it is the foundational principle that guides our every decision."
  },
  {
    part1: "Form follows function, but ",
    italic: "beauty elevates it",
    part2: " —",
    sub: "we strive for an aesthetic that achieves timeless elegance."
  },
  {
    part1: "Innovation requires a deep respect for ",
    italic: "tradition",
    part2: " —",
    sub: "seamlessly integrated with cutting-edge technology."
  },
  {
    part1: "A successful project is a ",
    italic: "collaborative journey",
    part2: " —",
    sub: "where the client's vision and the architect's expertise converge."
  }
];

export default function PhilosophyStatement() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % philosophies.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % philosophies.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? philosophies.length - 1 : prev - 1));
  };

  return (
    <section
      className="relative py-32 md:py-40 bg-gradient-to-br from-[#161616] via-black to-[#050505] overflow-hidden"
      aria-labelledby="philosophy-heading"
    >
      {/* Interactive node mesh background */}
      <InteractiveNodeMesh />

      {/* Blue glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#0D7A9E]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-20 text-center flex flex-col items-center">
        {/* Quote mark via SVG node */}
        <RevealWrapper className="mb-10 flex justify-center">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="30" cy="10" r="4" fill="#0D7A9E" opacity="0.8"/>
            <circle cx="10" cy="45" r="3" fill="#0D7A9E" opacity="0.6"/>
            <circle cx="50" cy="45" r="3" fill="#0D7A9E" opacity="0.6"/>
            <circle cx="30" cy="30" r="3" fill="#178CB5" opacity="0.9"/>
            <line x1="30" y1="10" x2="30" y2="30" stroke="#0D7A9E" strokeWidth="1" opacity="0.5"/>
            <line x1="30" y1="30" x2="10" y2="45" stroke="#0D7A9E" strokeWidth="1" opacity="0.5"/>
            <line x1="30" y1="30" x2="50" y2="45" stroke="#0D7A9E" strokeWidth="1" opacity="0.5"/>
            <line x1="10" y1="45" x2="50" y2="45" stroke="#6EB8D0" strokeWidth="0.5" opacity="0.3"/>
          </svg>
        </RevealWrapper>

        <RevealWrapper delay={0.1}>
          <span className="font-sans text-[11px] font-semibold tracking-[0.25em] uppercase text-[#0D7A9E] block mb-8">
            Our Philosophy
          </span>
        </RevealWrapper>

        {/* Carousel Container */}
        <div className="relative w-full max-w-4xl mx-auto min-h-[200px] md:min-h-[160px] flex items-center justify-center">
          
          {/* Navigation Arrows */}
          <button 
            onClick={goToPrev}
            className="absolute left-0 md:-left-8 top-1/2 -translate-y-1/2 p-2 text-white/40 hover:text-[#0D7A9E] transition-colors duration-300 z-20"
            aria-label="Previous philosophy"
          >
            <ChevronLeft size={32} strokeWidth={1.5} />
          </button>

          <AnimatePresence mode="wait">
            <motion.blockquote
              key={currentIndex}
              initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -20, filter: 'blur(4px)' }}
              transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="absolute inset-0 flex flex-col items-center justify-center w-full px-10 md:px-0"
            >
              <h2
                id="philosophy-heading"
                className="font-serif text-2xl md:text-4xl lg:text-5xl text-white leading-[1.2] tracking-[-0.01em] mb-4"
              >
                {philosophies[currentIndex].part1}
                <span className="italic text-[#6EB8D0]">{philosophies[currentIndex].italic}</span>
                {philosophies[currentIndex].part2}
              </h2>
              <p className="font-serif text-lg md:text-xl lg:text-2xl text-white/60 leading-[1.3] max-w-2xl text-center">
                {philosophies[currentIndex].sub.split(/(spaces|functions|human experiences|environment|context|people|timeless elegance|cutting-edge technology|tradition|vision|expertise)/i).map((word, i) => {
                  const highlights = ['spaces', 'functions', 'human experiences', 'environment', 'context', 'people', 'timeless elegance', 'cutting-edge technology', 'tradition', 'vision', 'expertise'];
                  if (highlights.includes(word.toLowerCase())) {
                    return <span key={i} className="text-[#0D7A9E]">{word}</span>;
                  }
                  return word;
                })}
              </p>
            </motion.blockquote>
          </AnimatePresence>

          <button 
            onClick={goToNext}
            className="absolute right-0 md:-right-8 top-1/2 -translate-y-1/2 p-2 text-white/40 hover:text-[#0D7A9E] transition-colors duration-300 z-20"
            aria-label="Next philosophy"
          >
            <ChevronRight size={32} strokeWidth={1.5} />
          </button>
        </div>

        {/* Carousel Pagination Dots */}
        <RevealWrapper delay={0.3} className="mt-16 flex gap-3">
          {philosophies.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`transition-all duration-500 rounded-full ${
                currentIndex === idx 
                  ? 'w-8 h-1.5 bg-[#0D7A9E]' 
                  : 'w-1.5 h-1.5 bg-white/20 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </RevealWrapper>

        {/* Divider */}
        <RevealWrapper delay={0.4} className="mt-12 flex items-center justify-center gap-4">
          <span className="w-16 h-px bg-[#0D7A9E]/50" />
          <span className="w-2 h-2 rounded-full bg-[#0D7A9E]" />
          <span className="w-16 h-px bg-[#0D7A9E]/50" />
        </RevealWrapper>

        <RevealWrapper delay={0.5}>
          <p className="font-sans font-light text-white/40 mt-6 tracking-[0.15em] text-sm uppercase">
            Space Node Architects · Est. 2008 · Cochin, Kerala
          </p>
        </RevealWrapper>
      </div>
    </section>
  );
}
