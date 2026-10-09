import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SeoProps {
  title: string;
  description: string;
}

export function Seo({ title, description }: SeoProps) {
  const location = useLocation();
  const canonicalUrl = `https://calmalpha.in${location.pathname === '/' ? '' : location.pathname}`;

  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // 2. Helper to set or create meta tag
    const setMeta = (selector: string, attr: string, value: string, contentVal: string) => {
      let meta = document.querySelector(selector);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attr, value);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', contentVal);
    };

    setMeta('meta[name="description"]', 'name', 'description', description);
    setMeta('meta[property="og:title"]', 'property', 'og:title', title);
    setMeta('meta[property="og:description"]', 'property', 'og:description', description);
    setMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    setMeta('meta[name="twitter:url"]', 'name', 'twitter:url', canonicalUrl);

    // 3. Canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // 4. JSON-LD structured data for Organization
    const jsonLdId = 'calm-alpha-jsonld-org';
    let script = document.getElementById(jsonLdId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = jsonLdId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    const orgSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Calm Alpha',
      url: 'https://calmalpha.in',
      logo: 'https://calmalpha.in/logo-mark.svg',
      image: 'https://calmalpha.in/og-image.png',
      email: 'vinit.k@calmalpha.in',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Mumbai',
        addressCountry: 'IN',
      },
      founder: {
        '@type': 'Person',
        name: 'Vinit Karkera',
        jobTitle: 'Founder, AI Lead and Full-Stack AI Engineer',
        url: 'https://me.calmalpha.in',
      },
      sameAs: [
        'https://github.com/VNT1998',
        'https://linkedin.com/in/vinitkarkera',
      ],
      description:
        'Calm Alpha is a Mumbai-based studio that designs and builds custom software and AI solutions: agents, voice automation, retrieval systems and full-stack products.',
    };

    script.textContent = JSON.stringify(orgSchema);
  }, [title, description, canonicalUrl]);

  return null;
}
