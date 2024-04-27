let tableBody = document.getElementById("todoTableBody");
let prioritySelect = document.getElementById("prioritySelect");
let statusSelect = document.getElementById("statusSelect");
// get the data from local storage and change it in real format not in JSON
let archive = JSON.parse(localStorage.getItem("archive")) || [];
appendData(archive);

//Filteration part
prioritySelect.addEventListener("change", () => {
  Filter();
});
statusSelect.addEventListener("change", () => {
  Filter();
});
function Filter() {
  let selectedPriority = prioritySelect.value;
  let selectedStatus = statusSelect.value;
  if (selectedPriority === "" && selectedStatus === "") {
    appendData(archive);
  } else {
    let filterArray = archive.filter(
      (item) =>
        (selectedPriority === "" || selectedPriority === item.priority) &&
        (selectedStatus === "" || selectedStatus === item.status)
    );
    appendData(filterArray);
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
  restoreBtn.innerText = "Restore";
  restoreBtn.classList.add("restoreBtn");
  let delBtn = document.createElement("button");
  delBtn.innerText = "Delete";
  delBtn.classList.add("delete-button", "deleteBtn");
  restoreBtn.addEventListener("click", () => {
    let archive = JSON.parse(localStorage.getItem("archive")) || [];
    let todos = JSON.parse(localStorage.getItem("todos")) || [];
    let archiveData = archive.splice(index, 1); //it will give array
    todos.push(...archiveData);
    //it will send data to local storage
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("archive", JSON.stringify(archive));
    // for sending it to UI
    appendData(archive);
  });
  delBtn.addEventListener("click", () => {
    let archive = JSON.parse(localStorage.getItem("archive")) || [];
    archive.splice(index, 1); //it will delete
    //send data to local storage
    localStorage.setItem("archive", JSON.stringify(archive));
    //send to ui
    appendData(archive);
  });
  td1.innerText = obj.title;
  td2.innerText = obj.priority;
  if (obj.priority === "medium") {
    td2.style.backgroundColor = "rgb(255,255,0)";
  } else if (obj.priority === "high") {
    td2.style.backgroundColor = "rgb(255,0,0)";
  }
  td3.innerText = obj.status;
  td4.append(restoreBtn);
  td5.append(delBtn);
  tr.append(td1, td2, td3, td4, td5);
  return tr;
}
function appendData(data) {
  tableBody.innerHTML = ""; // it will clean UI
  data.forEach((item, index) => {
    let tr = createRow(item, index);
    tableBody.append(tr);
  });
}
