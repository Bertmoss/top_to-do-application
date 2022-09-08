/* TO DO FORM */
import {createBasicInput, appendLabelInput, createLabel} from "../../../general/general__js/_input"
import {TaskConstructor} from "../../../general/general__js/pub-sub"; 


let taskForm = document.createElement("form");
taskForm.classList.add("form")

let title = createBasicInput("text", "title", "title");
title.setAttribute("placeholder", "Title: Groceries")
title.classList.add("form__input--text")
let titleLabel = createLabel(title, "Title");
titleLabel.classList.add("form__label--hidden");
appendLabelInput(taskForm, titleLabel, title)

let textArea = document.createElement("textarea");
textArea.classList.add("form__input--text", "form__input--textArea", "form-input")

textArea.setAttribute("id", "text-area");
textArea.setAttribute("name", "text-area");
textArea.setAttribute("placeholder", "2 potatoes");

let textAreaLabel = createLabel(textArea, "Details");
textAreaLabel.classList.add("form__label--hidden")
appendLabelInput(taskForm, textAreaLabel, textArea)

let div = document.createElement("div")
let date = createBasicInput("date", "date", "date");
let dateLabel= createLabel(date, "Due date:");
appendLabelInput(div, dateLabel, date)
taskForm.appendChild(div);


/*RADIO BUTTONS*/
let fieldset = document.createElement("fieldset");
let legend = document.createElement("legend");
legend.textContent = "Priority";
fieldset.appendChild(legend);



function createRadioInput(priorityLevel) { 
  let radio = createBasicInput("radio", "priority", `priority-${priorityLevel}`);
  radio.setAttribute("value", priorityLevel);
  return radio;
}

let priorityLow = createRadioInput("low");
let priorityMedium = createRadioInput("medium");
let priorityHigh = createRadioInput("high");

function appendRadioInputs(parent, array) {
  array.forEach(element => {

    parent.appendChild(element);
    let label = createLabel(element, element.getAttribute("value"));
    parent.appendChild(label);
  });
}

appendRadioInputs(fieldset, [priorityLow, priorityMedium, priorityHigh]);

taskForm.appendChild(fieldset);

let submit = document.createElement("button");
submit.setAttribute("type", "reset");
submit.textContent = "Create Task";
taskForm.appendChild(submit);

submit.addEventListener("click", () => {
  let radio = document.querySelector("input:checked");
  let obj = new TaskConstructor(title.value, textArea.value, date.value, radio.value);
  obj.publish();
})

export {taskForm};
