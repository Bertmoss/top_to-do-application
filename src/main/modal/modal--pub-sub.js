import { pubSubFactory } from "../../general/general__js/pub-sub";
import { subscribeNote } from "../../main/display/__container/display__container--note";
import { subscribeProject } from "../../main/display/__container/display__container--project";
import { subscribeTask } from "../../main/display/__container/display__container--task";



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
}

ProjectConstructor.prototype.publish = function () {
  let obj = new ProjectConstructor(this.title);
  pubSubForms.publish("project", obj);
};

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

export { NoteConstructor, ProjectConstructor, TaskConstructor,}