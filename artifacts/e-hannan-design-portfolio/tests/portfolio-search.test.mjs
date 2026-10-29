import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { findMatches } from "../public/src/portfolio-search.js";

const source = (text, href = "/work/career.html", title = "Career") => ({ text, href, title });

test("returns quoted evidence with a source, not a generated claim", () => {
  const text = "Built and led a team of thirty designers and researchers.";
  const [result] = findMatches("What shows leadership?", [source(text)]);
  assert.equal(result.excerpt, text);
  assert.equal(result.href, "/work/career.html");
});

test("exact technical terms rank ahead of broader related terms", () => {
  const results = findMatches("React Storybook", [
    source("Built software prototypes for enterprise teams.", "/work/shipped.html"),
    source("React and Storybook document every component state.", "/work/system.html"),
  ]);
  assert.equal(results[0].href, "/work/system.html");
});

test("unrelated and empty questions do not invent results", () => {
  const chunks = [source("Design leadership and AI systems.")];
  assert.deepEqual(findMatches("weather in Paris", chunks), []);
  assert.deepEqual(findMatches("   ", chunks), []);
});

test("results are short and use at most three distinct source pages", () => {
  const results = findMatches("leadership", [
    source("Leadership " + "of teams ".repeat(100)),
    source("Leadership across enterprise.", "/work/career.html#roles"),
    source("Leadership of design teams.", "/work/leadership.html"),
    source("Executive leadership.", "/one-page.html"),
    source("Leadership through research.", "/work/research.html"),
  ]);
  assert.equal(results.length, 3);
  assert.equal(new Set(results.map(result => result.href.split("#")[0])).size, 3);
  assert.ok(results.every(result => result.excerpt.length <= 380));
});

test("can retrieve leadership, technical and research content from actual public pages", () => {
  const chunks = ["career", "leadership", "system", "research", "ai-native"].flatMap(page => {
    const html = readFileSync(new URL(`../public/work/${page}.html`, import.meta.url), "utf8");
    return [...html.matchAll(/<(p|tr|li)\b[^>]*>([\s\S]*?)<\/\1>/gi)].map(match =>
      source(match[2].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim(), `/work/${page}.html`, page));
  });
  for (const question of [
    "What evidence shows enterprise technology leadership?",
    "How does research connect to practical AI work?",
    "Which technical projects are documented?",
  ]) {
    const results = findMatches(question, chunks);
    assert.ok(results.length > 0, question);
    assert.ok(results.every(result => chunks.some(chunk => chunk.text.includes(result.excerpt.replace(/…$/, ""))))); 
  }
});
