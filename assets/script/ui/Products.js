import { createCustomElement, capitalize } from "../call/index.js";

const createProductItem = (id, title, category, price, amountPerSell, unit, desc, image, link) => {
  const productItem = createCustomElement("div", "product-item");
  productItem.setAttribute("id", id + "_" + title.split(" ").join("-") + "_" + category);

  const productContent = createCustomElement("div", "product-item__content");
  productContent.appendChild(createCustomElement("img", "product-item__image", "", { id: id, src: image, alt: capitalize(title) }));
  productContent.appendChild(createCustomElement("h3", "product-item__title", title));
  productContent.appendChild(createCustomElement("p", "product-item__category", capitalize(category)));
  // productContent.appendChild(createCustomElement("p", "product-item__price", `${price} / ${amountPerSell === 1 ? "" : amountPerSell} ${unit}`));
  productContent.appendChild(createCustomElement("p", "product-item__body", desc));
  productItem.appendChild(productContent);

  if (link) {
    const productAction = createCustomElement("div", "product-item__action");
    productAction.appendChild(createCustomElement("a", ["product-item__external-link", "button"], "Lihat Detail", { link: link }));
    productItem.appendChild(productAction);
  }

  return productItem;
};
export const createProductsList = (productsList = [], category = "", isFeatured = false, directLink = "") => {
  let elementProductsList = document.createElement("div");
  elementProductsList.classList.add("products-list");
  if (isFeatured) productsList = productsList.filter((product) => product.featured === true);
  if (category) productsList = productsList.filter((product) => product.category.toLowerCase() === category.toLowerCase());
  if (productsList.length > 0 && typeof productsList === "object") {
    productsList.map((product) => {
      elementProductsList.appendChild(
        createProductItem(
          product.id,
          product.title,
          product.category,
          product.price,
          product.amountPerSell,
          product.unit,
          product.desc,
          product.image,
          directLink ? `${directLink}#${product.category}` : ""
        )
      );
    });
  } else {
    elementProductsList = createCustomElement("p", "products-list__empty-message", "Tidak ada produk");
  }
  return elementProductsList;
};
