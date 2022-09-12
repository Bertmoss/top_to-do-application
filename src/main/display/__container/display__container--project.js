const projectDisplay = document.createElement("div");
projectDisplay.classList.add("display__container-project--hidden")


function subscribeProject(obj) {
  let projectDiv = document.createElement("div"); 
  let heading = document.createElement("h3");
  heading.textContent = obj.title;
  projectDiv.appendChild(heading);
  let taskList = document.createElement("ul");
  obj.taskArr.forEach((task)=> {
    let listItem = document.createElement("li");
    let taskTitle = document.createElement("h6")
    taskTitle.textContent = task.title;
    listItem.appendChild(taskTitle);
    taskList.appendChild(listItem);

  })
  projectDiv.appendChild(taskList);
  projectDisplay.appendChild(projectDiv)





/* 
  let listItem = document.createElement("li");
  let span = document.createElement("span"); /* CHANGE THIS FROM SPAN TO SOMETHING ELSE 
  span.textContent = obj.title; 
  listItem.appendChild(span);
  projectDisplay.appendChild(listItem); */
}

export {subscribeProject, projectDisplay}
