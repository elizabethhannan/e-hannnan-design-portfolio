/* @ds-bundle: {"format":4,"namespace":"Heronway","components":[{"name":"Button"},{"name":"NavBar"},{"name":"DestinationCard"},{"name":"Tabs"},{"name":"Accordion"},{"name":"PointsCalculator"},{"name":"TierBadge"},{"name":"Mascot"},{"name":"Reveal"},{"name":"FlightPath"},{"name":"HeroParallax"},{"name":"StickyNav"},{"name":"StorySections"},{"name":"MascotScene"},{"name":"Carousel"},{"name":"RouteMap"},{"name":"BookingPanel"},{"name":"TierTable"},{"name":"CardFlip"},{"name":"StatCounter"},{"name":"PageTransition"},{"name":"BookedSuccess"}]} */
(function () {
  "use strict";
  var H = {};
  /* Ripple on .hw-btn press */
  H.ripple = function (root) {
    (root || document).addEventListener("pointerdown", function (e) {
      var b = e.target.closest && e.target.closest(".hw-btn");
      if (!b) return;
      var r = b.getBoundingClientRect(), s = document.createElement("span"), d = Math.max(r.width, r.height);
      s.className = "hw-ripple";
      s.style.width = s.style.height = d + "px";
      s.style.left = e.clientX - r.left - d / 2 + "px";
      s.style.top = e.clientY - r.top - d / 2 + "px";
      b.appendChild(s);
      setTimeout(function () { s.remove(); }, 600);
    });
  };
  /* Sliding pill indicator for .hw-tabs; arrow keys move selection */
  H.tabs = function (el) {
    var tabs = Array.prototype.slice.call(el.querySelectorAll(".hw-tab")), ind = el.querySelector(".hw-tabs-ind");
    function sel(t, focus) {
      tabs.forEach(function (x) { x.setAttribute("aria-selected", x === t ? "true" : "false"); x.tabIndex = x === t ? 0 : -1; });
      ind.style.width = t.offsetWidth + "px";
      ind.style.transform = "translateX(" + t.offsetLeft + "px)";
      if (focus) t.focus();
      el.dispatchEvent(new CustomEvent("hw:tab", { detail: t.dataset.value }));
    }
    tabs.forEach(function (t, i) {
      t.addEventListener("click", function () { sel(t); });
      t.addEventListener("keydown", function (e) {
        if (e.key === "ArrowRight") sel(tabs[(i + 1) % tabs.length], true);
        if (e.key === "ArrowLeft") sel(tabs[(i - 1 + tabs.length) % tabs.length], true);
      });
    });
    sel(tabs.filter(function (t) { return t.getAttribute("aria-selected") === "true"; })[0] || tabs[0]);
  };
  /* Animated number: counts from current to target */
  H.countTo = function (el, to, ms) {
    var from = parseInt(el.textContent.replace(/\D/g, ""), 10) || 0, t0 = performance.now(), dur = ms || 520;
    el.classList.add("bump");
    (function step(now) {
      var p = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(from + (to - from) * e).toLocaleString();
      if (p < 1) requestAnimationFrame(step); else el.classList.remove("bump");
    })(t0);
  };
  /* Points calculator: data-rate on each range = points per $ */
  H.points = function (el) {
    var out = el.querySelector(".hw-points-out");
    function calc() {
      var total = 0;
      el.querySelectorAll(".hw-range").forEach(function (r) {
        total += r.value * parseFloat(r.dataset.rate || 1);
        var lab = el.querySelector('[data-for="' + r.id + '"]');
        if (lab) lab.textContent = "$" + Number(r.value).toLocaleString();
      });
      H.countTo(out, Math.round(total * 12), 400);
    }
    el.addEventListener("input", calc);
    calc();
  };
  /* Reveal on scroll: adds .is-in to .hw-reveal as it enters */
  H.reveal = function (root) {
    var els = (root || document).querySelectorAll(".hw-reveal");
    if (!("IntersectionObserver" in window)) { els.forEach(function (e) { e.classList.add("is-in"); }); return; }
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } });
    }, { threshold: 0.15 });
    els.forEach(function (e) { io.observe(e); });
  };
  /* Tilt: gentle 3D tilt following the pointer (cards, mascots) */
  H.tilt = function (el, max) {
    var m = max || 6;
    el.addEventListener("pointermove", function (e) {
      var r = el.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = "perspective(800px) rotateY(" + x * m + "deg) rotateX(" + -y * m + "deg) translateY(-6px)";
    });
    el.addEventListener("pointerleave", function () { el.style.transform = ""; });
  };
  /* ---------- Page-level motion ---------- */
  var reduce = function () { return window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches; };
  var $$ = function (el, s) { return Array.prototype.slice.call(el.querySelectorAll(s)); };
  var scrollerOf = function (el, given) { return given || el.closest(".hw-scroller") || null; };
  var scrollTop = function (sc) { return sc ? sc.scrollTop : window.scrollY; };
  var onScroll = function (sc, fn) { (sc || window).addEventListener("scroll", fn, { passive: true }); fn(); };
  var observe = function (els, sc, fn, opts) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { fn(e.target, e.isIntersecting, e); }); }, Object.assign({ root: sc || null, threshold: 0.3 }, opts || {}));
    els.forEach(function (e) { io.observe(e); });
    return io;
  };

  /* Hero: layers with data-depth (0–1) drift with pointer and scroll */
  H.parallax = function (hero, sc) {
    sc = scrollerOf(hero, sc);
    var layers = $$(hero, "[data-depth]"), px = 0, py = 0, sy = 0;
    function paint() { layers.forEach(function (l) { var d = parseFloat(l.dataset.depth); l.style.transform = "translate3d(" + px * d * -30 + "px," + (py * d * -20 + sy * d * 0.4) + "px,0)"; }); }
    if (reduce()) return;
    hero.addEventListener("pointermove", function (e) { var r = hero.getBoundingClientRect(); px = (e.clientX - r.left) / r.width - 0.5; py = (e.clientY - r.top) / r.height - 0.5; paint(); });
    hero.addEventListener("pointerleave", function () { px = py = 0; paint(); });
    onScroll(sc, function () { sy = scrollTop(sc); paint(); });
  };

  /* Sticky nav: .is-scrolled past 24px; optional .hw-progress shows read progress */
  H.stickyNav = function (nav, sc) {
    sc = scrollerOf(nav, sc);
    var bar = nav.querySelector(".hw-progress");
    onScroll(sc, function () {
      var t = scrollTop(sc), max = sc ? sc.scrollHeight - sc.clientHeight : document.documentElement.scrollHeight - innerHeight;
      nav.classList.toggle("is-scrolled", t > 24);
      if (bar) bar.style.transform = "scaleX(" + (max > 0 ? t / max : 0) + ")";
    });
  };

  /* Story: each .hw-story-sec[data-bg="teal"] recolours the .hw-story band as it takes the stage */
  H.story = function (band, sc) {
    sc = scrollerOf(band, sc);
    observe($$(band, ".hw-story-sec"), sc, function (s, on) {
      if (!on) { s.classList.remove("is-active"); return; }
      $$(band, ".hw-story-sec").forEach(function (x) { x.classList.toggle("is-active", x === s); });
      var c = s.dataset.bg || "navy";
      band.style.setProperty("--story-bg", "var(--" + c + ")");
      band.style.color = "var(--on-" + c + ")";
    }, { threshold: 0.55 });
  };

  /* Mascot scene: .is-in while in view, so Hollis lands and Juni waves each time */
  H.scene = function (el, sc) { observe([el], scrollerOf(el, sc), function (t, on) { t.classList.toggle("is-in", on); }, { threshold: 0.5 }); };

  /* Carousel: native scroll-snap + pointer drag, prev/next, dots, ← → keys */
  H.carousel = function (el) {
    var track = el.querySelector(".hw-track"), items = Array.prototype.slice.call(track.children);
    var prev = el.querySelector("[data-prev]"), next = el.querySelector("[data-next]"), dotsBox = el.querySelector(".hw-dots");
    var step = function () { return items[0].getBoundingClientRect().width + parseFloat(getComputedStyle(track).columnGap || 24); };
    var dots = items.map(function (_, i) {
      var d = document.createElement("button"); d.className = "hw-dot"; d.setAttribute("aria-label", "Go to slide " + (i + 1));
      d.onclick = function () { track.scrollTo({ left: items[i].offsetLeft - track.offsetLeft - 8, behavior: "smooth" }); };
      if (dotsBox) dotsBox.appendChild(d); return d;
    });
    function sync() {
      var i = Math.round(track.scrollLeft / step()), max = track.scrollWidth - track.clientWidth - 2;
      dots.forEach(function (d, j) { d.setAttribute("aria-current", j === Math.min(i, items.length - 1) ? "true" : "false"); });
      if (prev) prev.disabled = track.scrollLeft <= 2; if (next) next.disabled = track.scrollLeft >= max;
    }
    if (prev) prev.onclick = function () { track.scrollBy({ left: -step(), behavior: "smooth" }); };
    if (next) next.onclick = function () { track.scrollBy({ left: step(), behavior: "smooth" }); };
    track.tabIndex = 0;
    track.addEventListener("keydown", function (e) { if (e.key === "ArrowRight") next && next.click(); if (e.key === "ArrowLeft") prev && prev.click(); });
    var down = false, x0 = 0, s0 = 0, moved = 0;
    track.addEventListener("pointerdown", function (e) { if (e.pointerType !== "mouse") return; down = true; moved = 0; x0 = e.clientX; s0 = track.scrollLeft; track.setPointerCapture(e.pointerId); });
    track.addEventListener("pointermove", function (e) { if (!down) return; var dx = e.clientX - x0; moved = Math.max(moved, Math.abs(dx)); if (moved > 4) track.classList.add("is-dragging"); track.scrollLeft = s0 - dx; });
    var end = function () {
      if (!down) return; down = false;
      var i = Math.round(track.scrollLeft / step());
      track.classList.remove("is-dragging");
      track.scrollTo({ left: i * step(), behavior: "smooth" });
    };
    track.addEventListener("pointerup", end); track.addEventListener("pointercancel", end);
    track.addEventListener("click", function (e) { if (moved > 4) { e.preventDefault(); e.stopPropagation(); } }, true);
    track.addEventListener("scroll", sync, { passive: true }); sync();
  };

  /* Route map: routes draw in on view; airports (.hw-apt[data-code]) show a tooltip and light their routes */
  H.routeMap = function (map, sc) {
    var tip = map.querySelector(".hw-tip"), routes = $$(map, ".hw-route");
    routes.forEach(function (r) { r.style.setProperty("--len", Math.ceil(r.getTotalLength())); });
    observe([map], scrollerOf(map, sc), function (t, on) { if (on) t.classList.add("is-in"); });
    function show(a) {
      var m = map.getBoundingClientRect(), r = a.getBoundingClientRect(), code = a.dataset.code;
      tip.innerHTML = a.dataset.name + "<small>" + a.dataset.info + "</small>";
      var half = tip.offsetWidth / 2 + 8, x = r.left + r.width / 2 - m.left; tip.style.left = Math.max(half, Math.min(m.width - half, x)) + "px"; tip.style.top = r.top - m.top + "px";
      tip.classList.add("is-on");
      routes.forEach(function (rt) { rt.classList.toggle("is-hot", rt.dataset.to === code || rt.dataset.from === code); });
    }
    function hide() { tip.classList.remove("is-on"); routes.forEach(function (rt) { rt.classList.remove("is-hot"); }); }
    $$(map, ".hw-apt").forEach(function (a) {
      a.setAttribute("tabindex", "0"); a.setAttribute("role", "button"); a.setAttribute("aria-label", a.dataset.name + ", " + a.dataset.info);
      a.addEventListener("pointerenter", function () { show(a); }); a.addEventListener("focus", function () { show(a); });
      a.addEventListener("pointerleave", hide); a.addEventListener("blur", hide);
    });
  };

  /* Booking panel: airport autocomplete, range date picker, passenger stepper, swap */
  H.airports = [["PHX", "Phoenix", "Arizona"], ["SEA", "Seattle", "Washington"], ["YHZ", "Halifax", "Nova Scotia"], ["YUL", "Montréal", "Québec"], ["YYC", "Calgary", "Alberta"], ["YVR", "Vancouver", "British Columbia"], ["YYJ", "Victoria", "British Columbia"], ["BOS", "Boston", "Massachusetts"], ["SFO", "San Francisco", "California"], ["DEN", "Denver", "Colorado"], ["AUS", "Austin", "Texas"], ["CUN", "Cancún", "Mexico"], ["SJO", "San José", "Costa Rica"], ["MBJ", "Montego Bay", "Jamaica"]];
  H.booking = function (panel) {
    var pops = $$(panel, ".hw-pop");
    function closeAll(except) { pops.forEach(function (p) { if (p !== except) { p.classList.remove("is-open"); var t = p.parentNode.querySelector("[aria-expanded]"); if (t) t.setAttribute("aria-expanded", "false"); } }); }
    document.addEventListener("pointerdown", function (e) { if (!panel.contains(e.target) || !e.target.closest(".hw-field")) closeAll(); });
    panel.addEventListener("keydown", function (e) { if (e.key === "Escape") closeAll(); });

    $$(panel, "[data-airport]").forEach(function (inp) {
      var pop = inp.parentNode.querySelector(".hw-pop"), list = [], idx = 0;
      inp.setAttribute("role", "combobox"); inp.setAttribute("aria-autocomplete", "list"); inp.setAttribute("aria-expanded", "false");
      function render() {
        var q = inp.value.trim().toLowerCase();
        list = H.airports.filter(function (a) { return !q || (a[0] + " " + a[1] + " " + a[2]).toLowerCase().indexOf(q) > -1; }).slice(0, 6);
        idx = 0;
        var hi = function (s) { if (!q) return s; var i = s.toLowerCase().indexOf(q); return i < 0 ? s : s.slice(0, i) + "<mark>" + s.slice(i, i + q.length) + "</mark>" + s.slice(i + q.length); };
        pop.innerHTML = list.length ? list.map(function (a, i) { return '<div class="hw-opt" role="option" aria-selected="' + (i === idx) + '" data-i="' + i + '"><span>' + hi(a[1]) + ", " + a[2] + "</span><b>" + a[0] + "</b></div>"; }).join("") : '<div class="hw-opt">No airports match</div>';
        closeAll(pop); pop.classList.add("is-open"); inp.setAttribute("aria-expanded", "true");
      }
      function pick(i) { var a = list[i]; if (!a) return; inp.value = a[1] + " (" + a[0] + ")"; inp.dataset.code = a[0]; pop.classList.remove("is-open"); inp.setAttribute("aria-expanded", "false"); }
      inp.addEventListener("focus", render); inp.addEventListener("input", render);
      inp.addEventListener("keydown", function (e) {
        var opts = $$(pop, ".hw-opt[data-i]");
        if (e.key === "ArrowDown" || e.key === "ArrowUp") { e.preventDefault(); idx = (idx + (e.key === "ArrowDown" ? 1 : -1) + opts.length) % opts.length; opts.forEach(function (o, i) { o.setAttribute("aria-selected", i === idx); }); }
        if (e.key === "Enter") { e.preventDefault(); pick(idx); }
      });
      pop.addEventListener("pointerdown", function (e) { var o = e.target.closest("[data-i]"); if (o) { e.preventDefault(); pick(+o.dataset.i); } });
    });

    var swap = panel.querySelector(".hw-swap");
    if (swap) swap.onclick = function () {
      var a = panel.querySelectorAll("[data-airport]"); if (a.length < 2) return;
      var v = a[0].value, c = a[0].dataset.code; a[0].value = a[1].value; a[0].dataset.code = a[1].dataset.code || ""; a[1].value = v; a[1].dataset.code = c || "";
      swap.classList.toggle("spin");
    };

    $$(panel, "[data-dates]").forEach(function (btn) {
      var pop = btn.parentNode.querySelector(".hw-pop"), today = new Date(); today.setHours(0, 0, 0, 0);
      var view = new Date(today.getFullYear(), today.getMonth(), 1), start = null, end = null;
      var fmt = function (d) { return d.toLocaleDateString(undefined, { month: "short", day: "numeric" }); };
      function label() { btn.textContent = start ? fmt(start) + " – " + (end ? fmt(end) : "Return") : "Depart – Return"; }
      function draw() {
        var y = view.getFullYear(), m = view.getMonth(), first = new Date(y, m, 1).getDay(), n = new Date(y, m + 1, 0).getDate();
        var h = '<div class="hw-cal"><div class="hw-cal-head"><button type="button" data-m="-1" aria-label="Previous month">‹</button><span>' + view.toLocaleDateString(undefined, { month: "long", year: "numeric" }) + '</span><button type="button" data-m="1" aria-label="Next month">›</button></div><div class="hw-cal-grid">';
        "SMTWTFS".split("").forEach(function (d) { h += "<span>" + d + "</span>"; });
        for (var i = 0; i < first; i++) h += "<span></span>";
        for (var d = 1; d <= n; d++) {
          var dt = new Date(y, m, d), t = dt.getTime(), cls = "hw-day";
          if (start && t === start.getTime()) cls += " is-start"; if (end && t === end.getTime()) cls += " is-end";
          if (start && end && t > start.getTime() && t < end.getTime()) cls += " in-range";
          h += '<button type="button" class="' + cls + '" data-t="' + t + '"' + (dt < today ? " disabled" : "") + ' aria-label="' + dt.toDateString() + '">' + d + "</button>";
        }
        pop.innerHTML = h + "</div></div>";
      }
      btn.setAttribute("aria-expanded", "false"); label();
      btn.onclick = function () { var open = !pop.classList.contains("is-open"); closeAll(pop); draw(); pop.classList.toggle("is-open", open); btn.setAttribute("aria-expanded", open); };
      pop.addEventListener("click", function (e) {
        var mb = e.target.closest("[data-m]"), db = e.target.closest("[data-t]");
        if (mb) { view.setMonth(view.getMonth() + +mb.dataset.m); draw(); }
        if (db) { var t = new Date(+db.dataset.t); if (!start || end || t < start) { start = t; end = null; } else { end = t; } label(); draw(); if (end) setTimeout(function () { pop.classList.remove("is-open"); btn.setAttribute("aria-expanded", "false"); }, 260); }
      });
    });

    $$(panel, "[data-pax]").forEach(function (btn) {
      var pop = btn.parentNode.querySelector(".hw-pop"), rows = $$(pop, ".hw-step");
      function sum() { var a = 0; rows.forEach(function (r) { a += +r.querySelector("output").value; }); btn.textContent = a + (a === 1 ? " traveller" : " travellers"); }
      rows.forEach(function (r) {
        var out = r.querySelector("output"), min = +(r.dataset.min || 0), max = +(r.dataset.max || 9), bs = r.querySelectorAll("button");
        function set(v) { out.value = v; out.textContent = v; bs[0].disabled = v <= min; bs[1].disabled = v >= max; out.classList.remove("bump"); void out.offsetWidth; out.classList.add("bump"); sum(); }
        bs[0].onclick = function () { set(Math.max(min, +out.value - 1)); }; bs[1].onclick = function () { set(Math.min(max, +out.value + 1)); };
        set(+out.value || min);
      });
      btn.setAttribute("aria-expanded", "false");
      btn.onclick = function () { var open = !pop.classList.contains("is-open"); closeAll(pop); pop.classList.toggle("is-open", open); btn.setAttribute("aria-expanded", open); };
    });
  };

  /* Tier table: header shadow once scrolled; hovering a column lights it; clicking a header pins it */
  H.tierTable = function (wrap) {
    var table = wrap.querySelector("table");
    wrap.addEventListener("scroll", function () { wrap.classList.toggle("is-stuck", wrap.scrollTop > 2); }, { passive: true });
    function light(i, cls) { $$(table, "tr").forEach(function (tr) { Array.prototype.forEach.call(tr.children, function (c, j) { c.classList.toggle(cls, i > 0 && j === i); }); }); }
    table.addEventListener("pointerover", function (e) { var c = e.target.closest("td,th"); if (c) light(c.cellIndex, "is-col"); });
    table.addEventListener("pointerleave", function () { var p = table.querySelector("thead th.is-picked"); light(p ? p.cellIndex : -1, "is-col"); });
    $$(table, "thead th").forEach(function (th, i) {
      if (!i) return; th.tabIndex = 0; th.setAttribute("aria-label", "Highlight " + th.textContent.trim());
      var pickIt = function () { light(i, "is-picked"); light(i, "is-col"); };
      th.addEventListener("click", pickIt); th.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); pickIt(); } });
    });
  };

  /* Card picker: each .hw-flip toggles aria-pressed to flip front ↔ benefits */
  H.flip = function (row) {
    $$(row, ".hw-flip").forEach(function (b) {
      b.setAttribute("aria-pressed", "false");
      b.addEventListener("click", function () { b.setAttribute("aria-pressed", b.getAttribute("aria-pressed") !== "true"); });
    });
  };

  /* Stat counters: .hw-stat-num[data-to][data-suffix] count up when their card enters view */
  H.stats = function (root, sc) {
    observe($$(root, ".hw-stat"), scrollerOf(root, sc), function (s, on) {
      if (!on || s.classList.contains("is-in")) return;
      s.classList.add("is-in");
      var n = s.querySelector(".hw-stat-num"), to = parseFloat(n.dataset.to), dec = +(n.dataset.dec || 0), suf = n.dataset.suffix || "", pre = n.dataset.prefix || "", t0 = performance.now(), dur = reduce() ? 1 : 1400;
      (function step(now) { var p = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - p, 3); n.textContent = pre + (to * e).toLocaleString(undefined, { minimumFractionDigits: dec, maximumFractionDigits: dec }) + suf; if (p < 1) requestAnimationFrame(step); })(t0);
    }, { threshold: 0.4 });
  };

  /* Page transition: [data-go="id"] links wipe a navy panel across, then the next .hw-page rises in */
  H.pages = function (box) {
    var wipe = box.querySelector(".hw-wipe"), busy = false;
    box.addEventListener("click", function (e) {
      var a = e.target.closest("[data-go]"); if (!a || busy) return; e.preventDefault();
      var cur = box.querySelector(".hw-page:not([hidden])"), nxt = box.querySelector("#" + a.dataset.go);
      if (!nxt || nxt === cur) return;
      if (reduce()) { cur.hidden = true; nxt.hidden = false; return; }
      busy = true; wipe.classList.remove("is-run"); void wipe.offsetWidth; wipe.classList.add("is-run");
      cur.classList.add("is-leave");
      setTimeout(function () { cur.hidden = true; cur.classList.remove("is-leave"); nxt.hidden = false; nxt.classList.add("is-enter"); }, 330);
      setTimeout(function () { nxt.classList.remove("is-enter"); busy = false; var f = nxt.querySelector("h2,h3,[tabindex]"); if (f) { f.tabIndex = -1; f.focus({ preventScroll: true }); } }, 1100);
    });
  };

  /* Booked: check draws, headline rises, boarding pass slides up. Calm, no confetti. */
  H.booked = function (el) { el.classList.remove("is-on"); void el.offsetWidth; el.classList.add("is-on"); var h = el.querySelector("h3"); if (h) { h.tabIndex = -1; h.focus({ preventScroll: true }); } };

  H.init = function (root) { H.ripple(root); H.reveal(root); (root || document).querySelectorAll(".hw-tabs").forEach(H.tabs); (root || document).querySelectorAll(".hw-points").forEach(H.points);
    var R = root || document, each = function (s, f) { R.querySelectorAll(s).forEach(function (e) { f(e); }); };
    each(".hw-hero", H.parallax); each(".hw-sticky", H.stickyNav); each(".hw-story", H.story); each(".hw-scene", H.scene);
    each(".hw-carousel", H.carousel); each(".hw-map", H.routeMap); each(".hw-book", H.booking); each(".hw-tier-wrap", H.tierTable);
    each(".hw-flip-row", H.flip); each(".hw-stats", H.stats); each(".hw-pages", H.pages);
  };
  window.Heronway = H;
})();
