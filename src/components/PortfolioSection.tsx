import React, { useState } from 'react';
import { ArrowUpRight, FileText, Images, Layers } from 'lucide-react';
import {
  PORTFOLIO_PROJECTS,
  ProjectCategory,
} from '../data/companyData';
import { ProjectImage } from './ProjectImage';

const CATEGORIES: ProjectCategory[] = [
  'All',
  'Signature Residential',
  'Hospitality & Resort',
  'Multi-Unit Housing',
];

interface PortfolioSectionProps {
  onOpenProject: (projectId: string, jumpToPlans?: boolean) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  onOpenProject,
}) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');

  const filteredProjects =
    activeCategory === 'All'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section
      id="portfolio"
      className="py-20 lg:py-28 border-t border-white/50 bg-transparent"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        {/* Section Header + Interactive Filter Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-mono tracking-wide text-[#D94A27] font-medium mb-3">
              Architectural &amp; Development Portfolio
            </p>
            <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight text-zinc-950 text-balance">
              Signature projects, resorts &amp; residential towers
            </h2>
            <p className="mt-3 text-base text-zinc-600 leading-relaxed">
              Select any building to open its dedicated project page with exterior perspectives, integrated floor plans, parking layouts, and RAJUK brochures.
            </p>
          </div>

          {/* Functional Segmented Filter Buttons */}
          <div
            role="tablist"
            aria-label="Filter projects by typology"
            className="inline-flex flex-wrap items-center gap-1 p-1 bg-zinc-200/70 border border-zinc-300/70 rounded-lg self-start lg:self-auto"
          >
            {CATEGORIES.map((category) => {
              const active = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveCategory(category)}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D94A27] ${
                    active
                      ? 'bg-[#141416] text-white shadow-xs'
                      : 'text-zinc-700 hover:text-zinc-950'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Architectural Portfolio Grid (Asymmetric Lead Bento for Featured Resort) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project, index) => {
            const isFeaturedLead =
              activeCategory === 'All' && index === 0 && project.featured;

            return (
              <article
                key={project.id}
                className={`group glass-card rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:border-zinc-300 ${
                  isFeaturedLead ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div>
                  <div
                    onClick={() => onOpenProject(project.id)}
                    className={`relative w-full overflow-hidden bg-zinc-900 border-b border-zinc-200 cursor-pointer ${
                      isFeaturedLead ? 'aspect-[16/9]' : 'aspect-[4/3]'
                    }`}
                  >
                    <ProjectImage
                      src={project.coverImage}
                      alt={`${project.title} — ${project.location}`}
                      fallbackTitle={project.title}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 via-black/35 to-transparent pointer-events-none" />
                    <div className="absolute bottom-3.5 left-4 right-4 flex items-center justify-between gap-3 text-xs font-mono text-white">
                      <span className="text-[#F06B47] font-semibold">
                        {project.code}
                      </span>
                      <span className="inline-flex items-center gap-3 text-white/90">
                        <span className="inline-flex items-center gap-1">
                          <Images size={13} />
                          {project.gallery.length} Views
                        </span>
                        {project.floorPlans.length > 0 && (
                          <span className="inline-flex items-center gap-1">
                            <Layers size={13} />
                            {project.floorPlans.length} Plans
                          </span>
                        )}
                        {project.documents.length > 0 && (
                          <span className="inline-flex items-center gap-1">
                            <FileText size={13} />
                            {project.documents.length} PDF
                          </span>
                        )}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    {/* Unboxed Metadata (Zero-Pill Rule) */}
                    <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-500 mb-2">
                      <span className="font-semibold text-zinc-900">
                        {project.category}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{project.location}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono">{project.stories}</span>
                    </div>

                    <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-zinc-950 group-hover:text-[#D94A27] transition-colors duration-150">
                      <button
                        type="button"
                        onClick={() => onOpenProject(project.id)}
                        className="text-left cursor-pointer focus-visible:outline-none focus-visible:underline"
                      >
                        {project.title}
                      </button>
                    </h3>

                    <p className="mt-1 text-xs font-medium text-zinc-500">
                      {project.subtitle}
                    </p>

                    <p className="mt-3 text-sm text-zinc-600 leading-relaxed line-clamp-3">
                      {project.summary}
                    </p>
                  </div>
                </div>

                <div className="px-6 py-4 border-t border-zinc-100 bg-zinc-50/60 flex flex-wrap items-center justify-between gap-3">
                  {project.floorPlans.length > 0 ? (
                    <button
                      type="button"
                      onClick={() => onOpenProject(project.id, true)}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-zinc-600 hover:text-[#D94A27] transition-colors cursor-pointer whitespace-nowrap"
                    >
                      <Layers size={13} className="text-[#D94A27]" />
                      {project.floorPlans.length} Integrated Floor Plans
                    </button>
                  ) : (
                    <span className="font-mono text-xs text-zinc-500 truncate">
                      {project.scale}
                    </span>
                  )}

                  <button
                    type="button"
                    onClick={() => onOpenProject(project.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-950 hover:text-[#D94A27] transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D94A27] rounded-sm"
                  >
                    Open Project Page
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
