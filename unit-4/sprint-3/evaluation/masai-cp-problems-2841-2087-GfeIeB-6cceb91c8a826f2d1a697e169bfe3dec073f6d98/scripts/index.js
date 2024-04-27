// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //
const bookURL = `${baseServerURL}/books`;
let mainSection = document.getElementById("data-list-wrapper");
let paginationWrapper = document.getElementById("pagination-wrapper");

// book
let bookTitleInput = document.getElementById("book-title");
let bookImageInput = document.getElementById("book-image");
let bookAuthorInput = document.getElementById("book-author");
let bookYearInput = document.getElementById("book-publication-year");
let bookCharactersInput = document.getElementById("book-characters");
let bookPriceInput = document.getElementById("book-price");
let bookGenreInput = document.getElementById("book-genre");
let bookCreateBtn = document.getElementById("add-book");

// Update book
let updateBookIdInput = document.getElementById("update-book-id");
let updateBookTitleInput = document.getElementById("update-book-title");
let updateBookImageInput = document.getElementById("update-book-image");
let updateAuthorInput = document.getElementById("update-book-author");
let updateBookYearInput = document.getElementById(
  "update-book-publication-year"
);
let updateBookCharactersInput = document.getElementById("update-book-characters");
let updateBookPriceInput = document.getElementById("update-book-price");
let updateBookGenreInput = document.getElementById("update-book-genre");
let updateBookBtn = document.getElementById("update-book");

//Update price
let updatePriceBookId = document.getElementById("update-price-book-id");
let updatePriceBookPrice = document.getElementById("update-price-book-price");
let updatePriceBookBtn = document.getElementById("update-price-book");

//sort and filter
let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");
let filterScienceFiction = document.getElementById("filter-science-fiction");
let filterFantasy = document.getElementById("filter-Fantasy");

//Search by title/colour

let searchBySelect = document.getElementById("search-by-select");
let searchByInput = document.getElementById("search-by-input");
let searchByButton = document.getElementById("search-by-button");

//bookData
let booksData = [];
let queryParamString = null;
let pageNumber = 1;

function createBooks(item, index) {
  let card = `
  <div class="card" data-id=${item.id} >
    <div class="card-img">
    <img src=${item.image} alt="book" />
    </div>
    <div class="card-body">
      <h5 class="card-title
      ">Book title : ${item.title}</h5>
      <p class="card-author">${item.author}</p>
      <p class="card-year">Publication year : ${item.publication_year}</p>
      <p class="card-characters">Characters : ${item.details.characters.join(
        ","
      )}</p>
      <p class="card-price">$${item.price}</p>
      <p class="card-genre">${item.genre}</p>
      <a href="#" data-id=${
        item.id
      } data-index=${index} class="card-link">Edit</a>
      <button data-id=${item.id} class="card-button">Delete</button>
    </div>
  </div>
`;
  return card;
}

function appendData(data) {
  let cardList = document.createElement("div");
  cardList.className = "card-list";

  data.forEach((item, index) => {
    cardList.innerHTML += createBooks(item, index);
  });
  mainSection.innerHTML = "";
  mainSection.append(cardList);
  let editLinks = document.getElementsByClassName("card-link");
  let deleteButtons = document.getElementsByClassName("card-button");

  for (let item of editLinks) {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      updateBookIdInput.value = booksData[e.target.dataset.index].id;
      updateBookTitleInput.value = booksData[e.target.dataset.index].title;
      updateBookImageInput.value = booksData[e.target.dataset.index].image;
      updateAuthorInput.value = booksData[e.target.dataset.index].author;
      updateBookYearInput.value =
        booksData[e.target.dataset.index].publication_year;
      updateBookCharactersInput.value =
        booksData[e.target.dataset.index].details.characters.join(",");
      updateBookPriceInput.value = booksData[e.target.dataset.index].price;
      updateBookGenreInput.value = booksData[e.target.dataset.index].genre;
      updatePriceBookId.value = booksData[e.target.dataset.index].id;
      updatePriceBookPrice.value = booksData[e.target.dataset.index].price;
    });
  }

  for (let btn of deleteButtons) {
    btn.addEventListener("click", (e) => {
      deleteBook(e.target.dataset.id);
    });
  }
}

async function fetchData(url, queryParams = "") {
  try {
    let res = await fetch(`${url}&${queryParams}`);
    let totalData = res.headers.get("X-Total-Count");
    let limit = 5;
    let totalPage = Math.ceil(totalData / limit);
    console.log(totalPage);
    pagination(totalPage, limit, queryParams);

    let data = await res.json();
    console.log(data);
    booksData = data;
    appendData(data);
  } catch (error) {
    console.log(error);
  }
}

async function deleteBook(id) {
  try {
    let res = await fetch(`${bookURL}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });

    let data = await res.json();
    console.log(data);
    fetchData(`${bookURL}?_page=1&_limit=5`);
  } catch (error) {
    console.log(error);
  }
}
async function updateBook(id) {
  try {
    let bookData = {
      title: updateBookTitleInput.value,
      author: updateAuthorInput.value,
      publication_year: +updateBookYearInput.value,
      genre: updateBookGenreInput.value,
      price: +updateBookPriceInput.value,
      details: {
        characters: updateBookCharactersInput.value.trim().split(","),
      },
      image: updateBookImageInput.value,
    };

    let res = await fetch(`${bookURL}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(bookData),
    });

    let data = await res.json();
    console.log(data);
    fetchData(`${bookURL}?_page=1&_limit=5`);
  } catch (error) {
    console.log(error);
  }
}

async function updateBookPrice(id) {
  try {
    let bookData = {
      price: +updatePriceBookPrice.value,
    };

    let res = await fetch(`${bookURL}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(bookData),
    });

    let data = await res.json();
    console.log(data);
    fetchData(`${bookURL}?_page=1&_limit=5`);
  } catch (error) {
    console.log(error);
  }
}

async function addBook() {
  try {
    let bookData = {
      title: bookTitleInput.value,
      author: bookAuthorInput.value,
      publication_year: +bookYearInput.value,
      genre: bookGenreInput.value,
      price: +bookPriceInput.value,
      details: {
        characters: bookCharactersInput.value.trim().split(","),
      },
      image: bookImageInput.value,
    };

    let res = await fetch(`${bookURL}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(bookData),
    });

    let data = await res.json();
    console.log(data);
    fetchData(`${bookURL}?_page=1&_limit=5`);
  } catch (error) {
    console.log(error);
  }
}

function pagination(totalPage, limit = 5, queryParams) {
  paginationWrapper.innerHTML = "";

  for (let i = 1; i <= totalPage; i++) {
    let btn = document.createElement("button");
    btn.innerText = i;
    btn.addEventListener("click", () => {
      fetchData(`${bookURL}?_page=${i}&_limit=${limit}`, queryParams);
    });
    paginationWrapper.append(btn);
  }
}

//add event Listner
window.addEventListener("load", () => {
  fetchData(`${bookURL}?_page=1&_limit=5`);
});
sortAtoZBtn.addEventListener("click", () => {
  fetchData(`${bookURL}?_page=1&_limit=5`, `_sort=price&_order=asc`);
});
sortZtoABtn.addEventListener("click", () => {
  fetchData(`${bookURL}?_page=1&_limit=5`, `_sort=price&_order=desc`);
});
filterScienceFiction.addEventListener("click", () => {
  fetchData(`${bookURL}?_page=1&_limit=5`, `genre=Science Fiction`);
});
filterFantasy.addEventListener("click", () => {
  fetchData(`${bookURL}?_page=1&_limit=5`, `genre=Fantasy`);
});
updateBookBtn.addEventListener("click", () => {
  updateBook(updateBookIdInput.value);
});
bookCreateBtn.addEventListener("click", addBook);
updatePriceBookBtn.addEventListener("click", () => {
  updateBookPrice(updatePriceBookId.value);
});
searchByButton.addEventListener("click", () => {
  fetchData(
    `${bookURL}?_page=1&_limit=5`,
    `${searchBySelect.value}_like=${searchByInput.value}`
  );
});
