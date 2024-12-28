import { createCustomElement } from "../../call/index.js";

export const createProductsSubSection = (title, productList) => {
  const elementProductsSubSection = createCustomElement("div", "products-subsection");
  if (title) {
    elementProductsSubSection.appendChild(createCustomElement("h3", "products-subsection__title", title));
    elementProductsSubSection.appendChild(createCustomElement("hr", "products-subsection__divide", ""));
  }
  elementProductsSubSection.appendChild(productList);
  return elementProductsSubSection;
};
