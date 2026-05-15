(() => {
  const iconPaths = {
    download: '<path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path>',
    eye: '<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle>',
    shieldCheck: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path>',
    infinity: '<path d="M6 16c-1.657 0-3-1.343-3-3s1.343-3 3-3c4 0 6 6 10 6 1.657 0 3-1.343 3-3s-1.343-3-3-3c-4 0-6 6-10 6z"></path>',
    zap: '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>',
    messageCircleHeart: '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22z"></path><path d="M15.8 9.2a2 2 0 0 0-2.8 0l-1 1-1-1a2 2 0 0 0-2.8 2.8l1 1 2.8 2.8 2.8-2.8 1-1a2 2 0 0 0 0-2.8z"></path>',
    image: '<rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>',
    bookOpen: '<path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>',
    heart: '<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3.016 0L5 15c-1.5-1.5-3-3.2-3-5.5"></path>',
    utensils: '<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path><path d="M7 2v20"></path><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path>',
    brain: '<path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M19.938 10.5a4 4 0 0 1 .585.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M19.967 17.484A4 4 0 0 1 18 18"></path>',
    scissors: '<circle cx="6" cy="6" r="3"></circle><path d="M8.12 8.12 12 12"></path><path d="M20 4 8.12 15.88"></path><circle cx="6" cy="18" r="3"></circle><path d="M14.8 14.8 20 20"></path>',
    heartHandshake: '<path d="M19.414 14.414C21 12.828 22 11.5 22 9.5A5.5 5.5 0 0 0 12.5 5.5L12 6l-.5-.5A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.823"></path>',
    sparkles: '<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle>',
    lock: '<rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>',
    cat: '<path d="M12 5c.67 0 1.35.09 2 .26 0 0 .5-1.26 1-2.26 2 1 3 2.5 3 4.5 0 0 1.5 1.5 1.5 4.5 0 3.5-2.5 6-7.5 6s-7.5-2.5-7.5-6c0-3 1.5-4.5 1.5-4.5 0-2 1-3.5 3-4.5.5 1 .999 2.26.999 2.26A8 8 0 0 1 12 5z"></path><path d="M8 14v.5"></path><path d="M16 14v.5"></path><path d="M11.25 16.25h1.5L12 17z"></path>',
    instagram: '<rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>',
    smartphone: '<rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect><path d="M12 18h.01"></path>',
    heartPulse: '<path d="M19.414 14.414C21 12.828 22 11.5 22 9.5A5.5 5.5 0 0 0 12.5 5.5L12 6l-.5-.5A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l7 7z"></path><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"></path>',
    gem: '<path d="M6 3h12l4 6-10 13L2 9z"></path><path d="M11 3 8 9l4 13 4-13-3-6"></path><path d="M2 9h20"></path>',
    tag: '<path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>',
    pawPrint: '<circle cx="11" cy="4" r="2"></circle><circle cx="18" cy="8" r="2"></circle><circle cx="20" cy="16" r="2"></circle><path d="M9 10a5 5 0 0 1 6 0l3 4a4 4 0 0 1-3.2 6.4H9.2A4 4 0 0 1 6 14z"></path><circle cx="4" cy="16" r="2"></circle><circle cx="6" cy="8" r="2"></circle>',
    mail: '<rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>',
  };

  function mountIcons() {
    document.querySelectorAll("[data-icon]").forEach((placeholder) => {
      const name = placeholder.getAttribute("data-icon");
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      svg.setAttribute("viewBox", "0 0 24 24");
      svg.setAttribute("fill", "none");
      svg.setAttribute("stroke", "currentColor");
      svg.setAttribute("stroke-width", "2");
      svg.setAttribute("stroke-linecap", "round");
      svg.setAttribute("stroke-linejoin", "round");
      svg.setAttribute("aria-hidden", "true");
      svg.setAttribute("class", placeholder.getAttribute("class") || "");
      svg.innerHTML = iconPaths[name] || "";
      placeholder.replaceWith(svg);
    });
  }

  function renderWallpapers() {
    const wrapper = document.getElementById("wallpaper-loop");
    if (!wrapper) return;

    const fragment = document.createDocumentFragment();
    for (let pass = 0; pass < 2; pass += 1) {
      for (let n = 1; n <= 180; n += 1) {
        const file = n < 10 ? `0${n}` : String(n);
        const card = document.createElement("div");
        card.className = "group relative h-[420px] w-[260px] shrink-0 overflow-hidden rounded-3xl glass-strong shadow-card transition hover:scale-[1.04]";

        const img = document.createElement("img");
        img.src = `src/assets/${file}.png`;
        img.alt = `Cat wallpaper ${n}`;
        img.loading = "lazy";
        img.width = 1200;
        img.height = 1600;
        img.className = "h-full w-full object-cover transition duration-700 group-hover:scale-110";

        const overlay = document.createElement("div");
        overlay.className = "pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80";

        const meta = document.createElement("div");
        meta.className = "absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs";

        const hd = document.createElement("span");
        hd.className = "rounded-full glass px-2.5 py-1 font-medium text-white";
        hd.textContent = "HD";

        const number = document.createElement("span");
        number.className = "text-white/80";
        number.textContent = `#${n}`;

        meta.append(hd, number);
        card.append(img, overlay, meta);
        fragment.append(card);
      }
    }
    wrapper.append(fragment);
  }

  function initCounters() {
    const counters = document.querySelectorAll("[data-count-target]");
    counters.forEach((counter) => {
      const target = Number(counter.getAttribute("data-count-target") || 0);
      const suffix = counter.getAttribute("data-count-suffix") || "";
      const card = counter.closest("[data-count-card]") || counter;
      let started = false;

      const start = () => {
        if (started) return;
        started = true;
        const startTime = performance.now();
        const duration = 1600;
        const tick = (now) => {
          const progress = Math.min((now - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          counter.textContent = `${Math.floor(eased * target).toLocaleString()}${suffix}`;
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      };

      if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              start();
              observer.disconnect();
            }
          });
        }, { threshold: 0.3 });
        observer.observe(card);
      } else {
        start();
      }
    });
  }

  function initCountdown() {
    const cells = {
      d: document.querySelector("[data-countdown-days]"),
      h: document.querySelector("[data-countdown-hours]"),
      m: document.querySelector("[data-countdown-minutes]"),
      s: document.querySelector("[data-countdown-seconds]"),
    };
    if (!cells.d || !cells.h || !cells.m || !cells.s) return;

    const storageKey = "ucb_offer_expires_at";
    const durationMs =
      7 * 24 * 60 * 60 * 1000 +
      23 * 60 * 60 * 1000 +
      59 * 60 * 1000 +
      59 * 1000;

    const getExpiry = () => {
      try {
        const stored = window.localStorage.getItem(storageKey);
        const parsed = stored ? parseInt(stored, 10) : NaN;
        if (!parsed || Number.isNaN(parsed) || parsed <= Date.now()) {
          const next = Date.now() + durationMs;
          window.localStorage.setItem(storageKey, String(next));
          return next;
        }
        return parsed;
      } catch {
        return Date.now() + durationMs;
      }
    };

    const expiry = getExpiry();
    const pad = (value) => String(value).padStart(2, "0");
    const tick = () => {
      const diff = expiry - Date.now();
      if (diff <= 0) {
        try {
          window.localStorage.removeItem(storageKey);
        } catch {}
        cells.d.textContent = "00";
        cells.h.textContent = "00";
        cells.m.textContent = "00";
        cells.s.textContent = "00";
        return;
      }

      const total = Math.max(0, Math.floor(diff / 1000));
      const d = Math.floor(total / 86400);
      const h = Math.floor((total % 86400) / 3600);
      const m = Math.floor((total % 3600) / 60);
      const s = total % 60;
      cells.d.textContent = pad(d);
      cells.h.textContent = pad(h);
      cells.m.textContent = pad(m);
      cells.s.textContent = pad(s);
    };

    tick();
    window.setInterval(tick, 1000);
  }

  function initYear() {
    const year = document.querySelector("[data-current-year]");
    if (year) year.textContent = String(new Date().getFullYear());
  }

  mountIcons();
  renderWallpapers();
  initCounters();
  initCountdown();
  initYear();
})();
