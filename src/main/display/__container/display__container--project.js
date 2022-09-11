const projectDisplay = document.createElement("div");
projectDisplay.classList.add("display__container-project--hidden")


function subscribeProject(obj) {
  let listItem = document.createElement("li");
  let span = document.createElement("span"); /* CHANGE THIS FROM SPAN TO SOMETHING ELSE */
  span.textContent = obj.title; 
  listItem.appendChild(span);
  projectDisplay.appendChild(listItem);
}

export {subscribeProject, projectDisplay}
