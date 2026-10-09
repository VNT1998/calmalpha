import fs from 'node:fs';
import path from 'node:path';

const ROOT_DIR = process.cwd();
const filesToCheck = [
  path.join(ROOT_DIR, 'src/content.ts'),
  path.join(ROOT_DIR, 'index.html'),
];

let totalUnresolved = 0;
const tokenRegex = /\{\{(?:CONFIRM:\s*)?([^}]+)\}\}/g;

console.log('\n=========================================');
console.log('  Calm Alpha: Content Audit (check:content)');
console.log('=========================================\n');

for (const filePath of filesToCheck) {
  if (!fs.existsSync(filePath)) continue;

  const fileContent = fs.readFileSync(filePath, 'utf8');
  const lines = fileContent.split('\n');
  const relPath = path.relative(ROOT_DIR, filePath);

  lines.forEach((line, index) => {
    const trimmed = line.trim();
    if (trimmed.startsWith('//') || trimmed.startsWith('*') || trimmed.startsWith('/*')) {
      return;
    }
    let match;
    while ((match = tokenRegex.exec(line)) !== null) {
      totalUnresolved++;
      const token = match[0];
      const prompt = match[1].trim();
      console.log(`[UNRESOLVED TOKEN]`);
      console.log(`  File:     ${relPath}:${index + 1}`);
      console.log(`  Token:    ${token}`);
      console.log(`  Required: ${prompt}`);
      console.log(`  Line:     ${line.trim()}`);
      console.log('-----------------------------------------');
    }
  });
}

if (totalUnresolved > 0) {
  console.error(`\n❌ Failed: Found ${totalUnresolved} unresolved token(s).`);
  console.error('Please resolve these tokens before production deployment, or see CONTENT_TODO.md for instructions.\n');
  process.exit(1);
} else {
  console.log('\n✅ All content tokens are fully resolved and production ready!\n');
  process.exit(0);
}
