import {modal} from "./modal/modal";
import {display} from "./display/display"


const mainDiv = document.createElement("main");
mainDiv.classList.add("main");


mainDiv.appendChild(modal);
mainDiv.appendChild(display);

export {mainDiv}