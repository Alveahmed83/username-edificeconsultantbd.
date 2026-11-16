import React, { useEffect, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Download,
  ExternalLink,
  FileText,
  Layers,
  Maximize2,
  X,
} from 'lucide-react';
import {
  ArchitecturalProject,
  PORTFOLIO_PROJECTS,
  ProjectFloorPlan,
} from '../data/companyData';
import { ProjectImage } from './ProjectImage';

interface ProjectDetailPageProps {
  project: ArchitecturalProject;
  initialFocusSection?: 'overview' | 'floor-plans';
  onBackToHome: () => void;
  onSelectProject: (projectId: string) => void;
  onInquireProject: (projectTitle: string) => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({
  project,
  initialFocusSection = 'overview',
  onBackToHome,
  onSelectProject,
  onInquireProject,
}) => {
  const [activePlanIdx, setActivePlanIdx] = useState(0);
  const [activeMediaIdx, setActiveMediaIdx] = useState(0);
  const [mediaFilter, setMediaFilter] = useState<string>('All');
  const [lightboxPlan, setLightboxPlan] = useState<ProjectFloorPlan | null>(
    null
  );

  // Reset sub-tabs when project switches
  useEffect(() => {
    setActivePlanIdx(0);
    setActiveMediaIdx(0);
    setMediaFilter('All');
    setLightboxPlan(null);

    if (initialFocusSection === 'floor-plans') {
      window.setTimeout(() => {
        document
          .getElementById('project-floor-plans')
          ?.scrollIntoView({ behavior: 'smooth' });
      }, 80);
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [project.id, initialFocusSection]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && lightboxPlan) {
        setLightboxPlan(null);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [lightboxPlan]);

  const currentIdx = PORTFOLIO_PROJECTS.findIndex((p) => p.id === project.id);
  const prevProject =
    PORTFOLIO_PROJECTS[
      (currentIdx - 1 + PORTFOLIO_PROJECTS.length) % PORTFOLIO_PROJECTS.length
    ];
  const nextProject =
    PORTFOLIO_PROJECTS[(currentIdx + 1) % PORTFOLIO_PROJECTS.length];

  const activePlan = project.floorPlans[activePlanIdx] ?? null;

  const mediaKinds = [
    'All',
    ...Array.from(new Set(project.gallery.map((g) => g.kind))),
  ];
  const filteredMedia =
    mediaFilter === 'All'
      ? project.gallery
      : project.gallery.filter((g) => g.kind === mediaFilter);
  const safeMediaIdx = Math.min(
    activeMediaIdx,
    Math.max(0, filteredMedia.length - 1)
  );
  const currentMedia = filteredMedia[safeMediaIdx] ?? project.gallery[0];

  const scrollToProjectAnchor = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-transparent text-[#141416] min-h-screen">
      {/* Sticky Project Page Sub-Navigation */}
      <div className="sticky top-16 z-30 bg-white/40 backdrop-blur-xl border-b border-white/35 shadow-[0_8px_30px_rgba(17,14,12,0.04)]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 h-14 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-zinc-800 hover:text-[#D94A27] transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            <ArrowLeft size={16} />
            Back to All Projects
          </button>

          <nav
            aria-label="Project page sections"
            className="hidden md:flex items-center gap-6 text-xs font-semibold text-zinc-600"
          >
            <button
              type="button"
              onClick={() => scrollToProjectAnchor('project-overview')}
              className="hover:text-zinc-950 transition-colors cursor-pointer whitespace-nowrap"
            >
              Overview
            </button>
            <button
              type="button"
              onClick={() => scrollToProjectAnchor('project-floor-plans')}
              className="inline-flex items-center gap-1.5 text-[#D94A27] hover:text-[#B83819] transition-colors cursor-pointer whitespace-nowrap"
            >
              <Layers size={13} />
              Floor Plans ({project.floorPlans.length})
            </button>
            <button
              type="button"
              onClick={() => scrollToProjectAnchor('project-gallery')}
              className="hover:text-zinc-950 transition-colors cursor-pointer whitespace-nowrap"
            >
              Gallery ({project.gallery.length})
            </button>
            {project.documents.length > 0 && (
              <button
                type="button"
                onClick={() => scrollToProjectAnchor('project-documents')}
                className="hover:text-zinc-950 transition-colors cursor-pointer whitespace-nowrap"
              >
                Brochures &amp; PDFs ({project.documents.length})
              </button>
            )}
          </nav>

          <button
            type="button"
            onClick={() => onInquireProject(project.title)}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#D94A27] hover:bg-[#B83819] rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            Inquire About Building
            <ArrowRight size={13} />
          </button>
        </div>
      </div>

      {/* 1. FULL-BLEED LIVELY BUILDING HERO */}
      <section className="relative bg-[#0E1014] text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="w-full h-full animate-kenburns">
            <ProjectImage
              src={project.heroBackdropImage || project.coverImage}
              alt={`${project.title} — ${project.location}`}
              fallbackTitle={project.title}
              loading="eager"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E1014] via-[#0E1014]/65 to-[#0E1014]/35" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E1014]/90 via-[#0E1014]/50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-10 pt-16 pb-14 lg:pt-24 lg:pb-16">
          <div className="max-w-3xl space-y-4">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-300">
              <span className="text-[#F06B47] font-semibold">
                {project.code}
              </span>
              <span aria-hidden="true">·</span>
              <span>{project.category}</span>
              <span aria-hidden="true">·</span>
              <span>{project.status}</span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white text-balance">
              {project.title}
            </h1>

            <p className="text-base sm:text-lg text-zinc-200 leading-relaxed">
              {project.subtitle} — {project.location}
            </p>

            <div className="pt-3 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => scrollToProjectAnchor('project-floor-plans')}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#D94A27] hover:bg-[#B83819] rounded-md transition-colors cursor-pointer"
              >
                <Layers size={16} />
                Explore Integrated Floor Plans ({project.floorPlans.length})
              </button>

              <button
                type="button"
                onClick={() => onInquireProject(project.title)}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/25 rounded-md transition-colors cursor-pointer"
              >
                Request Floor Availability &amp; Quote
              </button>
            </div>
          </div>

          {/* At-a-Glance Building Specification Bar */}
          <div className="mt-12 pt-8 border-t border-white/15 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {project.performanceMetrics.map((metric) => (
              <div key={metric.label}>
                <p className="text-xs font-mono text-zinc-400">{metric.label}</p>
                <p className="mt-1 font-display text-lg font-bold text-white">
                  {metric.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. ARCHITECTURAL OVERVIEW & STRUCTURAL BRIEF */}
      <section id="project-overview" className="py-16 lg:py-20 glass-surface border-b border-white/50">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-7 space-y-5">
            <p className="text-xs font-mono tracking-wide text-[#D94A27] font-medium">
              Architectural Brief &amp; Spatial Strategy
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950">
              Design vision &amp; structural engineering
            </h2>
            <p className="text-base text-zinc-700 leading-relaxed">
              {project.summary}
            </p>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
              {project.designThesis}
            </p>

            <div className="pt-4 space-y-3">
              <p className="text-xs font-mono font-semibold text-zinc-900">
                BUILDING SPECIFICATIONS &amp; AMENITIES
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.highlights.map((hl) => (
                  <li
                    key={hl}
                    className="flex items-start gap-2.5 text-sm text-zinc-700 bg-[#FAFAFA] border border-zinc-200 rounded-lg p-3.5"
                  >
                    <Check
                      size={15}
                      className="text-[#D94A27] shrink-0 mt-0.5"
                    />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-5 glass-card rounded-xl p-6 space-y-4">
            <p className="text-xs font-mono font-semibold text-zinc-500">
              PROJECT DATA SHEET
            </p>
            <dl className="divide-y divide-zinc-200 text-sm">
              <div className="py-3 flex justify-between gap-4">
                <dt className="text-zinc-500">Project Code</dt>
                <dd className="font-mono font-semibold text-zinc-950">
                  {project.code}
                </dd>
              </div>
              <div className="py-3 flex justify-between gap-4">
                <dt className="text-zinc-500">Location</dt>
                <dd className="font-medium text-zinc-950 text-right">
                  {project.location}
                </dd>
              </div>
              <div className="py-3 flex justify-between gap-4">
                <dt className="text-zinc-500">Elevation Stories</dt>
                <dd className="font-mono font-semibold text-zinc-950">
                  {project.stories}
                </dd>
              </div>
              <div className="py-3 flex justify-between gap-4">
                <dt className="text-zinc-500">Unit &amp; Plot Scale</dt>
                <dd className="font-medium text-zinc-950 text-right">
                  {project.scale}
                </dd>
              </div>
              <div className="py-3">
                <dt className="text-zinc-500 mb-1">Structural System</dt>
                <dd className="font-medium text-zinc-950">
                  {project.structuralSystem}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* 3. INTEGRATED FLOOR PLANS & SITE LAYOUTS EXPLORER */}
      <section
        id="project-floor-plans"
        className="py-16 lg:py-24 bg-[#121419] text-white border-b border-zinc-800"
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div>
              <p className="text-xs font-mono tracking-wide text-[#F06B47] font-medium mb-2">
                Integrated Floor Plans · {project.title}
              </p>
              <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-white">
                Architectural floor plates, parking &amp; site plans
              </h2>
              <p className="mt-2 text-sm sm:text-base text-zinc-300 max-w-2xl">
                Switch between unit configurations, parking decks, and statutory layout drawings integrated directly for this building.
              </p>
            </div>
          </div>

          {project.floorPlans.length > 0 && activePlan ? (
            <div className="space-y-6">
              {/* Floor / Level Selector Tabs */}
              <div
                role="tablist"
                aria-label={`${project.title} floor plans`}
                className="flex flex-wrap items-center gap-2"
              >
                {project.floorPlans.map((plan, idx) => {
                  const isActive = idx === activePlanIdx;
                  return (
                    <button
                      key={plan.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActivePlanIdx(idx)}
                      className={`px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-lg border transition-colors cursor-pointer whitespace-nowrap ${
                        isActive
                          ? 'bg-[#D94A27] border-[#D94A27] text-white'
                          : 'bg-white/5 border-white/15 text-zinc-300 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <span className="font-mono opacity-80 mr-2">
                        0{idx + 1}.
                      </span>
                      {plan.tabLabel}
                    </button>
                  );
                })}
              </div>

              {/* Active Floor Plan Drawing Canvas + Spatial Details */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#191C23] border border-white/10 rounded-xl p-5 sm:p-8 items-start">
                {/* Architectural Drawing Viewport */}
                <div className="lg:col-span-7 bg-white rounded-lg p-3 sm:p-4 relative group">
                  <div className="flex items-center justify-between gap-3 pb-3 mb-3 border-b border-zinc-200 text-xs font-mono text-zinc-600">
                    <span>
                      <strong className="text-[#D94A27]">{activePlan.code}</strong> · {activePlan.level}
                    </span>
                    <span>{activePlan.scale}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setLightboxPlan(activePlan)}
                    className="relative w-full aspect-[4/3] flex items-center justify-center bg-white overflow-hidden cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D94A27]"
                  >
                    <ProjectImage
                      src={activePlan.imageSrc}
                      alt={`${activePlan.title} — ${project.title}`}
                      fallbackTitle={activePlan.title}
                      loading="eager"
                      className="max-h-[480px] w-full object-contain transition-transform duration-200 group-hover:scale-[1.01]"
                    />
                    <span className="absolute bottom-2 right-2 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-zinc-900 bg-white/95 border border-zinc-300 rounded-md shadow-xs">
                      <Maximize2 size={13} />
                      Enlarge Plan
                    </span>
                  </button>
                </div>

                {/* Plan Spatial & Room Specification Panel */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-400">
                      <span className="text-[#F06B47] font-semibold">
                        {activePlan.unitArea}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{activePlan.level}</span>
                    </div>

                    <h3 className="font-display text-2xl font-bold text-white tracking-tight">
                      {activePlan.title}
                    </h3>

                    <p className="text-xs font-mono text-zinc-300 bg-white/5 border border-white/10 rounded-md px-3.5 py-2.5">
                      {activePlan.dimensions}
                    </p>

                    <p className="text-sm text-zinc-300 leading-relaxed">
                      {activePlan.description}
                    </p>

                    <ul className="space-y-2.5 pt-2">
                      {activePlan.highlights.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-sm text-zinc-200"
                        >
                          <Check
                            size={15}
                            className="text-[#F06B47] shrink-0 mt-0.5"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Plan Actions */}
                  <div className="pt-5 border-t border-white/10 flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setLightboxPlan(activePlan)}
                      className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/15 rounded-md transition-colors cursor-pointer"
                    >
                      <Maximize2 size={14} />
                      Inspect Fullscreen
                    </button>

                    {activePlan.pdfHref && (
                      <>
                        <a
                          href={activePlan.pdfHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-zinc-950 bg-white hover:bg-zinc-200 rounded-md transition-colors"
                        >
                          <ExternalLink size={14} />
                          View CAD PDF
                        </a>
                        <a
                          href={activePlan.pdfHref}
                          download
                          className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-white bg-[#D94A27] hover:bg-[#B83819] rounded-md transition-colors"
                        >
                          <Download size={14} />
                          Download PDF
                        </a>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-[#191C23] border border-white/10 rounded-xl p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <p className="text-xs font-mono text-[#F06B47]">
                  BESPOKE FLOOR PLATE COMMISSION
                </p>
                <h3 className="font-display text-xl font-bold text-white">
                  Twin-Core Typical Floor Plates Available via Studio Consultation
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {project.title} features customizable 3-sided daylight typical floors paired with our twin structural core. Request architectural CAD working drawings directly from our Planners Tower office.
                </p>
              </div>
              <button
                type="button"
                onClick={() =>
                  onInquireProject(`${project.title} — Request CAD Floor Plans`)
                }
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#D94A27] hover:bg-[#B83819] rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                Request CAD Floor Package
                <ArrowRight size={15} />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 4. COMPLETE VISUAL GALLERY */}
      <section
        id="project-gallery"
        className="py-16 lg:py-20 glass-surface border-b border-white/50"
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8">
            <div>
              <p className="text-xs font-mono tracking-wide text-[#D94A27] font-medium mb-2">
                Architectural Perspectives &amp; Interiors
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950">
                Exterior renders, suite studies &amp; context
              </h2>
            </div>

            {mediaKinds.length > 2 && (
              <div className="inline-flex flex-wrap items-center gap-1 p-1 bg-zinc-200/70 rounded-lg self-start sm:self-auto">
                {mediaKinds.map((kind) => (
                  <button
                    key={kind}
                    type="button"
                    onClick={() => {
                      setMediaFilter(kind);
                      setActiveMediaIdx(0);
                    }}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                      mediaFilter === kind
                        ? 'bg-white text-zinc-950 shadow-xs'
                        : 'text-zinc-600 hover:text-zinc-950'
                    }`}
                  >
                    {kind}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="bg-[#141416] rounded-xl overflow-hidden border border-zinc-800">
            <div className="relative h-[340px] sm:h-[540px] flex items-center justify-center p-4">
              {currentMedia && (
                <ProjectImage
                  src={currentMedia.src}
                  alt={currentMedia.caption}
                  fallbackTitle={project.title}
                  loading="eager"
                  className="max-h-full max-w-full object-contain rounded-md"
                />
              )}

              {filteredMedia.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveMediaIdx(
                        (safeMediaIdx - 1 + filteredMedia.length) %
                          filteredMedia.length
                      )
                    }
                    aria-label="Previous project image"
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/65 hover:bg-[#D94A27] text-white flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveMediaIdx(
                        (safeMediaIdx + 1) % filteredMedia.length
                      )
                    }
                    aria-label="Next project image"
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/65 hover:bg-[#D94A27] text-white flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}
            </div>

            <div className="px-6 py-4 bg-[#181A20] border-t border-white/10 space-y-3">
              {currentMedia && (
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                  <span className="text-zinc-200 font-medium">
                    {currentMedia.caption}
                  </span>
                  <span className="font-mono text-[#F06B47]">
                    {safeMediaIdx + 1} / {filteredMedia.length} ·{' '}
                    {currentMedia.kind}
                  </span>
                </div>
              )}

              {filteredMedia.length > 1 && (
                <div className="flex items-center gap-2.5 overflow-x-auto pb-1">
                  {filteredMedia.map((item, idx) => (
                    <button
                      key={item.src}
                      type="button"
                      onClick={() => setActiveMediaIdx(idx)}
                      className={`relative w-24 h-16 rounded-md overflow-hidden border-2 shrink-0 transition-all cursor-pointer ${
                        idx === safeMediaIdx
                          ? 'border-[#D94A27] opacity-100'
                          : 'border-white/15 opacity-55 hover:opacity-100'
                      }`}
                    >
                      <ProjectImage
                        src={item.src}
                        alt={item.caption}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 5. BROCHURES, RAJUK APPROVALS & NEXT PROJECT */}
      <section id="project-documents" className="py-16 glass-surface">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 space-y-12">
          {project.documents.length > 0 && (
            <div>
              <p className="text-xs font-mono tracking-wide text-[#D94A27] font-medium mb-2">
                Official Documentation &amp; Downloads
              </p>
              <h2 className="font-display text-2xl font-bold tracking-tight text-zinc-950 mb-6">
                Project brochures, CAD sheets &amp; approvals
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.documents.map((doc) => (
                  <div
                    key={doc.href}
                    className="flex items-center justify-between gap-4 p-4 rounded-xl glass-card"
                  >
                    <div className="flex items-start gap-3 min-w-0">
                      <FileText
                        size={18}
                        className="text-[#D94A27] shrink-0 mt-0.5"
                      />
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-zinc-950">
                          {doc.label}
                        </p>
                        <p className="text-xs font-mono text-zinc-500 mt-0.5">
                          {doc.type} · {doc.fileSize}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <a
                        href={doc.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-zinc-800 border border-zinc-300 hover:border-zinc-950 rounded-md transition-colors"
                      >
                        <ExternalLink size={13} />
                        Open
                      </a>
                      <a
                        href={doc.href}
                        download
                        className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-white bg-[#141416] hover:bg-[#D94A27] rounded-md transition-colors"
                      >
                        <Download size={13} />
                        PDF
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Direct Booking & Cross-Project Navigation */}
          <div className="bg-[#141416] text-white rounded-xl p-7 sm:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <p className="text-xs font-mono text-[#F06B47]">
                DIRECT ARCHITECTURAL CONSULTATION
              </p>
              <h3 className="font-display text-2xl sm:text-3xl font-bold mt-1.5">
                Interested in {project.title}?
              </h3>
              <p className="mt-2 text-sm text-zinc-300 max-w-xl">
                Connect with our Planners Tower studio for unit availability, custom floor modifications, or a guided site inspection.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onInquireProject(project.title)}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#D94A27] hover:bg-[#B83819] rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              Book Consultation for This Project
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Prev / Next Project Footer Strip */}
          <div className="pt-8 border-t border-zinc-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => onSelectProject(prevProject.id)}
              className="group p-5 rounded-xl border border-zinc-200 hover:border-[#D94A27] text-left transition-colors cursor-pointer"
            >
              <span className="text-xs font-mono text-zinc-500 flex items-center gap-1">
                <ChevronLeft size={14} /> Previous Building
              </span>
              <p className="font-display text-lg font-bold text-zinc-950 group-hover:text-[#D94A27] mt-1">
                {prevProject.title}
              </p>
              <p className="text-xs text-zinc-500 mt-0.5">
                {prevProject.location}
              </p>
            </button>

            <button
              type="button"
              onClick={() => onSelectProject(nextProject.id)}
              className="group p-5 rounded-xl border border-zinc-200 hover:border-[#D94A27] text-left sm:text-right transition-colors cursor-pointer"
            >
              <span className="text-xs font-mono text-zinc-500 inline-flex items-center gap-1 sm:justify-end">
                Next Building <ChevronRight size={14} />
              </span>
              <p className="font-display text-lg font-bold text-zinc-950 group-hover:text-[#D94A27] mt-1">
                {nextProject.title}
              </p>
              <p className="text-xs text-zinc-500 mt-0.5">
                {nextProject.location}
              </p>
            </button>
          </div>
        </div>
      </section>

      {/* Fullscreen Floor Plan Inspection Lightbox */}
      {lightboxPlan && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-plan-lightbox-title"
          onClick={() => setLightboxPlan(null)}
        >
          <div
            className="relative w-full max-w-6xl max-h-[94vh] overflow-y-auto bg-white rounded-xl shadow-2xl border border-zinc-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 z-20 flex items-center justify-between gap-4 px-6 py-4 bg-white/95 backdrop-blur-xs border-b border-zinc-200">
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-600">
                <span className="text-[#D94A27] font-semibold">
                  {lightboxPlan.code}
                </span>
                <span aria-hidden="true">·</span>
                <span>{project.title}</span>
                <span aria-hidden="true">·</span>
                <span>{lightboxPlan.unitArea}</span>
              </div>
              <button
                type="button"
                onClick={() => setLightboxPlan(null)}
                aria-label="Close fullscreen floor plan"
                className="w-9 h-9 inline-flex items-center justify-center rounded-md text-zinc-700 hover:bg-zinc-100 cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            <div className="bg-[#F4F4F5] p-4 sm:p-8 flex items-center justify-center border-b border-zinc-200">
              <ProjectImage
                src={lightboxPlan.imageSrc}
                alt={lightboxPlan.title}
                loading="eager"
                className="max-h-[72vh] w-auto object-contain bg-white rounded shadow-xs"
              />
            </div>

            <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3
                  id="project-plan-lightbox-title"
                  className="font-display text-xl font-bold text-zinc-950"
                >
                  {lightboxPlan.title}
                </h3>
                <p className="mt-1 text-xs font-mono text-[#B83819]">
                  {lightboxPlan.dimensions}
                </p>
              </div>
              {lightboxPlan.pdfHref && (
                <div className="flex items-center gap-2.5 shrink-0">
                  <a
                    href={lightboxPlan.pdfHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-zinc-900 border border-zinc-300 hover:border-zinc-950 rounded-md transition-colors"
                  >
                    <ExternalLink size={14} />
                    Open CAD PDF
                  </a>
                  <a
                    href={lightboxPlan.pdfHref}
                    download
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-white bg-[#D94A27] hover:bg-[#B83819] rounded-md transition-colors"
                  >
                    <Download size={14} />
                    Download PDF
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
