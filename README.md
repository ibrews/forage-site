# forage-site

Landing page for **Forage** — Fab's Ultimate Companion, an AI-first asset scout for Unreal Engine.

🔗 **Live:** https://ibrews.github.io/forage-site/

A tiny static site — plain HTML/CSS/JS, no framework, no build step. Just open `index.html`.

```
index.html    # the page
styles.css    # Spatial Deck visual language (dark, Space Grotesk, teal/purple/amber)
app.js         # twinkling-stars canvas + signup form handling
social.html   # 1200×630 OpenGraph/Twitter card source
social.png    # rendered card (used for link unfurls)
```

## Things to try

1. **Visit the live site** → https://ibrews.github.io/forage-site/
2. **Hit "Wishlist it!"** — drop your email to get pinged when Forage ships.
3. **Read the terminal demo** in the hero — it walks the `forage query` → `forage install` flow.
4. **Resize to mobile** — the layout reflows to a single column.
5. **Paste the URL** into Slack/Discord/X — the 1200×630 social card unfurls automatically.

## Local preview

```bash
python -m http.server 8000
# → http://localhost:8000
```

## Re-rendering the social card

```bash
chrome --headless=new --window-size=1200,630 --screenshot=social.png social.html
```

## Heads up — the signup forms

The **"Wishlist it!"** and **"Join my newsletter!"** forms are **not wired to a real backend yet.**
They open a pre-filled `mailto:` to **info@alexcoulombepresents.com**, so signups still reach an
inbox honestly. Before launch, swap in a real list (Buttondown / ConvertKit / Formspree / Worker) —
see the `TODO(forage)` comments in `index.html`.

---

Forage itself (the CLI + MCP tool) lives in a separate repo. This is just the marketing front door.
Built by [Alex Coulombe](https://twitter.com/ibrews) under the ibrews brand.
