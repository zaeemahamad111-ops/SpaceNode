import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, ArrowUpRight, MessageCircle } from 'lucide-react';
import NodeMesh from '@/components/ui/NodeMesh';

const footerNav = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Expertise', href: '/expertise' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

const services = [
  { label: 'Architecture', href: '/expertise' },
  { label: 'Interior Design', href: '/expertise' },
  { label: 'Landscape Design', href: '/expertise' },
  { label: 'Project Management', href: '/expertise' },
];

const InstagramIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const LinkedinIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const socials = [
  { label: 'Instagram', href: '#', icon: InstagramIcon },
  { label: 'Facebook', href: '#', icon: FacebookIcon },
  { label: 'LinkedIn', href: '#', icon: LinkedinIcon },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#0A2333] overflow-hidden" role="contentinfo">
      {/* Node mesh overlay */}
      <div className="absolute inset-0 opacity-20">
        <NodeMesh variant="footer" animated={false} />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-20 pt-20 pb-10">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center gap-3 mb-6">
              {/* Transparent white logo for dark footer */}
              <Image
                src="/images/logo-white.png"
                alt="Space Node Architects logo"
                width={110}
                height={110}
                className="object-contain flex-shrink-0"
                style={{ width: '110px', height: '110px' }}
              />
              <div className="flex flex-col leading-none gap-1">
                <span className="font-sans font-bold text-base tracking-[0.25em] uppercase text-white">
                  SPACE NODE
                </span>
                <span className="font-sans font-bold text-base tracking-[0.25em] uppercase text-white">
                  ARCHITECTS
                </span>
              </div>
            </Link>
            <p className="font-sans text-sm text-white/50 leading-relaxed max-w-xs mb-8">
              A multidisciplinary architectural and design practice delivering innovative and context-driven projects across India, UAE, USA, and Australia.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/50 hover:text-[#0D7A9E] hover:border-[#0D7A9E] transition-all duration-300"
                  >
                    <Icon size={16} />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2 md:col-start-6">
            <h3 className="font-sans text-[10px] font-semibold tracking-[0.2em] uppercase text-[#0D7A9E] mb-6">
              Navigation
            </h3>
            <ul className="space-y-3">
              {footerNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-[11px] tracking-[0.1em] uppercase text-white/50 hover:text-[#6EB8D0] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-2">
            <h3 className="font-sans text-[10px] font-semibold tracking-[0.2em] uppercase text-[#0D7A9E] mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="font-sans text-[11px] tracking-[0.1em] uppercase text-white/50 hover:text-[#6EB8D0] transition-colors duration-300"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h3 className="font-sans text-[10px] font-semibold tracking-[0.2em] uppercase text-[#0D7A9E] mb-6">
              Contact
            </h3>
            <address className="not-italic space-y-4">
              <p className="font-sans text-sm text-white/50 leading-relaxed">
                First Floor, Velleparambil building<br />
                Kaloor, Cochin-17, Kerala
              </p>
              <div className="space-y-2">
                <a href="tel:+914842345678" className="flex items-center gap-2 font-sans text-sm text-white/50 hover:text-[#6EB8D0] transition-colors duration-300">
                  <Phone size={13} />
                  +91 484 234 5678
                </a>
                <a href="mailto:enquiries@spacenodearchitects.in" className="flex items-center gap-2 font-sans text-sm text-white/50 hover:text-[#6EB8D0] transition-colors duration-300">
                  <Mail size={13} />
                  enquiries@spacenodearchitects.in
                </a>
              </div>
            </address>

            {/* CTA */}
            <a
              href="https://wa.me/914842345678"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 border border-[#0D7A9E] text-[#0D7A9E] px-5 py-2.5 font-sans text-[10px] font-semibold tracking-[0.15em] uppercase hover:bg-[#0D7A9E] hover:text-white transition-all duration-300"
            >
              WhatsApp Us <MessageCircle size={12} />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-[10px] tracking-widest uppercase text-white/25">
            © {new Date().getFullYear()} Space Node Architects. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="font-sans text-[10px] tracking-widest uppercase text-white/25 hover:text-[#0D7A9E] transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="font-sans text-[10px] tracking-widest uppercase text-white/25 hover:text-[#0D7A9E] transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
