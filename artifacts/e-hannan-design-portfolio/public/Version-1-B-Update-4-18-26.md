Version 1.B — Update 4-18-26
Master Reproduction Prompt: Section Dividers & Section Number Format
Scope: Two static HTML files — index.html and publications.html. These changes layer on top of Version 1.A. Apply to the existing <style> block in both files. No HTML structural changes are required except the CSS additions below.

CONTEXT: WHAT THESE PROMPTS CHANGED
Prompt 3 introduced section dividers throughout the site. Prompt 4 refined those dividers to be centered/contained, made them fade at the edges, applied selective skipping before dark or continuous-flow sections, and changed all section numbers from 05 to // 05.

CHANGE 1 — SECTION DIVIDERS
Design Intent
A thin horizontal hairline appears between sections. It must:
* Be centered and contained — it does not stretch edge-to-edge. It respects the same max-width: 1100px as the .section-inner content column.
* Leave open space on both sides — the section's background color shows on the left and right margins, outside the line.
* Fade at both ends — the line dissolves into transparency at 8% from the left and 8% from the right, so it has no hard termination points.
* Skip certain sections — sections that already create a visual break via a dark background do not get a divider above them. The line only appears between light/cream sections.
Implementation — Both files
In the <style> block, immediately after the body { ... } rule, insert:
section + section::before {
content: '';
display: block;
height: 1px;
background: linear-gradient(
to right,
transparent,
var(--rule) 8%,
var(--rule) 92%,
transparent
);
max-width: 1100px;
margin: 0 auto;
}

How it works:
* section + section targets every section that immediately follows another section.
* ::before inserts a pseudo-element as the very first thing inside that section, before any padding or content.
* Because sections have no direct padding (the inner .section-inner div carries the padding), the pseudo-element renders as a 1px line flush at the top boundary of the section — visually appearing between the two sections.
* max-width: 1100px + margin: 0 auto centers and caps the line at the content column width. The section's own background bleeds to the viewport edges on both sides, creating the "open space" effect.
* The linear-gradient fades from transparent → var(--rule) at 8% → solid until 92% → transparent. --rule is #c8bfb0 (warm taupe).
Selective Skip Rules
Do not render a divider above the following sections because they open with a dark background that already creates a visual break:
index.html only — add after the section + section::before rule:
section + #projects::before,
section + .publications-section::before,
section + .patent-section::before,
section + .wkiva-section::before,
section + .newsletter-section::before {
display: none;
}

publications.html only — add after the section + section::before rule:
section + .videos-section::before {
display: none;
}

What to skip and why
Suppressed section	Reason
#projects (index)	Immediately follows the research section with the same background tone — no visual gap needed
.publications-section (index)	Opens with background: var(--accent-dark) (dark teal) — provides its own hard visual boundary
.patent-section (index)	Opens with background: var(--accent-dark) (dark teal)
.wkiva-section (index)	Dark background scrolling marquee section
.newsletter-section (index)	Dark footer-style section
.videos-section (publications)	Opens with background: var(--accent-dark) (dark teal)
Cleanup: Remove pre-existing inline border styles
Before these changes, some sections had inline border-top or border-bottom styles. Remove them to avoid double lines:
index.html — the #projects section previously had:
<section id="projects" style="background:var(--warm-white);border-top:1px solid var(--rule);">

Change to:
<section id="projects" style="background:var(--warm-white);">

publications.html — the first <section> (Research Statement) previously had:
<section style="background:var(--warm-white); border-bottom:1px solid var(--rule);">

Change to:
<section style="background:var(--warm-white);">


CHANGE 2 — SECTION NUMBER FORMAT: // 05
Design Intent
All section counters (00, 01, 02 … 09) are displayed with a double-slash typographic prefix: // 00, // 01, etc. The slashes are rendered at 50% opacity so they read as a decorative mark rather than content.
Implementation — Both files
Find the existing .section-number rule in each file's <style> block and add a ::before pseudo-element directly below it.
index.html — existing rule is:
.section-number { font-family: var(--mono); font-size: 0.82rem; letter-spacing: 0.15em; color: var(--muted); }

Add immediately after:
.section-number::before { content: '// '; opacity: 0.5; }

publications.html — existing rule is:
.section-number { font-family: var(--mono); font-size: 0.6rem; letter-spacing: 0.15em; color: var(--muted); }

Add immediately after:
.section-number::before { content: '// '; opacity: 0.5; }

How it works:
* ::before inserts a pseudo-element before the text content of every .section-number span.
* content: '// ' — two forward slashes followed by a space. The space provides visual separation between the slashes and the number.
* opacity: 0.5 — renders the slashes at half opacity relative to the number itself. Since the number uses color: var(--muted) (#6b6358), the slashes appear even more muted.
* This change requires zero HTML modifications — every .section-number span across both files automatically gets the prefix.
* In dark sections (.publications-section, .patent-section, .videos-section) where .section-number has an overriding color rule like color: rgba(255,255,255,0.35), the ::before inherits that same color and renders the slashes at 50% of that value — so dark-section section numbers display correctly without additional rules.
Affected sections
Every section header on both pages is affected:
index.html:
* // 00 — The Polymath Genesis
* // 01 — Research Statement
* // 02 — Research Projects
* // 03 — Publications & Papers
* // 04 — Philanthropy & Mission
* // 05 — Code & Technical Work
* // 06 — Patents & IP
* // 07 — Transparent ESG Algorithm
* // 08 — Professional Background
* // 09 — Education
publications.html:
* // 01 — Research Statement
* // 02 — Recent Papers
* // 03 — Research & Portfolio Works
* // 04 — Philanthropy Documents
* // 05 — Code & Technical Work

COMPLETE CSS BLOCK TO INSERT — Both files
Insert both rules together in the <style> block, immediately after body { ... }:
/* ── Centered section dividers ── */
section + section::before {
content: '';
display: block;
height: 1px;
background: linear-gradient(to right, transparent, var(--rule) 8%, var(--rule) 92%, transparent);
max-width: 1100px;
margin: 0 auto;
}

Then add file-specific skip rules as described above.
And, alongside the existing .section-number rule:
/* ── "// 05" number format ── */
.section-number::before { content: '// '; opacity: 0.5; }


VARIABLE DEPENDENCY
These changes depend on one existing CSS variable:
Variable	Value	Used for
--rule	#c8bfb0	Divider line color (warm taupe)
 
This variable must already be declared in :root. It was part of the original site — do not change its value.

WHAT DOES NOT CHANGE
* Section background colors — untouched
* Section content, headings, descriptions — untouched
* Font families, weights, sizes (other than the // prefix addition) — untouched
* Modal / popup behaviors — untouched
* Neumorphic shadows on cards and buttons — untouched
* Navigation, hero, footer — untouched

End of Version 1.B — Update 4-18-26
