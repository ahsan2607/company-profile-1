import { createCustomElement, capitalize } from "../../call/index.js";

export const createProductItem = (id, title, category, price, amountPerSell, unit, desc, image, link) => {
  const productItem = createCustomElement("div", "product-item");
  productItem.setAttribute("id", id + "_" + title.split(" ").join("-") + "_" + category);

  const productContent = createCustomElement("div", "product-item__content");
  productContent.appendChild(createCustomElement("img", "product-item__image", "", { id: id, src: image, alt: capitalize(title) }));
  productContent.appendChild(createCustomElement("h3", "product-item__title", title));
  productContent.appendChild(createCustomElement("p", "product-item__category", capitalize(category)));
  productContent.appendChild(createCustomElement("p", "product-item__price", `${price} / ${amountPerSell === 1 ? "" : amountPerSell} ${unit}`));
  productContent.appendChild(createCustomElement("p", "product-item__body", desc));
  productItem.appendChild(productContent);

  const productAction = createCustomElement("div", "product-item__action");
  productAction.appendChild(createCustomElement("a", ["product-item__external-link", "button"], "Lihat Detail", { link: link }));
  productItem.appendChild(productAction);

  return productItem;
};
