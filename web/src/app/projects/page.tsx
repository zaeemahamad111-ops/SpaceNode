'use client';

import { useState, useMemo } from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import RevealWrapper from '@/components/ui/RevealWrapper';
import NodeMesh from '@/components/ui/NodeMesh';
import { projects, type ProjectCategory } from '@/lib/projects';

const categories: ProjectCategory[] = ['All Projects', 'Residential', 'Commercial', 'Hospitality', 'Landscape', 'Mixed Use'];

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  // Alternate layout: large first, grid rest
  const isLarge = index === 0 || index === 2;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
    >
      <Link href={`/projects/${project.slug}`} className="group block relative overflow-hidden">
        <div className={`relative overflow-hidden ${isLarge ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}>
          <Image
            src={project.image}
            alt={project.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A2333]/80 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[#0D7A9E]/0 group-hover:bg-[#0D7A9E]/10 transition-colors duration-500" />

          {/* Content overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#6EB8D0] mb-2 block">
              {project.category}
            </span>
            <h3 className="font-serif text-2xl md:text-3xl text-white mb-1">
              {project.name}
            </h3>
            <p className="font-sans text-[11px] tracking-[0.1em] text-white/50 uppercase">
              {project.location} · {project.year}
            </p>
          </div>

          {/* View button */}
          <div className="absolute top-4 right-4 bg-white/0 group-hover:bg-[#0D7A9E] border border-white/20 group-hover:border-[#0D7A9E] text-white px-4 py-2 font-sans text-[9px] tracking-[0.15em] uppercase translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-1.5">
            View <ArrowUpRight size={10} />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All Projects');

  const filtered = useMemo(() => {
    if (activeCategory === 'All Projects') return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 bg-[#F8F9FA] overflow-hidden" aria-label="Projects hero">
        <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-10">
          <NodeMesh variant="hero" animated={false} />
        </div>
        <div className="max-w-[1440px] mx-auto px-6 md:px-20 relative z-10">
          <RevealWrapper>
            <h1 className="font-serif text-5xl md:text-6xl text-[#161616] leading-[1.05] tracking-[-0.02em] mb-6 mt-6">
              Selected Works<span className="text-[#0D7A9E]">.</span>
            </h1>
          </RevealWrapper>
          <RevealWrapper delay={0.1}>
            <p className="font-sans font-light text-lg text-[#6B7280] leading-relaxed max-w-md">
              A curated collection of residential, commercial and hospitality projects defined by architectural permanence and spatial clarity.
            </p>
          </RevealWrapper>
        </div>
      </section>

      {/* Filter Bar Removed */}

      {/* Project Grid */}
      <section className="bg-[#F8F9FA] py-2" aria-label="Project gallery">
        <div className="max-w-[1440px] mx-auto px-6 md:px-20 py-12">
          <AnimatePresence mode="wait">
            {filtered.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-32"
              >
                <p className="font-serif text-2xl text-[#6B7280]">No projects in this category yet.</p>
              </motion.div>
            ) : (
              <motion.div key={activeCategory} className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {filtered.map((project, i) => (
                  <ProjectCard key={project.id} project={project} index={i} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-[#0A2333] relative overflow-hidden" aria-label="Projects CTA">
        <div className="absolute inset-0 opacity-20">
          <NodeMesh variant="section" animated={true} />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-20">
          <RevealWrapper>
            <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-4">
              Have a project<br />in <span className="italic text-[#6EB8D0]">mind?</span>
            </h2>
            <p className="font-sans font-light text-white/50 mb-10 max-w-sm">
              Let's create something extraordinary together. From private residences to global flagships.
            </p>
          </RevealWrapper>
          <RevealWrapper delay={0.1} className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact"
              className="group inline-flex items-center gap-3 bg-[#0D7A9E] text-white px-8 py-4 font-sans text-[11px] font-semibold tracking-[0.2em] uppercase hover:bg-[#178CB5] transition-all duration-300">
              Book Consultation <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="https://wa.me/914842345678" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/20 text-white px-8 py-4 font-sans text-[11px] font-semibold tracking-[0.2em] uppercase hover:border-[#0D7A9E] transition-all duration-300">
              WhatsApp Us
            </a>
          </RevealWrapper>
        </div>
      </section>
    </>
  );
}
