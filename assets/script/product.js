import { createAccordion, createProductsList } from "./ui/index.js";
import { productsData } from "./call/index.js";

(() => {
  const productSection = document.getElementById("product-section");
  productSection.appendChild(createAccordion("Packaging", createProductsList(productsData, "packaging")));
  productSection.appendChild(createAccordion("Material", createProductsList(productsData, "material")));
  productSection.appendChild(createAccordion("Kitchenware", createProductsList(productsData, "kitchenware")));
  productSection.appendChild(createAccordion("Miscellanous", createProductsList(productsData, "miscellanous")));
})();
