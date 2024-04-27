# Book app📔(JS-CRUD-pagination-Search)
### JS-VITE-WITH-MOCK-SERVER

Please do NOT use VSCode live-server. It will not work. Use the npm commands suggested to you here.

## Installation
```
npm install --engine-strict
```
## Start only the Backend server
```
npm run server
```
## Start only Frontend server
```
npm run start
```
## Start both BE & FE in a single command
```
npm run watch
```
# Important files
```
├── index.html
├── scripts
│   └── index.js
└── styles
    └── style.css
```
## Maximum Marks - 24

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json
- The Submission should not contain spaces; for example /js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to GitHub

## Rubrics
```
✅ able to submit the app - 1 mark ( minimum score )

### fetching the initial data
---------------------------------------
✅ should show the correct initial data - 3 marks 

### Add, delete, and update a Book
-----------------------------------------
✅ Able to add new Books - 2 marks
✅ Check by adding a new Book the pagination button should increase - 1 mark
✅ Able to delete Book - 2 marks
✅ Able to edit all fields of the Book - 2 marks
✅ Able to edit the price - 1 mark

### Sorting and filtering
----------------------------
✅ should able to sort Low-to-high as expected - 1 mark
✅ should able to sort high-to-low as expected - 1 mark
✅ should be able to filter science fiction as expected - 2 mark

### pagination functionality
------------------------------
✅ should work Low-to-high sort as expected with pagination - 1 mark
✅ should work high-to-low sort as expected with pagination - 1 mark
✅ should able to filter as expected with pagination - 1 mark
✅ should able to work pagination correctly - 2 mark

### search functionality
---------------------------
✅ Able to search by title - 1 mark
✅ Able to search by author - 1 mark

```
### You haven't been taught Cypress to run the test cases locally; you can see the passed/ failed test cases and test errors on CP itself.

## Some Rules to follow:-

- Before writing a single line of code, please read the problem statement very carefully.
- <span style=" color: red">Don't change the already given IDs or classes.</span>
- If you don't follow these rules, you might not get any marks even if you do everything correctly.

## Problem statements

- Use `fetch` for API requests 
- irrespective of `sorting`, `filtering`, and `searching` for every fetch request limit your data to 5 per page <span style=" color: red">**(Hint: _page=`<pagenumber>`&_limit=5)**</span>

### <h1 style="color:#215dc8">index page</h1>

Your task is to build ***`BookApp`*** app where different Books are available, and you have to perform all `CURD` operations here, able to create, update, Read, and Delete Books and also implement search functionality.

<h4 style="color:#215dc8">
Problem 1. List of Books on page load [3]
</h4>

On page `load`, a list of all `Books` should be shown in the  `div#data-list-wrapper`. 

Expected markup (Books card list):
<!-- ![landingpage markup]() -->
<figure>
<img src="https://i.imgur.com/ztnGSVH.png"  style=" border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>landingpage markup</b></figcaption>
</figure>

- The `div.card` is a card appended to the div with `div.card-list`.
- In the above markup you can see only 5 cards are present on the first page and each page limit is 5.
- irrespective of `sorting`, `filtering`, and `searching` for every fetch request limit your data to 5 per page <span style=" color: red">**(Hint: _page=`<pagenumber>`&_limit=5)**</span>

Expected markup (example, single card div inside card-list div): 
<!-- ![BooksMarkUp]() -->

<figure>
<img src="https://i.imgur.com/3xwi9sj.png"  style=" border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>Single Book card Markup</b></figcaption>
</figure>

- **Markup - elements, classes & IDs should be identical to the above screenshot.**

- The **card** with `div.card` and `data-id={id of div}` having child div as 
  1. The `div.card-img` in this image of the Book is present.
  2. The `div.card-body` in this 
      -  h5 tag with `h5.card-title` **with title of Book**.
      - p tag with `p.card-author` with the *author* of the Book
      - p tag with `p.card-year` with the *release year* of the Book
      - p tag with `p.card-characters` with the *characters* of a Books
      - p tag with `p.card-price` with the *price* of the Book
      - p tag with `p.card-genre` with the *genre* of a Book
      - anchor tag with `a.card-link` with *`Edit`* text
        1.  class= card-link
        2.  href=#
        3.  data-id= id of the Book 
      - button with `button.card-button` with *`Delete`* text 
        1.  class= card-button
        2.  data-id= id of the Book

| Sr. | tag    | class                                                      | text/src                      |
| --- | ------ | ---------------------------------------------------------- | ----------------------------- |
| 1.  | div    | <span style="color:#215dc8">card-img</span>                | add `img` tag inside this div |
| 1.  | img    | -                                                          | image of the Book              |
| 2.  | h5     | <span style="color:#215dc8">card-title</span>               | the `title` of the Book         |
| 3.  | p      | <span style="color:#215dc8">card-author</span>        | `author` of Book          |
| 4.  | p      | <span style="color:#215dc8">card-year</span> | `year` of Book   |
| 5.  | p      | <span style="color:#215dc8">card-characters</span>     | `characters` of Book       |
| 6.  | p      | <span style="color:#215dc8">card-price</span>         | `price` of Book           |
| 7.  | p      | <span style="color:#215dc8">card-genre</span>          | `genre` of Book            |
| 8.  | a      | <span style="color:#215dc8">card-link</span>               | `Edit` text                   |
|     |        | data-id= id of the Book                                     |                               |
| 9.  | button | <span style="color:#215dc8">card-button</span>             | `Delete` text                 |
|     |        | data-id= id of the Book                                     |                               |


- Here, *`data-id`* is used to catch the `id` of the Book. You can use a dataset.id refer to [working with dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset).

Expected UI (example card):
<!-- ![BookUI]() -->
<figure>
<img src="https://i.imgur.com/xdrLohj.png"  style=" border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>Single Book card UI</b></figcaption>
</figure>

Data mapping:
<!-- ![dataMarkUp]() -->
<figure>
<div style="display: flex; justify-content: space-between;">
  <img src="https://i.imgur.com/QVluXUa.png" style="border-radius: 5px;" width="35%">
  <img src="https://i.imgur.com/xdrLohj.png" style="border-radius: 5px; object-fit: contain;" width="45%;" >
</div>
<figcaption align = "center"><b>dataMarkUp
</b></figcaption>
</figure>

- The data should be fetched from `${baseServerURL}/books`
- The Books should be shown on page `load`

<h4 style="color:#215dc8">
Problem 2. Pagination [2]
</h4>

<figure>
<img src="https://i.imgur.com/6j7soZQ.png"  style=" border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>Pagination</b></figcaption>
</figure>

- The buttons for pagination should be appended inside the `div` with `id=pagination-wrapper"` which is already mentioned in the boilerplate
- add _limit = 5 i.e. on each page `5` Book should be there
- At the start, 4 buttons must be there (we have a total of 20 objects in the db.json file, and using limit=5 need to create 4 buttons)
- pagination should be dynamic as when we *add* a new Book the pagination button should increase. `(i.e from 4 to 5)`
- **Hint** : 
    1. `?_page={pagenumber}&_limit=5`
    2. use `res.headers.get("X-Total-Count")` for finding totalCount no of pages
- Note:- name the class names and data-testid as mentioned in the image provided above(markup)

<h4 style="color:#215dc8">
Problem 3. Ability to add new Book [2]
</h4>

<!-- ![add Book ] -->
<figure>
<img src="https://i.imgur.com/BLHNLI7.png"  style=" border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>Add new Book
</b></figcaption>
</figure>

- input fields and a `button#add-Book` with text `Add Books` are already creted in template.
- on click of `Add Books` button make a 'POST' request at ```${baseServerURL}/books```
- *make a 'GET' request after the post to get updated data at ```${baseServerURL}/books```*
- **` the page must not reload the list must update`**  otherwise you will lose the marks.
- irrespective of `sorting`, `filtering`, and `searching` for every fetch request limit your data to 5 per page <span style=" color: red">**(Hint: _page=`1`&_limit=5)**</span>

<!-- ![added Books UI]() -->

<figure>
<img src="https://i.imgur.com/Q9h4wyI.png"  style=" border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>new Books UI
</b></figcaption>
</figure>

<h4 style="color:#215dc8">
Problem 4. Ability to delete Book [2]
</h4>

- In each Book, the card adds a button `Delete` with `button.card-button` On clicking this button particular Books must be removed from DOM as well as `db.json`.

- make a 'DELETE' request at ```${baseServerURL}/books/{bookId}```
- *make a 'GET' request after deleting to get updated data at ```${baseServerURL}/books```*
- **` the page must not reload the list must update`**  otherwise you will lose the marks.

<h4 style="color:#215dc8">
Problem 5. Ability to update all the fields of Book [2]
</h4>

- Able to populate the following input on edit link click.( *Hint* - use preventDefault() to prevent the default behaviour of `<a>` tag of redirecting)
- Add an event listener with ```click``` to anchor tag with class `.card-link` use preventDefault.
- The page should not reload on the click of the Edit link `.card-link`.

1. To update all fields 

- `#update-book-id`  should be populated with the `id` of the book
- `#update-book-title` should be populated with the `title` of the book
- `#update-book-image` should be populated with the `image` of the book
- `#update-book-author` should be populated with the `author` of the book
- `#update-book-year` should be populated with the `year` of the book
- `#update-book-characters` should be populated with the `characters` of the book
- `#update-book-price` should be populated with the `price` of the book
- `#update-book-genre` should be populated with the `genre` of the book

<figure>
<img src="https://i.imgur.com/fWivpiC.png"  style=" border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>Update all fields</b></figcaption>
</figure>

- make a 'PATCH' request at ```${baseServerURL}/books/${bookId}``` to update *title, image, author, year, characters, price, and genre*
- *make a 'GET' request after the patch to get updated data at ```${baseServerURL}/books```*
- **` the page must not reload the list must update`**  otherwise you will lose the marks.

<h4 style="color:#215dc8">
Problem 6. Ability to update only the package [1]
</h4>

- Able to populate the following input on edit link click.( *Hint* - use preventDefault() to prevent the default behaviour of `<a>` tag of redirecting)

- `#update-price-book-id` should be populated with the `id` of the book
- `#update-price-book-price` should be populated with the `price` of the book

- Once the edit inputs are populated, if the user clicks the `#update-price-book` button. 
- the package of that particular book should update based on the value entered in the `#update-price-book-price`. 
- The package of the book in the list should update without any page *reloads*.

- **` the page must not reload the list must update`**  otherwise you will lose the marks.

- make a 'PATCH' request at ```${baseServerURL}/books/${bookId}```

- *make a 'GET' request after the patch to get updated data at ```${baseServerURL}/books```*

<h4 style="color:#215dc8">
Problem 7. Sorting books Based on Price
</h4>

- Sorting for `Low to High` UI:
<!-- ![sort Low to high] -->
<figure>
<div style="display: flex; justify-content: space-between;">
<img src="https://i.imgur.com/Il19ls0.png"  style=" border-radius: 5px; object-fit: cover;" width="40%"/>
<img src="https://i.imgur.com/Il19ls0.png"  style=" border-radius: 5px; object-fit: cover;" width="40%"/>
</div>
<figcaption align = "center"><b>sort Low to high</b></figcaption>
</figure>


With the click of the button `#sort-low-to-high`, the book list should be sorted in ascending order based on their *price*.

With the click of the button `#sort-high-to-low`, the book list should be sorted in descending order based on their *price*.

You may use any approach of your choice for sorting. You may sort the available data, or you may make a new fetch request to the server and update the list. In case you want to fetch data, please use the [JSON Server documentation](https://github.com/typicode/json-server).

- irrespective of `sorting`, `filtering`, and `searching` for every fetch request limit your data to 5 per page <span style=" color: red">**(Hint: _page=`<pagenumber>`&_limit=5)**</span>

<h4 style="color:#215dc8">
Problem 8. Filtering books based on the genre [1]
</h4>
 You have to create two types of filters as

 1. ***Science fiction***
 2. ***Fantasy***
- Filtering for `Fantasy` UI:
<!-- ![filter Drama] -->

<figure>
<img src="https://i.imgur.com/dCtr3ot.png"  style=" border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>Filter for  "Fantasy"</b></figcaption>
</figure>

When the button `#filter-science-fiction` is clicked, the book list is expected to be filtered. It should only show the books whose `genre` is ***`Science fiction`***.

When the button `#filter-Fantasy` is clicked, the book list is expected to be filtered. It should only show the books whose `genre` is ***`Fantasy`***.

You may use any approach of your choice for filtering. You may filter the available data, or you may make a new fetch request to the server and update the list. In case you want to fetch data, please refer to the [JSON Server documentation](https://github.com/typicode/json-server).


- <span style=" color: green">No need to complete functionality for simultaneously working of filter and sorting operations</span>

- irrespective of `sorting`, `filtering`, and `searching` for every fetch request limit your data to 5 per page <span style=" color: red">**(Hint: _page=`<pagenumber>`&_limit=5)**</span>

<h4 style="color:#215dc8">
Problem 9. Search by title/author
</h4>

- To implement search functionality on top there is a select tag with *options* to search by title/author  

1. ***`title`***
<!-- ![search by title] -->

<figure>
<img src="https://i.imgur.com/BIsp5PC.png"  style=" border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>Search by title and `The Hobbit` as search query</b></figcaption>
</figure>

 2. ***`author`***

<img src="https://i.imgur.com/eoesbgx.png"  style=" border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>Search by author and `Harper Lee` as search query</b></figcaption>
</figure>






A select tag (`select#search-by-select`) with options as
  1. title
  2. author is already created

Every time you have to select an eighter option, next to it there is an input box (`input#search-by-input`) You have to enter the title/author if it is included in the title/author respectively show the book only after clicking a search button(`button#search-by-button`)

You may use any approach of your choice for search functionality. You may use the available data or you may make a new fetch request to the server (with params as ***`?${title/author}_like=${title of book/author of book}`***) and update the list. In case you want to fetch data, please refer to the [JSON Server documentation](https://github.com/typicode/json-server). 


***Note***:- Get the updated data from API after the POST, PATCH, or DELETE request is done.

<figure>
<img src="https://i.imgur.com/hxXhSDB.png" style=" border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>Problem is tetsed on CP</b></figcaption>
</figure>

### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes to respond,
- so we request you to read the problem carefully and debug it before itself
- We also request you not just submit it last minute
- Try to keep one submission at a time
- Use `${baseServerURL}/what-ever-route` for server url & not `localhost:9090/what-ever-route` in your solution. Failing to do so may cause all the tests to fail.
