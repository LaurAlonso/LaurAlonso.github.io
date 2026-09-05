(function () {
  const root = document.documentElement;
  const toggle = document.getElementById("theme-toggle");

  function apply(theme) {
    root.setAttribute("data-theme", theme);
    toggle.textContent = theme === "dark" ? "light" : "dark";
  }

  const saved = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  apply(saved || (prefersDark ? "dark" : "light"));

  toggle.addEventListener("click", function () {
    const current = root.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    apply(next);
    localStorage.setItem("theme", next);
  });
})();
