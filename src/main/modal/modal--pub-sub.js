import { pubSubFactory } from "../../general/general__js/pub-sub";
import { subscribeNote } from "../../main/display/__container/display__container--note";
import { subscribeProject } from "../../main/display/__container/display__container--project";
import { subscribeTask, taskDisplay } from "../../main/display/__container/display__container--task";



/* PUBSUB MODULE FORMS and DISPLAY*/
let pubSubForms = pubSubFactory();

/* Note Constructor */

function NoteConstructor(title, details) {
  this.title = title;
  this.details = details;
}
NoteConstructor.prototype.publish = function () {
  pubSubForms.publish("note", { title: this.title, details: this.details });
};

/* Project Constructor */
function ProjectConstructor(title) {
  this.title = title;
  this.taskArr = [];
}

ProjectConstructor.prototype.publish = function(obj) {
  pubSubForms.publish("project", obj);
};
ProjectConstructor.prototype.publishTask = function(obj) {
  pubSubForms.publish("project", obj);
};

ProjectConstructor.prototype._taskConstruct = function(title, details, date, priority) {
  (this.title = title),
  (this.details = details),
  (this.date = date),
  (this.priority = priority);
};

ProjectConstructor.prototype.createTask = function(title, details, date, priority) {
  let obj = this._taskConstruct(title, details, date, priority)
  this.taskArr.push(obj)
};


/* function to check existing project objects */
function existingProjectCheck(title) {
  pubSubForms.subscribers.forEach((element) => {
    if (element.title == title) {
      return element;
    }
    
  });

}


















/* Task Constructor */

function TaskConstructor(title, details, date, priority) {
  (this.title = title),
    (this.details = details),
    (this.date = date),
    (this.priority = priority);
}

TaskConstructor.prototype.publish = function () {
  let obj = new TaskConstructor(
    this.title,
    this.details,
    this.date,
    this.priority
  );
  pubSubForms.publish("task", obj);
};







/* Subscribers */
pubSubForms.subscribe("project", subscribeProject);
pubSubForms.subscribe("note", subscribeNote);
pubSubForms.subscribe("task", subscribeTask);

export { NoteConstructor, ProjectConstructor, TaskConstructor, existingProjectCheck}