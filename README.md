# The Motorcity Mouth

A Detroit satirical newspaper website. Reads like a real local paper. Is not.

**Live site:** motorcitymouth.com  
**Hosting:** Firebase Hosting (project: `motorcity-mouth`)  
**Contact:** motorcitymouth@spaceflotsam.com

---

## How It Works

The entire site is a single file: `public/index.html`. No framework, no build step, no dependencies to install. All styles, all JavaScript, and all article content live in that one file.

Navigation is hash-based — clicking around changes the URL hash (e.g. `#politics`, `#article/kwame-kilpatrick-2029`) and JavaScript re-renders the page content without any full reload.

### Pages / Routes

| Hash | What renders |
|------|-------------|
| `#front` (default) | Front page with lead story, sidebar, lower grid, horrorscope preview, and live Detroit weather |
| `#politics` | Section page listing all Politics articles |
| `#world` | World News section |
| `#local` | Local section |
| `#trending` | Trending section |
| `#columns` | Weekly Columns landing (aggregates all column sub-sections) |
| `#horrorscopes` | Full page: Dave's Horrorscopes for all 12 signs |
| `#let-me-finish` | "Let Me Finish" column section |
| `#aunt-ruthie` | "Ask Aunt Ruthie" column section |
| `#burn-notice` | "The Burn Notice" column section |
| `#motor-city-beat` | "Motor City Beat" column section |
| `#article/<id>` | Full article page |

### Live Features

- **Weather widget** — front page pulls current Detroit conditions from the free [Open-Meteo API](https://open-meteo.com/) (no API key required). Coordinates are hardcoded to Detroit (42.3314°N, 83.0458°W). Falls back gracefully if the fetch fails.
- **Horrorscope preview** — front page automatically detects today's zodiac sign and shows the matching blurb from the `HORRORSCOPES` data object.
- **Live date** — the top strip shows today's date, set by JavaScript on load.

---

## File Structure

```
motorcity-mouth/
├── public/                  ← Everything Firebase serves lives here
│   ├── index.html           ← The entire site (styles + JS + content)
│   └── images/              ← Article images referenced in ARTICLES array
├── firebase.json            ← Firebase Hosting config (serves public/)
├── .firebaserc              ← Firebase project ID (motorcity-mouth)
├── articles/                ← Raw article drafts as .txt files (reference only)
├── examples/                ← PDF mockups / design examples (reference only)
└── .firebase/               ← Firebase CLI cache (auto-generated, ignore)
```

The `articles/` and `examples/` folders are working files and are not served to the web.

---

## Adding or Updating an Article

All articles are in the `ARTICLES` array near the top of `public/index.html` (look for the large comment block starting with `// ARTICLES`). Each article is a JavaScript object:

```js
{
  id:           'unique-slug',        // URL slug — letters, numbers, hyphens only
  headline:     'Article Headline',
  deck:         'Subheadline here',   // optional — leave '' to omit
  section:      'politics',           // see valid sections below
  featured:     true,                 // true = lead story on front page (only one at a time)
  frontPage:    true,                 // true = appears in front page lower grid
  byline:       'By Staff Reporter',
  date:         'April 18, 2026',
  lede:         'Opening paragraph text…',  // used in teasers/cards
  body:         `<p>Full article HTML…</p>`, // full text, use <p> tags
  image:        'images/my-image.jpg',       // path relative to public/ — or null
  imageCaption: 'Caption text here.',        // only shown when image is set
}
```

**Valid section values:**

| Section | Where it appears |
|---------|-----------------|
| `politics` | Politics section |
| `world` | World News section |
| `local` | Local section |
| `trending` | Trending section |
| `horrorscopes` | Dave's Horrorscopes (special — see below) |
| `let-me-finish` | Let Me Finish column |
| `aunt-ruthie` | Ask Aunt Ruthie column |
| `burn-notice` | The Burn Notice column |
| `motor-city-beat` | Motor City Beat column |

**Front page layout rules:**
- Exactly one article should have `featured: true` — this becomes the large lead story.
- Articles with `frontPage: true` (and not featured) appear in the lower three-column grid.
- The sidebar on the front page shows the first 4 articles in the array that aren't the featured one — order in the array controls what shows up there.

**To remove an article:** delete its object from the `ARTICLES` array.

**Images:** drop the file into `public/images/` and set `image: 'images/filename.jpg'` in the article object.

---

## Updating the Horrorscopes

The horrorscopes are a separate `HORRORSCOPES` object in `index.html`, just below the `ARTICLES` array. It has two parts:

- **`intro`** — HTML string shown at the top of the Horrorscopes page. Dave's intro paragraph.
- **`signs`** — Array of 12 sign objects. Each has `symbol`, `name`, `dates`, `key`, and `text`. Update `text` to change that sign's weekly blurb. The front page automatically shows the current sign's blurb based on today's date.

---

## Deploying

The site is hosted on Firebase. To deploy after making changes:

```bash
# Install Firebase CLI if you haven't
npm install -g firebase-tools

# Log in
firebase login

# Deploy from the project root
firebase deploy
```

Firebase serves everything in the `public/` folder. That's it — one command, site is live.

---

## Design Notes

The site uses Google Fonts (loaded via CDN — no download needed):
- **Libre Bodoni** — masthead
- **Playfair Display** — headlines
- **Libre Baskerville** — body text
- **Barlow Condensed** — labels, nav, metadata
- **IM Fell English** — decks and pull quotes

Color palette is defined as CSS variables at the top of the `<style>` block:
- `--paper`: `#f5f0e8` (warm off-white background)
- `--ink`: `#0d0d0d` (near-black text)
- `--accent`: `#8b1a1a` (deep red — section labels, links, drop caps)
- `--muted`: `#4a4a4a` (secondary text)

The layout is fully responsive with breakpoints at 800px (tablet) and 540px (mobile). Mobile nav collapses to a hamburger menu.
