import { Building2, Calendar, MapPin, User, Shield } from 'lucide-react';
import { content, isConfirmationToken } from '../content';

export function CompanyFacts() {
  const { companyFacts } = content.home;
  const isDev = import.meta.env.DEV;

  // Icons for facts
  const getFactIcon = (label: string) => {
    switch (label.toLowerCase()) {
      case 'name':
        return <Building2 className="w-5 h-5 text-[#D97706]" />;
      case 'founded':
        return <Calendar className="w-5 h-5 text-[#D97706]" />;
      case 'based in':
        return <MapPin className="w-5 h-5 text-[#D97706]" />;
      case 'founder':
        return <User className="w-5 h-5 text-[#D97706]" />;
      default:
        return <Shield className="w-5 h-5 text-[#D97706]" />;
    }
  };

  // Omit-if-empty rule from PLAN.md
  const visibleFacts = isDev
    ? companyFacts.facts
    : companyFacts.facts.filter((fact) => !isConfirmationToken(fact.value));

  return (
    <section className="py-28 md:py-36 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold tracking-wider uppercase bg-amber-50 text-[#D97706] border border-amber-200/80 mb-4">
            Studio Registry
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0B1F2A]">
            {companyFacts.sectionTitle}
          </h2>
        </div>

        {/* Fact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleFacts.map((fact) => {
            const isToken = isConfirmationToken(fact.value);

            return (
              <div
                key={fact.label}
                className="p-7 rounded-2xl bg-[#F8FAFC] border border-slate-200 hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="p-3 rounded-xl bg-amber-50 border border-amber-200/60 w-fit mb-5">
                    {getFactIcon(fact.label)}
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#5B7280]">
                    {fact.label}
                  </div>
                </div>

                <div className="mt-4">
                  {isToken ? (
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono bg-amber-100 text-amber-900 border border-amber-300">
                      {fact.value} (hidden in prod)
                    </span>
                  ) : (
                    <span className="text-xl font-bold text-[#0B1F2A] tracking-tight">
                      {fact.value}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
