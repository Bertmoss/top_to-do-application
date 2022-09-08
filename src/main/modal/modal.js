import * as side from "./__side/modal__side"
import {taskForm} from "./__form/modal__form--task" 
import {projectForm} from "./__form/modal__form--project" 
import {noteForm} from "./__form/modal__form--note"

let modal = document.createElement("div")
modal.classList.add("modal", "main__modal");

let closeBtn = document.createElement("button");
closeBtn.setAttribute("type", "button");
closeBtn.setAttribute("style", "position:absolute") /* has to be moved to scss!!! */
closeBtn.textContent = "x";
modal.appendChild(closeBtn);

function hideModal() {
  removeForm();
  formContainer.appendChild(taskForm);
  modal.classList.add("main__modal--hidden");
} 
closeBtn.addEventListener("click", hideModal)

/* side */
modal.appendChild(side.sideDiv);

/* form on initial load */
let formContainer = document.createElement("div");
formContainer.appendChild(taskForm);
formContainer.classList.add("modal__form")
modal.appendChild(formContainer);

/* remove form func */
function removeForm() {
  while (formContainer.firstChild) {
    formContainer.firstChild.reset()
    formContainer.removeChild(formContainer.firstChild)
  }
}

/* side button event listeners */
side.taskButton.addEventListener("click", () =>{
  removeForm();
  formContainer.appendChild(taskForm);
})
side.projectButton.addEventListener("click", () =>{
  removeForm();
  formContainer.appendChild(projectForm);
})
side.noteButton.addEventListener("click", () =>{
  removeForm();
  formContainer.appendChild(noteForm);
})


export {modal} 