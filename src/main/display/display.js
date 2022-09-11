import * as side from "./__side/display__side";

/* Display Containers */
import { taskDisplay } from "./__container/display__container--task";
import { noteDisplay } from "./__container/display__container--note";
import { projectDisplay } from "./__container/display__container--project";

const display = document.createElement("div");

const sideNav = document.createElement("div");
sideNav.appendChild(side.nav)

let displayContainer = document.createElement("div");
displayContainer.classList.add("display__container")
let displayContent = document.createElement("div");
displayContent.classList.add("display__content")

displayContent.appendChild(taskDisplay);
displayContent.appendChild(noteDisplay);
displayContent.appendChild(projectDisplay);

/* SHOULD REFORMAT THIS */

const home = side.createListItem("Home");
const project = side.createListItem("Projects");
const note = side.createListItem("Notes");

home.addEventListener("click", () => {
  console.log("hello");
  noteDisplay.classList.add("display__container-note--hidden");
  projectDisplay.classList.add("display__container-project--hidden");
  taskDisplay.classList.remove("display__container-task--hidden");
});

note.addEventListener("click", () => {
  noteDisplay.classList.remove("display__container-note--hidden");
  projectDisplay.classList.add("display__container-project--hidden");
  taskDisplay.classList.add("display__container-task--hidden");
});

project.addEventListener("click", () => {
  noteDisplay.classList.add("display__container-note--hidden");
  projectDisplay.classList.remove("display__container-project--hidden");
  taskDisplay.classList.add("display__container-task--hidden");
});

displayContainer.appendChild(displayContent)
display.appendChild(sideNav);
display.appendChild(displayContainer);

export { display };
