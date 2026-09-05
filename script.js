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

// Click (or press Enter/Space) on an interest word to cycle it to
// another word from its list, like the swap-on-click on jredondoyuste.github.io.
(function () {
  const swaps = document.querySelectorAll(".word-swap");

  swaps.forEach(function (el) {
    const words = el.dataset.words.split("|");
    let index = 0;

    function cycle() {
      el.classList.add("swapping");
      setTimeout(function () {
        index = (index + 1) % words.length;
        el.textContent = words[index];
        el.classList.remove("swapping");
      }, 150);
    }

    el.addEventListener("click", cycle);
    el.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        cycle();
      }
    });
  });
})();
