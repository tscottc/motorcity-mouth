#!/usr/bin/env node
'use strict';

// Generates the archived broadsheet article pages (public/articles-alt/*.html).
// This is the DEMOTED previous design — kept as a reference/rollback copy.
// Does NOT touch public/articles/, sitemap.xml, or robots.txt, which belong
// to the live site and are owned by scripts/generate-articles.js.

const fs   = require('fs');
const path = require('path');

const { ARTICLES } = require('../public/data/articles.js');

const BASE_URL  = 'https://themotorcitymouth.com';
const PUBLIC    = path.resolve(__dirname, '../public');
const OUT_DIR   = path.join(PUBLIC, 'articles-alt');

fs.mkdirSync(OUT_DIR, { recursive: true });

// ── Helpers ──────────────────────────────────────────────────────

function esc(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function escJson(str) {
  return String(str)
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '\\r')
    .replace(/\t/g, '\\t');
}

function sectionLabel(id) {
  const map = {
    politics: 'Politics',
    world:    'World News',
    local:    'Local',
    trending: 'Trending',
    columns:  'Weekly Columns',
  };
  return map[id] || id.charAt(0).toUpperCase() + id.slice(1);
}

// Fix image paths in body HTML: src="images/..." → src="../images/..."
// Article pages live at /articles/{id}.html so relative paths would break.
function fixImagePaths(html) {
  return html.replace(/src="images\//g, 'src="../images/');
}

// Strip HTML tags for plain-text meta description
function stripTags(html) {
  return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

function metaDescription(article) {
  if (article.deck) return article.deck;
  if (article.lede) return article.lede.slice(0, 160);
  return stripTags(article.body).slice(0, 160);
}

// ── Article page template ─────────────────────────────────────────

function articleHtml(article) {
  const url      = `${BASE_URL}/articles-alt/${article.id}.html`;
  const desc     = metaDescription(article);
  const section  = sectionLabel(article.section);
  const body     = fixImagePaths(article.body);

  const fbHref  = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url);
  const twHref  = 'https://twitter.com/intent/tweet?url=' + encodeURIComponent(url) + '&text=' + encodeURIComponent(article.headline);
  const smsHref = 'sms:?body=' + encodeURIComponent(article.headline + ' — ' + url);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${esc(article.headline)} — The Motorcity Mouth (Archived Design)</title>
  <meta name="theme-color" content="#f5f0e8" />
  <meta name="robots" content="noindex, nofollow" />

  <meta name="description" content="${esc(desc)}" />

  <link rel="icon" type="image/svg+xml" href="../favicon.svg" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Libre+Bodoni:ital,wght@0,400;0,700;1,400&family=Barlow+Condensed:wght@400;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=IM+Fell+English:ital@0;1&display=swap" rel="stylesheet">

  <style>
    :root {
      --ink: #0d0d0d;
      --paper: #f5f0e8;
      --rule: #1a1a1a;
      --accent: #8b1a1a;
      --muted: #4a4a4a;
      --light-rule: #c8c0b0;
    }

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    html { font-size: 18px; scroll-behavior: smooth; }

    body {
      background: var(--paper);
      color: var(--ink);
      font-family: 'Libre Baskerville', Georgia, serif;
      max-width: 860px;
      margin: 0 auto;
      padding: 0 24px 60px;
    }

    /* ── Site header ── */
    .site-header {
      border-bottom: 4px double var(--rule);
      padding: 18px 0 12px;
      margin-bottom: 0;
      text-align: center;
    }

    .site-header a {
      font-family: 'Libre Bodoni', 'Playfair Display', Georgia, serif;
      font-size: 2.4rem;
      font-weight: 700;
      letter-spacing: 0.04em;
      color: var(--ink);
      text-decoration: none;
      text-transform: uppercase;
    }

    .site-header a:hover { color: var(--accent); }

    .site-tagline {
      font-family: 'Barlow Condensed', sans-serif;
      font-size: 0.75rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--muted);
      margin-top: 4px;
    }

    .back-bar {
      font-family: 'Barlow Condensed', sans-serif;
      font-size: 0.72rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      padding: 8px 0;
      border-bottom: 1px solid var(--light-rule);
      margin-bottom: 32px;
    }

    .back-bar a {
      color: var(--accent);
      text-decoration: none;
    }

    .back-bar a:hover { text-decoration: underline; }

    /* ── Article ── */
    .article-section {
      font-family: 'Barlow Condensed', sans-serif;
      font-size: 0.72rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--accent);
      font-weight: 600;
      margin-bottom: 10px;
    }

    .article-headline {
      font-family: 'Playfair Display', Georgia, serif;
      font-size: 2.4rem;
      font-weight: 700;
      line-height: 1.18;
      margin-bottom: 14px;
      color: var(--ink);
    }

    .article-deck {
      font-family: 'Libre Baskerville', Georgia, serif;
      font-size: 1.1rem;
      font-style: italic;
      color: var(--muted);
      line-height: 1.5;
      margin-bottom: 18px;
      padding-bottom: 18px;
      border-bottom: 1px solid var(--light-rule);
    }

    .article-meta {
      font-family: 'Barlow Condensed', sans-serif;
      font-size: 0.78rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--muted);
      margin-bottom: 18px;
    }

    .article-meta .byline { color: var(--ink); font-weight: 600; }

    .article-hero {
      margin: 0 0 1.6em 0;
    }

    .article-hero img {
      width: 100%;
      display: block;
      max-height: 520px;
      object-fit: cover;
    }

    .article-hero figcaption {
      font-family: 'Barlow Condensed', sans-serif;
      font-size: 0.65rem;
      letter-spacing: 0.07em;
      text-transform: uppercase;
      color: var(--muted);
      margin-top: 6px;
      line-height: 1.55;
    }

    .article-body {
      font-size: 1.05rem;
      line-height: 1.85;
    }

    .article-body p {
      margin-bottom: 1.3em;
    }

    .article-body figure {
      margin: 0.2em 0 1em 0;
    }

    .article-body figcaption {
      font-family: 'Barlow Condensed', sans-serif;
      font-size: 0.6rem;
      letter-spacing: 0.07em;
      text-transform: uppercase;
      color: var(--muted);
      margin-top: 6px;
      line-height: 1.55;
    }

    .article-body ul, .article-body ol {
      margin: 0 0 1.3em 1.4em;
      padding: 0;
      line-height: 1.85;
    }

    .article-body strong { font-weight: 700; }
    .article-body em { font-style: italic; }

    /* ── Share bar ── */
    .share-bar {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .share-bar--top {
      margin-bottom: 22px;
    }
    .share-bar--bottom {
      margin-top: 32px;
      padding-top: 18px;
      border-top: 2px solid var(--rule);
      flex-wrap: wrap;
      gap: 10px;
    }
    .share-bar-label {
      font-family: 'Barlow Condensed', sans-serif;
      font-size: 0.6rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--muted);
      margin-right: 4px;
    }
    .share-btn {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      background: none;
      border: 1px solid var(--rule);
      color: var(--ink);
      cursor: pointer;
      font-family: 'Barlow Condensed', sans-serif;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      text-decoration: none;
      transition: background 0.12s, color 0.12s;
      line-height: 1;
    }
    .share-bar--top .share-btn {
      padding: 5px 7px;
      font-size: 0;
    }
    .share-bar--bottom .share-btn {
      padding: 7px 14px;
      font-size: 0.62rem;
    }
    .share-btn svg { display: block; flex-shrink: 0; }
    .share-btn:hover,
    .share-btn--copied {
      background: var(--ink);
      color: var(--paper);
    }

    /* ── Footer ── */
    .article-footer {
      margin-top: 48px;
      padding-top: 18px;
      border-top: 3px solid var(--rule);
      font-family: 'Barlow Condensed', sans-serif;
      font-size: 0.75rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--muted);
      text-align: center;
    }

    .article-footer a {
      color: var(--accent);
      text-decoration: none;
    }

    .article-footer a:hover { text-decoration: underline; }

    @media (max-width: 600px) {
      body { padding: 0 14px 40px; }
      .site-header a { font-size: 1.7rem; }
      .article-headline { font-size: 1.7rem; }
      .share-bar--bottom { gap: 8px; }
      .share-bar--bottom .share-btn { padding: 7px 10px; }
    }

    .archived-badge {
      position: fixed;
      top: 14px;
      right: -46px;
      background: var(--accent);
      color: #fff;
      font-family: 'Barlow Condensed', sans-serif;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      padding: 6px 50px;
      transform: rotate(40deg);
      box-shadow: 0 2px 6px rgba(0,0,0,0.3);
      z-index: 999;
      pointer-events: none;
    }
  </style>
</head>
<body>

  <div class="archived-badge">Archived Design</div>

  <header class="site-header">
    <a href="../indexalt.html">The Motorcity Mouth</a>
    <div class="site-tagline">Detroit&rsquo;s Most Trusted News Source</div>
  </header>

  <div class="back-bar">
    <a href="../indexalt.html">&#8592; All Stories</a>
  </div>

  <article>
    <div class="article-section">${esc(section)}</div>
    <h1 class="article-headline">${esc(article.headline)}</h1>
    ${article.deck ? `<p class="article-deck">${esc(article.deck)}</p>` : ''}
    <div class="article-meta">
      <span class="byline">${esc(article.byline)}</span>
      &nbsp;&middot;&nbsp;
      <span class="date">${esc(article.date)}</span>
    </div>

    <div class="share-bar share-bar--top" aria-label="Share this article">
      <button class="share-btn share-copy-btn" onclick="copyLink()" title="Copy link" aria-label="Copy link">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zm4.1 1h8v-2H8zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg>
      </button>
      <a class="share-btn" href="${fbHref}" target="_blank" rel="noopener noreferrer" title="Share on Facebook" aria-label="Share on Facebook">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
      </a>
      <a class="share-btn" href="${twHref}" target="_blank" rel="noopener noreferrer" title="Post on X / Twitter" aria-label="Post on X / Twitter">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
      </a>
      <button class="share-btn" onclick="shareInstagram()" title="Share on Instagram" aria-label="Share on Instagram">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
      </button>
      <a class="share-btn" href="${smsHref}" title="Share via text message" aria-label="Share via text message">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>
      </a>
    </div>

    ${article.image ? `<figure class="article-hero">
      <img src="../${article.image}" alt="${esc(article.headline)}">
      ${article.imageCaption ? `<figcaption>${esc(article.imageCaption)}</figcaption>` : ''}
    </figure>` : ''}
    <div class="article-body">
      ${body}
    </div>

    <div class="share-bar share-bar--bottom" aria-label="Share this article">
      <span class="share-bar-label">Share</span>
      <button class="share-btn share-copy-btn" onclick="copyLink()" aria-label="Copy link">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zm4.1 1h8v-2H8zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg>
        <span class="share-copy-label">Copy Link</span>
      </button>
      <a class="share-btn" href="${fbHref}" target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
        <span>Facebook</span>
      </a>
      <a class="share-btn" href="${twHref}" target="_blank" rel="noopener noreferrer" aria-label="Post on X / Twitter">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        <span>Twitter / X</span>
      </a>
      <button class="share-btn" onclick="shareInstagram()" aria-label="Share on Instagram">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
        <span>Instagram</span>
      </button>
      <a class="share-btn" href="${smsHref}" aria-label="Share via text message">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>
        <span>Text</span>
      </a>
    </div>
  </article>

  <footer class="article-footer">
    <a href="../indexalt.html">The Motorcity Mouth</a>
    &nbsp;&middot;&nbsp;
    Detroit&rsquo;s Most Trusted News Source
    &nbsp;&middot;&nbsp;
    &copy; 2026
  </footer>

<script>
  var PAGE_URL   = '${url}';
  var PAGE_TITLE = '${escJson(article.headline)}';

  function copyLink() {
    navigator.clipboard.writeText(PAGE_URL).then(function() {
      document.querySelectorAll('.share-copy-btn').forEach(function(btn) {
        btn.classList.add('share-btn--copied');
        var lbl = btn.querySelector('.share-copy-label');
        if (lbl) {
          lbl.textContent = 'Copied!';
          setTimeout(function() { lbl.textContent = 'Copy Link'; }, 1800);
        }
        setTimeout(function() { btn.classList.remove('share-btn--copied'); }, 1800);
      });
    }).catch(function() {
      window.prompt('Copy this link:', PAGE_URL);
    });
  }

  function shareInstagram() {
    if (navigator.share) {
      navigator.share({ title: PAGE_TITLE, url: PAGE_URL }).catch(function() {});
    } else {
      copyLink();
    }
  }
</script>
</body>
</html>`;
}

// ── Generate pages ────────────────────────────────────────────────

let count = 0;
for (const article of ARTICLES) {
  const html = articleHtml(article);
  const outPath = path.join(OUT_DIR, `${article.id}.html`);
  fs.writeFileSync(outPath, html, 'utf8');
  count++;
  console.log(`  ✓  ${article.id}.html`);
}

console.log(`\nDone. Generated ${count} archived-design article pages in public/articles-alt/.\n`);
