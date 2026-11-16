import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { EdificeLogo } from './EdificeLogo';

interface NavbarProps {
  onBookConsultation: () => void;
  onNavigateSection: (href: string) => void;
}

const NAV_LINKS = [
  { label: 'Practice', href: '#practice' },
  { label: 'Projects', href: '#portfolio' },
  { label: 'Floor Plans', href: '#plans' },
  { label: 'Appliances', href: '#appliances' },
  { label: 'Leadership', href: '#leadership' },
];

export const Navbar: React.FC<NavbarProps> = ({
  onBookConsultation,
  onNavigateSection,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMobileOpen(false);
    onNavigateSection(href);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#0E1014]/40 text-white backdrop-blur-xl border-b border-white/10 shadow-[0_8px_30px_rgba(8,10,14,0.12)]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#top"
          onClick={(e) => handleLinkClick(e, '#top')}
          className="flex items-center gap-3 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D94A27] rounded-sm"
        >
          <EdificeLogo size={28} />
          <span className="font-display text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0">
            Edifice Consultants
          </span>
        </a>

        {/* Zone 2: 5 Clean Single-Line Navigation Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-300"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="py-1 border-b border-transparent hover:border-[#D94A27] hover:text-white transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D94A27]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onBookConsultation}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-tight text-white bg-[#D94A27] hover:bg-[#B83819] transition-colors duration-150 rounded-md whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D94A27] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0E1014]"
          >
            Book Consultation
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 text-zinc-200 hover:bg-white/10 rounded-md cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D94A27]"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Compact Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#0E1014] px-6 py-4 space-y-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="block py-2.5 text-sm font-medium text-zinc-200 hover:text-[#F06B47] border-b border-white/10 last:border-b-0"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={() => {
              setMobileOpen(false);
              onBookConsultation();
            }}
            className="w-full mt-2 py-2.5 px-4 text-sm font-semibold text-white bg-[#D94A27] hover:bg-[#B83819] rounded-md transition-colors cursor-pointer"
          >
            Book Consultation
          </button>
        </div>
      )}
    </header>
  );
};
