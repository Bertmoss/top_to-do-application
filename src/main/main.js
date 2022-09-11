import {modal} from "./modal/modal";
import {display} from "./display/display"

const mainDiv = document.querySelector("main");
mainDiv.classList.add("main");

/* display modal button */
const displayModal = document.createElement("button");
displayModal.setAttribute("type", "button");
displayModal.textContent = "+";
displayModal.setAttribute("style", `background-image:url("../general/images/svg-plus.svg")`)
displayModal.classList.add("main__display-btn","c-main__display-btn" );
displayModal.addEventListener("click", () => {
  modal.classList.remove("main__modal--hidden")
})
mainDiv.appendChild(display);
mainDiv.appendChild(displayModal);
mainDiv.appendChild(modal);


export {mainDiv}