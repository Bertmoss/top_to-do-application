import * as side from "./__side/modal__side"
import {taskForm} from "./__form/modal__form--task" 
import {projectForm} from "./__form/modal__form--project" 
import {noteForm} from "./__form/modal__form--note"

let modal = document.createElement("div")
modal.classList.add("modal", "main__modal");


modal.appendChild(side.sideDiv);

/* CHANGE THE NAME OF THE CLASS FROM TEST TO BEM TYPE DONT FORGET */

let formContainer = document.createElement("div");
formContainer.appendChild(taskForm);
formContainer.classList.add("test")
modal.appendChild(formContainer);

side.taskButton.addEventListener("click", () =>{
  let previousForm = document.querySelector(".test > *" )
  formContainer.removeChild(previousForm)
  formContainer.appendChild(taskForm);
})
side.projectButton.addEventListener("click", () =>{
  let previousForm = document.querySelector(".test > *" )
  formContainer.removeChild(previousForm)
  formContainer.appendChild(projectForm);
})
side.noteButton.addEventListener("click", () =>{
  let previousForm = document.querySelector(".test > *" )
  formContainer.removeChild(previousForm)
  formContainer.appendChild(noteForm);
})




function clearFormContainer() {
  modal.removeChild(formContainer);
}



export {modal} 