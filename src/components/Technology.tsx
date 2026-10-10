import { Cpu, Server, Layout, Container, Mic, Sparkles } from 'lucide-react';
import { content } from '../content';

export function Technology() {
  const { technology } = content.home;

  const categoryIcons: Record<string, React.ReactNode> = {
    'Agents and LLMs': <Cpu className="w-4 h-4 text-[#D97706]" />,
    'Backend': <Server className="w-4 h-4 text-[#D97706]" />,
    'Frontend': <Layout className="w-4 h-4 text-[#D97706]" />,
    'Delivery': <Container className="w-4 h-4 text-[#D97706]" />,
    'Voice': <Mic className="w-4 h-4 text-[#D97706]" />,
  };

  return (
    <section id="technology" className="py-28 md:py-36 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold tracking-wider uppercase bg-amber-50 text-[#D97706] border border-amber-200/80 mb-4">
            Technical Stack
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0B1F2A]">
            {technology.sectionTitle}
          </h2>
          <p className="mt-5 text-lg sm:text-xl text-[#5B7280] leading-relaxed">
            {technology.paragraph}
          </p>
        </div>

        {/* Grouped Chips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {technology.groupedChips.map((group) => (
            <div
              key={group.category}
              className="p-7 rounded-2xl bg-[#F8FAFC] border border-slate-200 hover:border-slate-300 hover:bg-slate-50/70 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="p-1.5 rounded-lg bg-amber-50 border border-amber-200/60">
                    {categoryIcons[group.category] || <Cpu className="w-4 h-4 text-[#D97706]" />}
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#0B1F2A]">
                    {group.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white text-[#0B1F2A] border border-slate-200/80 shadow-2xs hover:border-amber-400/60 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500/70" />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* AI-Assisted Engineering Showcase Note */}
        <div className="relative rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50/60 via-amber-50/20 to-white p-8 md:p-10 shadow-sm overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="w-12 h-12 rounded-xl bg-[#0B1F2A] text-amber-400 flex items-center justify-center shrink-0 shadow-md">
              <Sparkles className="w-6 h-6" />
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center gap-3">
                <h3 className="text-base font-bold text-[#0B1F2A]">
                  {technology.note.title}.
                </h3>
              </div>
              <p className="text-sm sm:text-base text-[#5B7280] leading-relaxed max-w-4xl">
                {technology.note.text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
