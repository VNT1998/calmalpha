import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, Clock, Mail } from 'lucide-react';
import { Seo } from '../components/Seo';
import { content } from '../content';

export function Terms() {
  const { terms } = content;
  const lastUpdated = new Date().toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <article className="py-16 md:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <Seo title={terms.meta.title} description={terms.meta.description} />

      {/* Breadcrumb */}
      <div className="mb-8">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5B7280] hover:text-[#0B1F2A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Calm Alpha</span>
        </Link>
      </div>

      {/* Header */}
      <header className="mb-12 border-b border-slate-200 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold tracking-wider uppercase bg-amber-50 text-[#D97706] border border-amber-200/80 mb-4">
          <FileText className="w-3.5 h-3.5" />
          <span>Legal Agreement</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0B1F2A]">
          {terms.heading}
        </h1>
        <div className="mt-4 flex items-center gap-2 text-xs text-[#5B7280] font-medium">
          <Clock className="w-3.5 h-3.5" />
          <span>Last updated: {lastUpdated}</span>
        </div>
      </header>

      {/* Content */}
      <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 shadow-sm space-y-10 text-base text-[#0B1F2A] leading-relaxed">
        <div className="space-y-8 divide-y divide-slate-100">
          {terms.sections.map((section, idx) => (
            <section key={section.title} className={idx > 0 ? 'pt-8 space-y-2.5' : 'space-y-2.5'}>
              <h2 className="text-lg font-bold text-[#0B1F2A]">
                {section.title}
              </h2>
              <div className="text-[#5B7280] leading-relaxed">
                {section.title === 'Contact.' ? (
                  <a
                    href={`mailto:${section.content}`}
                    className="inline-flex items-center gap-1.5 text-[#D97706] font-semibold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded"
                  >
                    <Mail className="w-4 h-4" />
                    <span>{section.content}</span>
                  </a>
                ) : (
                  section.content
                )}
              </div>
            </section>
          ))}
        </div>

        <div className="pt-8 border-t border-slate-200 text-xs text-[#5B7280] italic">
          {terms.disclaimer}
        </div>
      </div>
    </article>
  );
}
