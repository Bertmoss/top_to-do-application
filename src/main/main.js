import {modal} from "./modal/modal";
import {display} from "./display/display"
import { noteButton } from "./modal/__side/modal__side";

const mainDiv = document.createElement("main");
mainDiv.classList.add("main");

const addBtn = document.createElement("button");
addBtn.setAttribute("type", "button");
addBtn.textContent = "+"
addBtn.addEventListener("click", () => {
  modal.classList.remove("main__modal--hidden")
})

mainDiv.appendChild(addBtn);
mainDiv.appendChild(modal);
mainDiv.appendChild(display);

export {mainDiv}