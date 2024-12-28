export const createAccordion = (title = "", childElement) => {
  // Create the main accordion container
  const accordion = document.createElement("div");
  accordion.className = "accordion";

  // Create the header for the accordion item
  const header = document.createElement("button");
  header.className = "accordion-header";
  header.textContent = title;
  header.setAttribute("aria-expanded", "false");

  // Add click event to toggle visibility
  header.addEventListener("click", () => {
    const isExpanded = header.getAttribute("aria-expanded") === "true";
    header.setAttribute("aria-expanded", !isExpanded);
    content.style.display = isExpanded ? "none" : "block";
  });

  // Wrap the child element in a content container
  const content = document.createElement("div");
  content.className = "accordion-content";
  content.style.display = "none"; // Initially hidden
  content.appendChild(childElement);

  // Append header and content to the item
  accordion.appendChild(header);
  accordion.appendChild(content);

  // Add the item to the main accordion

  return accordion;
};
