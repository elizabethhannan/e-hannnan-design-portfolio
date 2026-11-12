import { readFileSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const origin = 'https://local.invalid';
const defaultRoot = fileURLToPath(new URL('../', import.meta.url));
const isFile = (file) => {
  try { return statSync(file).isFile(); } catch { return false; }
};

// Intentionally static and dependency-free: inspect literal HTML attributes and
// CSS URLs, not external sites, JavaScript-generated URLs, or preview tooling.
export function checkHomepageAssets(root = defaultRoot) {
  const errors = [];
  const checked = new Set();
  const cssQueue = [];
  const homepage = readFileSync(path.join(root, 'index.html'), 'utf8')
    .replace(/<!--[\s\S]*?-->/g, '');

  function check(reference, from = '/index.html') {
    if (!reference || reference.startsWith('#') || reference.includes('${')) return;
    const url = new URL(reference.replace(/&amp;/g, '&'), origin + from);
    if (url.origin !== origin) return;
    const pathname = decodeURIComponent(url.pathname);
    if (checked.has(pathname)) return;
    checked.add(pathname);
    // Vite serves public files at the site root, alongside source imports.
    const relative = pathname.replace(/^\/+/, '');
    const candidates = [path.join(root, 'public', relative), path.join(root, relative)];
    if (pathname.endsWith('/')) {
      candidates.splice(0, candidates.length, ...candidates.map(file => path.join(file, 'index.html')));
    }
    const file = candidates.find(isFile);
    if (!file) errors.push(`${from}: missing ${reference} (${pathname})`);
    else if (pathname.endsWith('.css')) cssQueue.push({ file, pathname });
  }

  function checkCss(css, from) {
    for (const match of css.replace(/\/\*[\s\S]*?\*\//g, '').matchAll(/url\(\s*(['"]?)([^'")]+)\1\s*\)/g)) {
      check(match[2].trim(), from);
    }
  }

  // Remove script bodies, retaining their opening tags and src attributes.
  const markup = homepage.replace(/(<script\b[^>]*>)[\s\S]*?<\/script>/gi, '$1</script>');
  const tags = [...markup.matchAll(/<[a-z][^>]*>/gi)].map(match => match[0]);
  if (!tags.some(tag => /^<link\b/i.test(tag) && /\brel\s*=\s*["']icon["']/i.test(tag))) {
    errors.push('/index.html: declare a favicon to avoid the implicit /favicon.ico request');
  }
  for (const tag of tags) {
    for (const match of tag.matchAll(/\b(?:src|href|poster)\s*=\s*(["'])(.*?)\1/gi)) {
      check(match[2]);
    }
  }
  checkCss(markup, '/index.html');
  while (cssQueue.length) {
    const { file, pathname } = cssQueue.pop();
    checkCss(readFileSync(file, 'utf8'), pathname);
  }
  return { errors, checked: checked.size };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const result = checkHomepageAssets();
  if (result.errors.length) {
    console.error(result.errors.join('\n'));
    process.exitCode = 1;
  } else {
    console.log(`Homepage asset check passed (${result.checked} local targets).`);
  }
}
