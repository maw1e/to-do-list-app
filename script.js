"use-strict";
let myTask = [];

const saveBtn = document.querySelector("#save-btn");
const inputTask = document.querySelector("#input-el");
const taskList = document.querySelector("#ul-el");

const taskFromLocalStorage = JSON.parse(localStorage.getItem("myTask"));
if (taskFromLocalStorage) {
  myTask = taskFromLocalStorage;
  renderTask(myTask);
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
  setTimeout(function () {
    if (event.target.className === "close") {
      // Get the text content of the li element (parent of the span)
      let selectedItem = event.target.parentElement.textContent
        .replace("X", "")
        .trim();
      removeItemFromLocalStorage(selectedItem);
    }
  }, 500);
});

function removeItemFromLocalStorage(itemValue) {
  let index = myTask.indexOf(itemValue);
  if (index > -1) {
    myTask.splice(index, 1);
    localStorage.setItem("myTask", JSON.stringify(myTask));
    renderTask(myTask);
  }
}
