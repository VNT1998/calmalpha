import { Scale, CheckCircle2, DollarSign, Users } from 'lucide-react';
import { content } from '../content';

export function Principles() {
  const { principles } = content.home;

  const principleIcons = [
    <Scale className="w-5 h-5 text-[#D97706]" />,
    <CheckCircle2 className="w-5 h-5 text-[#D97706]" />,
    <DollarSign className="w-5 h-5 text-[#D97706]" />,
    <Users className="w-5 h-5 text-[#D97706]" />,
  ];

  return (
    <section className="py-28 md:py-36 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold tracking-wider uppercase bg-slate-200/60 text-[#0B1F2A] border border-slate-300/80 mb-4">
            Engineering Culture
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0B1F2A]">
            {principles.sectionTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {principles.items.map((principle, index) => (
            <div
              key={principle.number}
              className="p-8 sm:p-10 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-amber-50 border border-amber-200/60">
                    {principleIcons[index]}
                  </div>
                  <span className="font-mono text-xs font-bold text-[#5B7280]">
                    0{principle.number}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#0B1F2A] tracking-tight">
                  {principle.title}
                </h3>

                <p className="mt-4 text-base text-[#5B7280] leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
