!function(a){var n={};function r(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return a[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=a,r.c=n,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t,a){},function(e,t,a){"use strict";function n(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}a.r(t);var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return function(e,t,a){t&&n(e.prototype,t),a&&n(e,a)}(e,[{key:"addTask",value:function(e){var t=[];null===localStorage.getItem("tasks")?t.push(e):(t=JSON.parse(localStorage.getItem("tasks"))).push(e),localStorage.setItem("tasks",JSON.stringify(t))}},{key:"getTaks",value:function(){return null===localStorage.getItem("tasks")?[]:JSON.parse(localStorage.getItem("tasks"))}},{key:"updateTask",value:function(t){var e=JSON.parse(localStorage.getItem("tasks"));e.map(function(e){if(e.id!==t.id)return e;e.title=t.title,e.completed=t.completed,e.heart=t.heart}),localStorage.setItem("tasks",JSON.stringify(e))}},{key:"deleteTask",value:function(e){var t=JSON.parse(localStorage.getItem("tasks"));t=e,localStorage.setItem("tasks",JSON.stringify(t))}}]),e}();function i(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.taskTitle=document.querySelector(".task-title"),this.taskContainer=document.querySelector(".task-container"),this.editeTask=document.querySelector(".editTask"),this.complateTask=document.querySelector("#complated-task"),this.addTask=document.querySelector("#addTask"),this.updateTask=document.querySelector("#updateTask"),this.backBtn=document.querySelector("#backBtn"),this.deleteTask=document.querySelector("#deleteTask"),this.totalTask=document.querySelector(".total-task"),this.dropbtn=document.querySelector(".dropbtn"),this.totalTask=document.querySelector(".total-task"),this.completedTask=document.querySelector(".completed-tasks")}return function(e,t,a){t&&i(e.prototype,t),a&&i(e,a)}(e,[{key:"getTitleInput",value:function(){return this.taskTitle.value}},{key:"clearField",value:function(){this.taskTitle.value=""}},{key:"showMsg",value:function(e,t){var a=document.createElement("div");a.className="alert alert-".concat(t),a.textContent=e;var n=document.querySelector(".container"),r=document.querySelector("#h1");n.insertBefore(a,r),setTimeout(function(){document.querySelector(".alert").remove()},2e3)}},{key:"populateTasks",value:function(e){var t=e.id,a=e.title,n="";n+='\n    <div class="task-item" id="task-'.concat(t,'">\n    <div class="row">\n    <div class="col col-sm-6">\n        <h5  id="title">').concat(a,'</h5>\n        <i class="far fa-heart" id="heart"></i>   \n      </div>   \n      <div class="col col-sm-6 mt-3">    \n      <div class="dropdown" style="float:right;">\n      <i\n        class="fas fa-ellipsis-h"\n        id="edit-task"\n        data-toggle="dropdown"\n      >\n      </i>\n      <ul class="dropdown-menu" >\n        <li>\n          <a href="#" id="complated-task">complete</a>\n        </li>\n        <li><a href="#"  id="delete-task">delete</a></li>\n        <li><a href="#" id="editTask">edit</a></li>\n        \n      </ul>\n    </div>             \n      </div>   \n  </div>\n</div>\n'),this.taskContainer.style.display="block",this.taskContainer.insertAdjacentHTML("beforeend",n)}},{key:"populateTask",value:function(e){if(0===e.length)this.taskContainer.style.display="none",this.taskContainer.innerHTML="";else{var i,s="";e.forEach(function(e){var t=e.id,a=e.title,n=e.completed,r=e.heart;i=!0===r?"fas fa-heart":"far fa-heart",s+='<div class="task-item" id="task-'.concat(t,'">\n            <div class="row">\n            <div class="col col-sm-6">\n                <h5 class=').concat(!0===n?"completed-task":"",">").concat(a,'</h5>\n                <i class="').concat(i,'" id="heart"></i>        \n              </div>   \n              <div class="col col-sm-6 mt-3">    \n              <div class="dropdown" style="float:right;">\n              <i\n                class="fas fa-ellipsis-h"\n                id="edit-task"\n                data-toggle="dropdown"\n              >\n              </i>\n              <ul class="dropdown-menu">\n                <li>\n                  <a href="#" id="complated-task">complete</a>\n                </li>\n                <li><a href="#"   id="delete-task">delete</a></li>\n                <li><a href="#" id="editTask">edit</a></li>\n               \n              </ul>\n            </div>         \n              </div \n            </div>\n          </div>\n        </div>\n      </div>')}),this.taskContainer.innerHTML=s}}},{key:"showEditState",value:function(e){var t=e.title,a="";a+='<div class="card card-body task-container">\n         <span id="editText">edit</span>\n    <textarea\n      class="form-control rounded-0"\n      id="textAriaText"\n      rows="10"\n    >'.concat(t,'</textarea>\n    <a><span id="cancelBtn">cancel</span></a>\n  </div>'),this.taskContainer.innerHTML=a}},{key:"clearEditState",value:function(){this.taskContainer.innerHTML=""}}]),e}();function o(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,n)}return a}function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function u(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var d,k,f,p=new r,v=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.data={task:p.getTaks(),currentTask:null}}return function(e,t,a){t&&u(e.prototype,t),a&&u(e,a)}(e,[{key:"getTask",value:function(){return this.data.task}},{key:"getTaskById",value:function(t){return this.data.task.forEach(function(e){if(e.id===t)return e})}},{key:"getCurrantTask",value:function(){return this.data.currentTask}},{key:"addTask",value:function(e){var t={id:0<this.data.task.length?this.data.task[this.data.task.length-1].id+1:0,title:e,completed:!1,heart:!1},a=function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(a,!0).forEach(function(e){c(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}({},this.data,{task:[].concat(o(this.data.task),[t])});return this.data=a,t}},{key:"completeTask",value:function(t){var e=this.data.task.map(function(e){return e.id===t&&(e.completed=!e.completed),e});return this.data.task=e}},{key:"countCompletedTask",value:function(){return this.data.task.reduce(function(e,t){return!0===t.completed?++e:e},0)}},{key:"deletedTask",value:function(t){var e=this.data.task.filter(function(e){return e.id!==t});return this.data.task=e}},{key:"updateTask",value:function(t,a){this.data.task.forEach(function(e){e.id===t&&(e.title=a)})}},{key:"setCurrentTaskItem",value:function(t){var a=this;return this.data.task.forEach(function(e){e.id===t&&(a.data.currentTask=e)}),this.data.currentTask}},{key:"heartClick",value:function(t){this.data.task.map(function(e){return e.id===t&&(e.heart=!e.heart),e})}},{key:"getTaskById",value:function(t){return this.data.task.find(function(e){return e.id===t})}}]),e}(),m=(a(0),new r),h=new v,y=new s;function T(e){if("heart"===e.target.id){var t=Number(e.target.parentElement.parentElement.parentElement.id.split("-")[1]);k.heartClick(t);var a=k.getTask(),n=k.getTaskById(t);f.updateTask(n),d.populateTask(a)}}function g(e){if("complated-task"===e.target.id){e.preventDefault();var t=Number(e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.id.split("-")[1]),a=k.completeTask(t),n=k.getTaskById(t);f.updateTask(n),d.populateTask(a);var r=k.countCompletedTask();d.completedTask.textContent=r}}function b(e){if("delete-task"===e.target.id){e.preventDefault();var t=Number(e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.id.split("-")[1]);d.showMsg("you have been deleted!","danger"),k.deletedTask(t);var a=k.getTask();f.deleteTask(a),d.populateTask(a),d.totalTask.textContent=a.length;var n=k.countCompletedTask();d.completedTask.textContent=n}}function E(e){if("editTask"===e.target.id){var t=Number(e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.id.split("-")[1]);e.preventDefault();var a=k.setCurrentTaskItem(t);d.showEditState(a)}}function S(e){if("cancelBtn"===e.target.id){e.preventDefault(),d.clearEditState();var t=k.getTask();d.populateTask(t)}}function w(e){if("textAriaText"===e.target.id){document.querySelector("#textAriaText").addEventListener("keypress",function(e){if(13===e.keyCode)if(e.preventDefault(),""===this.value.trim())d.showMsg("you have forget to add your task!","danger");else{d.showMsg("your task have been updated successfuly","success");var t=k.getCurrantTask();t.title=this.value,f.updateTask(t),k.updateTask(t.id,t.title),d.clearEditState();var a=k.getTask();d.populateTask(a)}})}}function O(e){if(13===event.keyCode){e.preventDefault();var t=this.value;if(""===t.trim())d.showMsg("plz enter a task","danger");else{d.showMsg("your task have been added successfuly","success");var a=k.addTask(t);f.addTask(a),d.clearField(),d.populateTasks(a);var n=k.getTask();d.totalTask.innerHTML=n.length}}}function C(e){e.preventDefault();var t=d.getTitleInput();if(""===t.trim())d.showMsg("plz enter a task","danger");else{d.showMsg("your task have been added successfuly","success");var a=k.addTask(t);f.addTask(a),d.clearField(),d.populateTasks(a);var n=k.getTask();d.totalTask.innerHTML=n.length}}(d=y,k=h,f=m,{init:function(){d.addTask.addEventListener("click",C),d.taskContainer.addEventListener("click",g),d.taskContainer.addEventListener("click",T),d.taskTitle.addEventListener("keypress",O),d.taskContainer.addEventListener("click",b),d.taskContainer.addEventListener("click",E),d.taskContainer.addEventListener("click",w),d.taskContainer.addEventListener("click",S);var e=k.getTask();d.totalTask.innerHTML=e.length,d.clearField();var t=k.countCompletedTask();d.completedTask.textContent=t,d.populateTask(e)}}).init()}]);