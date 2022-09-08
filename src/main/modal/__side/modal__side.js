let sideDiv = document.createElement("div");
sideDiv.classList.add("modal__side");

let taskButton = document.createElement("button");
taskButton.setAttribute("type", "button");
taskButton.textContent = 'TASK';

let projectButton = document.createElement("button");
projectButton.setAttribute("type", "button");
projectButton.textContent = "PROJECT";

let noteButton = document.createElement("button");
noteButton.setAttribute("type", "button");
noteButton.textContent = "NOTE";

sideDiv.appendChild(taskButton)

sideDiv.appendChild(projectButton)

sideDiv.appendChild(noteButton)
/* 
function createBasicButton() {
  let button = document.createElement('button');
  button.setAttribute("type", "button");
  button.classList.add("side__button", "s-side__button");
  return button;
}

const buttonModifiers = {
  _modifiers: ["task", "project", "note"],
 
  set modifiers(modifier) {
    this._modifiers.push(modifier)
  },
  get modifiers() {
    return this._modifiers
  },
  remove(start, amount) {
    this._modifiers.splice(start, amount)
  }
}

buttonModifiers.modifiers.forEach(modifier => {
  let btn = createBasicButton();
  btn.classList.add(`side__button--${modifier}`)
  btn.textContent = modifier.toUpperCase();
  sideDiv.appendChild(btn);
})
 */
export {sideDiv, taskButton, noteButton, projectButton} 