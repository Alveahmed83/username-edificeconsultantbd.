import React, { useState } from 'react';
import {
  Check,
  Copy,
  Download,
  Mail,
  MapPin,
  Phone,
  RotateCw,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { EdificeLogo } from './EdificeLogo';
import { ProjectImage } from './ProjectImage';

export const LeadershipAndCardSection: React.FC = () => {
  const [cardSide, setCardSide] = useState<'front' | 'back'>('front');
  const [cardDisplayMode, setCardDisplayMode] = useState<'digital' | 'original'>(
    'digital'
  );
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = async (label: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(label);
      setTimeout(() => setCopiedField(null), 2000);
    } catch {
      // Fallback ignored if clipboard blocked
    }
  };

  const handleDownloadVCard = () => {
    const vcf = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      'N:Ahmed;Faruk;;;Architect',
      'FN:Faruk Ahmed (Architect, MIAB A-140)',
      'ORG:Edifice Consultants;Edifice Development Ltd.;Edifice Home Appliances',
      'TITLE:Principal Architect & Proprietor',
      `TEL;TYPE=WORK,VOICE:${COMPANY_INFO.principal.phoneRaw}`,
      `TEL;TYPE=CELL:${COMPANY_INFO.principal.developmentHotline}`,
      `EMAIL;TYPE=PREF,INTERNET:${COMPANY_INFO.office.email}`,
      `EMAIL;TYPE=INTERNET:${COMPANY_INFO.principal.personalEmail}`,
      'ADR;TYPE=WORK:;;Floor-19, Planners Tower, Bangla Motor;Dhaka;;1000;Bangladesh',
      'NOTE:Former Faculty, Department of Architecture, BUET. MIAB A-140. The Nexus of Art & Technology.',
      'END:VCARD',
    ].join('\r\n');

    const blob = new Blob([vcf], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Faruk_Ahmed_Edifice_Consultants.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section
      id="leadership"
      className="py-20 lg:py-28 glass-surface border-t border-white/50"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left: Principal Architect Biography & Credentials */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <p className="text-xs font-mono tracking-wide text-[#D94A27] font-medium mb-3">
                Principal Leadership
              </p>
              <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight text-zinc-950 text-balance">
                {COMPANY_INFO.principal.name}
              </h2>
              <p className="mt-2 text-base font-medium text-zinc-700">
                {COMPANY_INFO.principal.credentials}{' '}
                <span className="text-zinc-400 mx-1.5" aria-hidden="true">
                  ·
                </span>{' '}
                {COMPANY_INFO.principal.academic}
              </p>
            </div>

            <div className="space-y-4 text-base text-zinc-600 leading-relaxed max-w-2xl">
              <p>
                Registered as Member{' '}
                <span className="font-mono font-medium text-zinc-900">
                  MIAB A-140
                </span>{' '}
                with the Institute of Architects Bangladesh, Faruk Ahmed brings
                decades of practice and academic rigor from his tenure as
                Former Faculty at the Department of Architecture, Bangladesh
                University of Engineering &amp; Technology (BUET).
              </p>
              <p>
                Leading{' '}
                <strong className="font-semibold text-zinc-900">
                  Edifice Consultants
                </strong>
                , real estate arm{' '}
                <strong className="font-semibold text-zinc-900">
                  {COMPANY_INFO.developmentArm}
                </strong>
                , and industrial division{' '}
                <strong className="font-semibold text-zinc-900">
                  {COMPANY_INFO.applianceDivision}
                </strong>
                , his practice unites coastal resorts, urban residential towers,
                and human-scale domestic hardware under one principle:{' '}
                <em>{COMPANY_INFO.tagline}</em>.
              </p>
            </div>

            {/* Direct Credential & Quick Copy Row */}
            <div className="pt-4 border-t border-zinc-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center justify-between gap-3 p-3.5 rounded-lg border border-white/35 glass-card">
                <div className="min-w-0">
                  <p className="text-[11px] font-mono text-zinc-500">
                    PRINCIPAL &amp; STUDIO MOBILE
                  </p>
                  <a
                    href={`tel:${COMPANY_INFO.principal.phoneRaw}`}
                    className="font-mono text-sm font-semibold text-zinc-950 hover:text-[#D94A27] truncate block"
                  >
                    {COMPANY_INFO.principal.phoneDisplay}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    handleCopy('phone', COMPANY_INFO.principal.phoneRaw)
                  }
                  aria-label="Copy phone number"
                  className="p-2 text-zinc-500 hover:text-zinc-950 hover:bg-zinc-200/70 rounded-md transition-colors cursor-pointer shrink-0"
                >
                  {copiedField === 'phone' ? (
                    <Check size={15} className="text-[#D94A27]" />
                  ) : (
                    <Copy size={15} />
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between gap-3 p-3.5 rounded-lg border border-white/35 glass-card">
                <div className="min-w-0">
                  <p className="text-[11px] font-mono text-zinc-500">
                    CORPORATE EMAIL
                  </p>
                  <a
                    href={`mailto:${COMPANY_INFO.office.email}`}
                    className="text-sm font-semibold text-zinc-950 hover:text-[#D94A27] truncate block"
                  >
                    {COMPANY_INFO.office.email}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    handleCopy('officeEmail', COMPANY_INFO.office.email)
                  }
                  aria-label="Copy corporate email"
                  className="p-2 text-zinc-500 hover:text-zinc-950 hover:bg-zinc-200/70 rounded-md transition-colors cursor-pointer shrink-0"
                >
                  {copiedField === 'officeEmail' ? (
                    <Check size={15} className="text-[#D94A27]" />
                  ) : (
                    <Copy size={15} />
                  )}
                </button>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                type="button"
                onClick={handleDownloadVCard}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#141416] hover:bg-[#D94A27] rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                <Download size={14} />
                Save Official Contact (.vcf)
              </button>
              <a
                href={`mailto:${COMPANY_INFO.principal.personalEmail}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-zinc-800 border border-zinc-300 hover:border-zinc-950 rounded-md transition-colors whitespace-nowrap shrink-0"
              >
                <Mail size={14} />
                {COMPANY_INFO.principal.personalEmail}
              </a>
              <span className="text-xs font-mono text-zinc-500">
                Development Hotline: {COMPANY_INFO.principal.developmentHotline}
              </span>
            </div>
          </div>

          {/* Right: Interactive Official Visiting Card Viewer (Front / Back + Original Card) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-[370px]">
              {/* Side & Display Switch Controls */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="inline-flex items-center gap-1 p-0.5 bg-zinc-100 border border-zinc-200 rounded-md">
                  <button
                    type="button"
                    onClick={() => setCardDisplayMode('digital')}
                    className={`px-2.5 py-1 text-[11px] font-semibold rounded transition-colors cursor-pointer ${
                      cardDisplayMode === 'digital'
                        ? 'bg-white text-zinc-950 shadow-xs'
                        : 'text-zinc-600 hover:text-zinc-950'
                    }`}
                  >
                    Digital Card
                  </button>
                  <button
                    type="button"
                    onClick={() => setCardDisplayMode('original')}
                    className={`px-2.5 py-1 text-[11px] font-semibold rounded transition-colors cursor-pointer ${
                      cardDisplayMode === 'original'
                        ? 'bg-white text-zinc-950 shadow-xs'
                        : 'text-zinc-600 hover:text-zinc-950'
                    }`}
                  >
                    Original Scan
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setCardSide((s) => (s === 'front' ? 'back' : 'front'))
                  }
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-zinc-800 bg-zinc-100 hover:bg-zinc-200 rounded-md transition-colors cursor-pointer"
                >
                  <RotateCw size={13} />
                  {cardSide === 'front' ? 'Reverse Side' : 'Front Side'}
                </button>
              </div>

              {/* Portrait Visiting Card Frame */}
              {cardDisplayMode === 'original' ? (
                <div className="relative bg-[#ECECEB] border border-zinc-300 rounded-2xl shadow-sm overflow-hidden aspect-[3/4]">
                  <ProjectImage
                    src={
                      cardSide === 'front'
                        ? COMPANY_INFO.visitingCard.frontPhoto
                        : COMPANY_INFO.visitingCard.backPhoto
                    }
                    alt={`Official visiting card ${cardSide} side — Faruk Ahmed, Edifice Consultants`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="relative bg-[#ECECEB] border border-zinc-300 rounded-2xl shadow-sm p-7 min-h-[470px] flex flex-col justify-between overflow-hidden">
                  {cardSide === 'front' ? (
                    <>
                      <div className="flex flex-col items-center text-center pt-1">
                        <EdificeLogo size={68} />

                        <h3 className="mt-6 font-display text-2xl font-bold tracking-tight text-zinc-900">
                          FARUK AHMED
                        </h3>
                        <p className="mt-1 text-sm font-semibold tracking-wide text-zinc-700">
                          ARCHITECT, MIAB A-140
                        </p>

                        <div className="mt-5 space-y-0.5 text-xs tracking-wide text-zinc-700">
                          <p className="font-medium tracking-[0.16em] text-zinc-600">
                            FORMER FACULTY
                          </p>
                          <p className="font-semibold">
                            DEPARTMENT OF ARCHITECTURE, BUET
                          </p>
                        </div>

                        <div className="mt-5 space-y-0.5 text-xs tracking-wide text-zinc-700">
                          <p className="tracking-[0.14em] text-zinc-600">
                            PRINCIPAL ARCHITECT
                          </p>
                          <p className="text-sm font-semibold text-zinc-900">
                            EDIFICE CONSULTANTS
                          </p>
                        </div>

                        <div className="mt-4 space-y-0.5 text-xs tracking-wide text-zinc-700">
                          <p className="tracking-[0.08em] text-zinc-600">
                            PROPRIETOR &amp; DESIGNER
                          </p>
                          <p className="text-sm font-semibold text-zinc-900">
                            EDIFICE HOME APPLIANCES
                          </p>
                        </div>

                        <div className="mt-6 space-y-1 text-xs font-mono text-zinc-800">
                          <p>Contact: {COMPANY_INFO.principal.phoneLocal}</p>
                          <p>email: {COMPANY_INFO.principal.personalEmail}</p>
                        </div>
                      </div>

                      <p className="mt-6 pt-3 border-t border-zinc-300/80 text-center text-sm font-medium text-[#B83819]">
                        {COMPANY_INFO.tagline}
                      </p>
                    </>
                  ) : (
                    <>
                      <div className="flex flex-col items-center text-center pt-1 relative z-10">
                        <EdificeLogo size={68} />

                        <h3 className="mt-5 font-display text-3xl font-bold tracking-[0.06em] text-zinc-900">
                          EDIFICE
                        </h3>
                        <p className="text-base font-medium tracking-[0.12em] text-zinc-700">
                          CONSULTANTS
                        </p>

                        <div className="mt-5 space-y-1 text-xs tracking-[0.1em] text-zinc-700">
                          <p>FLOOR-19, PLANNERS</p>
                          <p>TOWER, BANGLA MOTOR,</p>
                          <p>DHAKA - 1000.</p>
                          <p className="pt-1 font-mono text-zinc-900 font-semibold">
                            MO: {COMPANY_INFO.principal.phoneRaw}
                          </p>
                          <p className="font-mono text-[11px] text-zinc-800">
                            {COMPANY_INFO.office.email}
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 relative z-10">
                        <svg
                          viewBox="0 0 280 95"
                          className="w-full h-24 opacity-55"
                          aria-hidden="true"
                        >
                          {[
                            { x: 18, y: 42, w: 26, h: 53 },
                            { x: 50, y: 28, w: 32, h: 67 },
                            { x: 88, y: 18, w: 34, h: 77 },
                            { x: 128, y: 6, w: 38, h: 89 },
                            { x: 172, y: 22, w: 34, h: 73 },
                            { x: 212, y: 34, w: 28, h: 61 },
                            { x: 244, y: 48, w: 22, h: 47 },
                          ].map((b, idx) => (
                            <g key={idx}>
                              <rect
                                x={b.x}
                                y={b.y}
                                width={b.w}
                                height={b.h}
                                fill="none"
                                stroke="#52525B"
                                strokeWidth="1"
                              />
                              {Array.from({ length: 6 }).map((_, r) => (
                                <line
                                  key={r}
                                  x1={b.x + 4}
                                  y1={b.y + 8 + r * 9}
                                  x2={b.x + b.w - 4}
                                  y2={b.y + 8 + r * 9}
                                  stroke="#52525B"
                                  strokeWidth="1.4"
                                  strokeDasharray="2 3"
                                />
                              ))}
                            </g>
                          ))}
                        </svg>
                        <p className="pt-2 border-t border-zinc-300/80 text-center text-sm font-medium text-[#B83819]">
                          {COMPANY_INFO.tagline}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              )}

              <div className="mt-3 flex items-center justify-center gap-4 text-xs text-zinc-500">
                <span className="inline-flex items-center gap-1">
                  <MapPin size={12} /> Bangla Motor, Dhaka
                </span>
                <span className="inline-flex items-center gap-1">
                  <Phone size={12} /> Verified Studio Card
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
