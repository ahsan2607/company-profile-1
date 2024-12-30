import { createFloatCallButton } from "./ui/index.js";

(() => {
  const navlinks = document.getElementById("nav-links");
  const menu = document.getElementById("menu");
  const menuBotton = document.getElementById("menu-button")

  const responsiveMenu = () => {
    if (window.innerWidth < 769) {
      navlinks.classList.add("hide");
    } else {
      navlinks.classList.remove("hide");
    }
  };

  const toggleMenu = () => {
    if (navlinks.classList.contains("hide")) {
      if (window.scrollY === 0 && window.scrollY < 1) {
        window.scroll({
          left: 0,
          top: navlinks.offsetTop + 1,
        });
      }
      navlinks.classList.remove("hide");
      menuBotton.classList.remove("fa-list-ul");
      menuBotton.classList.add("fa-chevron-up");
    } else {
      navlinks.classList.add("hide");
      menuBotton.classList.remove("fa-chevron-up");
      menuBotton.classList.add("fa-list-ul");
    }
  };

  window.addEventListener("resize", responsiveMenu);
  window.addEventListener("load", responsiveMenu);
  window.addEventListener("reset", responsiveMenu);
  menu.addEventListener("click", () => toggleMenu());

  if (window.innerWidth < 769) {
    document.getElementById("main").style.minHeight =
      Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) -
      (document.getElementById("header-nav").clientHeight + document.getElementById("footer").clientHeight) + navlinks.clientHeight + 1 +
      "px";
  } else {
    document.getElementById("main").style.minHeight =
      Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) -
      (document.getElementById("header-nav").clientHeight + document.getElementById("footer").clientHeight) +
      "px";
  }

  document.getElementById("main").appendChild(createFloatCallButton("mailto:plasticmji@gmail.com"))

  document.querySelectorAll('[class="product-item__image"]').forEach((element) => {
    element.style.minHeight = element.clientWidth + "px";
    element.style.maxHeight = element.clientWidth + "px";
  });

  document.querySelectorAll('[class="about-item__image"]').forEach((element) => {
    element.style.minHeight = element.clientWidth * 0.67 + "px";
    element.style.maxHeight = element.clientWidth + "px";
  });
})();
