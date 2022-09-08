
const sideNav = document.createElement("nav");

const homeSec = document.createElement("section"),
  projectSec = document.createElement("section"),
  notesSec = document.createElement("section"),
  homeList = document.createElement("ul"),
  projectList = document.createElement("ul"),
  noteList = document.createElement("ul");



homeSec.appendChild(homeList);
projectSec.appendChild(projectList);
notesSec.appendChild(noteList);
sideNav.appendChild(homeSec);
sideNav.appendChild(projectSec);
sideNav.appendChild(notesSec);

/* Project */
function subscribeProject(obj) {
  let listItem = document.createElement("li");
  let link = document.createElement("a");
  link.textContent = obj.title;
  listItem.appendChild(link);
  projectList.appendChild(listItem);
}

export {sideNav, subscribeProject}
