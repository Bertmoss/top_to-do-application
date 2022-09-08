import { sideNav } from "./__side/display__side";
import { noteDisplay } from "./__container/display__container--note";
import { taskDisplay } from "./__container/display__container--task";

const display = document.createElement("div");

display.appendChild(noteDisplay);
display.appendChild(sideNav);
display.appendChild(taskDisplay);

export { display };
