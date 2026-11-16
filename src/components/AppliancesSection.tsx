import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { APPLIANCE_LINES, COMPANY_INFO } from '../data/companyData';

interface AppliancesSectionProps {
  onSelectApplianceInquiry: (applianceName: string) => void;
}

export const AppliancesSection: React.FC<AppliancesSectionProps> = ({
  onSelectApplianceInquiry,
}) => {
  const [activeId, setActiveId] = useState<string>(APPLIANCE_LINES[0].id);
  const activeLine =
    APPLIANCE_LINES.find((line) => line.id === activeId) ?? APPLIANCE_LINES[0];

  return (
    <section
      id="appliances"
      className="py-20 lg:py-28 bg-[#121316] text-zinc-100 border-t border-zinc-800 bg-drafting-grid-dark"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
          <div className="lg:col-span-7">
            <p className="text-xs font-mono tracking-wide text-[#F06B47] font-medium mb-3">
              Sister Engineering Division · Proprietor &amp; Designer: {COMPANY_INFO.principal.name}
            </p>
            <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight text-white text-balance">
              Edifice Home Appliances
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              Extending architectural discipline into everyday domestic systems.
              Each appliance assembly is designed for flush millwork fitment,
              monsoon humidity resilience, and quiet mechanical endurance.
            </p>
          </div>
        </div>

        {/* Asymmetric Interactive Division Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Selector List */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {APPLIANCE_LINES.map((line) => {
              const selected = line.id === activeId;
              return (
                <button
                  key={line.id}
                  type="button"
                  onClick={() => setActiveId(line.id)}
                  className={`text-left p-5 rounded-xl border transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D94A27] ${
                    selected
                      ? 'bg-[#1D1E23] border-[#D94A27] text-white'
                      : 'bg-[#17181C]/90 border-zinc-800 text-zinc-300 hover:border-zinc-700 hover:text-white'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4 mb-1.5">
                    <span className="font-mono text-xs text-[#F06B47]">
                      {line.code}
                    </span>
                    <span className="text-xs text-zinc-400">
                      {line.category}
                    </span>
                  </div>
                  <h3 className="font-display text-base sm:text-lg font-semibold tracking-tight">
                    {line.name}
                  </h3>
                </button>
              );
            })}
          </div>

          {/* Right Detailed Hardware Specification Sheet */}
          <div className="lg:col-span-7 bg-[#18191E] border border-zinc-800 rounded-xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-zinc-800">
                <div>
                  <p className="font-mono text-xs text-[#F06B47] mb-1">
                    {activeLine.code} <span aria-hidden="true">·</span> {activeLine.category}
                  </p>
                  <h3 className="font-display text-2xl font-bold text-white tracking-tight">
                    {activeLine.name}
                  </h3>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <p className="text-base text-zinc-200 leading-relaxed">
                  {activeLine.summary}
                </p>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {activeLine.engineeringFocus}
                </p>
              </div>

              {/* 4-Cell Spec Matrix */}
              <div className="mt-7 grid grid-cols-2 sm:grid-cols-4 gap-4 py-5 border-y border-zinc-800">
                {activeLine.specs.map((spec) => (
                  <div key={spec.label}>
                    <p className="text-xs text-zinc-400 mb-1">{spec.label}</p>
                    <p className="font-mono text-sm font-semibold text-white">
                      {spec.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Architectural Integration Highlight */}
              <div className="mt-6 flex items-start gap-3 text-sm text-zinc-300">
                <Check size={16} className="text-[#F06B47] shrink-0 mt-0.5" />
                <span>{activeLine.architecturalIntegration}</span>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="text-xs text-zinc-400">
                Available for residential projects, developer bulk supply &amp; direct specification.
              </p>
              <button
                type="button"
                onClick={() => onSelectApplianceInquiry(activeLine.name)}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#D94A27] hover:bg-[#B83819] rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                Request Appliance Specs
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
