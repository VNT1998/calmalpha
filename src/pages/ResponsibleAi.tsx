import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, Eye, Database, Lock, AlertCircle, FileCheck, Mail } from 'lucide-react';
import { Seo } from '../components/Seo';
import { content } from '../content';

export function ResponsibleAi() {
  const { responsibleAi } = content;

  const commitmentIcons = [
    <Eye className="w-5 h-5 text-[#D97706]" />,
    <ShieldCheck className="w-5 h-5 text-[#D97706]" />,
    <Database className="w-5 h-5 text-[#D97706]" />,
    <Lock className="w-5 h-5 text-[#D97706]" />,
    <AlertCircle className="w-5 h-5 text-[#D97706]" />,
    <FileCheck className="w-5 h-5 text-[#D97706]" />,
  ];

  return (
    <article className="py-16 md:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <Seo
        title={responsibleAi.meta.title}
        description={responsibleAi.meta.description}
      />

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

      <header className="mb-12 border-b border-slate-200 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold tracking-wider uppercase bg-amber-50 text-[#D97706] border border-amber-200/80 mb-4">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Safety &amp; Accountability</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0B1F2A]">
          {responsibleAi.heading}
        </h1>
        <p className="mt-5 text-lg sm:text-xl text-[#5B7280] leading-relaxed">
          <strong className="font-bold text-[#0B1F2A]">
            {responsibleAi.introTitle}{' '}
          </strong>
          {responsibleAi.introText}
        </p>
      </header>

      {/* 6 Commitments */}
      <ol className="space-y-6 list-none mb-12">
        {responsibleAi.commitments.map((item, index) => (
          <li
            key={item.number}
            className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-slate-300 transition-all flex items-start gap-5"
          >
            <div className="p-3 rounded-xl bg-amber-50 border border-amber-200/60 shrink-0">
              {commitmentIcons[index]}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-xs font-bold text-[#D97706]">
                  0{item.number}
                </span>
                <h2 className="text-lg font-bold text-[#0B1F2A]">
                  {item.title}
                </h2>
              </div>
              <p className="text-sm sm:text-base text-[#5B7280] leading-relaxed">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ol>

      {/* Report a concern console */}
      <div className="p-8 rounded-2xl bg-gradient-to-br from-[#0B1F2A] to-[#07161F] text-white border border-[#1E3A47] shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <h2 className="text-lg font-bold text-white">
            Report a concern.
          </h2>
          <p className="mt-1 text-sm text-[#8CA1AF]">
            Email the studio lead directly with any model, privacy, or safety inquiry.
          </p>
        </div>

        <a
          href={`mailto:${responsibleAi.reportEmail}`}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-[#FDE047] to-[#F59E0B] text-[#0B1F2A] hover:brightness-105 transition-all shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white shrink-0"
        >
          <Mail className="w-4 h-4" />
          <span>{responsibleAi.reportEmail}</span>
        </a>
      </div>
    </article>
  );
}
