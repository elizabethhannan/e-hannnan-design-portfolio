/* Heronway sample site: wires the design system, theme, page wipes and demo flows */
(function () {
  var root = document.documentElement;
  var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;

  // theme: Day / Night flight, remembered per browser when storage allows
  try { var saved = localStorage.getItem("hw-theme"); if (saved) root.dataset.theme = saved; } catch (e) {}
  document.querySelectorAll("[data-theme-toggle]").forEach(function (b) {
    var sync = function () {
      var dark = root.dataset.theme === "dark" || (!root.dataset.theme && matchMedia("(prefers-color-scheme: dark)").matches);
      b.setAttribute("aria-pressed", dark ? "true" : "false");
      b.setAttribute("aria-label", dark ? "Switch to Day theme" : "Switch to Night flight theme");
    };
    sync();
    b.addEventListener("click", function () {
      var dark = b.getAttribute("aria-pressed") === "true";
      root.dataset.theme = dark ? "light" : "dark";
      try { localStorage.setItem("hw-theme", root.dataset.theme); } catch (e) {}
      sync();
    });
  });

  Heronway.init(document);
  document.querySelectorAll(".hw-card, .hw-flip, .hw-mascot").forEach(function (c) { Heronway.tilt(c, 5); });

  // page wipe between the three pages
  var wipe = document.querySelector(".page-wipe");
  if (wipe && !reduce) {
    try { if (sessionStorage.getItem("hw-wipe")) { sessionStorage.removeItem("hw-wipe"); wipe.classList.add("is-in"); requestAnimationFrame(function () { requestAnimationFrame(function () { wipe.classList.add("go"); }); }); setTimeout(function () { wipe.classList.remove("is-in", "go"); }, 900); } } catch (e) {}
    document.addEventListener("click", function (e) {
      var a = e.target.closest && e.target.closest("a[data-page]");
      if (!a || e.metaKey || e.ctrlKey || e.shiftKey) return;
      var href = a.getAttribute("href");
      if (!href || href.charAt(0) === "#" || a.getAttribute("aria-current") === "page") return;
      e.preventDefault();
      wipe.classList.add("is-out");
      try { sessionStorage.setItem("hw-wipe", "1"); } catch (err) {}
      setTimeout(function () { location.href = href; }, 560);
    });
  }

  // booking demo: search shows the calm "you're booked" moment
  document.querySelectorAll("form.hw-book").forEach(function (f) {
    f.addEventListener("submit", function (e) {
      e.preventDefault();
      var w = document.getElementById(f.dataset.booked);
      if (!w) return;
      var to = f.querySelectorAll("[data-airport]")[1];
      var code = (to && to.dataset.code) || "YHZ";
      var city = to && to.value ? to.value.replace(/\s*\(.*\)/, "") : "Halifax";
      w.querySelectorAll("[data-to-code]").forEach(function (n) { n.textContent = code; });
      w.querySelectorAll("[data-to-city]").forEach(function (n) { n.textContent = city; });
      w.classList.add("is-shown");
      Heronway.booked(w.querySelector(".hw-booked"));
      w.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" });
    });
  });
  document.querySelectorAll("[data-book-points]").forEach(function (b) {
    b.addEventListener("click", function () {
      var w = document.getElementById(b.dataset.bookPoints);
      w.classList.add("is-shown");
      Heronway.booked(w.querySelector(".hw-booked"));
      w.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" });
    });
  });

  // destination filter tabs
  document.querySelectorAll("[data-filter]").forEach(function (tabs) {
    var grid = document.getElementById(tabs.dataset.filter);
    tabs.addEventListener("click", function (e) {
      var t = e.target.closest(".hw-tab"); if (!t) return;
      var v = t.dataset.value;
      grid.querySelectorAll(".hw-card").forEach(function (c) { c.hidden = v !== "all" && c.dataset.region !== v; });
    });
    tabs.addEventListener("keyup", function (e) { if (e.key === "ArrowLeft" || e.key === "ArrowRight") { var t = tabs.querySelector('[aria-selected="true"]'); if (t) t.click(); } });
  });
})();
