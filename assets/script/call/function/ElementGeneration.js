export const createCustomElement = (tag, classes = [], textContent = "", specialAttribute = { id: "", link: "", src: "", alt: "" }) => {
  const element = document.createElement(tag);
  if (classes.length > 0 && typeof classes === "object") element.classList.add(...classes);
  if (classes && typeof classes === "string") element.classList.add(classes);
  if (textContent) element.textContent = textContent;
  if (tag === "a" && specialAttribute.link) {
    element.setAttribute("href", specialAttribute.link);
    element.setAttribute("target", "_blank");
  }
  if (tag === "img" && specialAttribute.src) {
    element.setAttribute("id", specialAttribute.id + "_" + specialAttribute.alt.split(" ").join("-"));
    element.setAttribute("src", specialAttribute.src);
    element.setAttribute("alt", specialAttribute.alt);
  }
  return element;
};
