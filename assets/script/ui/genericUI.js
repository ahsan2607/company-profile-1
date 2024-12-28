(() => {
  const navlinks = document.getElementById("nav-links");
  const menu = document.getElementById("menu");

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
    } else {
      navlinks.classList.add("hide");
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
})();
