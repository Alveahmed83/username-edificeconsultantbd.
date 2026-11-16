import { useEffect, useState } from 'react';
import { Check } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { LivelyHeroSection } from './components/LivelyHeroSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ProjectDetailPage } from './components/ProjectDetailPage';
import { FloorPlansSection } from './components/FloorPlansSection';
import { AppliancesSection } from './components/AppliancesSection';
import { LeadershipAndCardSection } from './components/LeadershipAndCardSection';
import { ConsultationSection } from './components/ConsultationSection';
import { Footer } from './components/Footer';
import {
  CAPABILITIES,
  HERO_FEATURED_SLIDES,
  PORTFOLIO_PROJECTS,
} from './data/companyData';

function BackgroundSlideshow() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % HERO_FEATURED_SLIDES.length);
    }, 7500);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
    >
      {HERO_FEATURED_SLIDES.map((slide, index) => (
        <img
          key={slide.projectId}
          src={slide.src}
          alt=""
          fetchPriority={index === 0 ? 'high' : 'auto'}
          className={`background-slideshow-image absolute inset-0 h-full w-full object-cover ${
            index === activeSlide ? 'is-active' : ''
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[5px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/5 to-black/20" />
    </div>
  );
}

function parseHashRoute(): {
  projectId: string | null;
  focus: 'overview' | 'floor-plans';
} {
  const hash = window.location.hash;
  if (hash.startsWith('#project/')) {
    const rest = hash.slice('#project/'.length);
    const [id, sub] = rest.split('/');
    if (PORTFOLIO_PROJECTS.some((p) => p.id === id)) {
      return {
        projectId: id,
        focus: sub === 'plans' ? 'floor-plans' : 'overview',
      };
    }
  }
  return { projectId: null, focus: 'overview' };
}

export default function App() {
  const initialRoute = parseHashRoute();
  const [prefilledSubject, setPrefilledSubject] = useState<string>('');
  const [activeProjectId, setActiveProjectId] = useState<string | null>(
    initialRoute.projectId
  );
  const [projectFocusSection, setProjectFocusSection] = useState<
    'overview' | 'floor-plans'
  >(initialRoute.focus);

  useEffect(() => {
    const onHashChange = () => {
      const next = parseHashRoute();
      setActiveProjectId(next.projectId);
      setProjectFocusSection(next.focus);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const openProjectPage = (projectId: string, jumpToPlans = false) => {
    const focus = jumpToPlans ? 'floor-plans' : 'overview';
    setActiveProjectId(projectId);
    setProjectFocusSection(focus);
    const nextHash = jumpToPlans
      ? `#project/${projectId}/plans`
      : `#project/${projectId}`;
    if (window.location.hash !== nextHash) {
      window.history.pushState(null, '', nextHash);
    }
  };

  const navigateHomeSection = (href: string) => {
    const targetId = href.startsWith('#') ? href.slice(1) : href;
    if (activeProjectId) {
      setActiveProjectId(null);
      window.history.pushState(null, '', href === '#top' ? '#top' : href);
      window.setTimeout(() => {
        if (targetId === 'top') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          document.getElementById(targetId)?.scrollIntoView({
            behavior: 'smooth',
          });
        }
      }, 60);
    } else if (targetId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.getElementById(targetId)?.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  const scrollToContact = (subject?: string) => {
    if (subject) {
      setPrefilledSubject(subject);
    }
    navigateHomeSection('#contact');
  };

  const activeProject = activeProjectId
    ? PORTFOLIO_PROJECTS.find((p) => p.id === activeProjectId) ?? null
    : null;

  return (
    <div id="top" className="relative isolate min-h-screen flex flex-col bg-transparent text-[#141416]">
      <BackgroundSlideshow />
      <Navbar
        onBookConsultation={() => scrollToContact()}
        onNavigateSection={navigateHomeSection}
      />

      <main className="relative z-10 flex-1">
        {activeProject ? (
          <ProjectDetailPage
            project={activeProject}
            initialFocusSection={projectFocusSection}
            onBackToHome={() => navigateHomeSection('#portfolio')}
            onSelectProject={(id) => openProjectPage(id, false)}
            onInquireProject={(title) => scrollToContact(title)}
          />
        ) : (
          <>
            {/* 1. LIVELY FULL-BLEED HERO SHOWCASE */}
            <LivelyHeroSection
              onOpenProject={(id, jumpToPlans) =>
                openProjectPage(id, jumpToPlans)
              }
              onExplorePortfolio={() => navigateHomeSection('#portfolio')}
              onBookConsultation={() => scrollToContact()}
            />

            {/* 2. CAPABILITIES & PRACTICE BENTO SECTION */}
            <section id="practice" className="glass-surface py-20 lg:py-28 border-y border-white/60">
              <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
                  <div className="lg:col-span-7">
                    <p className="text-xs font-mono tracking-wide text-[#D94A27] font-medium mb-3">
                      Multidisciplinary Practice
                    </p>
                    <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight text-zinc-950 text-balance">
                      Engineering precision paired with architectural restraint
                    </h2>
                  </div>
                  <div className="lg:col-span-5">
                    <p className="text-base text-zinc-600 leading-relaxed">
                      From statutory RAJUK feasibility and pre-cast pile frameworks to seafront hospitality resorts and custom kitchen hardware, every commission is governed by principal oversight.
                    </p>
                  </div>
                </div>

                {/* Asymmetric Bento Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {CAPABILITIES.map((cap) => (
                    <div
                      key={cap.index}
                      className={`glass-card rounded-xl p-7 flex flex-col justify-between hover:border-zinc-300 transition-colors ${
                        cap.spanWide ? 'lg:col-span-2' : 'lg:col-span-1'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-4 mb-4">
                          <span className="font-mono text-sm font-semibold text-[#D94A27]">
                            {cap.index}.
                          </span>
                          <span className="text-xs font-mono text-zinc-500">
                            {cap.highlightMetric}
                          </span>
                        </div>

                        <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-zinc-950">
                          {cap.title}
                        </h3>

                        <p className="mt-3 text-sm sm:text-base text-zinc-600 leading-relaxed max-w-2xl">
                          {cap.scope}
                        </p>
                      </div>

                      <ul className="mt-6 pt-5 border-t border-zinc-200 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {cap.deliverables.map((del) => (
                          <li
                            key={del}
                            className="flex items-start gap-2 text-xs sm:text-sm text-zinc-700"
                          >
                            <Check
                              size={14}
                              className="text-[#D94A27] shrink-0 mt-0.5"
                            />
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 3. PORTFOLIO SECTION (Each card opens dedicated Project Page + Floor Plans) */}
            <PortfolioSection
              onOpenProject={(id, jumpToPlans) =>
                openProjectPage(id, jumpToPlans)
              }
            />

            {/* 4. BUILDING-LINKED FLOOR PLANS & TECHNICAL ARCHIVE */}
            <FloorPlansSection
              onOpenProject={(id, jumpToPlans) =>
                openProjectPage(id, jumpToPlans)
              }
            />

            {/* 5. EDIFICE HOME APPLIANCES DIVISION */}
            <AppliancesSection
              onSelectApplianceInquiry={(applianceName) =>
                scrollToContact(`Edifice Home Appliances — ${applianceName}`)
              }
            />

            {/* 6. PRINCIPAL ARCHITECT & INTERACTIVE VISITING CARD */}
            <LeadershipAndCardSection />

            {/* 7. CONSULTATION BRIEF & BANGLA MOTOR STUDIO */}
            <ConsultationSection prefilledSubject={prefilledSubject} />
          </>
        )}
      </main>

      <Footer onNavigateSection={navigateHomeSection} />
    </div>
  );
}
