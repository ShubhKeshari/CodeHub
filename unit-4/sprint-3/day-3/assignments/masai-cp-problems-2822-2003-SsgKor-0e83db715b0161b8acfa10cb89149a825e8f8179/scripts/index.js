// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //
const artURL = `${baseServerURL}/arts`;
let mainSection = document.getElementById("data-list-wrapper");
let paginationWrapper = document.getElementById("pagination-wrapper");

// art
let artTitleInput = document.getElementById("art-title");
let artImageInput = document.getElementById("art-image");
let artartistInput = document.getElementById("art-artist");
let artYearInput = document.getElementById("art-year");
let artPaintBrushesInput = document.getElementById("art-paintbrushes");
let artPriceInput = document.getElementById("art-price");
let artMediumInput = document.getElementById("art-medium");
let artCreateBtn = document.getElementById("add-art");

// Update art
let updateArtIdInput = document.getElementById("update-art-id");
let updateArtTitleInput = document.getElementById("update-art-title");
let updateArtImageInput = document.getElementById("update-art-image");
let updateArtartistInput = document.getElementById("update-art-artist");
let updateArtYearInput = document.getElementById("update-art-year");
let updateArtPaintBrushesInput = document.getElementById(
  "update-art-paintbrushes"
);
let updateArtPriceInput = document.getElementById("update-art-price");
let updateArtMediumInput = document.getElementById("update-art-medium");
let updateArtBtn = document.getElementById("update-art");

//Update price
let updatePackageArtId = document.getElementById("update-package-art-id");
let updatePackageArtPackage = document.getElementById(
  "update-package-art-package"
);
let updatePackageArtBtn = document.getElementById("update-package-art");

//sort and filter
let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");
let filterTemperaOnCanvas = document.getElementById("filter-Tempera-on-Canvas");
let filterOilOnCanvas = document.getElementById("filter-Oil-on-Canvas");

//Search by title/colour

let searchByInput = document.getElementById("search-by-input");
let searchByButton = document.getElementById("search-by-button");
let searchBySelect = document.getElementById("search-by-select");

//Arts Data
let artsData = [];
let queryParamString = null;
let pageNumber = 1;

//Start
//add eventListener
artCreateBtn.addEventListener("click", addArt);
sortAtoZBtn.addEventListener("click", () => {
  fetchData(`${artURL}?_page=1&_limit=5`);
});
updateArtBtn.addEventListener("click", () => {});
updatePackageArtBtn.addEventListener("click", () => {});

// to append the data in the dom we have to create a card
//then we have to append them

//to create a card
function createCard(item) {
  let card = document.createElement("div");
  let cardImg = document.createElement("div");
  let cardBody = document.createElement("div");
  let img = document.createElement("img");
  let cardTitle = document.createElement("h5");
  let cardArtist = document.createElement("p");
  let cardYear = document.createElement("p");
  let cardPaintbrush = document.createElement("p");
  let cardPrice = document.createElement("p");
  let cardMedium = document.createElement("p");
  let cardLink = document.createElement("a");
  let cardButton = document.createElement("button");

  card.className = "card";
  card.dataset.id = item.id; //we can do this or
  //card.setAttribute("data-id",item.id);
  cardImg.className = "card-img";
  img.src = item.image;
  img.alt = "art";
  cardBody.className = "card-body";
  cardTitle.className = "card-title";
  cardTitle.innerText = `Art title : ${item.title}`;
  cardArtist.innerText = item.artist;
  cardYear.className = "card-year";
  cardYear.innerText = `year : ${item.year}`;
  cardPaintbrush.className = "card-paintbrushes";
  cardPaintbrush.innerText = `paintbrushes : ${item.details.paintbrushes.join(
    ","
  )}`;
  //.join() method will add all the elements in the single stringusing comma separated
  cardPrice.className = "card-price";
  cardPrice.innerText = item.price;
  cardMedium.className = "card-medium";
  cardMedium.innerText = item.medium;
  cardLink.href = "#";
  cardLink.dataset.id = item.id;
  cardLink.className = "card-link";
  cardLink.innerText = "Edit";
  cardLink.addEventListener("click", (e) => {
    e.preventDefault(); // to stop the default beahaviour to redirect another page
    updateArtIdInput.value = item.id;
    updateArtTitleInput.value = item.title;
    updateArtImageInput.value = item.image;
    updateArtartistInput.value = item.artist;
    updateArtYearInput.value = item.year;
    updateArtPaintBrushesInput.value = item.details.paintbrushes;
    updateArtPriceInput.value = item.price;
    updateArtMediumInput.value = item.medium;
    updatePackageArtId.value = item.id;
    updatePackageArtPackage.value = item.price;
  });
  cardButton.dataset.id = item.id;
  cardButton.className = "card-button";
  cardButton.innerText = "Delete";
  cardButton.addEventListener("click", () => {
    deleteArt(item.id);
  });

  cardImg.append(img);
  cardBody.append(
    cardTitle,
    cardArtist,
    cardYear,
    cardPaintbrush,
    cardPrice,
    cardMedium,
    cardLink,
    cardButton
  );
  card.append(cardImg, cardBody);
  return card;
}

//to append data to datalist wrapper
function appendData(data) {
  let cardList = document.createElement("div");
  cardList.className = "card-list";
  data.forEach((item) => {
    let card = createCard(item);
    cardList.append(card);
  });
  //cleanup of datalist wrapper
  mainSection.innerHTML = "";
  mainSection.append(cardList);
}
//to fetch data
async function fetchData(url, query = "") {
  try {
    let res = await fetch(`${url}&${query}`);
    //to do pagination
    let TotalData = res.headers.get("X-Total-Count");
    let limit = 5;
    let TotalPage = Math.ceil(TotalData / limit);

    paginate(TotalPage, query);
    let data = await res.json();
    console.log(data);
    appendData(data);
  } catch (error) {
    console.log(error);
  }
}
fetchData(`${artURL}?_page=1&_limit=5`);
//to do the pagination
function paginate(TotalPage, query) {
  //Cleanup of pagination wrapper
  paginationWrapper.innerHTML = "";
  //appending buttons in the pagination wrapper
  for (let i = 1; i <= TotalPage; i++) {
    let btn = document.createElement("button");
    btn.innerText = i;
    btn.addEventListener("click", () => {
      fetchData(`${artURL}?_page=${i}&_limit=5`, query);
    });
    paginationWrapper.append(btn);
  }
}

//To add new artdata
async function addArt() {
  try {
    //beacuse we are adding the data so we use whole arturl
    let artData = {
      title: artTitleInput.value,
      artist: artartistInput.value,
      year: +artYearInput.value,
      medium: artMediumInput.value,
      price: +artPriceInput.value,
      details: {
        paintbrushes: artPaintBrushesInput.value.split(","),
      },
      image: artImageInput.value,
    };
    let res = await fetch(artURL, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(artData),
    });
    // to see the data in the backend
    let data = await res.json();
    console.log(data);
    //to get updated data in the UI without refreshing it
    fetchData(`${artURL}?_page=1&_limit=5`);
  } catch (error) {
    console.log(error);
  }
}

//To Delete art
async function deleteArt(id) {
  try {
    //In url we have to mention which data or id we are deleting
    let res = await fetch(`${artURL}/${id}`, {
      method: "DELETE",
    });
    // to see the data in the backend
    let data = await res.json();
    console.log(data);
    //to get updated data in the UI without refreshing it
    fetchData(`${artURL}?_page=1&_limit=5`);
  } catch (error) {
    console.log(error);
  }
}

async function updateAll() {
  let updateData = {
    id: updateArtIdInput.value,
    title: updateArtTitleInput.value,
    image: updateArtImageInput.value,
    artist: updateArtartistInput.value,
    year: updateArtYearInput.value,
    details: { paintbrushes: updateArtPaintBrushesInput.value.split(",") },
    price: updateArtPriceInput.value,
    medium: updateArtMediumInput.value,
  };
  let res = await fetch(`${artURL}/${updateArtIdInput.value}`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(updateData),
  });
  let data = await res.json();
  console.log(data);
  fetchData(`${artURL}?_page=1&_limit=5`);
}

//addeventlistener to updatedata
updateArtBtn.addEventListener("click", updateAll);

//To update the price
async function updatePrice() {
  let updatePrice = {
    id: updatePackageArtId.value,
    price: updatePackageArtPackage.value,
  };
  let res = await fetch(`${artURL}/${updatePackageArtId.value}`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(updatePrice),
  });
  let data = await res.json();
  console.log(data);
  fetchData(`${artURL}?_page=1&_limit=5`);
}
//addEventListener to updatePrice
updatePackageArtBtn.addEventListener("click", updatePrice);

//sorting low to high
sortAtoZBtn.addEventListener("click", () => {
  fetchData(`${artURL}?_page=1&_limit=5`, `_sort=price&_order=asc`);
});
//sorting high to low
sortZtoABtn.addEventListener("click", () => {
  fetchData(`${artURL}?_page=1&_limit=5`, `_sort=price&_order=desc`);
});
//filter tempera on canva
filterTemperaOnCanvas.addEventListener("click", () => {
  fetchData(`${artURL}?_page=1&_limit=5`, "medium=Tempera on Canvas");
});
//filter oil on canvas
filterOilOnCanvas.addEventListener("click", () => {
  fetchData(`${artURL}?_page=1&_limit=5`, "medium=Oil on Canvas");
});
searchBySelect.addEventListener("change", selectedOption);
let option;
function selectedOption() {
  option = searchBySelect.value;
}
searchByButton.addEventListener("click", search);
function search() {
  let input = searchByInput.value;
  let query = `?${option}_like=${input}`;
  let url = `${artURL}${query}`;
  if (!option) {
    return;
  }
  if (option && !input) {
    return;
  }
  fetchData(url);
}
