// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://127.0.0.1:${
  import.meta && import.meta.env && import.meta.env.REACT_APP_JSON_SERVER_PORT
    ? import.meta.env.REACT_APP_JSON_SERVER_PORT
    : 9090
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //
let mainSection = document.getElementById("data-list-wrapper");
let getRecipesBtn = document.getElementById("fetch-recipes");
let totalResult = document.querySelector(".total-results");
const urlAllRecipes = `${baseServerURL}/recipes`;

let recipesArray = [];

function createCard(item) {
  let card = `<div class="recipe-card">
      <div class="recipe-image">
          <img src= ${item.image} alt= ${item.name}> 
      </div>      
      <div class="recipe-details">
        <h2 class="recipe-name">${item.name}</h2>
        <p class="recipe-price">${item.price}</p>
      </div>
  </div>`;
  return card;
}

function appendData(data) {
  // mainSection.innerHTML = "";
  data.forEach((item) => {
    mainSection.innerHTML += createCard(item);
  });
}
let page = 1;
let flag = true;
let x = 0;
async function fetchData(url, querystring = "") {
  try {
    let res = await fetch(`${url}${querystring}`);
    let data = await res.json();
    x = x + data.length;
    totalResult.innerText = x;
    console.log(x);
    console.log(data);
    appendData(data);
    flag = true;
  } catch (error) {
    console.log(error);
  }
}
getRecipesBtn.addEventListener("click", () => {
  //fetchData(urlAllRecipes, `?_limit=5`);
  fetchData(`${urlAllRecipes}?_page=${page}&_limit=5`);
});

// mainSection.addEventListener("scroll", () => {
//   let clientHeight = mainSection.clientHeight;
//   console.log(clientHeight);
//   let scrollTop = mainSection.scrollTop;
//   console.log(scrollTop);
//   let scrollHeight = mainSection.scrollHeight;
//   if (scrollHeight-clientHeight<=scrollTop) {
//     console.log("anuj");
//   }
// });

window.addEventListener("scroll", () => {
  let clientHeight = document.documentElement.clientHeight;
  let scrollHeight = document.documentElement.scrollHeight;
  let scrollTop = document.documentElement.scrollTop;
  if (scrollHeight - clientHeight <= Math.ceil(scrollTop) && flag) {
    page++;
    fetchData(`${urlAllRecipes}?_page=${page}&_limit=5`);
    flag = false;
  }
});
