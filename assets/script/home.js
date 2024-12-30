import { createProductsList } from "./ui/index.js";
import { productsData } from "./call/index.js";

(() => {
  document.getElementById("product-section").appendChild((createProductsList(productsData, '', true, "./product.html")));

  document.getElementById("banner").style.minHeight =
    Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) -
    document.getElementById("header-nav").clientHeight +
    // (window.innerWidth < 769 ? document.getElementById("nav-links").clientHeight : 0) +
    "px";
})();
