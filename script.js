"use-strict";
let myTask = [];

const saveBtn = document.querySelector("#save-btn");
const inputTask = document.querySelector("#input-el");
const taskList = document.querySelector("#ul-el");

const taskFromLocalStorage = JSON.parse(localStorage.getItem("myTask"));
if (taskFromLocalStorage) {
  myTask = taskFromLocalStorage;
  renderTask(myTask);
  console.log(myTask);
}

// localStorage.clear();
saveBtn.addEventListener("click", function () {
  myTask.push(inputTask.value);
  inputTask.value = "";

  localStorage.setItem("myTask", JSON.stringify(myTask));
  renderTask(myTask);
  console.log(myTask);
});

function renderTask(task) {
  let listTask = "";
  for (let i = 0; i < task.length; i++) {
    listTask += `<li id="taskList">${task[i]}<span class="close">X</span></li>`;
  }
  taskList.innerHTML = listTask;
}

taskList.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
  }
  console.log("clicked");
});
