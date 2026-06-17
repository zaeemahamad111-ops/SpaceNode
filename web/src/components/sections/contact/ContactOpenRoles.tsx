'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import RevealWrapper from '@/components/ui/RevealWrapper';
import ApplicationModal from '@/components/sections/careers/ApplicationModal';

const openRoles = [
  {
    id: 'architect',
    dept: 'Architecture',
    title: 'Architect',
    location: 'Cochin, Kerala',
    type: 'Full Time',
    desc: 'Lead ultra-high-net-worth residential projects from concept through completion in our Cochin studio. Minimum 8 years experience in premium residential architecture.',
  },
  {
    id: 'draftsman',
    dept: 'Architecture',
    title: 'Draftsman',
    location: 'Cochin / Dubai',
    type: 'Full Time',
    desc: 'Specialise in material curation and bespoke furniture integration for international hospitality and residential clients. Portfolio demonstrating luxury interiors required.',
  },
];

export default function ContactOpenRoles() {
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
