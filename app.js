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
        note.textContent = "Your email app opened. Send the draft to request signup.";
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
