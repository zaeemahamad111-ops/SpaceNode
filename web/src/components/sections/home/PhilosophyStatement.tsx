'use client';

import RevealWrapper from '@/components/ui/RevealWrapper';
import InteractiveNodeMesh from '@/components/ui/InteractiveNodeMesh';

export default function PhilosophyStatement() {
  return (
    <section
      className="relative py-32 md:py-40 bg-gradient-to-br from-[#161616] via-black to-[#050505] overflow-hidden"
      aria-labelledby="philosophy-heading"
    >
      {/* Interactive node mesh background */}
      <InteractiveNodeMesh />

      {/* Blue glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#0D7A9E]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-20 text-center">
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

        <RevealWrapper delay={0.2}>
          <blockquote>
            <h2
              id="philosophy-heading"
              className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] tracking-[-0.01em] max-w-4xl mx-auto mb-8"
            >
              Architecture is not merely the creation of{' '}
              <span className="italic text-[#6EB8D0]">buildings</span>
              {' '}—
            </h2>
            <p className="font-serif text-3xl md:text-4xl lg:text-5xl text-white/60 leading-[1.2] max-w-3xl mx-auto">
              it is the orchestration of{' '}
              <span className="text-[#0D7A9E]">spaces</span>,{' '}
              <span className="text-[#0D7A9E]">functions</span>, and{' '}
              <span className="text-[#0D7A9E]">human experiences</span>.
            </p>
          </blockquote>
        </RevealWrapper>

        {/* Divider */}
        <RevealWrapper delay={0.4} className="mt-16 flex items-center justify-center gap-4">
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
