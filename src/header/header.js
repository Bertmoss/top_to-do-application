
const title = document.createElement("h1");
title.classList.add("header__title");
title.textContent = "Just Do It";

const header = document.querySelector("header");

header.classList.add("header", "body__header");
console.log(header.className)

header.appendChild(title);

export { header } ;

