import { useState } from 'react';
import { Mail, Copy, Check, ArrowUpRight, Clock, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { content } from '../content';

export function Contact() {
  const { contact } = content.home;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <section id="contact" className="py-28 md:py-36 bg-[#F8FAFC] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#0B1F2A] to-[#07161F] rounded-3xl border border-[#1E3A47] p-8 sm:p-14 lg:p-16 text-white shadow-xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div
            className="absolute -right-20 -bottom-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#132B3A] text-amber-300 border border-[#1E3A47]">
                Start an Engagement
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                {contact.sectionTitle}
              </h2>

              <p className="text-base sm:text-lg text-[#8CA1AF] leading-relaxed max-w-2xl">
                {contact.text}
              </p>

              {/* Engagement Meta Badges */}
              <div className="pt-2 flex flex-wrap gap-4 text-xs font-medium text-[#8CA1AF]">
                <div className="flex items-center gap-2 bg-[#132B3A]/80 px-3 py-1.5 rounded-lg border border-[#1E3A47]">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>Direct founder review within 24 hours</span>
                </div>
                <div className="flex items-center gap-2 bg-[#132B3A]/80 px-3 py-1.5 rounded-lg border border-[#1E3A47]">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>Mumbai, India • Worldwide remote</span>
                </div>
              </div>
            </div>

            {/* Right Action Card */}
            <div className="lg:col-span-5 bg-[#0F2736]/90 border border-[#1E3A47] rounded-2xl p-6 sm:p-8 space-y-6 backdrop-blur-md">
              <div className="space-y-2">
                <span className="text-xs font-semibold text-[#8CA1AF] uppercase tracking-wider">
                  Direct Email
                </span>
                <div className="flex flex-col sm:flex-row items-stretch gap-2.5">
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-[#FDE047] to-[#F59E0B] text-[#0B1F2A] hover:brightness-105 active:scale-[0.98] transition-all shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    <Mail className="w-4 h-4" />
                    <span>{contact.email}</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center justify-center px-4 py-3.5 rounded-xl text-xs font-medium bg-[#132B3A] text-white hover:bg-[#1E3A47] border border-[#1E3A47] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                    title="Copy email address"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-[#8CA1AF]" />
                    )}
                    <span className="ml-1.5 sm:hidden">{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-[#1E3A47]/80">
                <span className="text-xs font-semibold text-[#8CA1AF] uppercase tracking-wider block mb-3">
                  Engineering Channels
                </span>
                <div className="flex flex-wrap items-center gap-3">
                  {contact.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-[#132B3A] text-white hover:text-amber-300 hover:bg-[#1E3A47] border border-[#1E3A47] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                    >
                      {link.label === 'GitHub' ? (
                        <GithubIcon className="w-3.5 h-3.5 text-[#8CA1AF]" />
                      ) : (
                        <LinkedinIcon className="w-3.5 h-3.5 text-[#8CA1AF]" />
                      )}
                      <span>{link.label}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
