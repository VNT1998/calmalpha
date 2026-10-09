import { Code2, Bot, Mic, Database, Compass, Cloud } from 'lucide-react';
import { content } from '../content';

export function Services() {
  const { services } = content.home;

  // Icon mapping for the 6 core services
  const icons = [
    <Code2 className="w-5 h-5 text-[#D97706]" />,
    <Bot className="w-5 h-5 text-[#D97706]" />,
    <Mic className="w-5 h-5 text-[#D97706]" />,
    <Database className="w-5 h-5 text-[#D97706]" />,
    <Compass className="w-5 h-5 text-[#D97706]" />,
    <Cloud className="w-5 h-5 text-[#D97706]" />,
  ];

  // Specific architectural tags matching the technology stack in CONTENT.md
  const cardTags: Record<string, string[]> = {
    'custom-software': ['Web Applications', 'REST APIs', 'Full-Stack Architecture'],
    'ai-agents': ['LangGraph', 'Explicit State', 'Tool Use & Handoff'],
    'voice-conversational': ['Retell AI', 'Call Flows & Fallbacks', 'Human Escalation'],
    'knowledge-retrieval': ['Retrieval-Augmented Generation', 'Source Grounding', 'Provenance'],
    'ai-strategy': ['Model Routing', 'Eval Design', 'Cost Optimization'],
    'delivery-cloud': ['Docker', 'Jenkins CI/CD', 'Production Hardening'],
  };

  return (
    <section id="services" className="relative py-28 md:py-36 bg-white border-b border-slate-200 scroll-mt-20 overflow-hidden">
      {/* Background Subtle Tech Dots */}
      <div className="absolute inset-0 bg-dots-light opacity-50 pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold tracking-wider uppercase bg-amber-50 text-[#D97706] border border-amber-200/80 mb-4">
            Practice Areas
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0B1F2A]">
            {services.sectionTitle}
          </h2>
          <p className="mt-5 text-lg sm:text-xl text-[#5B7280] leading-relaxed">
            {services.intro}
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.items.map((service, index) => {
            const tags = cardTags[service.id] || [];

            return (
              <div
                key={service.id}
                className="group relative p-8 rounded-2xl bg-white border border-slate-200/90 hover:border-amber-400/80 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card Header: Icon container & Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-xl bg-amber-50/80 border border-amber-200/60 group-hover:bg-amber-100/80 transition-colors">
                      {icons[index]}
                    </div>
                    <span className="font-mono text-xs font-bold tracking-widest text-[#5B7280]/60">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0B1F2A] tracking-tight group-hover:text-[#D97706] transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-3.5 text-sm sm:text-base text-[#5B7280] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Capability Tags */}
                {tags.length > 0 && (
                  <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap gap-1.5">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-[#F8FAFC] text-[#0B1F2A] border border-slate-200/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
