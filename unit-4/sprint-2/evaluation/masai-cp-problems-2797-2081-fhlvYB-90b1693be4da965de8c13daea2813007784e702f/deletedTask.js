let tbody = document.querySelector("tbody");
let priorityFilterSelecter = document.getElementById("priorityFilter");
let statusFilterSelector = document.getElementById("statusFilter");

let deletedTasks = JSON.parse(localStorage.getItem("deletedTasks")) || [];
appendData(deletedTasks);
priorityFilterSelecter.addEventListener("change", () => {
  Filter();
});
statusFilterSelector.addEventListener("change", () => {
  Filter();
});
function Filter() {
  let selectedPriority = priorityFilterSelecter.value;
  let selectedStatus = statusFilterSelector.value;

  if (selectedPriority === "" && selectedStatus === "") {
    appendData(deletedTasks);
  } else {
    let filterData = deletedTasks.filter((item) => {
      if (selectedPriority && selectedStatus) {
        return (
          item.priority === selectedPriority && item.status === selectedStatus
        );
      } else if (selectedPriority) {
        return item.priority === selectedPriority;
      } else {
        return item.status === selectedStatus;
      }
    });

    appendData(filterData);
  }
}
function createRow(obj, index) {
  let tr = document.createElement("tr");
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  let td4 = document.createElement("td");
  let td5 = document.createElement("td");
  let restoreBtn = document.createElement("button");
  restoreBtn.className = "restore-btn";
  restoreBtn.innerText = "restore";
  restoreBtn.style.backgroundColor = "rgb(76,175,80)";
  restoreBtn.addEventListener("click", () => {
    let deletedTasks = JSON.parse(localStorage.getItem("deletedTasks")) || [];
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let restore = deletedTasks.splice(index, 1);
    tasks.push(...restore);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("deletedTasks", JSON.stringify(deletedTasks));
    appendData(deletedTasks);
  });
  let delBtn = document.createElement("button");
  delBtn.className = "delete-btn";
  delBtn.innerText = "delete";
  delBtn.style.backgroundColor = "rgb(76,175,80)";
  delBtn.addEventListener("click", () => {
    let deletedTasks = JSON.parse(localStorage.getItem("deletedTasks")) || [];
    deletedTasks.splice(index, 1);
    localStorage.setItem("deletedTasks", JSON.stringify(deletedTasks));
    appendData(deletedTasks);
  });
  td1.innerText = obj.title;
  td2.innerText = obj.priority;
  td3.innerText = obj.status;
  if (obj.priority === "low") {
    td2.style.color = "rgb(0,128,0)";
  } else if (obj.priority === "medium") {
    td2.style.color = "rgb(0,0,255)";
  } else {
    td2.style.color = "rgb(255,0,0)";
  }
  td4.append(restoreBtn);
  td5.append(delBtn);
  tr.append(td1, td2, td3, td4, td5);
  return tr;
}
function appendData(tasks) {
  tbody.innerHTML = "";
  tasks.forEach((item, index) => {
    let a = createRow(item, index);
    tbody.append(a);
  });
}
