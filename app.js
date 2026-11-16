(function () {
  var SITE = window.SITE, POSTS = (window.POSTS || []).slice().sort(function (a, b) { return b.date.localeCompare(a.date); });
  var app = document.getElementById("app");
  var state = { cat: "All", q: "" };

  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]; }); }
  function fmt(d) { try { return new Date(d + "T12:00:00").toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" }); } catch (e) { return d; } }

  /* theme */
  var root = document.documentElement;
  try { var saved = localStorage.getItem("theme"); if (saved) root.setAttribute("data-theme", saved); else if (matchMedia("(prefers-color-scheme: dark)").matches) root.setAttribute("data-theme", "dark"); } catch (e) {}
  document.getElementById("theme").addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
  });

  /* header + footer */
  document.title = SITE.title;
  document.getElementById("brand").textContent = SITE.title;
  document.getElementById("about").innerHTML =
    '<div class="about-inner">' +
    '<img class="avatar" src="' + esc(SITE.photo) + '" alt="' + esc(SITE.name) + '" onerror="this.style.visibility=\'hidden\'">' +
    "<h2>" + esc(SITE.name) + "</h2><p>" + esc(SITE.bio) + "</p>" +
    '<div class="socials">' + SITE.links.map(function (l) { return '<a href="' + esc(l.url) + '" target="_blank" rel="noopener">' + esc(l.label) + "</a>"; }).join("") + "</div>" +
    '<div class="fine">Hand-made, no ads, no tracking, no account needed. © ' + new Date().getFullYear() + " " + esc(SITE.name) + "</div></div>";

  function cover(p) {
    var style = p.image ? ' style="background-image:url(\'' + esc(p.image) + '\')"' : ' style="background:linear-gradient(135deg,hsl(' + hue(p.category) + ',70%,82%),hsl(' + ((hue(p.category) + 40) % 360) + ',70%,72%))"';
    return '<div class="cover"' + style + ">" + (p.image ? "" : esc(p.emoji || "✦")) + "</div>";
  }
  function hue(s) { var h = 0; for (var i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) % 360; return h; }

  function home() {
    var cats = ["All"].concat(POSTS.map(function (p) { return p.category; }).filter(function (c, i, a) { return a.indexOf(c) === i; }));
    app.innerHTML =
      '<section class="hero"><h1>' + esc(SITE.title) + "</h1><p>" + esc(SITE.tagline) + "</p></section>" +
      '<div class="tools">' + cats.map(function (c) { return '<button class="chip" data-cat="' + esc(c) + '" aria-pressed="' + (c === state.cat) + '">' + esc(c) + "</button>"; }).join("") +
      '<input id="search" type="search" placeholder="Search…" value="' + esc(state.q) + '"></div>' +
      '<div class="grid" id="grid"></div>';
    app.querySelectorAll(".chip").forEach(function (b) {
      b.addEventListener("click", function () { state.cat = b.dataset.cat; home(); });
    });
    var s = document.getElementById("search");
    s.addEventListener("input", function () { state.q = s.value; renderGrid(); });
    renderGrid();
  }

  function renderGrid() {
    var q = state.q.toLowerCase();
    var list = POSTS.filter(function (p) {
      return (state.cat === "All" || p.category === state.cat) &&
        (!q || (p.title + " " + p.summary + " " + p.category).toLowerCase().indexOf(q) > -1);
    });
    document.getElementById("grid").innerHTML = list.length ? list.map(function (p) {
      return '<a class="card" href="#/post/' + esc(p.slug) + '">' + cover(p) +
        '<div class="body"><div class="meta">' + esc(p.category) + " · " + fmt(p.date) + "</div><h3>" + esc(p.title) + "</h3><p>" + esc(p.summary) + "</p></div></a>";
    }).join("") : '<p class="empty">Nothing here yet.</p>';
  }

  function post(slug) {
    var p = POSTS.filter(function (x) { return x.slug === slug; })[0];
    if (!p) { app.innerHTML = '<p class="empty">Post not found. <a href="#/">Go back</a></p>'; return; }
    document.title = p.title + " · " + SITE.title;
    app.innerHTML = '<article class="post"><a class="back" href="#/">← All posts</a>' +
      '<div class="meta" style="margin-top:18px">' + esc(p.category) + " · " + fmt(p.date) + "</div>" +
      "<h1>" + esc(p.title) + "</h1>" + cover(p) +
      '<div class="content">' + p.body + "</div>" +
      (p.links && p.links.length ? '<div class="links"><h3>Links</h3><ul>' + p.links.map(function (l) { return '<li><a href="' + esc(l.url) + '" target="_blank" rel="noopener">' + esc(l.label) + "</a></li>"; }).join("") + "</ul></div>" : "") +
      "</article>";
    window.scrollTo(0, 0);
  }

  function route() {
    var h = location.hash;
    var m = h.match(/^#\/post\/(.+)$/);
    if (m) return post(decodeURIComponent(m[1]));
    if (h === "#about") return;
    document.title = SITE.title;
    home();
  }
  window.addEventListener("hashchange", route);
  route();
})();
