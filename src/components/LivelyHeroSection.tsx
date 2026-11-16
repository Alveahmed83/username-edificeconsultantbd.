import React, { useEffect, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Layers,
  Pause,
  Play,
} from 'lucide-react';
import {
  COMPANY_INFO,
  HERO_FEATURED_SLIDES,
  STUDIO_METRICS,
} from '../data/companyData';
import { ProjectImage } from './ProjectImage';

interface LivelyHeroSectionProps {
  onOpenProject: (projectId: string, jumpToPlans?: boolean) => void;
  onExplorePortfolio: () => void;
  onBookConsultation: () => void;
}

export const LivelyHeroSection: React.FC<LivelyHeroSectionProps> = ({
  onOpenProject,
  onExplorePortfolio,
  onBookConsultation,
}) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = window.setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % HERO_FEATURED_SLIDES.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [isPlaying]);

  const activeSlide = HERO_FEATURED_SLIDES[activeIdx];

  return (
    <section className="relative bg-[#0E1014] text-white overflow-hidden">
      {/* Main Full-Bleed Atmospheric Stage */}
      <div className="relative min-h-[620px] lg:min-h-[700px] flex flex-col justify-between">
        {/* Crossfading Ken Burns Real Architectural Renders */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          {HERO_FEATURED_SLIDES.map((slide, idx) => {
            const isActive = idx === activeIdx;
            return (
              <div
                key={slide.projectId}
                className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
                  isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <div
                  className={`w-full h-full ${
                    isActive && isPlaying ? 'animate-kenburns' : ''
                  }`}
                >
                  <ProjectImage
                    src={slide.src}
                    alt={`${slide.title} — ${slide.location}`}
                    fallbackTitle={slide.title}
                    loading="eager"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            );
          })}

          {/* Multi-layer directional architectural contrast scrim */}
          <div className="absolute inset-0 z-20 bg-gradient-to-r from-[#0B0D11]/92 via-[#0B0D11]/68 to-[#0B0D11]/25" />
          <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#0E1014] via-transparent to-[#0B0D11]/45" />
        </div>

        {/* Hero Foreground Content */}
        <div className="relative z-30 max-w-[1280px] w-full mx-auto px-6 lg:px-10 pt-14 pb-10 lg:pt-24 lg:pb-12 flex-1 flex flex-col justify-between">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            {/* Editorial Headline & Value Proposition */}
            <div className="lg:col-span-8 space-y-6">
              <p className="text-xs font-mono tracking-wider uppercase text-[#F06B47] font-medium">
                {COMPANY_INFO.name} · {COMPANY_INFO.developmentArm}
              </p>

              <h1 className="font-display text-[clamp(2.4rem,4.8vw,4.35rem)] leading-[1.05] font-bold tracking-tight text-white text-balance">
                The Nexus of Art &amp; Technology
              </h1>

              <p className="text-base sm:text-lg text-zinc-200 leading-relaxed max-w-2xl">
                Architectural consultancy, signature residential towers, and coastal hospitality led by{' '}
                <span className="font-semibold text-white">
                  Architect Faruk Ahmed (MIAB A-140)
                </span>
                , Former Faculty at BUET — Floor-19 Planners Tower, Dhaka.
              </p>

              {/* Action Controls */}
              <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-5">
                <button
                  type="button"
                  onClick={onExplorePortfolio}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-[#D94A27] hover:bg-[#B83819] rounded-md transition-colors duration-150 cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  Explore All Projects
                  <ArrowRight size={16} />
                </button>

                <button
                  type="button"
                  onClick={() => onOpenProject(activeSlide.projectId, true)}
                  className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/25 rounded-md transition-colors duration-150 cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <Layers size={15} />
                  View {activeSlide.title} Floor Plans
                </button>

                <button
                  type="button"
                  onClick={onBookConsultation}
                  className="text-sm font-semibold text-zinc-200 hover:text-white border-b border-white/30 hover:border-[#F06B47] pb-0.5 transition-colors cursor-pointer whitespace-nowrap shrink-0"
                >
                  Schedule Consultation
                </button>
              </div>
            </div>

            {/* Active Featured Showcase Card on Right */}
            <div className="lg:col-span-4 lg:justify-self-end w-full max-w-md">
              <div className="bg-[#14171D]/85 backdrop-blur-md border border-white/15 rounded-xl p-5 space-y-3">
                <div className="flex items-center justify-between gap-2 text-xs font-mono text-zinc-400">
                  <span className="text-[#F06B47] font-semibold">
                    {activeSlide.code}
                  </span>
                  <span>
                    0{activeIdx + 1} / 0{HERO_FEATURED_SLIDES.length}
                  </span>
                </div>

                <div>
                  <h2 className="font-display text-lg font-bold text-white tracking-tight">
                    {activeSlide.title}
                  </h2>
                  <p className="text-xs text-zinc-300 mt-0.5">
                    {activeSlide.location}
                  </p>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed">
                  {activeSlide.tagline}
                </p>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => onOpenProject(activeSlide.projectId)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-[#F06B47] transition-colors cursor-pointer"
                  >
                    Open Project Page
                    <ArrowUpRight size={14} />
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsPlaying((prev) => !prev)}
                    aria-label={isPlaying ? 'Pause backdrop motion' : 'Play backdrop motion'}
                    className="inline-flex items-center gap-1 text-[11px] font-mono text-zinc-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {isPlaying ? <Pause size={12} /> : <Play size={12} />}
                    {isPlaying ? 'Pause' : 'Play'}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Interactive Slide Selector Bar */}
          <div className="mt-10 pt-5 border-t border-white/15 flex items-center gap-2 overflow-x-auto">
            {HERO_FEATURED_SLIDES.map((slide, idx) => {
              const active = idx === activeIdx;
              return (
                <button
                  key={slide.projectId}
                  type="button"
                  onClick={() => {
                    setActiveIdx(idx);
                    setIsPlaying(false);
                  }}
                  className={`group relative px-3.5 py-2.5 rounded-md text-left transition-colors shrink-0 cursor-pointer ${
                    active
                      ? 'bg-white/15 text-white'
                      : 'bg-white/5 text-zinc-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`font-mono text-[11px] ${
                        active ? 'text-[#F06B47]' : 'text-zinc-500'
                      }`}
                    >
                      0{idx + 1}
                    </span>
                    <span className="text-xs font-semibold whitespace-nowrap">
                      {slide.title}
                    </span>
                  </div>
                  <div
                    className={`mt-1.5 h-0.5 rounded-full transition-all duration-300 ${
                      active ? 'w-full bg-[#D94A27]' : 'w-0 bg-white/30 group-hover:w-full'
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Architectural Studio Credentials Bar */}
      <div className="bg-[#15181F] border-t border-white/10">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STUDIO_METRICS.map((item) => (
            <div
              key={item.label}
              className="border-l border-white/10 first:border-l-0 lg:pl-6 first:pl-0"
            >
              <p className="font-mono text-lg sm:text-xl font-semibold text-white tracking-tight">
                {item.value}
              </p>
              <p className="mt-1 text-xs font-semibold text-zinc-200">
                {item.label}
              </p>
              <p className="mt-0.5 text-[11px] text-zinc-400">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
