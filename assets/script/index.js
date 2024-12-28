import { createProductsList, createProductsSubSection } from "./ui/index.js";
import { productsData } from "./call/index.js";

(() => {
  document.getElementById("product-section").appendChild(createProductsSubSection("", createProductsList(productsData)));

  document.getElementById("banner").style.minHeight =
    Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) -
    document.getElementById("header-nav").clientHeight +
    (window.innerWidth < 769 ? document.getElementById("nav-links").clientHeight : 0) +
    "px";

  document.querySelectorAll('[class="product-item__image"]').forEach((element) => {
    element.style.minHeight = element.clientWidth + "px";
  });

  document.querySelectorAll('[class="service-item__image"]').forEach((element) => {
    element.style.minHeight = element.clientWidth + "px";
  });

  document.querySelectorAll('[class="about-item__image"]').forEach((element) => {
    element.style.minHeight = element.clientWidth * 0.67 + "px";
  });
})();
