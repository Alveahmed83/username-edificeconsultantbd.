import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { EdificeLogo } from './EdificeLogo';

interface FooterProps {
  onNavigateSection?: (href: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateSection }) => {
  const handleLink = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (!onNavigateSection) return;
    e.preventDefault();
    onNavigateSection(href);
  };

  return (
    <footer className="relative z-10 bg-[#0E1014] text-zinc-300 border-t border-white/10">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <EdificeLogo size={32} />
              <div>
                <p className="font-display text-lg font-bold text-white tracking-tight">
                  {COMPANY_INFO.name}
                </p>
                <p className="text-xs text-[#F06B47]">
                  {COMPANY_INFO.tagline}
                </p>
              </div>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
              Architectural consultancy, real estate development ({COMPANY_INFO.developmentArm}), and bespoke domestic hardware ({COMPANY_INFO.applianceDivision}) led by Principal Architect Faruk Ahmed, MIAB A-140.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-mono text-zinc-400">PRACTICE</p>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#practice"
                  onClick={(e) => handleLink(e, '#practice')}
                  className="text-zinc-300 hover:text-white transition-colors"
                >
                  Capabilities &amp; Services
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  onClick={(e) => handleLink(e, '#portfolio')}
                  className="text-zinc-300 hover:text-white transition-colors"
                >
                  Architectural Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#plans"
                  onClick={(e) => handleLink(e, '#plans')}
                  className="text-zinc-300 hover:text-white transition-colors"
                >
                  Floor Plans &amp; RAJUK Archive
                </a>
              </li>
              <li>
                <a
                  href="#appliances"
                  onClick={(e) => handleLink(e, '#appliances')}
                  className="text-zinc-300 hover:text-white transition-colors"
                >
                  Edifice Home Appliances
                </a>
              </li>
              <li>
                <a
                  href="#leadership"
                  onClick={(e) => handleLink(e, '#leadership')}
                  className="text-zinc-300 hover:text-white transition-colors"
                >
                  Principal &amp; Visiting Card
                </a>
              </li>
            </ul>
          </div>

          {/* Studio Coordinates & Contact */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-mono text-zinc-400">DHAKA STUDIO</p>
            <div className="text-sm text-zinc-300 space-y-1.5">
              <p>{COMPANY_INFO.office.fullAddress}</p>
              <p className="font-mono text-zinc-200 pt-1">
                <a
                  href={`tel:${COMPANY_INFO.principal.phoneRaw}`}
                  className="hover:text-[#F06B47] transition-colors"
                >
                  {COMPANY_INFO.principal.phoneDisplay}
                </a>
              </p>
              <p className="font-mono text-xs text-zinc-400">
                Hotline: {COMPANY_INFO.principal.developmentHotline}
              </p>
              <p className="font-mono text-xs text-zinc-400">
                <a
                  href={`mailto:${COMPANY_INFO.office.email}`}
                  className="hover:text-white transition-colors"
                >
                  {COMPANY_INFO.office.email}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Quiet Footer Bottom */}
        <div className="pt-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-zinc-500">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY_INFO.name},{' '}
            {COMPANY_INFO.developmentArm} &amp; {COMPANY_INFO.applianceDivision}.
          </p>
          <p className="font-mono">
            Principal: {COMPANY_INFO.principal.name} · {COMPANY_INFO.principal.credentials}
          </p>
        </div>
      </div>
    </footer>
  );
};
