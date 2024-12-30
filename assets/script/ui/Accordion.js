export const createAccordion = (title = "", childElement) => {
  // Create the main accordion container
  const accordion = document.createElement("div");
  accordion.className = "accordion";

  // Create the header for the accordion item
  const header = document.createElement("button");
  header.className = "accordion-header";

  const headerText = document.createElement('p');

  headerText.className = "accordion-header__text";
  headerText.innerText = title;

  const headerIcon = document.createElement('div');
  headerIcon.className = "accordion-header__icon";
  const icon = document.createElement('i');
  icon.className = "fa fa-plus";
  headerIcon.appendChild(icon);
  
  header.appendChild(headerText);
  header.appendChild(headerIcon)

  header.setAttribute("aria-expanded", "false");

  // Add click event to toggle visibility
  header.addEventListener("click", () => {
    const isExpanded = header.getAttribute("aria-expanded") === "true";
    header.setAttribute("aria-expanded", !isExpanded);
    icon.className = (isExpanded ? "fa fa-plus" : "fa fa-minus");
    content.style.display = isExpanded ? "none" : "block";
  });

  // Wrap the child element in a content container
  const content = document.createElement("div");
  content.setAttribute("id", title)
  content.className = "accordion-content";
  setTimeout(() => {
    content.style.display = "none"; // Initially hidden
  }, 1);
  content.appendChild(childElement);

  // Append header and content to the item
  accordion.appendChild(header);
  accordion.appendChild(content);

  // Add the item to the main accordion

  return accordion;
};
