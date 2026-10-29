// Local, extractive search: answers quote the site's text, never invent facts.
const stopWords = new Set("a an the and or of in on to for with my your me i you it is are was were be been do does did can could would should what which who how where when why about evidence shows show find tell please connect connects documented dossier portfolio site cv experience work".split(" "));
const groups = [
  ["leadership", "leader", "led", "leading", "executive", "director", "head", "teams", "team", "management"],
  ["enterprise", "corporate", "technology", "tech"],
  ["research", "researcher", "studies", "study", "papers", "safety"],
  ["technical", "code", "coding", "software", "engineering", "prototype", "built", "react", "storybook"],
  ["agent", "agents", "agentic", "hxo", "axo"],
  ["education", "degree", "university", "scholar", "student"],
];
const words = text => text.toLowerCase().match(/[a-z0-9]+/g) || [];

export function findMatches(question, chunks) {
  const terms = [...new Set(words(question).filter(word => word.length > 1 && !stopWords.has(word)))];
  if (!terms.length) return [];
  const expanded = new Set(terms);
  for (const group of groups) {
    if (group.some(word => expanded.has(word))) group.forEach(word => expanded.add(word));
  }
  const ranked = chunks.map(chunk => {
    const tokens = new Set(words(chunk.text));
    const direct = terms.filter(term => tokens.has(term));
    const related = [...expanded].filter(term => tokens.has(term));
    const titleWords = new Set(words(chunk.title));
    const score = direct.length * 5 + related.length + terms.filter(term => titleWords.has(term)).length * 2;
    return { ...chunk, score: related.length ? score : 0, coverage: direct.length };
  }).filter(chunk => chunk.score > 0).sort((a, b) => b.score - a.score || b.coverage - a.coverage);
  const selected = [];
  const pages = new Set();
  for (const chunk of ranked) {
    // Prefer distinct source pages, rather than repeating one source three times.
    const page = chunk.href.split("#")[0];
    if (pages.has(page)) continue;
    pages.add(page);
    const sentences = chunk.text.match(/[^.!?]+[.!?]+(?:\s|$)|[^.!?]+$/g) || [chunk.text];
    const best = sentences.map(text => ({
      text: text.trim(),
      score: words(text).filter(word => expanded.has(word)).length,
    })).sort((a, b) => b.score - a.score)[0].text;
    selected.push({ ...chunk, excerpt: best.length > 380 ? `${best.slice(0, 377).replace(/\s+\S*$/, "")}…` : best });
    if (selected.length === 3) break;
  }
  return selected;
}
