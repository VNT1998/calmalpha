import { Link } from 'react-router-dom';
import { ArrowLeft, Compass } from 'lucide-react';
import { Seo } from '../components/Seo';
import { content } from '../content';

export function NotFound() {
  const { notFound } = content;

  return (
    <div className="py-28 md:py-40 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <Seo title={notFound.meta.title} description={notFound.meta.description} />

      <div className="inline-flex p-4 rounded-2xl bg-amber-50 border border-amber-200/80 text-[#D97706] mb-8 shadow-sm">
        <Compass className="w-8 h-8 animate-pulse" />
      </div>

      <div className="font-mono text-xs font-bold uppercase tracking-widest text-[#D97706] mb-3">
        Error 404
      </div>

      <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0B1F2A]">
        {notFound.heading}
      </h1>

      <p className="mt-4 text-base sm:text-lg text-[#5B7280]">
        {notFound.text}
      </p>

      <div className="mt-10">
        <Link
          to={notFound.buttonHref}
          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-base font-semibold bg-[#0B1F2A] text-white hover:bg-[#132B3A] transition-all shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{notFound.buttonText}</span>
        </Link>
      </div>
    </div>
  );
}
