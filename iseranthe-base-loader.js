(function () {
  "use strict";

  if (/^\/admin(?:\/|$)/i.test(location.pathname)) return;

  var cssUrl = "https://cdn.jsdelivr.net/gh/oosaphioo/iseranthe-theme@65a42aad194e76db650172e8c8d70f03e79d6cff/iseranthe-base.css";
  var root = document.documentElement;
  var stored = null;

  try {
    stored = window.localStorage.getItem("iseranthe-theme");
  } catch (ignore) {}

  var dark = stored === "dark" || (stored !== "light" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches);
  root.setAttribute("data-ise-theme", dark ? "dark" : "light");

  function mount() {
    if (document.querySelector("link[data-iseranthe-base]")) return;

    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = cssUrl;
    link.setAttribute("data-iseranthe-base", "");
    document.head.appendChild(link);

    var nav = document.getElementById("modernbb-nav-menu");
    if (!nav || nav.querySelector(".ise-theme-toggle")) return;

    var item = document.createElement("li");
    item.className = "ise-theme-item";

    var button = document.createElement("button");
    button.type = "button";
    button.className = "ise-theme-toggle";
    button.setAttribute("aria-label", dark ? "Activer le thème clair" : "Activer le thème sombre");
    button.textContent = dark ? "☼" : "☾";

    button.addEventListener("click", function () {
      dark = root.getAttribute("data-ise-theme") !== "dark";
      root.setAttribute("data-ise-theme", dark ? "dark" : "light");
      button.textContent = dark ? "☼" : "☾";
      button.setAttribute("aria-label", dark ? "Activer le thème clair" : "Activer le thème sombre");
      try {
        window.localStorage.setItem("iseranthe-theme", dark ? "dark" : "light");
      } catch (ignore) {}
    });

    item.appendChild(button);
    nav.appendChild(item);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mount, { once: true });
  } else {
    mount();
  }
}());