'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Expertise', href: '/expertise' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
  { label: 'Careers', href: '/careers' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const navBg = scrolled
    ? 'bg-[#0D7A9E]/95 backdrop-blur-xl border-b border-black/10 shadow-md'
    : isHomePage
      ? 'bg-transparent'
      : 'bg-[#0D7A9E]/95 backdrop-blur-xl border-b border-black/10 shadow-md';

  const textColor = 'text-white';
  const activeColor = 'text-white';
  const hoverColor = 'hover:text-white/80';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
        id="main-nav"
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-20 flex items-center justify-between h-20 md:h-24">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <Image
              src="/images/logo-white.png"
              alt="Space Node Architects logo"
              width={110}
              height={110}
              className="object-contain flex-shrink-0 transition-all duration-300"
              style={{
                width: '110px',
                height: '110px',
              }}
              priority
            />
            <div className="flex flex-col leading-none gap-0.5">
              <span className={`font-sans font-bold text-base tracking-[0.25em] uppercase transition-colors duration-300 text-white`}>
                SPACE NODE
              </span>
              <span className={`font-sans text-[10px] tracking-[0.2em] uppercase opacity-60 transition-colors duration-300 text-white`}>
                ARCHITECTS
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-sans text-[11px] font-600 tracking-[0.15em] uppercase transition-colors duration-300 pb-0.5 relative group ${
                    isActive ? activeColor : `${textColor} ${hoverColor}`
                  }`}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-0 h-px bg-white transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="hidden md:flex items-center gap-2 border px-5 py-2.5 font-sans text-[11px] font-semibold tracking-[0.15em] uppercase transition-all duration-300 border-white text-white hover:bg-white hover:text-[#0D7A9E]"
          >
            Book Consultation
            <ArrowUpRight size={13} />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 transition-colors duration-300 ${textColor}`}
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="fixed inset-0 z-40 bg-[#0A2333] flex flex-col pt-20"
          >
            {/* Node mesh decoration */}
            <svg className="absolute top-0 right-0 w-64 h-64 opacity-10 pointer-events-none" viewBox="0 0 100 100">
              <circle cx="60" cy="20" r="2" fill="#0D7A9E"/>
              <circle cx="80" cy="40" r="2.5" fill="#0D7A9E"/>
              <circle cx="70" cy="60" r="2" fill="#0D7A9E"/>
              <circle cx="90" cy="75" r="2" fill="#0D7A9E"/>
              <line x1="60" y1="20" x2="80" y2="40" stroke="#6EB8D0" strokeWidth="0.5"/>
              <line x1="80" y1="40" x2="70" y2="60" stroke="#6EB8D0" strokeWidth="0.5"/>
              <line x1="70" y1="60" x2="90" y2="75" stroke="#6EB8D0" strokeWidth="0.5"/>
            </svg>

            <nav className="flex flex-col px-8 py-8 gap-1">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 + 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block font-serif text-4xl py-4 border-b border-white/10 transition-colors duration-300 ${
                        isActive ? 'text-[#6EB8D0]' : 'text-white hover:text-[#6EB8D0]'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="px-8 pb-8 mt-auto"
            >
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 w-full bg-[#0D7A9E] text-white py-4 font-sans text-[11px] font-semibold tracking-[0.2em] uppercase"
              >
                Book Consultation <ArrowUpRight size={14} />
              </Link>
              <p className="font-sans text-[11px] tracking-widest uppercase text-white/30 mt-6 text-center">
                Cochin · Dubai · New York
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
