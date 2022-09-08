
const title = document.createElement("h1");
title.classList.add("header__title");
title.textContent = "To Do";

const header = document.createElement("header");

header.classList.add("header", "body__header");

header.appendChild(title);

export { header } ;