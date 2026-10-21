(function () {
  const C = window.SITE_CONFIG, $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const wa = (num, msg) => `https://wa.me/${(num || "").replace(/\D/g, "")}?text=${encodeURIComponent(msg)}`;
  const el = (html) => { const t = document.createElement("template"); t.innerHTML = html.trim(); return t.content.firstChild; };
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const P = (a) => `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${a}</svg>`;
  const ICONS = {
    print: P('<path d="M7 9V3h10v6"/><rect x="3" y="9" width="18" height="8" rx="2"/><path d="M7 14h10v7H7z"/>'),
    scan: P('<path d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3M3 12h18"/>'),
    type: P('<rect x="3" y="6" width="18" height="12" rx="2"/><path d="M7 10h.01M11 10h.01M15 10h.01M7 14h10"/>'),
    cv: P('<path d="M6 3h9l4 4v14H6z"/><path d="M14 3v5h5M9 13h6M9 17h6"/>'),
    apply: P('<rect x="4" y="3" width="16" height="18" rx="2"/><path d="m8 12 3 3 5-6"/>'),
    gov: P('<path d="M3 10 12 4l9 6M5 10v8M10 10v8M14 10v8M19 10v8M3 20h18"/>'),
    computer: P('<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>'),
    web: P('<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M7 6.5h.01M10 6.5h.01"/>'),
    page: P('<rect x="6" y="3" width="12" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h3"/>'),
    portfolio: P('<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M3 13h18"/>'),
    coin: P('<circle cx="12" cy="12" r="9"/><path d="M14.5 9.5C14 8.5 13 8 12 8c-1.5 0-2.5.8-2.5 2s1 1.7 2.5 2 2.5.8 2.5 2-1 2-2.5 2c-1 0-2-.5-2.5-1.5M12 6.5V8m0 8v1.5"/>'),
    star: P('<path d="m12 3 2.8 5.7 6.2.9-4.500 4.400 1 6.200L12 17.200l-5.500 3 1-6.200L3 9.600l6.200-.9z"/>')
  };

  const toggle = $(".nav-toggle"), nav = $("#site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => { const open = nav.classList.toggle("open"); toggle.setAttribute("aria-expanded", open); });
    $$("a", nav).forEach((a) => a.addEventListener("click", () => { nav.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); }));
  }

  $$("[data-year]").forEach((n) => (n.textContent = new Date().getFullYear()));
  $$("[data-wa]").forEach((a) => {
    const c = C[a.dataset.wa];
    a.href = wa(c.whatsappNumber, c.whatsappMessage);
    a.target = "_blank"; a.rel = "noopener noreferrer";
  });

  const S = C.spintech;
  $$("[data-slot]").forEach((n) => {
    const v = S[n.dataset.slot];
    if (v) { n.textContent = v; if (n.dataset.slot === "phoneDisplay") n.href = "tel:" + v.replace(/[^\d+]/g, ""); if (n.dataset.slot === "email") n.href = "mailto:" + v; }
    else { n.textContent = n.dataset.placeholder; n.classList.add("placeholder"); n.removeAttribute("href"); }
  });
  $$("[data-maps]").forEach((a) => { if (S.mapsLink) { a.href = S.mapsLink; a.target = "_blank"; a.rel = "noopener noreferrer"; } });
  const map = $("#map");
  if (map && S.mapEmbedUrl) { map.innerHTML = `<iframe src="${esc(S.mapEmbedUrl)}" title="SpinTech Cyber location map" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>`; map.style.padding = "0"; }

  const cards = (id, list) => { const g = $(id); if (g) list.forEach((s) => g.append(el(`<article class="card"><span class="icon">${ICONS[s.icon] || ICONS.star}</span><h3>${esc(s.title)}</h3><p>${esc(s.text)}</p></article>`))); };
  cards("#services-grid", S.services);
  cards("#studio-services", C.studio.services);

  const fit = () => $$("[data-shot]").forEach((box) => {
    const f = $("iframe", box); if (!f || box.dataset.ready) return; box.dataset.ready = 1;
    const set = () => (f.style.transform = `scale(${box.clientWidth / 1280})`);
    set(); if (window.ResizeObserver) new ResizeObserver(set).observe(box);
  });
  const pg = $("#portfolio-grid");
  if (pg) C.studio.portfolio.forEach((p, i) => {
    const open = p.link ? `<a class="work" href="${esc(p.link)}" target="_blank" rel="noopener noreferrer">` : `<div class="work">`;
    pg.append(el(`${open}${p.image ? `<div class="shot"><img src="${esc(p.image)}" alt="${esc(p.title)} preview" loading="lazy"></div>` : p.link ? `<div class="shot" data-shot><iframe src="${esc(p.link)}" title="Preview of ${esc(p.title)}" loading="lazy" tabindex="-1" sandbox="allow-scripts allow-same-origin"></iframe></div>` : `<div class="mock mock-${i % 3}" aria-hidden="true"><i></i><i></i><i></i></div>`}<h3>${esc(p.title)}</h3><p>${esc(p.type)}${p.link ? ' · <span class="visit">View site &rarr;</span>' : ""}</p>${p.link ? "</a>" : "</div>"}`));
  });
  fit();
  const pr = $("#pricing-grid");
  if (pr) C.studio.pricing.forEach((t) => pr.append(el(`<article class="plan"><h3>${esc(t.name)}</h3><p class="from">${t.price ? "Price range" : "Starting price"}</p><p class="price">${t.price ? esc(t.price) : "On request"}</p><p>${esc(t.note)}</p><ul>${t.features.map((f) => `<li>${esc(f)}</li>`).join("")}</ul></article>`)));
})();
