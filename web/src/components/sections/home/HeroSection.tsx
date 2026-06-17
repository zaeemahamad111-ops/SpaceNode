'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import InteractiveNodeMesh from '@/components/ui/InteractiveNodeMesh';

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen min-h-[700px] w-full flex items-center overflow-hidden" aria-label="Hero">
      {/* Background image with parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <Image
          src="/images/hero.png"
          alt="Space Node Architects — premium contemporary architecture with infinity pool at twilight"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A2333]/80 via-[#0A2333]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A2333]/60 via-transparent to-transparent" />
      </motion.div>

      {/* Interactive Node mesh — full overlay */}
      <div className="absolute inset-0 z-10">
        <InteractiveNodeMesh />
      </div>

      {/* Hero Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 w-full max-w-[1440px] mx-auto px-6 md:px-20 pt-20"
      >


        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-[-0.02em] text-white mb-6 max-w-3xl"
        >
          Structured <span className="text-[#0D7A9E]">/</span> Styled <span className="text-[#0D7A9E]">/</span> Sustained<span className="text-[#0D7A9E]">.</span>
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-sans font-light text-lg text-white/70 mb-10 max-w-md leading-relaxed"
        >
          A multidisciplinary practice delivering innovative architecture across India, UAE, USA & Australia.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 bg-[#0D7A9E] text-white px-8 py-4 font-sans text-[11px] font-semibold tracking-[0.2em] uppercase hover:bg-[#178CB5] transition-all duration-300"
          >
            Book Consultation
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>


      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/50"
      >
        <span className="font-sans text-[9px] tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
