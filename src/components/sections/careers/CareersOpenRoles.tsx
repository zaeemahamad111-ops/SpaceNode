'use client';

import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import RevealWrapper from '@/components/ui/RevealWrapper';
import ApplicationModal from '@/components/sections/careers/ApplicationModal';
import { CareerRole } from '@/app/api/cms/careers/route';

const defaultRoles: CareerRole[] = [
  {
    id: 'architect',
    dept: 'Architecture',
    title: 'Architect',
    location: 'Cochin, Kerala',
    type: 'Full Time',
    desc: 'Junior Architect (0-2 Years Experience): We are seeking a passionate and detail-oriented architect with 0-2 years of experience to join our studio. The ideal candidate should have a strong design sensibility, proficiency in AutoCAD, SketchUp, Lumion & D5, and a desire to contribute to the design and delivery of high-end projects.',
    active: true,
  },
  {
    id: 'draftsman',
    dept: 'Architecture',
    title: 'Architectural Draftsman',
    location: 'Cochin / Dubai',
    type: 'Full Time',
    desc: 'Architectural Draftsman: We are looking for a skilled and detail-oriented Architectural Draftsman to join our team. The ideal candidate should be proficient in AutoCAD, possess a strong understanding of architectural drawings and construction detailing, and be able to produce accurate working drawings for high-end projects. Experience in coordinating with architects and consultants is an advantage.',
    active: true,
  },
];

export default function CareersOpenRoles() {
  const [roles, setRoles] = useState<CareerRole[]>(defaultRoles);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/cms/careers')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          // Filter to show active hiring roles on the website
          const activeRoles = data.filter((r: CareerRole) => r.active !== false);
          setRoles(activeRoles);
        }
      })
      .catch((err) => console.error('Failed to load dynamic careers', err));
  }, []);

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

      <section className="py-24 md:py-32 bg-white" aria-labelledby="open-roles-heading">
        <div className="max-w-[1440px] mx-auto px-6 md:px-20">
          <RevealWrapper className="flex items-end justify-between mb-16">
            <div>
              <h2 id="open-roles-heading" className="font-serif text-4xl md:text-5xl text-[#161616]">
                Open <span className="italic text-[#0D7A9E]">Roles</span>
              </h2>
            </div>
            <p className="hidden md:block font-sans text-[11px] text-[#6B7280] tracking-[0.1em] uppercase">
              Select a role to view details and submit application
            </p>
          </RevealWrapper>

          {roles.length === 0 ? (
            <div className="text-center py-16 bg-[#F8F9FA] rounded-2xl border border-gray-200">
              <p className="font-sans text-sm text-gray-500">There are currently no active job openings. Check back soon or send your portfolio to info@spacenodearchitects.com.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {roles.map((role, i) => (
                <RevealWrapper key={role.id} delay={i * 0.1}>
                  <div id={role.id} className="group border-t-2 border-[#0D7A9E] pt-6 flex flex-col justify-between h-full bg-[#F8F9FA] p-6 rounded-b-2xl border border-gray-100 hover:shadow-md transition-all">
                    <div>
                      <span className="font-sans text-[10px] font-semibold tracking-[0.2em] uppercase text-[#0D7A9E] block mb-2">
                        {role.dept}
                      </span>
                      <h3 className="font-serif text-2xl text-[#161616] mb-3 group-hover:text-[#0D7A9E] transition-colors duration-300">
                        {role.title}
                      </h3>
                      <p className="font-sans text-[10px] font-medium tracking-[0.1em] uppercase text-[#6B7280] mb-4">
                        {role.location} · {role.type}
                      </p>
                      <p className="font-sans font-light text-sm text-[#444444] leading-relaxed mb-6">
                        {role.desc}
                      </p>
                    </div>
                    <a
                      href="#apply"
                      onClick={(e) => handleApplyClick(e, role.title)}
                      className="group/btn inline-flex items-center gap-1.5 font-sans text-[11px] font-semibold tracking-[0.15em] uppercase text-[#0D7A9E] hover:text-[#0A2333] transition-colors duration-300 cursor-pointer pt-4 border-t border-gray-200/60"
                    >
                      Apply Now <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </RevealWrapper>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
