import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import { content } from './content';

export function render(url: string) {
  const appHtml = ReactDOMServer.renderToString(
    <React.StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </React.StrictMode>
  );
  return { appHtml };
}

export const routes = [
  {
    path: '/',
    title: content.home.meta.title,
    description: content.home.meta.description,
    canonical: `${content.global.canonicalUrl}/`,
  },
  {
    path: '/privacy',
    title: content.privacy.meta.title,
    description: content.privacy.meta.description,
    canonical: `${content.global.canonicalUrl}/privacy`,
  },
  {
    path: '/terms',
    title: content.terms.meta.title,
    description: content.terms.meta.description,
    canonical: `${content.global.canonicalUrl}/terms`,
  },
  {
    path: '/responsible-ai',
    title: content.responsibleAi.meta.title,
    description: content.responsibleAi.meta.description,
    canonical: `${content.global.canonicalUrl}/responsible-ai`,
  },
  {
    path: '/404',
    title: content.notFound.meta.title,
    description: content.notFound.meta.description,
    canonical: `${content.global.canonicalUrl}/404`,
    is404: true,
  },
];

export const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: content.global.companyName,
  url: content.global.canonicalUrl,
  logo: `${content.global.canonicalUrl}/logo-mark.svg`,
  image: `${content.global.canonicalUrl}/og-image.png`,
  email: content.global.email,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Mumbai',
    addressCountry: 'IN',
  },
  founder: {
    '@type': 'Person',
    name: content.home.team.founder.name,
    jobTitle: `${content.home.team.founder.role}, ${content.home.team.founder.title}`,
    url: content.home.team.founder.links.portfolio,
  },
  sameAs: [
    content.global.socialLinks.github,
    content.global.socialLinks.linkedin,
  ],
  description: content.home.meta.description,
};
