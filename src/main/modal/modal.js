import * as side from "./__side/modal__side"
import {taskForm} from "./__form/modal__form--task" 
import {projectForm} from "./__form/modal__form--project" 
import {noteForm} from "./__form/modal__form--note"

let modal = document.createElement("div")
modal.classList.add("modal", "main__modal");


modal.appendChild(side.sideDiv);

let formContainer = document.createElement("div");
formContainer.appendChild(taskForm);
formContainer.classList.add("modal__form")
modal.appendChild(formContainer);

function removeForm() {
  while (formContainer.firstChild) {
    formContainer.firstChild.reset()
    formContainer.removeChild(formContainer.firstChild)
  }
}

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