
import {createBasicInput, appendLabelInput, createLabel} from "../../../general/general__js/_input"
import { ProjectConstructor } from "../modal--pub-sub";


const projectForm = document.createElement("form");

/* inputs */
const project = createBasicInput("text", "project-title", "project");
const label = createLabel(project, "Title:" );
appendLabelInput(projectForm, label, project);

/* "submit" button */
const submit = document.createElement("button");
submit.setAttribute("type", "reset"); 
submit.textContent = "Create Project";
projectForm.appendChild(submit);

function publishProject() { 
  let obj = new ProjectConstructor(project.value);
  obj.publish(obj)
}

let general = new ProjectConstructor("general");
general.publish(general);

submit.addEventListener("click", publishProject)

export {projectForm}
