'use client';

import Link from 'next/link';
import { FolderKanban, Users, Image as ImageIcon, Phone, Search, Sliders, LogOut, Globe, MessageSquareQuote, Briefcase } from 'lucide-react';

export type AdminTab = 'projects' | 'team' | 'testimonials' | 'careers' | 'site-images' | 'seo' | 'media' | 'contact';

interface AdminNavbarProps {
  activeTab: AdminTab;
  onTabChange: (tab: AdminTab) => void;
  onLogout: () => void;
}

export default function AdminNavbar({ activeTab, onTabChange, onLogout }: AdminNavbarProps) {
  const tabs = [
    { id: 'projects' as AdminTab, label: 'Projects', icon: FolderKanban },
    { id: 'team' as AdminTab, label: 'Team', icon: Users },
    { id: 'testimonials' as AdminTab, label: 'Testimonials', icon: MessageSquareQuote },
    { id: 'careers' as AdminTab, label: 'Careers', icon: Briefcase },
    { id: 'site-images' as AdminTab, label: 'Site Images', icon: Sliders },
    { id: 'seo' as AdminTab, label: 'SEO & Meta', icon: Search },
    { id: 'media' as AdminTab, label: 'Media Library', icon: ImageIcon },
    { id: 'contact' as AdminTab, label: 'Contact', icon: Phone },
  ];

  return (
    <header className="bg-[#0A2333] border-b border-white/10 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between h-20">
        <div className="flex items-center gap-6">
          <div className="font-serif text-xl tracking-tight text-white flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0D7A9E]" />
            Space Node <span className="text-[#0D7A9E] font-sans text-xs uppercase tracking-widest ml-1">CMS</span>
          </div>

          <Link
            href="/"
            target="_blank"
            className="hidden xl:inline-flex items-center gap-1.5 font-sans text-xs text-white/60 hover:text-white transition-colors bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg"
          >
            <Globe size={13} /> View Live Site
          </Link>
        </div>

        <nav className="flex items-center gap-1 md:gap-1.5 overflow-x-auto">
          {tabs.map((t) => {
            const Icon = t.icon;
            const active = activeTab === t.id;
            return (
              <button
                key={t.id}
                onClick={() => onTabChange(t.id)}
                className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl font-sans text-xs font-medium uppercase tracking-[0.1em] transition-all whitespace-nowrap ${
                  active
                    ? 'bg-[#0D7A9E] text-white shadow-md'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon size={15} />
                <span>{t.label}</span>
              </button>
            );
          })}

          <button
            onClick={onLogout}
            title="Log Out"
            className="ml-2 p-2.5 rounded-xl text-white/60 hover:text-red-400 hover:bg-red-500/10 transition-colors flex-shrink-0"
          >
            <LogOut size={18} />
          </button>
        </nav>
      </div>
    </header>
  );
}
