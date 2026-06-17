'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import RevealWrapper from '@/components/ui/RevealWrapper';
import NodeMesh from '@/components/ui/NodeMesh';
import ApplicationModal from '@/components/sections/careers/ApplicationModal';

const openRoles = [
  {
    id: 'senior-architect',
    dept: 'Architecture',
    title: 'Senior Architect',
    location: 'Cochin, Kerala',
    type: 'Full Time',
    desc: 'Lead ultra-high-net-worth residential projects from concept through completion in our Cochin studio. Minimum 8 years experience in premium residential architecture.',
  },
  {
    id: 'interior-designer',
    dept: 'Interiors',
    title: 'Interior Designer',
    location: 'Cochin / Dubai',
    type: 'Full Time',
    desc: 'Specialise in material curation and bespoke furniture integration for international hospitality and residential clients. Portfolio demonstrating luxury interiors required.',
  },
  {
    id: 'project-manager',
    dept: 'Project Management',
    title: 'Project Manager',
    location: 'Cochin, Kerala',
    type: 'Full Time',
    desc: 'Oversee project delivery across residential and commercial projects. 5+ years of construction project management experience in architectural practice.',
  },
  {
    id: 'landscape-architect',
    dept: 'Landscape',
    title: 'Landscape Architect',
    location: 'Cochin, Kerala',
    type: 'Full Time',
    desc: 'Design ecological and site-responsive landscapes for premium residential and hospitality clients across South India. Deep knowledge of tropical planting required.',
  },
];

export default function CareersPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const handleApplyClick = (e: React.MouseEvent<HTMLAnchorElement>, roleTitle: string) => {
    e.preventDefault();
    setSelectedRole(roleTitle);
    setModalOpen(true);
  };

  return (
    <>
      <ApplicationModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        jobRole={selectedRole} 
      />

      {/* Hero */}
      <section className="relative pt-36 pb-20 bg-[#F8F9FA] overflow-hidden" aria-label="Careers hero">
        <div className="max-w-[1440px] mx-auto px-6 md:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <RevealWrapper>
              <h1 className="font-serif text-5xl md:text-7xl text-[#161616] leading-[1.05] tracking-[-0.02em] mb-8">
                Join The Team<br />
                Behind Timeless<br />
                <span className="italic text-[#0D7A9E]">Design.</span>
              </h1>
              <p className="font-sans font-light text-base text-[#6B7280] leading-relaxed max-w-sm mb-8">
                We are architects of atmosphere and sculptors of space. Our studio seeks curious minds who believe that detail is not just a part of the design, but the essence of it.
              </p>
            </RevealWrapper>

            <RevealWrapper delay={0.15} direction="right">
              <div className="bg-white border border-[#E5E7EB] p-8">
                <span className="font-sans text-[10px] font-semibold tracking-[0.2em] uppercase text-[#0D7A9E] block mb-4">
                  Current Opportunities
                </span>
                <p className="font-sans font-light text-sm text-[#6B7280] leading-relaxed mb-6">
                  We are currently looking for visionary talent across our Cochin and Dubai studios.
                </p>
                <div className="space-y-2">
                  {openRoles.map((role) => (
                    <a key={role.id} href={`#${role.id}`}
                      className="flex items-center justify-between py-3 border-b border-[#F8F9FA] group">
                      <span className="font-sans text-sm text-[#161616] group-hover:text-[#0D7A9E] transition-colors duration-300">{role.title}</span>
                      <ArrowRight size={13} className="text-[#0D7A9E] group-hover:translate-x-1 transition-transform" />
                    </a>
                  ))}
                </div>
              </div>
            </RevealWrapper>
          </div>
        </div>
      </section>

      {/* Studio images */}
      <section className="bg-[#F8F9FA] pb-0" aria-label="Studio culture">
        <div className="max-w-[1440px] mx-auto px-6 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <RevealWrapper className="relative h-[400px] overflow-hidden">
              <Image
                src="/images/expertise-consultancy.png"
                alt="Space Node design studio — architectural drawings and models"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </RevealWrapper>
            <RevealWrapper delay={0.1} className="grid grid-rows-2 gap-4">
              <div className="relative overflow-hidden">
                <Image
                  src="/images/expertise-architecture.png"
                  alt="Space Node architecture project"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              {/* Culture card */}
              <div className="relative bg-[#0A2333] p-8 flex flex-col justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                  <NodeMesh variant="section" animated={true} />
                </div>
                <div className="relative z-10">
                  <div className="w-8 h-8 rounded-full border border-[#0D7A9E] flex items-center justify-center mb-4">
                    <div className="w-2 h-2 rounded-full bg-[#0D7A9E] node-pulse" />
                  </div>
                  <h3 className="font-serif text-2xl text-white mb-3">Atmospheric<br />Luxury</h3>
                  <p className="font-sans font-light text-sm text-white/50 leading-relaxed">
                    Our culture is built on the pursuit of silence — designing environments that whisper rather than shout.
                  </p>
                </div>
              </div>
            </RevealWrapper>
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-32 md:py-40 bg-white" aria-labelledby="open-roles-heading">
        <div className="max-w-[1440px] mx-auto px-6 md:px-20">
          <RevealWrapper className="flex items-end justify-between mb-16">
            <div>
              <h2 id="open-roles-heading" className="font-serif text-4xl md:text-5xl text-[#161616]">
                Open <span className="italic">Roles</span>
              </h2>
            </div>
            <p className="hidden md:block font-sans text-[11px] text-[#6B7280] tracking-[0.1em]">
              Select a role to view details and requirements.
            </p>
          </RevealWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {openRoles.map((role, i) => (
              <RevealWrapper key={role.id} delay={i * 0.1}>
                <div id={role.id} className="group border-t-2 border-[#0D7A9E] pt-6">
                  <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#0D7A9E] block mb-2">
                    {role.dept}
                  </span>
                  <h3 className="font-serif text-2xl text-[#161616] mb-3 group-hover:text-[#0D7A9E] transition-colors duration-300">
                    {role.title}
                  </h3>
                  <p className="font-sans text-[10px] tracking-[0.1em] uppercase text-[#6B7280] mb-4">
                    {role.location} · {role.type}
                  </p>
                  <p className="font-sans font-light text-sm text-[#6B7280] leading-relaxed mb-6">
                    {role.desc}
                  </p>
                  <a href="#apply"
                    onClick={(e) => handleApplyClick(e, role.title)}
                    className="group/btn inline-flex items-center gap-1.5 font-sans text-[11px] font-semibold tracking-[0.15em] uppercase text-[#0D7A9E] hover:text-[#0A2333] transition-colors duration-300 cursor-pointer">
                    Apply Now <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
