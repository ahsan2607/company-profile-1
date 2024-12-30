import { createAccordion, createProductsList } from "./ui/index.js";
import { productsData } from "./call/index.js";

(() => {
  const productSection = document.getElementById("product-section");
  productSection.appendChild(createAccordion("Kemasan", createProductsList(productsData, "kemasan")));
  productSection.appendChild(createAccordion("Kebersihan", createProductsList(productsData, "kebersihan")));
  productSection.appendChild(createAccordion("Poliatilena", createProductsList(productsData, "polietilena")));
  productSection.appendChild(createAccordion("Alat-alat", createProductsList(productsData, "alat")));
})();