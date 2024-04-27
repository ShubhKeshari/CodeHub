// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //
const jobURL = `${baseServerURL}/jobs`;
let mainSection = document.getElementById("data-list-wrapper");

let paginationWrapper = document.getElementById("pagination-wrapper");

// job
let jobRoleInput = document.getElementById("job-role");
let jobImageInput = document.getElementById("job-image");
let jobCompanyNameInput = document.getElementById("job-companyName");
let jobExperienceRequiredInput = document.getElementById(
  "job-experienceRequired"
);
let jobEmploymentTypeInput = document.getElementById("job-employmentType");
let jobpackageCTCInput = document.getElementById("job-packageCTC");
let jobKeySkillsInput = document.getElementById("job-keySkills");
let jobCreateBtn = document.getElementById("add-job");

// Update job
let updateJobIdInput = document.getElementById("update-job-id");
let updateJobRoleInput = document.getElementById("update-job-role");
let updateJobImageInput = document.getElementById("update-job-image");
let updateJobCompanyNameInput = document.getElementById(
  "update-job-companyName"
);
let updateJobExperienceRequiredInput = document.getElementById(
  "update-job-experienceRequired"
);
let updateJobEmploymentTypeInput = document.getElementById(
  "update-job-employmentType"
);
let updateJobPackageCTCInput = document.getElementById("update-job-packageCTC");
let updateJobKeySkillsInput = document.getElementById("update-job-keySkills");
let updateJobBtn = document.getElementById("update-job");

//Update packageCTC
let updatePackageJobId = document.getElementById("update-package-job-id");
let updatePackageJobPackage = document.getElementById(
  "update-package-job-package"
);
let updatePackageJobBtn = document.getElementById("update-package-job");

//sort and filter
let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");
let filterGoogle = document.getElementById("filter-Google");
let filterMicrosoft = document.getElementById("filter-Microsoft");
let filtercapgemini = document.getElementById("filter-capgemini");

//Search by title/colour

let searchBySelect = document.getElementById("search-by-select");
let searchByInput = document.getElementById("search-by-input");
let searchByButton = document.getElementById("search-by-button");

//Jobs Data
let jobsData = [];
let queryParamString = null;
let pageNumber = 1;

//to create a card
function createCard(item) {
  let card = document.createElement("div");
  card.className = "card";
  card.dataset.id = item.id;

  let cardImg = document.createElement("div");
  cardImg.className = "card-img";

  let img = document.createElement("img");
  img.src = item.image;
  img.alt = "job";

  let cardBody = document.createElement("div");
  cardBody.className = "card-body";

  let cardRole = document.createElement("h5");
  cardRole.className = "card-role";
  cardRole.innerText = `Job role : ${item.role}`;

  let cardCompanyName = document.createElement("p");
  cardCompanyName.className = "card-companyName";
  cardCompanyName.innerText = item.companyName;

  let cardExpReq = document.createElement("p");
  cardExpReq.className = "card-experienceRequired";
  cardExpReq.innerText = `experience Required : ${item.experienceRequired} Yrs`;

  let cardemployType = document.createElement("p");
  cardemployType.className = "card-employmentType";
  cardemployType.innerText = `employment Type : ${item.employmentType}`;

  let cardCTC = document.createElement("p");
  cardCTC.className = "card-packageCTC";
  cardCTC.innerText = item.packageCTC;

  let cardKeySkill = document.createElement("p");
  cardKeySkill.className = "card-keySkills";
  cardKeySkill.innerText = `key Skills : ${item.keySkills.join(",")}`;

  let cardLink = document.createElement("a");
  cardLink.href = "#";
  cardLink.dataset.id = item.id;
  cardLink.className = "card-link";
  cardLink.innerText = "Edit";

  cardLink.addEventListener("click", (e) => {
    e.preventDefault();
    updateJobIdInput.value = item.id;
    updateJobRoleInput.value = item.role;
    updateJobImageInput.value = item.image;
    updateJobCompanyNameInput.value = item.companyName;
    updateJobExperienceRequiredInput.value = item.experienceRequired;
    updateJobEmploymentTypeInput.value = item.employmentType;
    updateJobPackageCTCInput.value = item.packageCTC;
    updateJobKeySkillsInput.value = item.keySkills;
    updatePackageJobId.value = item.id;
    updatePackageJobPackage.value = item.packageCTC;
  });

  let cardButton = document.createElement("button");
  cardButton.dataset.id = item.id;
  cardButton.className = "card-button";
  cardButton.innerText = "Delete";

  cardButton.addEventListener("click", () => {
    deleteJob(item.id);
  });

  cardImg.append(img);
  cardBody.append(
    cardRole,
    cardCompanyName,
    cardExpReq,
    cardemployType,
    cardCTC,
    cardKeySkill,
    cardLink,
    cardButton
  );
  card.append(cardImg, cardBody);
  return card;
}
// append card to datalist wrapper
function appendData(data) {
  let cardList = document.createElement("div");
  cardList.className = "card-list";
  data.forEach((item) => {
    let card = createCard(item);
    cardList.append(card);
  });
  //cleaup wrapper
  mainSection.innerHTML = "";
  mainSection.append(cardList);
}

//to fetch the data
async function fetchData(url, query = "") {
  try {
    let res = await fetch(`${url}&${query}`);
    //for pagination
    let TotalData = res.headers.get("X-Total-Count");
    let limit = 5;
    let Totalpages = Math.ceil(TotalData / limit);
    //pagination
    paginationWrapper.innerHTML = "";
    for (let i = 1; i <= Totalpages; i++) {
      var btn = document.createElement("button");
      btn.innerText = i;
      btn.addEventListener("click", () => {
        fetchData(`${jobURL}?_page=${i}&_limit=5`, query);
      });
      paginationWrapper.append(btn);
    }
    let data = await res.json();
    console.log(data);
    appendData(data);
  } catch (error) {
    console.log(error);
  }
}
fetchData(`${jobURL}?_page=1&_limit=5`);

// to add new jobs
async function addJobs() {
  try {
    let jobData = {
      role: jobRoleInput.value,
      companyName: jobCompanyNameInput.value,
      experienceRequired: +jobExperienceRequiredInput.value,
      packageCTC: +jobpackageCTCInput.value,
      employmentType: jobEmploymentTypeInput.value,
      keySkills: jobKeySkillsInput.value.split(","),
      image: jobImageInput.value,
    };

    let res = await fetch(jobURL, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(jobData),
    });
    let data = await res.json();
    console.log(data);
    fetchData(`${jobURL}?_page=1&_limit=5`);
  } catch (error) {
    console.log(error);
  }
}

jobCreateBtn.addEventListener("click", addJobs);

// to delete job

async function deleteJob(id) {
  try {
    let res = await fetch(`${jobURL}/${id}`, {
      method: "DELETE",
    });
    let data = await res.json();
    console.log(data);
    fetchData(`${jobURL}?_page=1&_limit=5`);
  } catch (error) {
    console.log(error);
  }
}

// to updateAll
async function updateAll() {
  try {
    let updatData = {
      id: updateJobIdInput.value,
      role: updateJobRoleInput.value,
      companyName: updateJobCompanyNameInput.value,
      experienceRequired: updateJobExperienceRequiredInput.value,
      packageCTC: updateJobPackageCTCInput.value,
      employmentType: updateJobEmploymentTypeInput.value,
      keySkills: updateJobKeySkillsInput.value.split(","),
      image: updateJobImageInput.value,
    };
    let res = await fetch(`${jobURL}/${updateJobIdInput.value}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatData),
    });
    let data = await res.json();
    console.log(data);
    fetchData(`${jobURL}?_page=1&_limit=5`);
  } catch (error) {
    console.log(error);
  }
}

updateJobBtn.addEventListener("click", updateAll);

// to updateAll
async function updateJob() {
  try {
    let updatData = {
      id: updatePackageJobId.value,
      packageCTC: updatePackageJobPackage.value,
    };

    let res = await fetch(`${jobURL}/${updateJobIdInput.value}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatData),
    });
    let data = await res.json();
    console.log(data);
    fetchData(`${jobURL}?_page=1&_limit=5`);
  } catch (error) {
    console.log(error);
  }
}

updatePackageJobBtn.addEventListener("click", updateJob);

sortAtoZBtn.addEventListener("click", () => {
  fetchData(`${jobURL}?_page=1&_limit=5`, `_sort=packageCTC&_order=asc`);
});
sortZtoABtn.addEventListener("click", () => {
  fetchData(`${jobURL}?_page=1&_limit=5`, `_sort=packageCTC&_order=desc`);
});
filterGoogle.addEventListener("click", () => {
  fetchData(`${jobURL}?_page=1&_limit=5`, "companyName=Google");
});
filterMicrosoft.addEventListener("click", () => {
  fetchData(`${jobURL}?_page=1&_limit=5`, "companyName=Microsoft");
});
filtercapgemini.addEventListener("click", () => {
  fetchData(`${jobURL}?_page=1&_limit=5`, "companyName=capgemini");
});

searchBySelect.addEventListener("change", selectOption);
let option;
function selectOption() {
  option = searchBySelect.value;
}
searchByButton.addEventListener("click", search);
function search() {
  let input = searchByInput.value;
  let query = `?${option}_like=${input}`;
  let url = `${jobURL}${query}`;
  if (!option) {
    return;
  }
  if (option && !input) {
    return;
  }
  fetchData(url);
}
