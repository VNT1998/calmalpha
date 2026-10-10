import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { build } from 'vite';

const ROOT_DIR = process.cwd();
const DIST_DIR = path.join(ROOT_DIR, 'dist');
const TEMP_SSR_DIR = path.join(ROOT_DIR, '.prerender-temp');
const templatePath = path.join(DIST_DIR, 'index.html');

if (!fs.existsSync(templatePath)) {
  console.error('dist/index.html does not exist. Run vite build first.');
  process.exit(1);
}

const template = fs.readFileSync(templatePath, 'utf8');

function setTitle(html, title) {
  const regex = /<title>[\s\S]*?<\/title>/i;
  const tag = `<title>${title}</title>`;
  return regex.test(html) ? html.replace(regex, tag) : html.replace('</head>', `    ${tag}\n  </head>`);
}

function setMetaTag(html, attrName, attrValue, content) {
  const regex = new RegExp(`<meta\\s+${attrName}="${attrValue}"[\\s\\S]*?\\/?>`, 'i');
  const tag = `<meta ${attrName}="${attrValue}" content="${content}" />`;
  return regex.test(html) ? html.replace(regex, tag) : html.replace('</head>', `    ${tag}\n  </head>`);
}

function setCanonical(html, canonicalUrl) {
  const regex = /<link\s+rel="canonical"[\s\S]*?\/?>/i;
  const tag = `<link rel="canonical" href="${canonicalUrl}" />`;
  return regex.test(html) ? html.replace(regex, tag) : html.replace('</head>', `    ${tag}\n  </head>`);
}

function setJsonLd(html, schema) {
  const jsonString = JSON.stringify(schema);
  const regex = /<script\s+id="calm-alpha-jsonld-org"[\s\S]*?<\/script>/i;
  const tag = `<script id="calm-alpha-jsonld-org" type="application/ld+json">${jsonString}</script>`;
  return regex.test(html) ? html.replace(regex, tag) : html.replace('</head>', `    ${tag}\n  </head>`);
}

function setRootContent(html, appHtml) {
  const regex = /<div id="root">[\s\S]*?<\/div>/;
  if (!regex.test(html)) {
    throw new Error('Could not find <div id="root"></div> in template');
  }
  return html.replace(regex, `<div id="root">${appHtml}</div>`);
}

async function runPrerender() {
  console.log('Building SSR bundle for prerendering...');
  await build({
    build: {
      ssr: path.join(ROOT_DIR, 'src/entry-server.tsx'),
      outDir: TEMP_SSR_DIR,
      sourcemap: false,
    },
    logLevel: 'warn',
  });

  try {
    const entryFile = path.join(TEMP_SSR_DIR, 'entry-server.js');
    const entryModule = await import(pathToFileURL(entryFile).href);
    const { render, routes, orgSchema } = entryModule;

    if (typeof render !== 'function' || !Array.isArray(routes)) {
      throw new Error('entry-server.js must export render function and routes array');
    }

    console.log(`Prerendering ${routes.length} routes...`);

    for (const route of routes) {
      let html = template;

      // 1. Inject rendered React markup
      const { appHtml } = render(route.path);
      html = setRootContent(html, appHtml);

      // 2. Set Title & Metadata
      html = setTitle(html, route.title);
      html = setMetaTag(html, 'name', 'description', route.description);
      html = setCanonical(html, route.canonical);

      // 3. Set Open Graph & Twitter Cards
      html = setMetaTag(html, 'property', 'og:title', route.title);
      html = setMetaTag(html, 'property', 'og:description', route.description);
      html = setMetaTag(html, 'property', 'og:url', route.canonical);
      html = setMetaTag(html, 'name', 'twitter:title', route.title);
      html = setMetaTag(html, 'name', 'twitter:description', route.description);
      html = setMetaTag(html, 'name', 'twitter:url', route.canonical);

      // 4. Set Organization JSON-LD Schema
      if (orgSchema) {
        html = setJsonLd(html, orgSchema);
      }

      // 5. Write to appropriate destination
      if (route.path === '/') {
        fs.writeFileSync(path.join(DIST_DIR, 'index.html'), html, 'utf8');
        console.log(`✓ Prerendered dist/index.html (${html.length.toLocaleString()} bytes)`);
      } else if (route.is404) {
        fs.writeFileSync(path.join(DIST_DIR, '404.html'), html, 'utf8');
        console.log(`✓ Prerendered dist/404.html (${html.length.toLocaleString()} bytes)`);
      } else {
        const slug = route.path.replace(/^\//, '');
        const routeDir = path.join(DIST_DIR, slug);
        if (!fs.existsSync(routeDir)) {
          fs.mkdirSync(routeDir, { recursive: true });
        }
        // Write both /route/index.html and /route.html to support all static hosting configurations seamlessly
        fs.writeFileSync(path.join(routeDir, 'index.html'), html, 'utf8');
        fs.writeFileSync(path.join(DIST_DIR, `${slug}.html`), html, 'utf8');
        console.log(`✓ Prerendered dist${route.path}/index.html & dist/${slug}.html (${html.length.toLocaleString()} bytes)`);
      }
    }

    console.log('✅ Static HTML prerendering complete for all public routes.');
  } finally {
    if (fs.existsSync(TEMP_SSR_DIR)) {
      fs.rmSync(TEMP_SSR_DIR, { recursive: true, force: true });
    }
  }
}

runPrerender().catch((err) => {
  console.error('Prerendering failed:', err);
  process.exit(1);
});
