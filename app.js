/* Forage landing — twinkling stars + honest mailto signup stub.
   No analytics, no backend. See the TODO in index.html re: wiring a real list. */

/* ---------- twinkling stars ---------- */
(function stars() {
  const c = document.getElementById("stars");
  if (!c || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const ctx = c.getContext("2d");
  let w, h, pts;

  function seed() {
    w = c.width = window.innerWidth;
    h = c.height = window.innerHeight;
    const n = Math.min(160, Math.floor((w * h) / 9000));
    pts = Array.from({ length: n }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.3 + 0.3,
      a: Math.random(),
      s: Math.random() * 0.015 + 0.004,
      // tint a few stars teal/purple, most white
      c: Math.random() < 0.18 ? "94,234,212" : Math.random() < 0.3 ? "155,140,255" : "255,255,255",
    }));
  }

  function tick() {
    ctx.clearRect(0, 0, w, h);
    for (const p of pts) {
      p.a += p.s;
      const tw = 0.35 + Math.abs(Math.sin(p.a)) * 0.65;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.c},${tw})`;
      ctx.fill();
    }
    requestAnimationFrame(tick);
  }

  seed();
  tick();
  let t;
  window.addEventListener("resize", () => {
    clearTimeout(t);
    t = setTimeout(seed, 150);
  });
})();

/* ---------- signup forms (honest mailto stub) ---------- */
(function signup() {
  const valid = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

  document.querySelectorAll("form.signup").forEach((form) => {
    const note = form.parentElement.querySelector('[data-role="note"]');
    const input = form.querySelector('input[type="email"]');
    const original = note ? note.textContent : "";

    form.addEventListener("submit", (ev) => {
      ev.preventDefault();
      const email = input.value.trim();
      if (!valid(email)) {
        if (note) {
          note.textContent = "Hmm, that email looks off — mind checking it?";
          note.classList.remove("ok");
        }
        input.focus();
        return;
      }

      // Honest stub: open the visitor's mail client with a pre-filled message
      // to the capture inbox. No backend = no silent black hole.
      const to = form.dataset.mailto || "info@alexcoulombepresents.com";
      const subject = form.dataset.subject || "Forage signup";
      const body =
        `Add me to the Forage ${form.dataset.list || ""} list: ${email}\n\n` +
        `(sent from ibrews.github.io/forage-site)`;
      const href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      window.location.href = href;

      if (note) {
        note.textContent = "Opening your email — just hit send and you're on the list! 🍃";
        note.classList.add("ok");
      }
      input.value = "";
      // restore the helper text after a bit
      setTimeout(() => {
        if (note) {
          note.textContent = original;
          note.classList.remove("ok");
        }
      }, 9000);
    });
  });
})();
