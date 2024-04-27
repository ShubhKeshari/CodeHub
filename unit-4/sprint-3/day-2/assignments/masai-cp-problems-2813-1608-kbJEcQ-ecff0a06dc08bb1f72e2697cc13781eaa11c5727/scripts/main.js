// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //
const employeeURL = `${baseServerURL}/employees`;
const userRegisterURL = `${baseServerURL}/register`;

// Append div to main section
let mainSection = document.getElementById("data-list-wrapper");

//  add employees
let empNameInput = document.getElementById("employee-name");
let empImgInput = document.getElementById("employee-image");
let empDeptInput = document.getElementById("employee-dept");
let empSalaryInput = document.getElementById("employee-salary");
let empCreateBtn = document.getElementById("add-employee");

//Sorting
let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");

//Filter
let filterLessThan1LBtn = document.getElementById("filter-less-than-1L");
let filterMoreThanEqualLBtn = document.getElementById(
  "filter-more-than-equal-1L"
);

// Update employees
let updateEmpIdInput = document.getElementById("update-employee-id");
let updateEmpNameInput = document.getElementById("update-employee-name");
let updateEmpImageInput = document.getElementById("update-employee-image");
let updateEmpDeptInput = document.getElementById("update-employee-dept");
let updateEmpSalaryInput = document.getElementById("update-employee-salary");
let updateEmpUpdateBtn = document.getElementById("update-employee");

//Update Salary
let updateScoreEmpId = document.getElementById("update-score-employee-id");
let updateScoreEmpSalary = document.getElementById(
  "update-score-employee-salary"
);
let updateScoreEmpSalaryButton = document.getElementById(
  "update-score-employee"
);

//Employee Data
let employeesData = [];

//ourself
//to fetchData from API

function createCard(item) {
  let cardDiv = document.createElement("div");
  cardDiv.className = "card";
  cardDiv.setAttribute("data-id", item.id);

  let imgDiv = document.createElement("div");
  imgDiv.className = "card-img";

  let cardBodyDiv = document.createElement("div");
  cardBodyDiv.className = "card-body";

  let salaryDiv = document.createElement("div");
  salaryDiv.className = "card-salary";
  salaryDiv.innerHTML = item.salary;

  let imgTag = document.createElement("img");
  imgTag.src = `${baseServerURL}${item.image}`;
  imgTag.alt = "employee";

  let cardTitle = document.createElement("h3");
  cardTitle.innerText = item.name;

  let anchor = document.createElement("a");
  anchor.href = "#";
  anchor.setAttribute("data-id", item.id);
  anchor.className = "card-link";
  anchor.innerText = "Edit";

  anchor.addEventListener("click", (e) => {
    e.preventDefault();
    updateEmpIdInput.value = item.id;
    updateEmpNameInput.value = item.name;
    updateEmpImageInput.value = item.image;
    updateEmpDeptInput.value = item.department;
    updateEmpSalaryInput.value = item.salary;
    updateScoreEmpId.value = item.id;
    updateScoreEmpSalary.value = item.salary;
  });

  imgDiv.append(imgTag);
  cardBodyDiv.append(cardTitle, salaryDiv, anchor);
  cardDiv.append(imgDiv, cardBodyDiv);
  return cardDiv;
}

function appendData(data) {
  let cardList = document.createElement("div");
  cardList.className = "card-list";
  data.forEach((item) => {
    let cardData = createCard(item);
    cardList.append(cardData);
  });
  mainSection.innerHTML = "";
  mainSection.append(cardList);
}

//fetching data from backend

async function fetchData(URL, query = "") {
  try {
    let res = await fetch(`${URL}${query}`);
    let data = await res.json();
    console.log(data);
    // to make visible on UI
    appendData(data);
  } catch (error) {
    console.log(error);
  }
}

fetchData(employeeURL);
// to add new Emp
async function addEmp() {
  try {
    let newEmpData = {
      name: empNameInput.value,
      image: empImgInput.value,
      department: +empDeptInput.value,
      salary: +empSalaryInput.value,
    };
    let res = await fetch(employeeURL, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newEmpData),
    });
    let data = await res.json();
    console.log(data);
    fetchData(employeeURL);
  } catch (error) {
    console.log(error);
  }
}

//add eventListener to createButton
empCreateBtn.addEventListener("click", addEmp);

//to update the data
async function updateall() {
  try {
    let updateData = {
      id: +updateEmpIdInput.value,
      name: updateEmpNameInput.value,
      image: updateEmpImageInput.value,
      department: +updateEmpDeptInput.value,
      salary: +updateEmpSalaryInput.value,
    };
    let res = await fetch(`${employeeURL}/${updateEmpIdInput.value}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updateData),
    });
    let data = await res.json();
    console.log(data);
    fetchData(employeeURL);
  } catch (error) {
    console.log(error);
  }
}

//add eventListener to updateEmpButton
updateEmpUpdateBtn.addEventListener("click", updateall);

async function updateSal() {
  try {
    let updateData = {
      id: +updateScoreEmpId.value,
      salary: +updateScoreEmpSalary.value,
    };
    let res = await fetch(`${employeeURL}/${updateScoreEmpId.value}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updateData),
    });
    let data = await res.json();
    console.log(data);
    fetchData(employeeURL);
  } catch (error) {
    console.log(error);
  }
}
//Add evenlistener to update salary

updateScoreEmpSalaryButton.addEventListener("click", updateSal);

//sort atoz
sortAtoZBtn.addEventListener("click", () => {
  fetchData(employeeURL, `?_sort=salary&_order=asc`);
});
//sort ztoa
sortZtoABtn.addEventListener("click", () => {
  fetchData(employeeURL, `?_sort=salary&_order=desc`);
});

//filter below 1l
filterLessThan1LBtn.addEventListener("click", () => {
  fetchData(employeeURL, `?salary_lte= 99999`);
});

//fileter above 1l
filterMoreThanEqualLBtn.addEventListener("click", () => {
  fetchData(employeeURL, `?salary_gte= 100000`);
});
