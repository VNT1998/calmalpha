import { ArrowRight, MessageSquare, Terminal, ShieldCheck, GitFork, CheckCircle2 } from 'lucide-react';
import { content } from '../content';

export function Hero() {
  const { hero } = content.home;

  return (
    <section className="relative bg-[#0B1F2A] text-white pt-20 pb-28 md:pt-28 md:pb-36 border-b border-[#1E3A47] overflow-hidden">
      {/* Background Architectural Grid */}
      <div
        className="absolute inset-0 bg-tech-grid-dark opacity-60 pointer-events-none"
        aria-hidden="true"
      />

      {/* Ambient Gradient Lighting */}
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[850px] h-[500px] bg-gradient-to-b from-[#F59E0B]/12 via-[#FDE047]/5 to-transparent rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Studio Meta Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-[#132B3A]/90 text-amber-300 border border-[#1E3A47] shadow-sm mb-8 backdrop-blur-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400" />
            </span>
            <span>Software &amp; AI Solutions Studio • Mumbai, India</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
            Calm, decisive <span className="gold-gradient-text">AI.</span>
          </h1>

          {/* Subhead */}
          <p className="mt-8 text-lg sm:text-xl text-[#8CA1AF] max-w-2xl mx-auto leading-relaxed font-normal">
            {hero.subhead}
          </p>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={hero.primaryButton.href}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold bg-gradient-to-r from-[#FDE047] to-[#F59E0B] text-[#0B1F2A] hover:brightness-105 active:scale-[0.98] transition-all shadow-lg shadow-amber-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>{hero.primaryButton.text}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={hero.secondaryButton.href}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-medium border border-[#1E3A47] bg-[#132B3A]/70 text-white hover:bg-[#1E3A47] hover:border-amber-400/40 transition-all backdrop-blur-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              <MessageSquare className="w-4 h-4 text-amber-400" />
              <span>{hero.secondaryButton.text}</span>
            </a>
          </div>
        </div>

        {/* Architectural Overview Console (Makes the hero rich, modern, and concrete) */}
        <div className="mt-16 sm:mt-20 max-w-4xl mx-auto">
          <div className="rounded-2xl border border-[#1E3A47] bg-[#07161F]/90 backdrop-blur-xl shadow-2xl overflow-hidden">
            {/* Terminal Window Chrome */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-[#1E3A47] bg-[#0B1F2A]/80">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-3 font-mono text-xs text-[#8CA1AF]">
                  calmalpha // architectural-invariants.config
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                <CheckCircle2 className="w-3 h-3" />
                <span>Deterministic Core</span>
              </div>
            </div>

            {/* Invariants Grid */}
            <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col space-y-2 p-4 rounded-xl bg-[#0B1F2A]/60 border border-[#1E3A47]/60">
                <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs tracking-wider uppercase">
                  <GitFork className="w-4 h-4" />
                  <span>Explicit State</span>
                </div>
                <h4 className="text-white font-medium text-sm">
                  Traceable Workflows
                </h4>
                <p className="text-xs text-[#8CA1AF] leading-relaxed">
                  LangGraph state machines where every step, tool call, and failure branch is explicit and testable.
                </p>
              </div>

              <div className="flex flex-col space-y-2 p-4 rounded-xl bg-[#0B1F2A]/60 border border-[#1E3A47]/60">
                <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs tracking-wider uppercase">
                  <Terminal className="w-4 h-4" />
                  <span>Cost Routing</span>
                </div>
                <h4 className="text-white font-medium text-sm">
                  Efficient Model Dispatch
                </h4>
                <p className="text-xs text-[#8CA1AF] leading-relaxed">
                  Fast models handle structural tasks; frontier models are reserved strictly for high-reasoning workloads.
                </p>
              </div>

              <div className="flex flex-col space-y-2 p-4 rounded-xl bg-[#0B1F2A]/60 border border-[#1E3A47]/60">
                <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs tracking-wider uppercase">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Human Oversight</span>
                </div>
                <h4 className="text-white font-medium text-sm">
                  Defined Escalation
                </h4>
                <p className="text-xs text-[#8CA1AF] leading-relaxed">
                  Safety gates and human-in-the-loop triggers for consequential business actions and irreversible operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
