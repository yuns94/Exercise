const title = document.querySelector(".js-title"),
  taskForm = document.querySelector(".js-taskForm"),
  taskInput = taskForm.querySelector("input"),
  subTitle1 = document.querySelector(".js-sub1"),
  pendingList = document.querySelector(".js-pendingList"),
  subTitle2 = document.querySelector(".js-sub2"),
  finishedList = document.querySelector(".js-finishedList");

title.innerHTML = "TASK";
subTitle1.innerHTML = "Pending";
subTitle2.innerHTML = "Finished";

const TASKS_LS = "tasks";

let tasks = [];

function deleteTask(event) {
  const btn = event.target;
  const li = btn.parentNode;
  pendingList.removeChild(li);
  const cleanTask = tasks.filter(function (task) {
    return task.id !== parseInt(li.id);
  });
  tasks = cleanTask;
  saveTasks();
}

function moveToDown(event) {}

function saveTasks() {
  localStorage.setItem(TASKS_LS, JSON.stringify(tasks));
}

function paintTask(text) {
  const PDLi = document.createElement("li");
  const FSLi = document.createElement("li");
  const delBtn = document.createElement("button");
  const FdelBtn = document.createElement("button");
  const finBtn = document.createElement("button");
  const upBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = tasks.length + 1;
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteTask);
  FdelBtn.innerText = "❌";
  FdelBtn.addEventListener("click", deleteTask);
  finBtn.innerText = "✅";
  finBtn.addEventListener("click", moveToDown);
  upBtn.innerText = "🔙";
  span.innerText = text;
  // .innerText가 아니라 .value 로 하면 텍스트가 안나옴.
  PDLi.appendChild(span);
  PDLi.appendChild(delBtn);
  PDLi.appendChild(finBtn);
  PDLi.id = newId;
  pendingList.appendChild(PDLi);
  const pendingObj = {
    text: text,
    id: newId,
  };

  FSLi.appendChild(span);
  FSLi.appendChild(FdelBtn);
  FSLi.appendChild(upBtn);
  FSLi.id = newId;
  finishedList.appendChild(FSLi);
  const finishedObj = {
    text: text,
    id: newId,
  };
  tasks.push(pendingObj);
  tasks.push(finishedObj);

  saveTasks();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = taskInput.value;
  paintTask(currentValue);
  taskInput.value = "";
}

function loadTasks() {
  const loadedTasks = localStorage.getItem(TASKS_LS);
  if (loadedTasks !== null) {
    const parsedTasks = JSON.parse(loadedTasks);
    parsedTasks.forEach(function (toDo) {
      paintTask(toDo.text);
    });
  }
}

function init() {
  loadTasks();
  taskForm.addEventListener("submit", handleSubmit);
}

init();

/*

const title = document.querySelector(".js-title"),
  taskForm = document.querySelector(".js-taskForm"),
  taskInput = taskForm.querySelector("input"),
  subTitle1 = document.querySelector(".js-sub1"),
  pendingList = document.querySelector(".js-pendingList"),
  subTitle2 = document.querySelector(".js-sub2"),
  finishedList = document.querySelector(".js-finishedList");

title.innerHTML = "TASK";
subTitle1.innerHTML = "Pending";
subTitle2.innerHTML = "Finished";

const TASKS_LS = "tasks";

function paintTask(text) {
  const pLi = document.createElement("li");
  const delBtn = document.createElement("button");
  const finBtn = document.createElement("button");
  delBtn.innerText = "❌";
  finBtn.innerText = "✔";
  const span = document.createElement("span");
  span.innerText = text;
  pLi.appendChild(span);
  pLi.appendChild(delBtn);
  pLi.appendChild(finBtn);
  pendingList.appendChild(pLi);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = taskInput.value;
  paintTask(currentValue);
  taskInput.value = "";
}

function loadTasks() {
  const tasks = localStorage.getItem(TASKS_LS);
  if (tasks !== null) {
  }
}

function init() {
  loadTasks();
  taskForm.addEventListener("submit", handleSubmit);
}
init();

*/
