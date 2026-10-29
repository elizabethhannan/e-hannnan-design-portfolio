import { findMatches } from "./portfolio-search.js";

const root = document.querySelector("[data-cv-dossier]");

if (root) {
  root.outerHTML = `
    <section class="cv-dossier cv-dossier--navy" id="cv-dossier" aria-labelledby="cv-dossier-heading">
      <div class="cv-inner"><div class="cv-panel">
        <div class="cv-panel-head">
          <div><h2 class="cv-panel-title" id="cv-dossier-heading">Recruiter question bot — Ask my CV:</h2>
          <p class="cv-panel-subtitle">AI-assisted answers grounded in the public CV and portfolio site. This conversation stays in this page session and is not saved.</p></div>
          <button class="cv-reset" type="button">Clear</button>
        </div>
        <div class="cv-conversation" role="log" aria-label="Site and CV search conversation" aria-live="polite" aria-relevant="additions text"></div>
        <div class="cv-error" role="alert" hidden></div>
        <form class="cv-compose">
          <label class="sr-only" for="cv-dossier-question">Search my site and CV</label>
          <textarea class="cv-input" id="cv-dossier-question" rows="1" maxlength="1200" placeholder="Ask about my work or experience…" required></textarea>
          <button class="cv-send" type="submit">Send</button>
        </form>
      </div></div>
    </section>`;

  const section = document.querySelector("#cv-dossier");
  const conversation = section.querySelector(".cv-conversation");
  const form = section.querySelector("form");
  const input = section.querySelector("textarea");
  const send = section.querySelector(".cv-send");
  const errorBox = section.querySelector(".cv-error");
  const paths = [
    "one-page.html", "work/career.html", "work/leadership.html",
    "work/research.html", "work/ai-native.html", "work/shipped.html",
    "work/system.html", "work/hxo.html", "work/experiential.html",
    "work/cognitive-research.html", "work/earlier-ux-ui.html",
    "publications.html", "technical_instruction.html",
  ];
  // Pages share the same artifact root, including on the publications page.
  const base = new URL("./", window.location.href);
  let corpus;
  let busy = false;
  let version = 0;
  let lastQuestion = "";

  function message(role, text) {
    const article = document.createElement("article");
    article.className = `cv-message cv-message-${role}`;
    const copy = document.createElement("p");
    copy.className = "cv-message-copy";
    copy.textContent = text;
    article.append(copy);
    conversation.append(article);
    conversation.scrollTop = conversation.scrollHeight;
    return article;
  }

  function extract(doc, url) {
    doc.querySelectorAll("script, style, nav, footer, iframe, form, [data-cv-dossier], #cv-dossier, [hidden], .bar, .social-bar, dialog, [role=dialog], .code-popup-overlay, .newsletter-overlay").forEach(node => node.remove());
    const title = doc.querySelector("h1")?.textContent.trim() || doc.title.split("—")[0].trim();
    const main = doc.querySelector("main") || doc.body;
    const seen = new Set();
    return [...main.querySelectorAll("p, li, tr, h2, h3, .hero-title, .hero-subtitle")]
      .filter(node => !node.parentElement?.closest("li, tr"))
      .flatMap(node => {
        const text = node.textContent.replace(/\s+/g, " ").trim();
        if (text.length < 45 || seen.has(text)) return [];
        seen.add(text);
        const sectionNode = node.closest("section[id], article[id], [id]");
        const anchor = sectionNode?.id ? `#${encodeURIComponent(sectionNode.id)}` : "";
        return [{ text, title, href: `${url.pathname}${anchor}` }];
      });
  }

  async function loadCorpus() {
    if (corpus) return { chunks: corpus, failed: [] };
    const current = new DOMParser().parseFromString(document.documentElement.outerHTML, "text/html");
    const homeChunks = window.location.pathname === base.pathname
      ? extract(current, base)
      : [];
    const urls = [...paths, ...(homeChunks.length ? [] : ["index.html"])];
    const results = await Promise.allSettled(urls.map(async path => {
      const url = new URL(path, base);
      const response = await fetch(url, { signal: AbortSignal.timeout(12000) });
      if (!response.ok) throw new Error(`Page unavailable: ${path}`);
      const html = await response.text();
      // A dev server may return the homepage for an unknown HTML path.
      if (!html.includes("<html") || (path.startsWith("work/") && html.includes('data-cv-dossier'))) {
        throw new Error(`Page unavailable: ${path}`);
      }
      return extract(new DOMParser().parseFromString(html, "text/html"), url);
    }));
    const chunks = [...homeChunks, ...results.flatMap(result => result.status === "fulfilled" ? result.value : [])];
    const failed = results.flatMap((result, i) => result.status === "rejected" ? [urls[i]] : []);
    if (!chunks.length) throw new Error("The site pages couldn’t load. Please retry.");
    if (!failed.length) corpus = chunks;
    return { chunks, failed };
  }

  async function ask(question, retry = false) {
    const query = question.trim();
    if (!query || busy) return;
    busy = true;
    send.disabled = true;
    errorBox.hidden = true;
    const requestVersion = version;
    lastQuestion = query;
    if (!retry) message("user", query);
    input.value = "";
    const loading = message("assistant", "Searching…");
    loading.classList.add("cv-loading");
    try {
      const { chunks, failed } = await loadCorpus();
      if (requestVersion !== version) return;
      const results = findMatches(query, chunks);
      const reply = message("assistant", results.length ? "Here’s what I found:" : "No matching details found. Try a name, role, project, or topic.");
      for (const result of results) {
        const item = document.createElement("div");
        item.className = "cv-result";
        const excerpt = document.createElement("p");
        excerpt.className = "cv-message-copy";
        excerpt.textContent = result.excerpt;
        const link = document.createElement("a");
        link.className = "cv-source";
        link.href = result.href;
        link.textContent = `${result.title} →`;
        item.append(excerpt, link);
        reply.append(item);
      }
      if (failed.length) {
        const note = document.createElement("p");
        note.className = "cv-message-copy";
        note.textContent = `Search incomplete: ${failed.length} page(s) unavailable. Send your question again to retry.`;
        reply.append(note);
      }
    } catch (error) {
      if (requestVersion !== version) return;
      errorBox.replaceChildren();
      const text = document.createElement("span");
      text.textContent = error instanceof Error ? error.message : "Search unavailable. Please retry.";
      const retryButton = document.createElement("button");
      retryButton.type = "button";
      retryButton.textContent = "Retry";
      retryButton.addEventListener("click", () => ask(lastQuestion, true));
      errorBox.append(text, retryButton);
      errorBox.hidden = false;
    } finally {
      loading.remove();
      if (requestVersion === version) {
        busy = false;
        send.disabled = false;
        conversation.scrollTop = conversation.scrollHeight;
      }
    }
  }

  message("assistant", "What would you like to find?");
  form.addEventListener("submit", event => {
    event.preventDefault();
    ask(input.value);
  });
  input.addEventListener("keydown", event => {
    if (event.key === "Enter" && !event.shiftKey && !event.isComposing) {
      event.preventDefault();
      form.requestSubmit();
    }
  });
  section.querySelector(".cv-reset").addEventListener("click", () => {
    version++;
    busy = false;
    send.disabled = false;
    errorBox.hidden = true;
    conversation.replaceChildren();
    input.value = "";
    lastQuestion = "";
    message("assistant", "What would you like to find?");
    input.focus();
  });
}
