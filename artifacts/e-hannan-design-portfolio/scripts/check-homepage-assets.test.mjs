import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { checkHomepageAssets } from './check-homepage-assets.mjs';

function fixture(t, html, files = {}) {
  const root = mkdtempSync(path.join(tmpdir(), 'homepage-assets-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  for (const [name, content] of Object.entries({ 'index.html': html, ...files })) {
    const file = path.join(root, name);
    mkdirSync(path.dirname(file), { recursive: true });
    writeFileSync(file, content);
  }
  return root;
}

test('checks public assets, source imports, CSS URLs, queries and encoded names', t => {
  const root = fixture(t, `<link rel="icon" href="/icon.svg">
    <link rel="stylesheet" href="./src/main.css">
    <img src="/a%20b.png?v=2"><a href="/contact.html#hello">Contact</a>
    <iframe src="/motion.html"></iframe><video poster="/poster.png"><source src="/clip.mp4"></video>`, {
    'public/icon.svg': '', 'src/main.css': 'body {background:url("/bg.png")}',
    'public/a b.png': '', 'public/contact.html': '', 'public/motion.html': '',
    'public/poster.png': '', 'public/clip.mp4': '', 'public/bg.png': '',
  });
  assert.deepEqual(checkHomepageAssets(root).errors, []);
});

test('fails on missing favicon and local HTML, script and CSS targets', t => {
  const root = fixture(t, `<img src="/missing.png"><script src="/missing.js"></script>
    <a href="/missing.html">Missing</a><style>body{background:url('/missing-bg.png')}</style>`);
  const result = checkHomepageAssets(root);
  assert.equal(result.errors.length, 5);
  for (const target of ['favicon', 'missing.png', 'missing.js', 'missing.html', 'missing-bg.png']) {
    assert.ok(result.errors.some(error => error.includes(target)));
  }
});

test('ignores remote URLs, fragments, comments, data URLs and script markup strings', t => {
  const root = fixture(t, `<link rel="icon" href="/icon.svg">
    <!-- <img src="/obsolete.png"> --><a href="#work">Work</a>
    <a href="mailto:hello@example.com">Email</a><img src="https://example.com/image.png">
    <img src="data:image/png;base64,AAAA"><script>const markup = '<img src="/dynamic.png">';</script>`,
    { 'public/icon.svg': '' });
  assert.deepEqual(checkHomepageAssets(root).errors, []);
});
