# Homepage asset checks

Run from the workspace root:

```sh
pnpm --filter @workspace/e-hannan-design-portfolio run check:assets
pnpm --filter @workspace/e-hannan-design-portfolio run test:assets
```

The dependency-free check verifies literal homepage `src`, `href`, and `poster`
targets, inline CSS `url()` references, and URLs in linked CSS files. It resolves
public assets and Vite source imports, strips query strings, and requires an
explicit favicon declaration. Missing files produce a nonzero exit code.

It does not crawl linked HTML pages, validate fragment IDs, check external
websites, evaluate JavaScript-generated URLs, or inspect preview-tool requests.
Those require separate checks; this is not an end-to-end browser test.

The homepage's original console 404 was identified in Chromium's network log as
`GET /favicon.ico` (`HTTP/1.1 404 Not Found`), the browser's implicit favicon
request. Declaring the existing EH SVG logo as the icon removes that request
without changing visible page content or preview tooling.
