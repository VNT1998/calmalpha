import { Search, Layers, Cpu, Rocket } from 'lucide-react';
import { content } from '../content';

export function Process() {
  const { process } = content.home;

  const stepIcons = [
    <Search className="w-5 h-5 text-amber-400" />,
    <Layers className="w-5 h-5 text-amber-400" />,
    <Cpu className="w-5 h-5 text-amber-400" />,
    <Rocket className="w-5 h-5 text-amber-400" />,
  ];

  const milestones = [
    'Scope & Success Criteria',
    'Architecture Blueprint & Prototype',
    'Iterative Sprints & Client Ownership',
    'Continuous Monitoring & Docs',
  ];

  return (
    <section id="process" className="py-28 md:py-36 bg-[#F8FAFC] border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold tracking-wider uppercase bg-slate-200/60 text-[#0B1F2A] border border-slate-300/80 mb-4">
            Delivery Lifecycle
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0B1F2A]">
            {process.sectionTitle}
          </h2>
        </div>

        {/* 4 Process Steps connected in a pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {process.steps.map((step, index) => (
            <div
              key={step.stepNumber}
              className="relative p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-slate-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Step indicator header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#0B1F2A] flex items-center justify-center shadow-sm">
                    {stepIcons[index]}
                  </div>
                  <span className="font-mono text-xs font-bold text-[#D97706] bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200/60">
                    Phase 0{step.stepNumber}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#0B1F2A] tracking-tight">
                  {step.name}.
                </h3>

                <p className="mt-3.5 text-sm sm:text-base text-[#5B7280] leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Milestone footer */}
              <div className="mt-8 pt-5 border-t border-slate-100">
                <div className="text-[11px] font-semibold text-[#5B7280] uppercase tracking-wider mb-1">
                  Milestone
                </div>
                <div className="text-xs font-medium text-[#0B1F2A]">
                  {milestones[index]}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
