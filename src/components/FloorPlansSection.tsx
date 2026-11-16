import React, { useState } from 'react';
import {
  ArrowUpRight,
  Download,
  ExternalLink,
  FileText,
  Layers,
} from 'lucide-react';
import {
  PORTFOLIO_PROJECTS,
  TECHNICAL_ARCHIVE_DOCUMENTS,
} from '../data/companyData';
import { ProjectImage } from './ProjectImage';

type DocFilter =
  | 'All Files'
  | 'Project Brochure'
  | 'Architectural Plan'
  | 'Statutory & RAJUK';

const DOC_TABS: DocFilter[] = [
  'All Files',
  'Project Brochure',
  'Architectural Plan',
  'Statutory & RAJUK',
];

interface FloorPlansSectionProps {
  onOpenProject: (projectId: string, jumpToPlans?: boolean) => void;
}

export const FloorPlansSection: React.FC<FloorPlansSectionProps> = ({
  onOpenProject,
}) => {
  const projectsWithPlans = PORTFOLIO_PROJECTS.filter(
    (p) => p.floorPlans.length > 0
  );
  const [selectedProjectId, setSelectedProjectId] = useState<string>(
    projectsWithPlans[1]?.id ?? projectsWithPlans[0].id
  );
  const [selectedPlanIdx, setSelectedPlanIdx] = useState<number>(0);
  const [docFilter, setDocFilter] = useState<DocFilter>('All Files');

  const selectedProject =
    projectsWithPlans.find((p) => p.id === selectedProjectId) ??
    projectsWithPlans[0];
  const activePlan =
    selectedProject.floorPlans[selectedPlanIdx] ??
    selectedProject.floorPlans[0];

  const visibleDocs =
    docFilter === 'All Files'
      ? TECHNICAL_ARCHIVE_DOCUMENTS
      : TECHNICAL_ARCHIVE_DOCUMENTS.filter((d) => d.category === docFilter);

  const handleSelectProject = (projectId: string) => {
    setSelectedProjectId(projectId);
    setSelectedPlanIdx(0);
  };

  return (
    <section
      id="plans"
      className="py-20 lg:py-28 bg-[#121419] text-white border-t border-zinc-800"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="text-xs font-mono tracking-wide text-[#F06B47] font-medium mb-3">
              Building-Integrated Floor Plans &amp; CAD Archive
            </p>
            <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight text-white text-balance">
              Inspect floor plates by building project
            </h2>
            <p className="mt-3 text-base text-zinc-300 leading-relaxed">
              Every floor plan, parking plate, and site map lives inside its building project page. Preview unit plans by building below or jump straight into the full building page.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onOpenProject(selectedProject.id, true)}
            className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-white bg-[#D94A27] hover:bg-[#B83819] rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0 self-start lg:self-auto"
          >
            Open {selectedProject.title} Project Page
            <ArrowUpRight size={15} />
          </button>
        </div>

        {/* Building Project Selector Bar */}
        <div
          role="tablist"
          aria-label="Select building to view integrated floor plans"
          className="flex flex-wrap items-center gap-2 pb-6 border-b border-white/10"
        >
          {projectsWithPlans.map((proj) => {
            const active = proj.id === selectedProject.id;
            return (
              <button
                key={proj.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => handleSelectProject(proj.id)}
                className={`px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-lg border transition-colors cursor-pointer whitespace-nowrap ${
                  active
                    ? 'bg-white text-zinc-950 border-white'
                    : 'bg-white/5 text-zinc-300 border-white/15 hover:bg-white/10 hover:text-white'
                }`}
              >
                {proj.title}{' '}
                <span
                  className={`font-mono text-[11px] ml-1.5 ${
                    active ? 'text-[#D94A27]' : 'text-zinc-400'
                  }`}
                >
                  ({proj.floorPlans.length})
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Building's Integrated Floor Plan Viewer */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Floor Tabs for Selected Building */}
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-1">
              <span>{selectedProject.code}</span>
              <span>{selectedProject.location}</span>
            </div>

            {selectedProject.floorPlans.map((plan, idx) => {
              const active = idx === selectedPlanIdx;
              return (
                <button
                  key={plan.id}
                  type="button"
                  onClick={() => setSelectedPlanIdx(idx)}
                  className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                    active
                      ? 'bg-[#1D2029] border-[#D94A27] text-white'
                      : 'bg-[#171A21] border-white/10 text-zinc-300 hover:border-white/25 hover:text-white'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 text-[11px] font-mono">
                    <span className="text-[#F06B47] font-semibold">
                      {plan.code}
                    </span>
                    <span className="text-zinc-400">{plan.unitArea}</span>
                  </div>
                  <p className="mt-1 font-display text-sm sm:text-base font-bold">
                    {plan.tabLabel}
                  </p>
                  <p className="mt-1 text-xs text-zinc-400 line-clamp-2">
                    {plan.dimensions}
                  </p>
                </button>
              );
            })}

            <button
              type="button"
              onClick={() => onOpenProject(selectedProject.id, true)}
              className="w-full mt-2 inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold text-white bg-white/10 hover:bg-[#D94A27] border border-white/15 hover:border-[#D94A27] rounded-lg transition-colors cursor-pointer"
            >
              <Layers size={14} />
              View All Details on {selectedProject.title} Page
            </button>
          </div>

          {/* Right: Active Plan Canvas */}
          {activePlan && (
            <div className="lg:col-span-8 bg-[#191C23] border border-white/10 rounded-xl p-5 sm:p-6 space-y-5">
              <div className="bg-white rounded-lg p-3 sm:p-4">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 mb-2.5 border-b border-zinc-200 text-xs font-mono text-zinc-600">
                  <span>
                    <strong className="text-[#D94A27]">{activePlan.code}</strong> · {activePlan.title}
                  </span>
                  <span>{activePlan.scale}</span>
                </div>
                <div className="w-full aspect-[16/10] flex items-center justify-center bg-white overflow-hidden">
                  <ProjectImage
                    src={activePlan.imageSrc}
                    alt={`${activePlan.title} — ${selectedProject.title}`}
                    fallbackTitle={activePlan.title}
                    className="max-h-full w-full object-contain"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-mono text-[#F06B47]">
                    {activePlan.dimensions}
                  </p>
                  <p className="mt-1 text-sm text-zinc-300 max-w-2xl">
                    {activePlan.description}
                  </p>
                </div>

                {activePlan.pdfHref && (
                  <div className="flex items-center gap-2 shrink-0">
                    <a
                      href={activePlan.pdfHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-zinc-950 bg-white hover:bg-zinc-200 rounded-md transition-colors whitespace-nowrap"
                    >
                      <ExternalLink size={13} />
                      CAD PDF
                    </a>
                    <a
                      href={activePlan.pdfHref}
                      download
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-[#D94A27] hover:bg-[#B83819] rounded-md transition-colors whitespace-nowrap"
                    >
                      <Download size={13} />
                      Download
                    </a>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Official Brochures, CAD & RAJUK PDF Repository */}
        <div className="mt-20 pt-14 border-t border-white/10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
            <div>
              <p className="text-xs font-mono tracking-wide text-[#F06B47] font-medium mb-2">
                Downloadable Project Repository
              </p>
              <h3 className="font-display text-2xl font-bold tracking-tight text-white">
                Brochures, CAD Floor Plates &amp; RAJUK Sheets
              </h3>
            </div>

            <div
              role="tablist"
              aria-label="Filter downloadable documents"
              className="inline-flex flex-wrap items-center gap-1 p-1 bg-white/5 border border-white/10 rounded-lg self-start lg:self-auto"
            >
              {DOC_TABS.map((tab) => {
                const active = docFilter === tab;
                return (
                  <button
                    key={tab}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setDocFilter(tab)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      active
                        ? 'bg-[#D94A27] text-white'
                        : 'text-zinc-300 hover:text-white'
                    }`}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="border border-white/10 rounded-xl overflow-hidden bg-[#171A21]">
            <div className="divide-y divide-white/10">
              {visibleDocs.map((doc) => (
                <div
                  key={doc.id}
                  className="px-5 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-white/[0.03] transition-colors"
                >
                  <div className="flex items-start gap-3.5 min-w-0">
                    <FileText
                      size={18}
                      className="text-[#F06B47] shrink-0 mt-0.5"
                    />
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-white">
                        {doc.title}
                      </p>
                      <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-zinc-400">
                        <span className="font-mono text-zinc-300">
                          {doc.code}
                        </span>
                        <span aria-hidden="true">·</span>
                        <button
                          type="button"
                          onClick={() => onOpenProject(doc.projectId, true)}
                          className="text-zinc-300 hover:text-[#F06B47] underline-offset-2 hover:underline cursor-pointer"
                        >
                          {doc.project}
                        </button>
                        <span aria-hidden="true">·</span>
                        <span>{doc.category}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0 self-end sm:self-center">
                    <span className="font-mono text-xs text-zinc-400">
                      {doc.format} · {doc.fileSize}
                    </span>
                    <a
                      href={doc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white border border-white/20 hover:border-white rounded-md transition-colors whitespace-nowrap"
                    >
                      <ExternalLink size={13} />
                      View
                    </a>
                    <a
                      href={doc.href}
                      download
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-zinc-950 bg-white hover:bg-[#D94A27] hover:text-white rounded-md transition-colors whitespace-nowrap"
                    >
                      <Download size={13} />
                      Download
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
