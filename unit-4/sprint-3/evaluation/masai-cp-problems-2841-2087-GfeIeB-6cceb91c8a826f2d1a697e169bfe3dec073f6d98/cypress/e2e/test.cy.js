 import data from "../../submissionData.json";
import mock from "../fixtures/data.json";

// const data = [
//   {
//     submission_link: "http://localhost:8080",
//     id: "debu-local",
//     json_server_link: `http://localhost:9090/`,
//   },
// ];

data.forEach(({ submission_link: url, id, json_server_link: server_url }) => {
  describe("JS CRUD Dynamic pagination book", function () {
    let acc_score = 1;
    beforeEach(() => {
      cy.clearCookies();
      if (url.charAt(url.length - 1) != "/") {
        url = url + "/";
      }
      if (server_url.charAt(server_url.length - 1) != "/") {
        server_url = server_url + "/";
      }
      cy.writeFile("db.json", mock, (err) => {
        if (err) {
          console.error(err);
        }
      });
      Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
      });
    });
    // 3
    it("should show the correct initial data", () => {
      cy.intercept("GET", "**/books**").as("getBooks");
      cy.visit(url);
      cy.wait("@getBooks");
      const numOfBooks = 5;
      const cards = ".data-list-wrapper .card-list .card";
      cy.get(".card-list").children().should("have.length", numOfBooks);
      cy.get(cards)
        .should("have.length", numOfBooks)
        .first()
        .should("contain", mock.books[0].title);
      cy.get(cards)
        .eq(Math.ceil(numOfBooks / 2))
        .should("contain", mock.books[Math.ceil(numOfBooks / 2)].title);
      cy.get(cards)
        .should("have.length", numOfBooks)
        .last()
        .should("contain", mock.books[numOfBooks - 1].title);
      cy.then(() => {
        acc_score += 3;
      });
    });
    
    // 2
    it("should able to add the data and show on the DOM and db.json ", () => {
      cy.intercept("GET", "**/books**").as("getBooks");
      cy.intercept("POST", "**/books**").as("postRequest");
      cy.visit(url);
      cy.wait("@getBooks");
      cy.get("#pagination-wrapper").children().should("have.length", 4);
      let data = {
        id: 1,
        title: "1920",
        author: "Debobrota haldar",
        publication_year: 2024,
        genre: "Fiction",
        price: 25,
        details: {
          characters: ["Devid Smith", "Wilson"],
        },
        image: "./server-files/images/1984.png",
      };

      cy.get("#book-title").type(data.title);
      cy.get("#book-image").type(data.image);
      cy.get("#book-author").type(data.author);
      cy.get("#book-publication-year").type(data.publication_year);
      cy.get("#book-characters").type(data.details.characters.join(","));
      cy.get("#book-price").type(data.price);
      cy.get("#book-genre").type(data.genre);
      cy.get("#add-book").should("be.visible").click();
      cy.wait("@postRequest");
      cy.wait("@getBooks");
      cy.wait(1000);

      cy.get("#pagination-wrapper").children().last().click();
      cy.wait(500);

      cy.get(".card-list").children().should("have.length", 1);
      cy.get(".card-list").children().last().contains(data.title);
      cy.get(".card-list").children().last().contains(data.author);
      cy.get(".card-list").children().last().contains(data.publication_year);
      cy.get(".card-list").children().last().contains(data.genre);
      cy.get(".card-list").children().last().contains(data.price);

      cy.then(() => {
        acc_score += 2;
      });
    }); 

    //2
    it("Check by adding a new book the pagination button should increased", () => {
      cy.intercept("GET", "**/books**").as("getBooks");
      cy.intercept("POST", "**/books**").as("postRequest");

      cy.visit(url);
      cy.wait("@getBooks");
      cy.get("#pagination-wrapper").children().should("have.length", 4);
      let data = {
        id: 1,
        title: "1920",
        author: "Debobrota haldar",
        publication_year: 2024,
        genre: "Fiction",
        price: 25,
        details: {
          characters: ["Devid Smith", "Wilson john"],
        },
        image: "./server-files/images/1984.png",
      };

      cy.get("#book-title").type(data.title);
      cy.get("#book-image").type(data.image);
      cy.get("#book-author").type(data.author);
      cy.get("#book-publication-year").type(data.publication_year);
      cy.get("#book-characters").type(data.details.characters.join(","));
      cy.get("#book-price").type(data.price);
      cy.get("#book-genre").type(data.genre);
      cy.get("#add-book").should("be.visible").click();
      cy.wait("@postRequest");
      
      cy.wait(500);
      cy.wait("@getBooks");

      cy.get("#pagination-wrapper").children().should("have.length", 5);
      cy.get("#pagination-wrapper").children().last().click();
      cy.wait(500);

      cy.get(".card-list").children().should("have.length", 1);
      cy.get(".card-list").children().first().contains(data.title);
      cy.get(".card-list").children().first().contains(data.author);

      cy.then(() => {
        acc_score += 2;
      });
    });

    //1
    it("should able to delete a book", () => {
      cy.intercept("GET", "**/books**").as("getBooks");
      cy.intercept("DELETE", "**/books/**").as("deleteRequest");
      cy.visit(url);
      cy.wait("@getBooks");
      cy.get(".card-list").children().first().find(".card-button").click();
      const cards = ".data-list-wrapper .card-list .card";

      cy.wait("@deleteRequest");
      cy.wait("@getBooks");
      cy.wait(500);

      cy.get(".card-list").children().should("have.length", 5);
      cy.get(cards).first().should("contain", "To Kill a Mockingbird");
      cy.get(cards).last().should("contain", "Pride and Prejudice");

      cy.then(() => {
        acc_score += 2;
      });
    }); 
    //2
    it("should be able to update all fields of a book", () => {
      cy.intercept("PATCH", "**/books/**").as("patchedBook");
      cy.intercept("GET", "**/books**").as("getBooks");
      cy.visit(url);
      cy.wait("@getBooks");
      cy.get(".data-list-wrapper .card-list .card-link").last().click();
      cy.wait(1000);
      cy.get("#update-book-title").clear().type("The Departed");
      cy.get("#update-book-image").clear().type("./server-files/images/TheDeparted.jpg");
      cy.get("#update-book-author").clear().type("Martin Scorsese");
      cy.get("#update-book-publication-year").clear().type(2006);
      cy.get("#update-book-characters").clear().type("Leonardo DiCaprio, Matt Damon");
      cy.get("#update-book-price").clear().type(229);
      cy.get("#update-book-genre").clear().type("Crime");

      cy.get("#update-book").click();
      cy.wait("@patchedBook").then((interception) => {
        expect(interception.response.statusCode).to.eq(200);
      });
      cy.wait("@getBooks");
      cy.get(".data-list-wrapper").last().should("contain", "The Departed");
      cy.get(".data-list-wrapper").last().should("contain", "Martin Scorsese");
      cy.get(".data-list-wrapper").last().should("contain", "Leonardo DiCaprio, Matt Damon");
      cy.get(".data-list-wrapper").last().should("contain", 2006);
      cy.get(".data-list-wrapper").last().should("contain", 229);
      cy.get(".data-list-wrapper").last().should("contain", "Crime");

      cy.then(()=>{
        acc_score+=2;
      })
    });
    
    //1
    it("should able to update the price of the book", () => {
      cy.intercept("PATCH", `**/books/**`).as("patchedBooks");
      cy.intercept("GET", "**/books**").as("getBooks");
      cy.visit(url);
      cy.wait("@getBooks");
      const cards = ".data-list-wrapper .card-list .card";
      cy.get(cards).first().find(".card-link").click();
      //add condition in problem statement
      cy.wait(1000);
      cy.get("#update-price-book-price").clear().type(231);
      cy.get("#update-price-book").click();
      cy.wait("@patchedBooks");
      cy.wait("@getBooks");
      cy.wait(1000);
      cy.get(cards).first().contains(231);
      cy.then(() => {
        acc_score += 1;
      });
    }); 
    
    
    //1
    it("should able to sort Low-to-high as expected", () => {
      cy.intercept("GET", "**/books**").as("getBooks");
      cy.visit(url);
      cy.wait("@getBooks");
      const cards = ".data-list-wrapper .card-list .card";
      cy.get("#sort-low-to-high").click();
      cy.wait(500).then(() => {
        let arr = [];
        cy.get(cards)
          .each(($el) => {
            arr.push(+$el.find(".card-price")[0].innerText.slice(1, -1));
          })
          .then(() => {
            const isSorted = arr.reduce(
              (n, item) => n !== false && item >= n && item
            );
            expect(!!isSorted).to.be.true;
            expect(arr.length).to.be.greaterThan(0);
          });
      });

      cy.then(() => {
        acc_score += 1;
      });
    }); 
    
    // 1
    it("should able to sort high-to-low as expected", () => {
      cy.intercept("GET", "**/books**").as("getBooks");
      cy.visit(url);
      cy.wait("@getBooks");
      const cards = ".data-list-wrapper .card-list .card";
      cy.get("#sort-high-to-low").click();
      cy.wait(500).then(() => {
        let arr2 = [];
        cy.get(cards)
          .each(($el) => {
            arr2.push(+$el.find(".card-price")[0].innerText.slice(1, -1));
          })
          .then(() => {
            //console.log(arr2, arr2.length);
            const isSorted = arr2.reduce(
              (n, item) => n !== false && item <= n && item
            );
            expect(!!isSorted).to.be.true;
            expect(arr2.length).to.be.greaterThan(0);
          });
      });

      cy.then(() => {
        acc_score += 1;
      });
    });
    
    // 2
    it("should be able to filter science fiction as expected", () => {
      cy.intercept("GET", "**/books**").as("getBooks");
      cy.visit(url);
      cy.wait("@getBooks"); 
      cy.get("#filter-science-fiction").click();
      const cards = ".data-list-wrapper .card-list .card";

      cy.wait(500).then(() => {
        let arr = [];
        cy.get(cards)
          .each((el) => {
            arr.push(el.find(".card-genre").text().trim());
          })
          .then(() => {
            const is = arr.reduce((n, item) => n !== false && item === "Science Fiction");
            expect(!!is).to.be.true;
            expect(arr.length).to.be.greaterThan(0);
          });
      });

      cy.get("#filter-Fantasy").click();
      cy.wait(500).then(() => {
        let arr2 = [];
        cy.get(cards)
          .each((el) => {
            arr2.push(el.find(".card-genre").text().trim());
          })
          .then(() => {
            const isfantasy = arr2.reduce(
              (n, item) => n !== false && item === "Fantasy"
            );
            expect(!!isfantasy).to.be.true;
            expect(arr2.length).to.be.greaterThan(0);
          });
      });

      cy.then(() => {
        acc_score += 2;
      });
    }); 
    
    // 1
    it("should work Low-to-high sort as expected with pagination", () => {
      cy.intercept("GET", "**/books**").as("getBooks");
      cy.visit(url);
      cy.wait("@getBooks");
      cy.get("#pagination-wrapper").children().should("have.length", 4);
      const cards = ".data-list-wrapper .card-list .card";
      cy.get("#sort-low-to-high").click();
      cy.wait(500).then(() => {
        cy.get("#pagination-wrapper").children().should("have.length", 4);
        let arr = [];
        cy.get(cards)
          .each(($el) => {
            arr.push(+$el.find(".card-price")[0].innerText.slice(1, -1));
          })
          .then(() => {
            // console.log(arr, arr.length);
            const isSorted = arr.reduce(
              (n, item) => n !== false && item >= n && item
            );
            expect(!!isSorted).to.be.true;
            expect(arr.length).to.be.greaterThan(0);
          });
      });

      cy.get("#pagination-wrapper").children().last().click();
      cy.wait(500).then(() => {
        let arr2 = [];
        cy.get(cards)
          .each(($el) => {
            arr2.push(+$el.find(".card-price")[0].innerText.slice(1, -1));
          })
          .then(() => {
            // console.log(arr, arr.length);
            const isSorted = arr2.reduce(
              (n, item) => n !== false && item >= n && item
            );
            expect(!!isSorted).to.be.true;
            expect(arr2.length).to.be.greaterThan(0);
          });
      });

      cy.then(() => {
        acc_score += 1;
      });
    }); 
    
    // 1
    it("should work high-to-low sort as expected with pagination", () => {
      cy.intercept("GET", "**/books**").as("getBooks");
      cy.visit(url);
      cy.wait("@getBooks");
      cy.get("#pagination-wrapper").children().should("have.length", 4);
      const cards = ".data-list-wrapper .card-list .card";
      cy.get("#sort-high-to-low").click();
      cy.wait(500).then(() => {
        cy.get("#pagination-wrapper").children().should("have.length", 4);
        let arr2 = [];
        cy.get(cards)
          .each(($el) => {
            arr2.push(+$el.find(".card-price")[0].innerText.slice(1, -1));
          })
          .then(() => {
            //console.log(arr2, arr2.length);
            const isSorted = arr2.reduce(
              (n, item) => n !== false && item <= n && item
            );
            expect(!!isSorted).to.be.true;
            expect(arr2.length).to.be.greaterThan(0);
          });
      });

      cy.get("#pagination-wrapper").children().last().click();
      cy.wait(500).then(() => {
        let arr3 = [];
        cy.get(cards)
          .each(($el) => {
            arr3.push(+$el.find(".card-price")[0].innerText.slice(1, -1));
          })
          .then(() => {
            const isSorted = arr3.reduce(
              (n, item) => n !== false && item <= n && item
            );
            expect(!!isSorted).to.be.true;
            expect(arr3.length).to.be.greaterThan(0);
          });
      });

      cy.then(() => {
        acc_score += 1;
      });
    }); 
    
    // 1
    it("should able to filter as expected with pagination", () => {
      cy.intercept("GET", "**/books**").as("getBooks");
      cy.visit(url);
      cy.wait("@getBooks");
      cy.get("#pagination-wrapper").children().should("have.length", 4);
      cy.get("#filter-science-fiction").click();
      const cards = ".data-list-wrapper .card-list .card";
      cy.wait(500).then(() => {
        cy.get("#pagination-wrapper").children().should("have.length", 1);
        let arr = [];
        cy.get(cards)
          .each((el) => {
            arr.push(el.find(".card-genre").text().trim());
          })
          .then(() => {
            const is = arr.reduce((n, item) => n !== false && item === "Science Fiction");
            expect(!!is).to.be.true;
            expect(arr.length).to.be.greaterThan(0);
          });
      });

      cy.get("#filter-Fantasy").click();
      cy.wait(500).then((res) => {
        cy.get("#pagination-wrapper").children().should("have.length", 1);
        let arr2 = [];
        cy.get(cards)
          .each((el) => {
            arr2.push(el.find(".card-genre").text().trim());
          })
          .then(() => {
            //console.log(arr2, arr2.length);
            const isKidsroom = arr2.reduce(
              (n, item) => n !== false && item === "Fantasy"
            );
            expect(!!isKidsroom).to.be.true;
            expect(arr2.length).to.be.greaterThan(0);
          });
      });

      cy.then(() => {
        acc_score += 1;
      });
    });
    
    // 2
    it("should able to work pagination correctly", () => {
      cy.intercept("GET", "**/books**").as("getBooks");
      cy.visit(url);
      cy.wait("@getBooks");
      cy.get("#pagination-wrapper").children().should("have.length", 4);
      cy.get("#pagination-wrapper").children().last().click();
      cy.wait(500).then(() => {
        cy.get(".card-list").children().should("have.length", 5);
        cy.get(".card-list")
          .children()
          .first()
          .contains("The Picture of Dorian Gray");
        cy.get(".card-list").children().first().contains("Oscar Wilde");
        cy.get(".card-list").children().last().contains("Frankenstein");
        cy.get(".card-list").children().last().contains("Mary Shelley");
      });

      cy.then(() => {
        acc_score += 2;
      });
    });

    //1
    it("should be able to search by title correctly", () => {
      cy.intercept("GET", "**/books**").as("getBooks");
      cy.visit(url);
      cy.wait("@getBooks");
      cy.get("#search-by-select").select("title");
      cy.get("#search-by-input").clear().type("The Hobbit");
      cy.get("#search-by-button").click();
      cy.wait(500).then(() => {
        cy.get(".card-list").children().should("have.length", 1);
        cy.get(".card-list").children().first().contains("The Hobbit");
        cy.get(".card-list").children().first().contains("J.R.R. Tolkien");
      });
      cy.get("#search-by-input").clear().type("1984");
      cy.get("#search-by-button").click();
      cy.wait(500).then(() => {
        cy.get(".card-list").children().should("have.length", 1);
        cy.get(".card-list")
          .children()
          .first()
          .contains("George Orwell");
      });

      cy.then(() => {
        acc_score += 1;
      });
    }); 
    
    //1
    it("should be to search by the title and author", () => {
      cy.intercept("GET", "**/books**").as("getBooks");
      cy.visit(url);
      cy.wait("@getBooks");
      cy.get("#search-by-select").select("title");
      cy.get("#search-by-input").clear().type("To Kill a Mockingbird");
      cy.get("#search-by-button").click();
      cy.wait(500).then(() => {
        cy.get(".card-list").children().should("have.length", 2);
        cy.get(".card-list").children().first().contains("Harper Lee");
        cy.get(".card-list")
          .children()
          .first()
          .contains("To Kill a Mockingbird");

       
          cy.get("#search-by-select").select("author");
          cy.get("#search-by-input").clear().type("Dan Brown");
          cy.get("#search-by-button").click();
          cy.wait(500).then(() => {
            cy.get(".card-list").children().should("have.length", 1);
            cy.get(".card-list").children().first().contains("Dan Brown");
            cy.get(".card-list")
              .children()
              .first()
              .contains("The Da Vinci Code");
          });    

      });

      cy.then(() => {
        acc_score += 1;
      });
    });

    it(`generate score`, () => {
      //////////////
      console.log(acc_score);
      let result = {
        id,
        marks: Math.floor(acc_score),
      };
      result = JSON.stringify(result);
      cy.writeFile("results.json", `\n${result},`, { flag: "a+" }, (err) => {
        if (err) {
          console.error(err);
        }
      });
      //////////////////
    });
  });
});
