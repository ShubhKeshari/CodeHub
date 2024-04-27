let addTodoButton = document.getElementById("addBtn");
let tableBody = document.getElementById("todoTableBody");
let inputTitle = document.getElementById("todoName");
let prioritySelect = document.getElementById("priority");
let todos = JSON.parse(localStorage.getItem("todos")) || []; //get our data from local storage in real format
appendData(todos); // on page(UI)
addTodoButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (checkInput()) {
    let todo = {
      title: inputTitle.value,
      priority: prioritySelect.value,
      status: "Pending🔃",
    };
    todos.push(todo); // update the data
    appendData(todos); //On page (UI)
    localStorage.setItem("todos", JSON.stringify(todos)); //added updated data on local storage
  }
});
function checkInput() {
  if (inputTitle.value) {
    // alert("Todo added successfully");
    return true;
  } else {
    alert("Todo cannot be empty!");
    return false;
  }
}
function createRow(obj, index) {
  let tr = document.createElement("tr");
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  let td4 = document.createElement("td");
  let statusbtn = document.createElement("button");
  statusbtn.className = "toggle";
  statusbtn.innerText = obj.status;
  let archivebtn = document.createElement("button");
  archivebtn.classList.add("archiveBtn", "delete-button");
  archivebtn.innerText = "Archive";
  statusbtn.addEventListener("click", () => {
    if (statusbtn.innerText === "Pending🔃") {
      statusbtn.innerText = "Completed✅";
      todos[index] = { ...obj, status: "Completed✅" };
    } else {
      statusbtn.innerText = "Pending🔃";
      todos[index] = { ...obj, status: "Pending🔃" };
    }
    localStorage.setItem("todos", JSON.stringify(todos));
  });
  archivebtn.addEventListener("click", () => {
    let archive = JSON.parse(localStorage.getItem("archive")) || [];
    let archiveobj = todos.splice(index, 1); // it will give array output
    archive.push(...archiveobj);
    appendData(todos);
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("archive", JSON.stringify(archive));
  });
  td1.innerText = obj.title;
  td2.innerText = obj.priority;
  if (obj.priority === "medium") {
    td2.style.backgroundColor = "rgb(255,255,0)";
  } else if (obj.priority === "high") {
    td2.style.backgroundColor = "rgb(255,0,0)";
  }
  td3.append(statusbtn);
  td4.append(archivebtn);
  tr.append(td1, td2, td3, td4);
  return tr;
}
function appendData(data) {
  tableBody.innerHTML = "";
  data.forEach((item, index) => {
    let tr = createRow(item, index);
    tableBody.append(tr);
  });
}
