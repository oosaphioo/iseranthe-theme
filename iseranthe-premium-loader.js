/*
  Iseranthe — chargeur sûr des finitions premium
  À coller dans UN SEUL code Javascript Forumactif, sur toutes les pages.
  Il charge chaque feuille une fois, après le DOM, sans observer ni modifier
  la page en continu.
*/
(function () {
  "use strict";

  var assets = [
    {
      id: "composition",
      href: "https://cdn.jsdelivr.net/gh/oosaphioo/iseranthe-theme@5af9d9bce8db14f849d8c2c616b38dd92c2fe1d3/iseranthe-premium-home-composition.css"
    },
    {
      id: "home-atmosphere",
      href: "https://cdn.jsdelivr.net/gh/oosaphioo/iseranthe-theme@64b233f8760addf02de8f76b7000686421f4385b/iseranthe-premium-atmosphere.css"
    },
    {
      id: "square-forums",
      href: "https://cdn.jsdelivr.net/gh/oosaphioo/iseranthe-theme@d01ff4f0ebf6a5868cbe0f5c0e9196d20a70dd68/iseranthe-premium-square-forums.css"
    },
    {
      id: "reading-atmosphere",
      href: "https://cdn.jsdelivr.net/gh/oosaphioo/iseranthe-theme@b2e3da8b6ee1f85274d4c121b7f37dc3638ed3d5/iseranthe-premium-reading-atmosphere.css"
    },
    {
      id: "utilities-atmosphere",
      href: "https://cdn.jsdelivr.net/gh/oosaphioo/iseranthe-theme@b6489cf48efdd1190d003bb72ea51fafdb44812f/iseranthe-premium-utilities-atmosphere.css"
    },
    {
      id: "shell-atmosphere",
      href: "https://cdn.jsdelivr.net/gh/oosaphioo/iseranthe-theme@5432ed67ac58e932882abc44f83ea27c3e265097/iseranthe-premium-shell-atmosphere.css"
    },
    {
      id: "system-atmosphere",
      href: "https://cdn.jsdelivr.net/gh/oosaphioo/iseranthe-theme@b325014830077ce6bf161c06ec4bb8b3624f7b25/iseranthe-premium-system-atmosphere.css"
    }
  ];

  function appendStyles() {
    assets.forEach(function (asset) {
      var selector = 'link[data-iseranthe-addon="' + asset.id + '"]';

      if (document.head.querySelector(selector)) return;

      var link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = asset.href;
      link.setAttribute("data-iseranthe-addon", asset.id);
      document.head.appendChild(link);
    });
  }

  function boot() {
    window.setTimeout(appendStyles, 120);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot, { once: true });
  } else {
    boot();
  }
}());
