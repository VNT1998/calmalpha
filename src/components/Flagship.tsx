import { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Shield, Layers, FileSpreadsheet, Eye } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { content } from '../content';

export function Flagship() {
  const { flagship } = content.home;
  const [activeTab, setActiveTab] = useState(0);

  const currentScreenshot = flagship.screenshots[activeTab] || flagship.screenshots[0];

  const pointIcons = [
    <FileSpreadsheet className="w-5 h-5 text-[#D97706]" />,
    <Layers className="w-5 h-5 text-[#D97706]" />,
    <Shield className="w-5 h-5 text-[#D97706]" />,
  ];

  return (
    <section id="flagship" className="py-28 md:py-36 bg-[#07161F] text-white border-b border-[#1E3A47] scroll-mt-20 relative overflow-hidden">
      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 bg-tech-grid-dark opacity-40 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-4xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#132B3A] text-amber-300 border border-[#1E3A47] mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span>{flagship.badge}</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-6">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              {flagship.name}
            </h2>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-950/80 text-emerald-400 border border-emerald-800/60 w-fit">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{flagship.status}</span>
            </span>
          </div>

          <p className="mt-3 text-xl font-medium text-amber-400/90">
            {flagship.subtitle}
          </p>

          <p className="mt-5 text-base sm:text-lg text-[#8CA1AF] leading-relaxed max-w-3xl">
            {flagship.overview}
          </p>
        </div>

        {/* Interactive Screenshot Showcase Frame */}
        <div className="rounded-3xl border border-[#1E3A47] bg-[#0B1F2A]/90 backdrop-blur-xl shadow-2xl overflow-hidden mb-16">
          {/* Tabs bar */}
          <div className="flex flex-wrap items-center gap-2 p-3 sm:p-4 border-b border-[#1E3A47] bg-[#07161F]/90">
            <div className="hidden sm:flex items-center space-x-2 mr-4 ml-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>

            <div className="flex flex-wrap items-center gap-1.5">
              {flagship.screenshots.map((s, idx) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                    activeTab === idx
                      ? 'bg-amber-400 text-[#0B1F2A] font-bold shadow-sm'
                      : 'text-[#8CA1AF] hover:text-white hover:bg-[#132B3A]'
                  }`}
                >
                  {s.title}
                </button>
              ))}
            </div>

            <div className="ml-auto hidden md:flex items-center gap-2 text-xs font-mono text-[#8CA1AF]">
              <Eye className="w-3.5 h-3.5 text-amber-400" />
              <span>Production UI Verification</span>
            </div>
          </div>

          {/* Screenshot Display */}
          <div className="p-4 sm:p-6 bg-[#07161F]">
            <div className="rounded-2xl border border-[#1E3A47] overflow-hidden shadow-inner bg-[#0B1F2A]">
              <img
                src={currentScreenshot.imageSrc}
                alt={currentScreenshot.title}
                className="w-full h-auto object-cover max-h-[640px] transition-opacity duration-300"
                loading="lazy"
                width="1200"
                height="750"
              />
            </div>
            <div className="mt-4 px-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#8CA1AF]">
              <p className="font-medium text-white/90">
                <span className="text-amber-400 font-semibold">{currentScreenshot.title}:</span> {currentScreenshot.caption}
              </p>
              <span className="font-mono text-[11px] text-[#5B7280] shrink-0">
                Built with React 19 + TypeScript
              </span>
            </div>
          </div>
        </div>

        {/* Problem → Architecture → Human-in-the-Loop Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {flagship.points.map((point, index) => (
            <div
              key={point.title}
              className="p-8 rounded-2xl bg-[#0B1F2A]/70 border border-[#1E3A47] hover:border-amber-400/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="p-3 rounded-xl bg-[#132B3A] border border-[#1E3A47] w-fit mb-5">
                  {pointIcons[index]}
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight mb-3">
                  {point.title}
                </h3>
                <p className="text-sm text-[#8CA1AF] leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* System of Record Principle Banner */}
        <div className="rounded-2xl border border-amber-400/30 bg-gradient-to-r from-amber-500/10 via-[#0B1F2A] to-[#07161F] p-8 sm:p-10 mb-12">
          <div className="max-w-4xl space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase">
              {flagship.principleTitle}
            </span>
            <blockquote className="text-base sm:text-lg font-medium text-white/95 leading-relaxed italic border-l-2 border-amber-400 pl-4 py-1">
              "{flagship.principleQuote}"
            </blockquote>
          </div>
        </div>

        {/* Stack Chips & Repository Links */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-8 border-t border-[#1E3A47]">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-[#8CA1AF] mr-2 uppercase tracking-wider">
              Core Stack:
            </span>
            {flagship.stack.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono px-3 py-1 rounded-md bg-[#132B3A] text-amber-300 border border-[#1E3A47]"
              >
                {tech}
              </span>
            ))}
          </div>

          <a
            href={flagship.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-white text-[#0B1F2A] hover:bg-amber-400 transition-all shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white shrink-0"
          >
            <GithubIcon className="w-4 h-4" />
            <span>View OpsPilot on GitHub</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
