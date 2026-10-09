import fs from 'node:fs';
import path from 'node:path';

const ROOT_DIR = process.cwd();
const DIST_DIR = path.join(ROOT_DIR, 'dist');
const templatePath = path.join(DIST_DIR, 'index.html');

if (!fs.existsSync(templatePath)) {
  console.error('dist/index.html does not exist. Run vite build first.');
  process.exit(1);
}

const template = fs.readFileSync(templatePath, 'utf8');

const routes = [
  {
    path: '/privacy',
    title: 'Privacy Policy | Calm Alpha',
    description: 'How Calm Alpha handles personal information on calmalpha.in.',
    canonical: 'https://calmalpha.in/privacy',
  },
  {
    path: '/terms',
    title: 'Terms of Use | Calm Alpha',
    description: 'Terms for using the Calm Alpha website.',
    canonical: 'https://calmalpha.in/terms',
  },
  {
    path: '/responsible-ai',
    title: 'Responsible AI | Calm Alpha',
    description: 'How Calm Alpha approaches safe, accountable AI development.',
    canonical: 'https://calmalpha.in/responsible-ai',
  },
  {
    path: '/404',
    title: 'Page Not Found | Calm Alpha',
    description: 'This page does not exist. Return to Calm Alpha home.',
    canonical: 'https://calmalpha.in/404',
    is404: true,
  },
];

for (const route of routes) {
  let html = template;

  // Replace title
  html = html.replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`);
  
  // Replace description
  html = html.replace(
    /<meta\s+name="description"\s+content="[\s\S]*?"\s*\/?>/i,
    `<meta name="description" content="${route.description}" />`
  );

  // Replace canonical
  html = html.replace(
    /<link\s+rel="canonical"\s+href="[\s\S]*?"\s*\/?>/i,
    `<link rel="canonical" href="${route.canonical}" />`
  );

  // Replace OG & Twitter tags
  html = html.replace(
    /<meta\s+property="og:title"\s+content="[\s\S]*?"\s*\/?>/i,
    `<meta property="og:title" content="${route.title}" />`
  );
  html = html.replace(
    /<meta\s+property="og:description"\s+content="[\s\S]*?"\s*\/?>/i,
    `<meta property="og:description" content="${route.description}" />`
  );
  html = html.replace(
    /<meta\s+property="og:url"\s+content="[\s\S]*?"\s*\/?>/i,
    `<meta property="og:url" content="${route.canonical}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:title"\s+content="[\s\S]*?"\s*\/?>/i,
    `<meta name="twitter:title" content="${route.title}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:description"\s+content="[\s\S]*?"\s*\/?>/i,
    `<meta name="twitter:description" content="${route.description}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:url"\s+content="[\s\S]*?"\s*\/?>/i,
    `<meta name="twitter:url" content="${route.canonical}" />`
  );

  if (route.is404) {
    fs.writeFileSync(path.join(DIST_DIR, '404.html'), html);
    console.log('Prerendered dist/404.html');
  } else {
    const routeDir = path.join(DIST_DIR, route.path.replace(/^\//, ''));
    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true });
    }
    fs.writeFileSync(path.join(routeDir, 'index.html'), html);
    console.log(`Prerendered dist${route.path}/index.html`);
  }
}

console.log('Static route metadata prerendering complete.');
