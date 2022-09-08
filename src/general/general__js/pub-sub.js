
import {subscribeNote} from "../../main/display/__container/display__container--note"
import {subscribeProject} from "../../main/display/__side/display__side"
import {subscribeTask} from "../../main/display/__container/display__container--task"

function pubSubFactory() {
  const subscribers = {};

  function publish(eventName, data) {
    if (!Array.isArray(subscribers[eventName])) {
      return;
    }
    subscribers[eventName].forEach((callback) => {
      callback(data)
    })
  }

  function subscribe(eventName, callback) {
    if (!Array.isArray(subscribers[eventName])) {
      subscribers[eventName] = []
    }
    subscribers[eventName].push(callback)
    const index = subscribers[eventName].length - 1
    
    return {
      unsubscribe() {
        subscribers[eventName].splice(index,1)
      }
    }
  }
  return {
    subscribe, publish
  }
}


let pubSub = pubSubFactory();


/* Note Constructor */

function NoteConstructor(title, details) {
  this.title = title;
  this.details = details;
}
NoteConstructor.prototype.publish = function() {
  pubSub.publish("note", {title: this.title, details: this.details})
} 


/* Project Constructor */
function ProjectConstructor(title) {
  this.title = title;
}

ProjectConstructor.prototype.publish = function() {
  let obj = new ProjectConstructor(this.title);
  pubSub.publish("project", obj)
}

/* Task Constructor */

function TaskConstructor(title, details, date, priority) {
  this.title = title,
  this.details = details,
  this.date = date,
  this.priority = priority
}

TaskConstructor.prototype.publish = function() {
  let obj = new TaskConstructor(this.title, this.details, this.date, this.priority);
  pubSub.publish("task", obj);
}

/* Subscribers */
pubSub.subscribe("project", subscribeProject);
pubSub.subscribe("note", subscribeNote);
pubSub.subscribe("task", subscribeTask);




export {NoteConstructor, ProjectConstructor, TaskConstructor}