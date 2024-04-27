let taskNameInput = document.getElementById("taskName");
let prioritySelect = document.getElementById("priority");
let submitBtn = document.getElementById("submitBtn");
let tbody = document.querySelector("tbody");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
appendData(tasks);
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (checkInput()) {
    let task = {
      title: taskNameInput.value,
      priority: prioritySelect.value,
      status: "pending",
    };
    tasks.push(task);
    appendData(tasks);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
function checkInput() {
  if (taskNameInput.value && prioritySelect.value) {
    // alert("data added succesfully");
    return true;
  } else {
    alert("Task cannot be empty!");
    return false;
  }
}
function createRow(obj, index) {
  let tr = document.createElement("tr");
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  let td4 = document.createElement("td");
  let statusBtn = document.createElement("button");
  statusBtn.className = "toggleStatus";
  statusBtn.innerText = obj.status;
  statusBtn.style.backgroundColor = "rgb(255,165,0)";
  statusBtn.addEventListener("click", () => {
    if (statusBtn.innerText === "pending") {
      statusBtn.innerText = "in-progress";
      statusBtn.style.backgroundColor = "rgb(76,175,80)";
      tasks[index] = { ...obj, status: "in-progress" };
    } else if (statusBtn.innerText === "in-progress") {
      statusBtn.innerText = "complete";
      statusBtn.style.backgroundColor = "rgb(255,192,203)";
      tasks[index] = { ...obj, status: "complete" };
    } else {
      statusBtn.innerText = "pending";
      statusBtn.style.backgroundColor = "rgb(255,165,0)";
      tasks[index] = { ...obj, status: "pending" };
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });
  let remBtn = document.createElement("button");
  remBtn.className = "remove-btn";
  remBtn.innerText = "remove";
  remBtn.addEventListener("click", () => {
    let deletedTasks = JSON.parse(localStorage.getItem("deletedTasks")) || [];
    let deleted = tasks.splice(index, 1);
    deletedTasks.push(...deleted);
    appendData(tasks);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("deletedTasks", JSON.stringify(deletedTasks));
  });
  td1.innerText = obj.title;
  td2.innerText = obj.priority;
  if (obj.priority === "low") {
    td2.style.color = "rgb(0,128,0)";
  } else if (obj.priority === "medium") {
    td2.style.color = "rgb(0,0,255)";
  } else {
    td2.style.color = "rgb(255,0,0)";
  }
  td3.append(statusBtn);
  td4.append(remBtn);
  tr.append(td1, td2, td3, td4);
  return tr;
}
function appendData(tasks) {
  tbody.innerHTML = "";
  tasks.forEach((item, index) => {
    let a = createRow(item, index);
    tbody.append(a);
  });
}
