#!/usr/bin/env node
'use strict';

const fs   = require('fs');
const path = require('path');

const { ARTICLES } = require('../public/data/articles.js');

const BASE_URL  = 'https://themotorcitymouth.com';
const PUBLIC    = path.resolve(__dirname, '../public');
const OUT_DIR   = path.join(PUBLIC, 'articles');

fs.mkdirSync(OUT_DIR, { recursive: true });

// ── Helpers ──────────────────────────────────────────────────────

function esc(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
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

// Fix image paths in body HTML: src="images/..." → src="/images/..."
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
  const url      = `${BASE_URL}/articles/${article.id}.html`;
  const imgUrl   = article.image
    ? `${BASE_URL}/${article.image}`
    : `${BASE_URL}/images/og-image.svg`;
  const desc     = metaDescription(article);
  const section  = sectionLabel(article.section);
  const body     = fixImagePaths(article.body);
  const pubDate  = new Date(article.date).toISOString();

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${esc(article.headline)} — The Motorcity Mouth</title>

  <!-- SEO -->
  <meta name="description" content="${esc(desc)}" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="${url}" />
  <meta name="author" content="${esc(article.byline.replace(/^By\s+/i, ''))}" />

  <!-- Open Graph -->
  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="The Motorcity Mouth" />
  <meta property="og:title" content="${esc(article.headline)}" />
  <meta property="og:description" content="${esc(desc)}" />
  <meta property="og:url" content="${url}" />
  <meta property="og:image" content="${imgUrl}" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="${esc(article.headline)}" />
  <meta property="og:locale" content="en_US" />
  <meta property="article:published_time" content="${pubDate}" />
  <meta property="article:section" content="${esc(section)}" />

  <!-- Twitter / X Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${esc(article.headline)}" />
  <meta name="twitter:description" content="${esc(desc)}" />
  <meta name="twitter:image" content="${imgUrl}" />
  <meta name="twitter:image:alt" content="${esc(article.headline)}" />

  <!-- Structured Data -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": "${esc(article.headline)}",
    "description": "${esc(desc)}",
    "url": "${url}",
    "datePublished": "${pubDate}",
    "image": "${imgUrl}",
    "author": {
      "@type": "Person",
      "name": "${esc(article.byline.replace(/^By\s+/i, ''))}"
    },
    "publisher": {
      "@type": "NewsMediaOrganization",
      "name": "The Motorcity Mouth",
      "url": "${BASE_URL}",
      "logo": "${BASE_URL}/favicon.svg"
    },
    "articleSection": "${esc(section)}",
    "genre": "Satire"
  }
  </script>

  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
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
      margin-bottom: 28px;
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
    }
  </style>
</head>
<body>

  <header class="site-header">
    <a href="/">The Motorcity Mouth</a>
    <div class="site-tagline">Detroit&rsquo;s Most Trusted News Source</div>
  </header>

  <div class="back-bar">
    <a href="/">&#8592; All Stories</a>
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
    ${article.image ? `<figure class="article-hero">
      <img src="../${article.image}" alt="${esc(article.headline)}">
      ${article.imageCaption ? `<figcaption>${esc(article.imageCaption)}</figcaption>` : ''}
    </figure>` : ''}
    <div class="article-body">
      ${body}
    </div>
  </article>

  <footer class="article-footer">
    <a href="/">The Motorcity Mouth</a>
    &nbsp;&middot;&nbsp;
    Detroit&rsquo;s Most Trusted News Source
    &nbsp;&middot;&nbsp;
    &copy; 2026
  </footer>

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

// ── sitemap.xml ───────────────────────────────────────────────────

const today = new Date().toISOString().slice(0, 10);

const sitemapEntries = ARTICLES.map(a => {
  const pubDate = new Date(a.date).toISOString().slice(0, 10);
  return `  <url>
    <loc>${BASE_URL}/articles/${a.id}.html</loc>
    <lastmod>${pubDate}</lastmod>
    <changefreq>never</changefreq>
    <priority>0.8</priority>
  </url>`;
}).join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${BASE_URL}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
${sitemapEntries}
</urlset>
`;

fs.writeFileSync(path.join(PUBLIC, 'sitemap.xml'), sitemap, 'utf8');
console.log('\n  ✓  sitemap.xml');

// ── robots.txt ────────────────────────────────────────────────────

const robots = `User-agent: *
Allow: /

Sitemap: ${BASE_URL}/sitemap.xml
`;

fs.writeFileSync(path.join(PUBLIC, 'robots.txt'), robots, 'utf8');
console.log('  ✓  robots.txt');

console.log(`\nDone. Generated ${count} article pages.\n`);
