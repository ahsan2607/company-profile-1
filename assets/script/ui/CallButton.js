export const createFloatCallButton = (link) => {
  const callButton = document.createElement("a");
  callButton.className = "float-button";
  callButton.setAttribute("href", link);

  const icon = document.createElement("i");
  icon.className = "fa fa-comment";

  callButton.appendChild(icon);

  return callButton;
};
