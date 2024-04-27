// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------
const recipeIngredientURL = `${baseServerURL}/recipeIngredients`;
const employeeURL = `${baseServerURL}/employees`;
const userRegisterURL = `${baseServerURL}/user/register`;
const userLoginURL = `${baseServerURL}/user/login`;
let paginationWrapper = document.getElementById("pagination-wrapper");

let loginUserUsername = document.getElementById("login-user-username");
let loginUserPassword = document.getElementById("login-user-passowrd");

let loginUserButton = document.getElementById("login-user");
let getTodoButton = document.getElementById("fetch-todos");

let mainSection = document.getElementById("data-list-wrapper");
let notificationWrapper = document.getElementById("notifications-wrapper");

let userAuthToken = localStorage.getItem("localAccessToken") || null;
let userId = +localStorage.getItem("userId") || null;
const urlAllTodosOfUser = `${baseServerURL}/todos?userId=${userId}`;
const urlTodosBase = `${baseServerURL}/todos/`;

loginUserButton.addEventListener("click", () => {
  logIn();
});
getTodoButton.addEventListener("click", fetchTodo);

async function logIn() {
  try {
    let obj = {
      username: loginUserUsername.value,
      password: loginUserPassword.value,
    };

    let res = await fetch(userLoginURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    let data = await res.json();
    console.log(data);
    localStorage.setItem("localAccessToken", data.accessToken);
    localStorage.setItem("userId", JSON.stringify(data.user.id));
    console.log(data.accessToken, data.user.id);
    // Display notification
    displayNotification(`hey ${data.user.username}, welcome back!`);
    // fetchTodo()
  } catch (err) {
    console.log(err);
  }
}

async function fetchTodo() {
  try {
    let Token = localStorage.getItem("localAccessToken");
    console.log(userAuthToken);
    let userId = JSON.parse(localStorage.getItem("userId"));
    let res = await fetch(`${baseServerURL}/todos?userId=${userId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    });
    let data = await res.json();
    console.log(data);
    appendData(data);
  } catch (error) {
    console.log(error);
  }
}

// Function to display notification
function displayNotification(message) {
  const notification = document.createElement("h5");
  notification.classList.add("notification", "info");
  notification.textContent = message;
  notificationWrapper.innerHTML = "";
  notificationWrapper.append(notification);
}

function creatTask(obj) {
  // console.log(obj)
  let label = document.createElement("label");
  let todoItemCheckbox = document.createElement("input");
  todoItemCheckbox.className = "todo-item-checkbox";
  todoItemCheckbox.dataset.id = obj.id;
  todoItemCheckbox.type = "checkbox";
  if (obj.completed) {
    todoItemCheckbox.setAttribute("checked", "");
  }
  todoItemCheckbox.addEventListener("change", async () => {
    if (obj.completed) {
      obj.completed = false;
    } else {
      obj.completed = true;
    }

    let toggleItem = {
      id: obj.id,
      completed: obj.completed,
    };
    try {
      let token = localStorage.getItem("localAccessToken");
      let userId = JSON.parse(localStorage.getItem("userId"));
      let res = await fetch(`${baseServerURL}/todos/${userId}`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
        body: JSON.stringify(toggleItem),
      });
      let data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  });
  let titleTextNode = document.createTextNode(obj.title);
  label.append(todoItemCheckbox);
  label.appendChild(titleTextNode);
  return label;
}

function appendData(data) {
  let todoWrapper = document.createElement("div");
  todoWrapper.className = "todo-wrapper";
  todoWrapper.id = "todo-wrapper";
  // todoWrapper.innerHTML="";
  data.forEach((element) => {
    let label = creatTask(element);
    todoWrapper.append(label);
  });
  mainSection.innerHTML = "";
  mainSection.append(todoWrapper);
}
