import { createProductItem } from "./ProductItem.js";
import { createCustomElement } from "../../call/index.js";

export const createProductsList = (productsList = [], category = "", isFeatured = false) => {
  let elementProductsList = document.createElement("div");
  elementProductsList.classList.add("products-list");
  if (isFeatured) productsList = productsList.filter((product) => product.featured === true);
  if (category) productsList = productsList.filter((product) => product.category.toLowerCase() === category.toLowerCase());
  if (productsList.length > 0 && typeof productsList === "object") {
    productsList.map((product) => {
      elementProductsList.appendChild(
        createProductItem(product.id, product.title, product.category, product.price, product.amountPerSell, product.unit, product.desc, product.image, product.link)
      );
    });
  } else {
    elementProductsList = createCustomElement("p", "products-list__empty-message", "Tidak ada produk");
  }
  return elementProductsList;
};
