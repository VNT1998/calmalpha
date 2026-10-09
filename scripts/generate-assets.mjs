import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const ROOT_DIR = process.cwd();
const PUBLIC_DIR = path.join(ROOT_DIR, 'public');

if (!fs.existsSync(PUBLIC_DIR)) {
  fs.mkdirSync(PUBLIC_DIR, { recursive: true });
}

// 1. Copy logo-mark.svg and logo-full.svg
const logoMarkSrc = path.join(ROOT_DIR, 'logo-mark.svg');
const logoFullSrc = path.join(ROOT_DIR, 'logo-full (1).svg');

if (fs.existsSync(logoMarkSrc)) {
  fs.copyFileSync(logoMarkSrc, path.join(PUBLIC_DIR, 'logo-mark.svg'));
  fs.copyFileSync(logoMarkSrc, path.join(PUBLIC_DIR, 'favicon.svg'));
  console.log('Copied logo-mark.svg and favicon.svg');
}

if (fs.existsSync(logoFullSrc)) {
  fs.copyFileSync(logoFullSrc, path.join(PUBLIC_DIR, 'logo-full.svg'));
  console.log('Copied logo-full.svg');
}

// 2. Generate founder.webp from ../portfolio-new/public/vinit-portrait.jpg
const founderSrc = path.resolve(ROOT_DIR, '../portfolio-new/public/vinit-portrait.jpg');
if (fs.existsSync(founderSrc)) {
  await sharp(founderSrc)
    .resize({ width: 600, withoutEnlargement: true })
    .webp({ quality: 85 })
    .toFile(path.join(PUBLIC_DIR, 'founder.webp'));
  console.log('Generated public/founder.webp (600px wide)');
} else {
  console.warn('Founder image not found at:', founderSrc);
}

// 3. Generate apple-touch-icon.png (180x180) from logo-mark.svg
if (fs.existsSync(logoMarkSrc)) {
  const markSvgBuffer = fs.readFileSync(logoMarkSrc);
  await sharp(markSvgBuffer)
    .resize(180, 180)
    .png()
    .toFile(path.join(PUBLIC_DIR, 'apple-touch-icon.png'));
  console.log('Generated public/apple-touch-icon.png');

  // Generate 32x32 PNG for favicon.ico
  const faviconPng = await sharp(markSvgBuffer)
    .resize(32, 32)
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(PUBLIC_DIR, 'favicon-32x32.png'), faviconPng);
  
  // Also create a 48x48 icon / fallback
  const faviconIco = await sharp(markSvgBuffer)
    .resize(48, 48)
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(PUBLIC_DIR, 'favicon.ico'), faviconIco);
  console.log('Generated public/favicon.ico');
}

// 4. Generate 1200x630 Open Graph Image (og-image.png)
// Dark ink background (#0B1F2A) with logo-mark and crisp typography
const ogSvg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#FDE047"/>
      <stop offset="1" stop-color="#F59E0B"/>
    </linearGradient>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0B1F2A"/>
      <stop offset="1" stop-color="#07161F"/>
    </linearGradient>
  </defs>
  
  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bgGrad)"/>
  
  <!-- Subtle border -->
  <rect x="20" y="20" width="1160" height="590" rx="16" fill="none" stroke="#1E3A47" stroke-width="2"/>
  
  <!-- Logo Mark at left -->
  <g transform="translate(100, 165) scale(1.5)">
    <circle cx="100" cy="100" r="96" fill="#0B1F2A"/>
    <circle cx="100" cy="100" r="96" fill="none" stroke="#1E3A47" stroke-width="3"/>
    <g transform="translate(10, 9) scale(.9)">
      <path d="M40 168 L52 128 L36 118 L62 104 L48 88 L74 80 L82 68 L92 22 L112 62 L124 70 L138 84 L174 96 L184 104 L178 112 L146 122 L130 134 L122 162 L104 146 L100 176 L84 156 L76 184 L58 162 Z" fill="url(#g)"/>
      <path d="M122 88 L138 92 L128 95 Z" fill="#0B1F2A"/>
    </g>
  </g>
  
  <!-- Typography at right -->
  <g transform="translate(460, 230)">
    <text x="0" y="70" font-family="Inter, -apple-system, sans-serif" font-size="76" font-weight="700" fill="#F8FAFC" letter-spacing="-1.5">
      Calm <tspan fill="#F59E0B">Alpha</tspan>
    </text>
    
    <text x="0" y="125" font-family="Inter, -apple-system, sans-serif" font-size="22" font-weight="600" fill="#FDE047" letter-spacing="6">
      CALM, DECISIVE AI
    </text>
    
    <text x="0" y="185" font-family="Inter, -apple-system, sans-serif" font-size="26" font-weight="400" fill="#8CA1AF">
      Software development &amp; AI solutions
    </text>
    
    <text x="0" y="225" font-family="Inter, -apple-system, sans-serif" font-size="20" font-weight="400" fill="#5B7280">
      Mumbai, India • calmalpha.in
    </text>
  </g>
</svg>
`;

await sharp(Buffer.from(ogSvg))
  .resize(1200, 630)
  .png()
  .toFile(path.join(PUBLIC_DIR, 'og-image.png'));
console.log('Generated public/og-image.png (1200x630)');
