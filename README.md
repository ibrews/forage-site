# Forage Site

This repository contains the static landing page for **Forage**, an AI-first asset scout for Unreal Engine and Fab libraries. It presents the product, links to the live waitlist, and provides a newsletter signup that opens a prefilled email instead of sending data to a backend.

🔗 **Live:** https://ibrews.github.io/forage-site/

A tiny static site — plain HTML/CSS/JS, no framework, no build step. Just open `index.html`.

```
index.html    # the page
styles.css    # Spatial Deck visual language (dark, Space Grotesk, teal/purple/amber)
app.js         # twinkling-stars canvas + signup form handling
social.html   # 1200×630 OpenGraph/Twitter card source
social.png    # rendered card (used for link unfurls)
```

## Quickstart

```bash
python3 -m http.server 8000
```

Open http://localhost:8000.

## Things to Try

1. **Open the local preview** — the Forage hero, feature cards, terminal demo, and animated star field should render without a build step.
2. **Select "Wishlist it!"** — the button should open the Forage waitlist on alexcoulombepresents.com.
3. **Submit an invalid newsletter address** — the page should keep focus on the email field and display “Hmm, that email looks off — mind checking it?”
4. **Submit a valid newsletter address** — your mail client should open with a message addressed to `info@alexcoulombepresents.com`, and the page should briefly confirm the handoff.
5. **Enable reduced motion and reload** — the page should keep the star canvas static while preserving the rest of the layout.

## Re-rendering the social card

```bash
chrome --headless=new --window-size=1200,630 --screenshot=social.png social.html
```

## Heads up — the signup forms

**"Wishlist it!"** now links out to [alexcoulombepresents.com/lab/forage#waitlist](https://www.alexcoulombepresents.com/lab/forage#waitlist),
where the real Stripe/Neon/Resend-backed signup form lives (same infra as the rest of that site).
That page also has real usage docs, screenshots, and the trailer — this landing page is just the
front door now.

**"Join my newsletter!"** is still **not wired to a real backend.** It opens a pre-filled `mailto:`
to **info@alexcoulombepresents.com**, so signups still reach an inbox honestly. See the
`TODO(forage)` comment in `index.html` if this one gets wired up too.

---

Forage itself (the CLI + MCP tool) lives in a separate repo. This is just the marketing front door.
Built by [Alex Coulombe Presents](https://github.com/ibrews).

## Support

If you like seeing this kind of thing get built and shared, [donations are always welcome](https://www.alexcoulombepresents.com/support) — they buy hardware, render time, and the freedom to keep giving most of this away.
